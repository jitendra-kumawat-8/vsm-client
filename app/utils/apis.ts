import axiosInstance from "./axioInstance";
import { LoginPayload, RegisterPayload } from "./types";

export const registerUser = async (payload: RegisterPayload): Promise<any> => {
  const response = await axiosInstance.post("/register", payload);
  return response?.data;
};

export const loginUser = async (payload: LoginPayload): Promise<any> => {
  const response = await axiosInstance.post("/login", payload);
  return response?.data;
};

export const getUser = async (userId: string): Promise<any> => {
  const response = await axiosInstance.get(`/getprofile?userId=${userId}`);
  return response?.data;
};

export const postForm = async (payload: any): Promise<any> => {
  const response = await axiosInstance.post(`/submitdetail`, payload);
  return response?.data;
};
