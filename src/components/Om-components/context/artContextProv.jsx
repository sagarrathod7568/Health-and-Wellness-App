import React, { useState } from "react";
import { ArtContext } from "./artContext";


export const ArtContextProvider = ({ children }) => {
  const [artData, setArtData] = useState(null); // artData is initialized as null, to be updated later

  return (
    <ArtContext.Provider value={{ artData, setArtData }}>
      {children}
    </ArtContext.Provider>
  );
};
