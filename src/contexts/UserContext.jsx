import React from "react";
import { useState, useEffect } from "react";


const UserContext = React.createContext({});

const getInitialState = () => {
  const user = sessionStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};


const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(getInitialState);
     useEffect(() => {
       sessionStorage.setItem("user", JSON.stringify(user));
     }, [user]);//If the user changes, the useEffect hook will run and save the user to the session storage.
     //I dont understand alina why do you behave like that 
     //you just had to be little stiff head you idiot 

    const login =(user)=>{
        setUser(user);
    }
    const logout =()=>{
        setUser(null);
    }

    return (
        <UserContext.Provider value={{ user, login,logout }}>
            {children}
        </UserContext.Provider>
    );

}

export {UserContextProvider , UserContext};

