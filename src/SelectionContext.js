import React, { createContext, useContext, useState } from 'react';

const SelectionContext = createContext();

export const useSelection = () => useContext(SelectionContext);

export const SelectionProvider = ({ children }) => {
    const [selection, setSelection] = useState({});

    return (
        <SelectionContext.Provider value={{ selection, setSelection }}>
            {children}
        </SelectionContext.Provider>
    );
};
