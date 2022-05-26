export interface ReqLogin {
  data: {
    success: boolean;
    message: string;
    token: string;
    err?: object;
  };
}

export interface UserLogin {
  password: string;
  email: string;
  avatar: string;
}
