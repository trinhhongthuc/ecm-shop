import { ReqLogin, UserLogin } from "./../interface/User";
import axiosClient from "./axiosClient";

const User = {
  login: (data: UserLogin): Promise<ReqLogin> =>
    axiosClient.post("/account/login", data),
};

export default User;
