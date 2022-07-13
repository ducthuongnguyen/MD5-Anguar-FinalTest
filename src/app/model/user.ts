import {Role} from "./role";

export interface User {
  id?: number;
  name?: string;
  username?: string;
  email?: string;
  password?: string;
  avatar?: string;
  roles?: [Role];
  // enabled?: string;
}
