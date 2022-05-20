import { ReactNode, useEffect, useState } from "react";
import { User } from "../Models/UserModel";
import { BlogContext } from "./BlogContext";


interface Props {
  children: ReactNode;
}

export function BlogContextProvider({ children }: Props) {
  //localStorage implementation

  const [authenticated, setAuth] = useState<boolean>(() => {
    const saved = localStorage.getItem("userLogin");
    const initialValue = saved === "true" ? true : false;
    return initialValue;
  });


  useEffect(() => {
 
    localStorage.setItem("userLogin", JSON.stringify(authenticated));
  
  }, [authenticated]);


  function loginUser() {
    setAuth(true);
  }

  function logoutUser() {
    setAuth(false);
  }




  return (
    <BlogContext.Provider
      value={{  
        authenticated,
        loginUser,
        logoutUser,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
}