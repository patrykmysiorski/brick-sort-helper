import React from "react";
import Brick from "./Brick";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { BrickModel } from "../model/brick";
import Buttons from "./Buttons";
import { Field } from "../types/form";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Bricks: React.FC = () => {
  const fetchParts = () =>
    fetch(
      "https://rebrickable.com/api/v3/lego/sets/42100-1/parts/?page_size=250",
      {
        headers: { Authorization: `key ${import.meta.env.VITE_API_KEY}` },
      }
    ).then((data) => data.json());

  const { data, isLoading } = useQuery({
    queryKey: ["parts"],
    queryFn: fetchParts,
  });

  const { register, watch, getValues, control, setValue } = useForm<Field>();

  return (
    <>
      <Buttons getValues={getValues} setValue={setValue} />
      <form onSubmit={undefined}>
        <Container>
          {isLoading
            ? "Loading..."
            : data?.results
                ?.filter((brick: BrickModel) => !brick.is_spare)
                .map((brick: BrickModel) => (
                  <Brick
                    watch={watch}
                    brick={brick}
                    register={register}
                    control={control}
                  />
                ))}
        </Container>
      </form>
    </>
  );
};

export default Bricks;
