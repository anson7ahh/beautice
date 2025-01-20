import { atomWithStorage } from "jotai/utils";
import { AuthData } from "../types";
const authAtom = atomWithStorage<AuthData | undefined>("authData", undefined);
export default authAtom;
