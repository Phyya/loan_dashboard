import axiosInstance from "../https";

export const getUsers = () => {
  return axiosInstance.get("/users");
};
export const getUsersById = (id: string | number) => {
  return axiosInstance.get(`/users/${id}`);
};
