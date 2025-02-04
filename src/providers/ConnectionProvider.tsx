import { useSnackbar } from "notistack";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface IConnectionContextType {
  isOnline: boolean;
}

interface IConnectionProviderProps {
  children: ReactNode;
}

const ConnectionContext = createContext<IConnectionContextType>({ isOnline: false });

export const useConnection = () => useContext(ConnectionContext);

export const ConnectionProvider = ({ children }: IConnectionProviderProps) => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      enqueueSnackbar("اتصال برقرار شد", { variant: "success" });
    };

    const handleOffline = () => {
      setIsOnline(false);
      enqueueSnackbar("عدم برقراری ارتباط", { variant: "error" });
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return <ConnectionContext.Provider value={{ isOnline }}>{children}</ConnectionContext.Provider>;
};
