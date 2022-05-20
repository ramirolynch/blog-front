import { ReactNode, useContext, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { BlogContext } from "../Context/BlogContext";



export function RequireAuth({ children }: { children: JSX.Element }) {
    
    const { authenticated } = useContext(BlogContext);
    
    const user = authenticated;

    let location = useLocation();
    
    return user ? children :  <Navigate to="/login" state={{ from: location }} replace />;
        
}