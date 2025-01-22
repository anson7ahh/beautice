import authAtom from "@/screens/login/stores/authData";
import { useResetAtom } from "jotai/utils";

export function SignOut() {
  const resetAuthAtom = useResetAtom(authAtom);

  const handleReset = () => {
    localStorage.clear();
    resetAuthAtom();
  };

  return (
    <button
      className="block w-full  px-0 py-0 text-base  ipadMini:py-2 ipadMini:px-4 text-left ipadMini:text-sm ipadMini:text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
      onClick={handleReset}
    >
      Sign out
    </button>
  );
}
