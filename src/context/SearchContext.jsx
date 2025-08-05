import { createContext, useState } from "react";

export const SearchContext = createContext();
export function SearchProvider({children}){
    const [ searchTrem, setSearchTrem ] = useState ("");
    return(
        <SearchContext.Provider value={{searchTrem, setSearchTrem }}>
            {children}
        </SearchContext.Provider>
    );
}