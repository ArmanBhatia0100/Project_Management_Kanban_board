import { createContext, useState } from "react"





export const AuthContext = createContext({ user: null, })

export function ContextProvider({ children }) {

    const [user, setUser] = useState(null);

    function login(userData) {
        setUser(userData);
    }

    function logout() {
        setUser(null);
    }
    return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>
}