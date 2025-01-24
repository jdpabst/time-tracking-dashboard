import { createContext, useContext, useState } from "react";
import { Times, User, UserContextType } from "../types";

const UserContext = createContext<UserContextType>(null);

export const UserStore = ({ children }) => {
 const [user, setUser] = useState<User>(null);
 const [times, setTimes] = useState<Times[]>([]);


 return (
  <UserContext.Provider value={{ user, setUser, times, setTimes }}>
   {children}
  </ UserContext.Provider>
 )
};

export const useUserContext = () => useContext(UserContext);
