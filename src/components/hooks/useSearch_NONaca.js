import { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = "https://customsearch.googleapis.com/customsearch/v1/";

const API_KEY = process.env.REACT_APP_SEARCH_KEY;

const NON_ACADEMIC_SEARCH_ENGINE_KEY =
  process.env.REACT_APP_NON_ACADEMIC_SEARCH_ENGINE_KEY;

export const useSearch_NAC = (searchTerm) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(
        `${BASE_URL}?key=${API_KEY}&cx=${NON_ACADEMIC_SEARCH_ENGINE_KEY}&q=${searchTerm}`
      )
      .then((response) => setData(response?.data))
      .catch((error) => console.error(error));
  }, [searchTerm]);
  console.log(data);
  return {
    data,
  };
};
