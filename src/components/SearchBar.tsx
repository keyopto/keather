import React, { ChangeEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const SearchBar: React.FC<{
  onValidate: (search: string) => void;
}> = ({ onValidate }) => {
  const { t } = useTranslation();

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
      setSearchText("");
    }
  };

  return (
    <Container>
      <SearchInput
        placeholder={t("search_city_placeholder")}
        type="text"
        value={searchText}
        onChange={handleChangeText}
        onKeyDown={handleKeyDown}
      />
    </Container>
  );
};

export default SearchBar;

const Container = styled.div`
  border-radius: 10px;
  border: 1px solid gray;
  padding: 5px 10px;
`;

const SearchInput = styled.input`
  border: 0px;
  width: 100%;
  font-size: 20px;
  background-color: transparent;
`;
