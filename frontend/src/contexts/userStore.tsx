import { createContext, useContext, useState } from "react";
import { User, UserContextType } from "../types";

const UserContext = createContext<UserContextType>(null);

export const UserStore = ({ children }) => {
 const [user, setUser] = useState<User>(null);
 const [times, setTimes] = useState([]);
 const [loggedTime, setLoggedTime] = useState([])

 return (
  <UserContext.Provider value={{ user, setUser, times, setTimes, loggedTime, setLoggedTime }}>
   {children}
  </ UserContext.Provider>
 )
};

export const useUserContext = () => useContext(UserContext);
