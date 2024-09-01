import { useContext } from "react";
import { ArtContext } from "../context/artContext";
import { Box } from "@chakra-ui/react";
import "../style/learn.css"
export function LearnMore() {
    const { artData } = useContext(ArtContext);  // Use artData if that’s the correct name

    if (!artData) {
        return <p>Loading...</p>; // Show a loading message if data is not available yet
    }
    

    return (
        
    
        <div className="main-box">
            <br /><br /><br /><br />
             <span className="hex">
              <p><b>#Health</b></p>
              <p><b>#Fitness</b></p>
            </span>
            <Box className="img-data">
                <img src={artData.img} alt="error" />
            </Box>
            <br />
             
             <Box>
                <h2>{artData.title}</h2>
                <p>{artData.description}</p>
             </Box>
           
        </div>
    );
}
