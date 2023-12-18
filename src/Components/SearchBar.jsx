import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState("");

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);//aggiornamento dell'input
        }}
      />

      <button onClick={() => onSearch(input)}>SEARCH</button>
    </div>
  );
};

export default SearchBar;
