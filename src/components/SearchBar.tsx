import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";

const SearchBar: React.FC<{
  onValidate: (search: string) => void;
}> = ({ onValidate }) => {
  const [searchText, setSearchText] = useState<string>("");

  const handleChangeText = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      if (searchText === "") {
        return;
      }
      onValidate(searchText);
    }
  };

  return (
    <Container>
      <SearchInput
        placeholder="Type the city name"
        type="text"
        value={searchText}
        onChange={handleChangeText}
        onKeyDown={handleKeyDown}
      />
    </Container>
  );
};

export default SearchBar;

const Container = styled.div``;

const SearchInput = styled.input``;
