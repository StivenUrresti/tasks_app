export interface userEntity {
  id: number;
  username: string;
  email: string;
  password: string;
}

export interface signInEntity {
  email: string;
  password: string;
}

export interface userEntityToCreate {
  username: string;
  email: string;
  password: string;
}
