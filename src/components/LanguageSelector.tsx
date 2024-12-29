import React, { useState } from "react";
import styled from "styled-components";
import AvailableLanguages from "../constants/AvailableLanguages";
import { useTranslation } from "react-i18next";

const LanguageSelector: React.FC<{}> = () => {
  const [isSelectorVisible, setIsSelectorVisible] = useState<boolean>(false);

  const { i18n } = useTranslation();

  const onClickItemSelector = (newLanguage: string) => {
    setIsSelectorVisible(false);
    i18n.changeLanguage(newLanguage);
  };

  const getSelector = () => {
    if (!isSelectorVisible) {
      return;
    }

    return (
      <SelectorContainer>
        <Selector>
          {AvailableLanguages.map((language) => {
            return (
              <ItemSelector
                onClick={() => onClickItemSelector(language.definition)}
              >
                {language.name}
              </ItemSelector>
            );
          })}
        </Selector>
      </SelectorContainer>
    );
  };

  const onClickFlag = () => {
    setIsSelectorVisible((prev) => {
      return !prev;
    });
  };

  return (
    <Container>
      <Flag src={`images/flags/${i18n.language}.png`} onClick={onClickFlag} />
      {getSelector()}
    </Container>
  );
};

export default LanguageSelector;

const Container = styled.div``;

const Flag = styled.img`
  cursor: pointer;
  width: 25px;
  height: 25px;
`;

const SelectorContainer = styled.div`
  position: relative;
`;

const Selector = styled.div`
  position: absolute;
  background-color: white;
  top: 0px;
  right: 0px;
`;

const ItemSelector = styled.div`
  cursor: pointer;
  &:hover {
    background-color: gray;
  }
  padding: 10px 20px;
`;
