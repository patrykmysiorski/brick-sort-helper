import React, { useContext, useState } from "react";

interface Filters {
  showCompletedParts: boolean;
  setShowCompletedParts: (value: boolean) => void;
}

const FiltersContext = React.createContext<Filters>({
  showCompletedParts: true,
  setShowCompletedParts: () => undefined,
});

type Props = {
  children?: React.ReactNode;
};

const FiltersProvider: React.FC<Props> = ({ children }) => {
  const [showCompletedParts, setShowCompletedParts] = useState<boolean>(true);
  return (
    <FiltersContext.Provider
      value={{ showCompletedParts, setShowCompletedParts }}
    >
      {children}
    </FiltersContext.Provider>
  );
};

export const useFiltersContext = () => useContext(FiltersContext);

export default FiltersProvider;
