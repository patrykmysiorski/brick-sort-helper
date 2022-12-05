import React from "react";
import {
  Control,
  Controller,
  UseFormRegister,
  UseFormWatch,
} from "react-hook-form";
import { BrickModel } from "../model/brick";
import styled from "styled-components";
import { TextField } from "@mui/material";
import { Field } from "../types/form";
import { useFiltersContext } from "../contexts/FiltersContext";

interface Props {
  brick: BrickModel;
  register: UseFormRegister<Field>;
  control: Control<Field>;
  watch: UseFormWatch<Field>;
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white !important;
`;

const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 35%;
`;

const Brick: React.FC<Props> = ({
  watch,
  brick: {
    id,
    part: { part_img_url, part_url },
    quantity,
    element_id,
  },
  control,
}) => {
  const value = watch(element_id);
  const { showCompletedParts } = useFiltersContext();

  return (
    <div
      style={{
        display: `${value == quantity && !showCompletedParts ? "none" : ""}`,
      }}
    >
      <Wrapper>
        <img
          key={id}
          src={part_img_url}
          alt=""
          width={150}
          height={150}
          onClick={() => window.open(part_url, "_blank")}
        />
        <QuantityContainer>
          <Controller
            name={element_id}
            control={control}
            render={({ field }) => (
              <TextField
                type={"number"}
                sx={{
                  input: { color: "black", fontSize: "24px" },
                  backgroundColor: "white",
                }}
                InputLabelProps={{
                  shrink: true,
                }}
                {...field}
              />
            )}
          />
          <p>/</p>
          <p>{quantity}</p>
        </QuantityContainer>
      </Wrapper>
    </div>
  );
};

export default Brick;
