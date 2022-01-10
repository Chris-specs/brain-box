import { createContext, useContext, useEffect, useState } from 'react';

export const UserContext = createContext(null);

export const useUser = () => {
    const user = useContext(UserContext);
    return { user };
};
