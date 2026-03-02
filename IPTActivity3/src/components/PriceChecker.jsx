import { useState, useEffect } from "react";
import ProductDetails from "./ProductDetails";
import BillingDetails from "./BillingDetails";

function PriceChecker() {
const [billingData, setBillingData] = useState(null);

useEffect(() => {
document.title = "Price Checker";
}, []);

const handleCalculate = (data) => {
setBillingData(data);
};

const handleReset = () => {
setBillingData(null);
};

return (
<div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
<div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-xl">
<h2 className="text-2xl font-bold mb-6 text-center">
Price Checker
</h2>

<ProductDetails
onCalculate={handleCalculate}
onReset={handleReset}
/>

{billingData && (
<div className="mt-6 border-t pt-4">
<BillingDetails data={billingData} />
</div>
)}
</div>
</div>
);
}

export default PriceChecker;