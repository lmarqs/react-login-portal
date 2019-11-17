import { User } from "../../types";
import { FakeApiHandler } from "./types";
import { users } from './users';

export const handleUsersAuthenticate: FakeApiHandler = async (body) => {
  const params: User = JSON.parse(body);

  const user = users.find(user => {
    return (
      user.username === params.username &&
      user.password === params.password
    );
  });

  if (!user) {
    throw new Error("Username or password is incorrect");
  }

  const responseJson = {
    ...user,
  };

  delete responseJson.password;

  return { json: async () => responseJson };
};

export const handleUserRegister: FakeApiHandler = async (body: string) => {
  const user: User = JSON.parse(body);

  const duplicateUser = users.some(({ username }) => username === user.username);

  if (duplicateUser) {
    throw new Error(`Username "${user.username}" is already taken`);
  }

  users.push({
    id: Math.max(0, ...users.map(user => user.id || -1)) + 1,
    ...user,
  });

  localStorage.setItem("users", JSON.stringify(users));
};
