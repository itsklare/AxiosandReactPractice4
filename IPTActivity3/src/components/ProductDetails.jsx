import { useState } from "react";

function ProductDetails({ onCalculate, onReset }) {
const [productName, setProductName] = useState("");
const [quantity, setQuantity] = useState("");
const [unitPrice, setUnitPrice] = useState("");

const handleCalculate = () => {
const total = Number(quantity) * Number(unitPrice);

onCalculate({
productName,
quantity,
unitPrice,
total
});
};

const handleReset = () => {
setProductName("");
setQuantity("");
setUnitPrice("");
onReset();
};

return (
<div>
<h3>Product Details</h3>

<input
className="border border-gray-300 rounded-lg p-2 w-full"
type="text"
placeholder="Product Name"
value={productName}
onChange={(e) => setProductName(e.target.value)}
/>

<input
className="border border-gray-300 rounded-lg p-2 w-full"
type="number"
placeholder="Quantity"
value={quantity}
onChange={(e) => setQuantity(e.target.value)}
/>

<input
className="border border-gray-300 rounded-lg p-2 w-full"
type="number"
placeholder="Unit Price"
value={unitPrice}
onChange={(e) => setUnitPrice(e.target.value)}
/>

<br /><br />

<button onClick={handleCalculate} className="bg-blue-500 text-white p-4 rounded-xl hover:bg-blue-600 transition">Calculate</button>
<button onClick={handleReset} className="ml-4 bg-red-500 text-white p-4 rounded-xl hover:bg-red-600 transition">Reset</button>
</div>
);
}

export default ProductDetails;