import API from "./axiosInstance";

export const loginUser = async (formData) => {
  const response = await API.post("/users/login", formData);

  const token = response.data.data.accessToken;

  if (token) {
    localStorage.setItem("token", token);
  }
  return response.data;
};

export const registerUser = async (formData) => {
  const response = await API.post("/users/register", formData);

  return response.data;
};
