'use client'

import { createContext, useContext, useState } from "react";

interface Context {
    searchCity: string,
    setSearchCity: (city: string) => void
}

//Creating Context
const SearchContext = createContext<Context>({
    searchCity: "stockton",
    setSearchCity: (city: string) => ""
})

//Create wrapper
export function AppWrapper({ children }: { children: React.ReactNode }) {
    const [searchCity, setSearchCity] = useState("stockton");

    return (

        <SearchContext.Provider value={{searchCity, setSearchCity}}>
        {children}
        </SearchContext.Provider>
        
    )
}

// function to allow axxess to data
export function useAppContext() {
    return useContext(SearchContext)
}