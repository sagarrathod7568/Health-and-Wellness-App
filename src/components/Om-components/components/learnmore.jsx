import { useContext, useEffect } from "react";
import { ArtContext } from "../context/artContext";
import { Box } from "@chakra-ui/react";
import "../style/learn.css";
import "bootstrap/dist/css/bootstrap.min.css";
import initAOS from "./aos";

export function LearnMore() {
  useEffect(() => {
    initAOS();
  }, []);
  const { artData } = useContext(ArtContext);

  if (!artData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="main-box ">
      <span className="hex">
        <p>
          <b>#Health</b>
        </p>
        <p>
          <b>#Fitness</b>
        </p>
      </span>
      <Box className="img-data">
        <img
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          src={artData.img}
          alt="error"
        />
      </Box>
      <br />

      <Box>
        <h2>{artData.title}</h2>
        <p>{artData.description}</p>
      </Box>
    </div>
  );
}
