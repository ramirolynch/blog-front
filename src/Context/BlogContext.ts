import { User } from "../Models/UserModel";
import { createContext } from "react";

export interface BlogContextModel {
  authenticated: boolean;
  user_id: number;
  loginUser: () => void;
  logoutUser: () => void;
  addUserId: (num: number) => void;
}

const defaultValue: BlogContextModel = {
  user_id: 0,
  authenticated: false,
  loginUser: () => {},
  logoutUser: () => {},
  addUserId: () => {},
};

export const BlogContext = createContext<BlogContextModel>(defaultValue);
