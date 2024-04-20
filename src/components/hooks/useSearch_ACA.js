import { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = "https://customsearch.googleapis.com/customsearch/v1/";

const API_KEY = process.env.REACT_APP_SEARCH_KEY;

const ACADEMIC_SEARCH_ENGINE_KEY =
  process.env.REACT_APP_ACADEMIC_SEARCH_ENGINE_KEY;

export const useSearch_ACA = (searchTerm) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(
        `${BASE_URL}?cx=${ACADEMIC_SEARCH_ENGINE_KEY}&q=${searchTerm}&key=${API_KEY}`
      )
      .then((response) => setData(response?.data))
      .catch((error) => console.error(error));
  }, [searchTerm]);
  console.log(data);
  
  return {
    data,
  };
};

//GET https://customsearch.googleapis.com/customsearch/v1?cx=[SEARCH_ENGINE]&q=hello&key=[YOUR_API_KEY] HTTP/1.1
