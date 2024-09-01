import "../style/aricle.css";
import { Box } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { ArtContext } from "../context/artContext";
import { useNavigate } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import { Footer } from "../../Sagar-components/Footer";
import initAOS from "./aos";

export function Articles() {
  useEffect(() => {
    initAOS();
  }, []);
  const [data, setData] = useState([]); // Holds the full set of articles
  const [filteredData, setFilteredData] = useState([]); // Holds the filtered articles based on search query
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState(""); // Search query state
  const url =
    "https://travelway-223-default-rtdb.asia-southeast1.firebasedatabase.app/articles.json";
  const { setArtData } = useContext(ArtContext);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
        setFilteredData(res.data); // Initially, display all articles
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
        const filtered = Object.entries(data).filter(
          ([id, ele]) =>
            ele.title.toLowerCase().includes(query.toLowerCase()) ||
            ele.description.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredData(Object.fromEntries(filtered));
      } else {
        setFilteredData(data);
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [query, data]);

  if (loading) return <p>Loading articles...</p>;
  if (error) return <p>Error fetching articles: {error}</p>;

  function handleData(ele) {
    setArtData(ele);
    navigate("/learn");
  }

  return (
    <>
      <div>
        <h1 className="routs mb-4">Article</h1>
        <div data-aos="fade-up" className="container py-3">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6">
              <div className="box-search">
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="input-group"
                >
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search articles..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                  <button
                    type="submit"
                    id="sub-but"
                    className="btn btn-warning"
                  >
                    Search
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div data-aos="fade-up" className="container">
          <div className="row">
            {Object.entries(filteredData).map(([id, ele]) => (
              <div className="col-12 col-md-6 mb-4" key={id}>
                <div className="Box-art p-3 border">
                  <span className="hex">
                    <p>#Health</p>
                    <p>#Fitness</p>
                  </span>
                  <div className="article-img">
                    <img src={ele.img} alt="" />
                  <h3>{ele.title}</h3>
                  </div>
                  <p>{ele.description}</p>
                  <div className="learn">
                    <button id="lnbutton" onClick={() => handleData(ele)}>
                      Learn More <GoArrowRight />{" "}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <br />
      <Footer />
    </>
  );
}
