import { UseFormSetValue } from "react-hook-form";
import { Field } from "../types/form";

export const setFormValues = (
  fileContent: Record<string, string>,
  setValue: UseFormSetValue<Field>
) => {
  Object.entries(fileContent).forEach(([key, amount]) =>
    setValue(key, +amount)
  );
};
