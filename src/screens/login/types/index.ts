export interface AuthData {
  token: string;
  user: {
    fullName: string;
    email?: string;
    phoneNumber?: string;
  };
}
