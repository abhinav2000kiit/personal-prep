import { usePricing } from "../../context/PricingContext";

const DynamicPricing = () => {
  const pricing = usePricing();
  console.log(pricing);

  return <div>DynamicPricing</div>;
};

export default DynamicPricing;
