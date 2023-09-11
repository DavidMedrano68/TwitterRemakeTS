import { ReactNode, createContext, useState } from "react";
import { auth } from "@/firebase/firebase.config";
import { onAuthStateChanged } from "firebase/auth";

type AuthContextProviderType = {
  children: ReactNode;
};
export const isSignedContext = createContext(null);
export const setIsSignedinContext = createContext(null);

export default function AuthContextProvider({
  children,
}: AuthContextProviderType) {
  const [isSignedin, setisSignedin] = useState(false);
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      setisSignedin(true);
    } else {
      setisSignedin(false);
    }
  });
  return (
    <isSignedContext.Provider value={isSignedin}>
      {children}
    </isSignedContext.Provider>
  );
}
