// eslint-disable-next-line no-unused-vars
import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
  return (
    <div className="pa2">
      <input
        className="pa3 b ba w-70 bg-lightest-blue"
        type="search"
        placeholder="Qual carro você está procurando? ex: corolla gli"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
