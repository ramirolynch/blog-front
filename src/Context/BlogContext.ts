import { User } from "../Models/UserModel";
import { createContext } from "react";

export interface BlogContextModel {
  authenticated: boolean;
  loginUser: () => void;
  logoutUser: () => void;
}

const defaultValue: BlogContextModel = {
  authenticated: false,
  loginUser: () => {},
  logoutUser: () => {},
};

export const BlogContext = createContext<BlogContextModel>(defaultValue);
