import { User } from "../../types";
export const users: User[] = JSON.parse(localStorage.getItem("users") || '[]');
