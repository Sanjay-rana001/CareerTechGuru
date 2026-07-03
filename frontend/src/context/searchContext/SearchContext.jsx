import { createContext, useState } from "react";

export const SearchContext = createContext();

const SearchContextProvider = ({ children }) => {
  const [searchResult, setSearchResult] = useState([]);
  const [lastVisibleDoc, setLastVisibleDoc] = useState(null);
  const [totalJobsCount, setTotalJobsCount] = useState(0);
  const [isSearchLoading, setIsSearchLoading] = useState(false);

  return (
    <SearchContext.Provider
      value={{
        searchResult,
        setSearchResult,
        lastVisibleDoc,
        setLastVisibleDoc,
        totalJobsCount,
        setTotalJobsCount,
        isSearchLoading,
        setIsSearchLoading,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
