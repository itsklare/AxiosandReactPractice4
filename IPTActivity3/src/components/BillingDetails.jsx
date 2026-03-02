
function BillingDetails({ data }) {
return (
<div>
<h3>Billing Details</h3>
<p>Product Name: {data.productName}</p>
<p>Quantity: {data.quantity}</p>
<p>Unit Price: {data.unitPrice}</p>
<p>Total: {data.total}</p>
</div>
);
}

export default BillingDetails;
