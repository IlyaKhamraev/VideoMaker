export type Id = string;

export type Role = "admin" | "user";

export type Auth = {
  email: ModelsProfile["email"];
  password: ModelsProfile["password"];
};

export type ModelsProfile = {
  email: string;
  name: string;
  password: string;
  role: Role;
  _id: Id;
};
