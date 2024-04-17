import React from "react";
import { Searchbar } from "./Searchbar";
import quillbot from "./quillbot.jpg";

export const Homepage = () => {
  return (
    <div>
      <img src={quillbot} alt="Quillbot" width="19%" height="19%" />
      <Searchbar />
    </div>
  );
};
