import React from "react";

const Search = ({search}) => {
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder={"Search Event Type"}
        onChange={(e) => {search(e.target.value)}}
      />
      <i className="circular search link icon"></i>
    </div>
  );
};

export default Search;
