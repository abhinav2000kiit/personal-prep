import { createContext, useContext, useState } from "react";
import { ModalContextType } from "../type";

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function useModal() {
  const ctx = useContext(ModalContext);

  if (!ctx) {
    throw new Error("useModal must be used within ModalProvider");
  }

  return ctx;
}

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [modalMap, setModalMap] = useState<Record<string, boolean>>({});

  return (
    <ModalContext.Provider
      value={{
        modalMap,
        openModal: (id: string) => {
          setModalMap((prev) => ({ ...prev, [id]: true }));
        },
        closeModal: (id: string) => {
          setModalMap((prev) => ({ ...prev, [id]: false }));
        },
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
