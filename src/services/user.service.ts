import { User } from "../types";

export const userService = {
  login,
  logout,
  register,
};

async function login(username: string, password: string) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password } as User),
  };

  const response = await fetch("/users/authenticate", requestOptions);

  const user = handleResponse<User>(response);

  localStorage.setItem("user", JSON.stringify(user));

  return user;
}

function logout() {
  localStorage.removeItem("user");
}

async function register(user: User) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  };

  const response = await fetch("/users/register", requestOptions);

  await handleResponse(response);
}

function handleResponse<P = void>(response: Response): Promise<P> {
  if (!response.ok) {
    return Promise.reject(response.statusText);
  }

  return response.json();
}
