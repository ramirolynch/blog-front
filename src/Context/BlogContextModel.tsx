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
    
  const [user_id, setUserId] = useState<number>(() => {
    const saved = localStorage.getItem("userId");
    const initialValue = Number(saved);
    return initialValue;
  });


  useEffect(() => {
 
      localStorage.setItem("userLogin", JSON.stringify(authenticated));
      localStorage.setItem("userId", JSON.stringify(user_id));
  
  }, [authenticated,user_id]);


  function loginUser() {
    setAuth(true);
  }

  function logoutUser() {
    setAuth(false);
  }
    
  function addUserId(num:number) {
    setUserId(num);
  }




  return (
    <BlogContext.Provider
        value={{
        user_id,
        addUserId,
        authenticated,
        loginUser,
        logoutUser,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
}