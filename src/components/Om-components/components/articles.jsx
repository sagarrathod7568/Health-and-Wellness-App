import "../style/home.css";
import { Box, Heading } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

export function Articles() {
  const [data, setData] = useState({});  // Initialize as an empty object
  const url = "https://travelway-223-default-rtdb.asia-southeast1.firebasedatabase.app/articles.json";

  useEffect(() => {
    axios.get(url)
      .then((res) => {
     setData(res.data);
        
    })
      .catch((err) => {
        console.log(err);
      });
  }, []);  // Empty dependency array to run only once on mount

  return (
    <>
     
     <div className="box-search">
        <span className="inpr">
        <form>
        <input type="search"/>
        <button type="submit">search</button>
        </form>
        </span>
     </div>

    <Box className="box-arti">
        {
           Object.entries(data).map(([id, ele]) => {
            return (
                <div className="Box-art">
                   <span className="hex"><p><b>#Heath</b></p> <p><b>#Fitness</b></p></span>
              <div key={id}>  {/* Key prop added */}
                <h2>{ele.title}</h2> 
                <p>{ele.description}</p>
               </div>
               </div>
             )
           })
        }
      </Box>
    </>
  );
}
