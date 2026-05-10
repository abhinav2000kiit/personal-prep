import { createContext, useContext, useState, useEffect } from "react";
import { PricingContextType } from "../types/types";
import { wsService } from "../core/websocket";

const PricingContext = createContext<PricingContextType | {}>({});

const usePricing = () => {
  const ctx = useContext(PricingContext);

  if (!ctx) {
    throw new Error("usePricing must be used within PricingProvider");
  }

  return ctx;
};

const PricingProvider = ({ children }: { children: React.ReactNode }) => {
  const [price, setPrice] = useState<PricingContextType | {}>({});

  const setDataInPrice = (data: PricingContextType) => {
    setPrice((prev) => ({
      ...prev,
      [data.listingId]: data.price,
    }));
  };

  useEffect(() => {
    wsService.connect();

    const unsubscribe = wsService.subscribe((data) => setDataInPrice(data));

    return unsubscribe;
  }, []);

  return (
    <PricingContext.Provider value={price}>{children}</PricingContext.Provider>
  );
};

export { usePricing, PricingProvider };
