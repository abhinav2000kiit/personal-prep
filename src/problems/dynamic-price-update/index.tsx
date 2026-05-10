import DynamicPricing from "./components/DynamicPricing";
import { PricingProvider } from "./context/PricingContext";

const Index = () => {
  return (
    <PricingProvider>
      <DynamicPricing />
    </PricingProvider>
  );
};

export default Index;
