import React from "react";
import styled from "styled-components";
import { saveAs } from "file-saver";
import { setFormValues } from "../utils/formUtils";
import { UseFormGetValues, UseFormSetValue } from "react-hook-form";
import { Field } from "../types/form";
import { useFiltersContext } from "../contexts/FiltersContext";
import { Switch } from "@mui/material";

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 15px;
  position: sticky;
  top: 0;
  background-color: rgba(146, 106, 213, 0.5);
  z-index: 1;
`;

interface Props {
  getValues: UseFormGetValues<Field>;
  setValue: UseFormSetValue<Field>;
}

const Buttons: React.FC<Props> = ({ getValues, setValue }) => {
  const onDownloadClick = () => {
    const blob = new Blob([JSON.stringify(getValues())], {
      type: "application/json",
    });
    saveAs(blob, "file.json");
  };

  const onGetDataClick = () => {
    fetch("file.json")
      .then((response) => response.json())
      .then((jsonResponse) => setFormValues(jsonResponse, setValue));
  };

  const { showCompletedParts, setShowCompletedParts } = useFiltersContext();
  return (
    <ButtonsContainer>
      <Switch
        checked={showCompletedParts}
        onChange={() => setShowCompletedParts(!showCompletedParts)}
        color={"warning"}
      />
      <button onClick={onDownloadClick}>download</button>
      <button onClick={onGetDataClick}>get data</button>
    </ButtonsContainer>
  );
};

export default Buttons;
