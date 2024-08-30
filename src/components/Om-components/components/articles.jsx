import "../style/home.css";
import { Box } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { ArtContext } from "../context/artContext";
import { useNavigate } from "react-router-dom";

export function Articles() {
  const [data, setData] = useState([]);  // Holds the full set of articles
  const [filteredData, setFilteredData] = useState([]);  // Holds the filtered articles based on search query
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('');  // Search query state
  const url = "https://travelway-223-default-rtdb.asia-southeast1.firebasedatabase.app/articles.json";
  const { setArtData } = useContext(ArtContext);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(url)
      .then((res) => {
        setData(res.data);
        setFilteredData(res.data);  // Initially, display all articles
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (query) {
        const filtered = Object.entries(data).filter(([id, ele]) =>
          ele.title.toLowerCase().includes(query.toLowerCase()) ||
          ele.description.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredData(Object.fromEntries(filtered));
      } else {
        setFilteredData(data);  // If the query is empty, show all articles
      }
    }, 500);  // Debounce delay of 500ms

    return () => clearTimeout(delayDebounceFn);
  }, [query, data]);  // Re-run when query or data changes

  if (loading) return <p>Loading articles...</p>;
  if (error) return <p>Error fetching articles: {error}</p>;

  function handleData(ele) {
    setArtData(ele);
    navigate("/learn");
  }

  return (
    <>
    <div>
      <div className="box-search">
        <span className="inpr">
          <form onSubmit={(e) => e.preventDefault()}> 
            <br /><br /><br /><br />
            <input
              type="text"
              placeholder="Search articles..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}  
            />

            <button type="submit"id="sub-but">Search</button>
          </form>
        </span>
      </div>

      <Box className="box-arti">
        {Object.entries(filteredData).map(([id, ele]) => (
          <div className="Box-art" key={id}>
            <span className="hex">
              <p><b>#Health</b></p>
              <p><b>#Fitness</b></p>
            </span>
            <h2>{ele.title}</h2>
            <p>{ele.description}</p>
            <button onClick={() => handleData(ele)}>Learn More</button>
          </div>
        ))}
      </Box>
      </div>
    </>
  );
}