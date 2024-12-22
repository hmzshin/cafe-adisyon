import axios, { type AxiosInstance } from "axios";

type Token = string | null;

export const axiosInstanceCreator = (): AxiosInstance => {
  const token: Token = localStorage.getItem("token");

  return token
    ? axios.create({
        baseURL: `http://192.168.1.118:9000/`,
        headers: {
          Authorization: token,
        },
      })
    : axios.create({
        baseURL: `http://192.168.1.118:9000/`,
        headers: {},
      });
};

export let axiosInstance: AxiosInstance;

export const renewAxiosInstance = (): void => {
  axiosInstance = axiosInstanceCreator();
};

renewAxiosInstance();
