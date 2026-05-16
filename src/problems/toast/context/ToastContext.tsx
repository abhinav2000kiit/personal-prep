import { ReactNode, createContext, useState, useContext } from "react";
import { Toast, ToastContextType } from "../types/typings";

const ToastContext = createContext<ToastContextType | null>(null);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toast, setToast] = useState<Toast[]>([]);

  const addToast = (prop: Toast) => {
    setToast((prev: Toast[]) => [...prev, prop]);
    subscribeToastRemoval(prop.id, prop.time);
  };

  const subscribeToastRemoval = (id: string, time = 3000) => {
    setTimeout(() => {
      removeToast(id);
    }, time);
  };

  const removeToast = (id: string) => {
    setToast((prev: any) => prev.filter((toast: any) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ addToast, removeToast, toast }}>
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    throw new Error("useToast must be used within ToastProvider");
  }
  return ctx;
};
