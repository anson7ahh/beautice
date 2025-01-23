import { atomWithStorage } from "jotai/utils";
import { AuthData } from "../types";
const authAtom = atomWithStorage<AuthData>("authData", {
  token: "",
  user: undefined,
});
export default authAtom;
