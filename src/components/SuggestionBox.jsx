import React, { useState, useEffect } from "react";
import SuggestionList from "./styles/SuggestionList";
import Suggestion from "./styles/Suggestion";
import requestData from "../utils/request";

function SuggestionBox({ entity, input, setInput }) {
  const [source, setSource] = useState([]),
    [suggestions, setSuggestions] = useState([]),
    [showSuggestions, setVisibility] = useState(false);

  useEffect(() => {
    if (source.length === 0)
      requestData(entity).then((data) =>
        setSource(data.map((item) => item.name))
      );
    setVisibility(input ? true : false);
    setSuggestions(
      source.filter((item) => item.toLowerCase().includes(input.toLowerCase()))
    );
  }, [input]);

  if (!showSuggestions) return null;

  const selectSuggestion = (text) => {
    setVisibility(false);
    setInput(text);
  };

  return (
    <SuggestionList>
      {suggestions.map((suggestion) => (
        <Suggestion
          key={suggestion}
          onClick={(e) => selectSuggestion(e.currentTarget.innerText)}
        >
          {suggestion}
        </Suggestion>
      ))}
    </SuggestionList>
  );
}

export default SuggestionBox;
