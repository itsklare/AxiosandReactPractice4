import { useEffect } from "react";

function HomePage() {
useEffect(() => {
document.title = "Home";
}, []);

return (
<div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
<div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-2xl">
<h2 className="text-2xl font-bold mb-6 text-center">Home</h2>

<div className="space-y-4">
<div>
<h3 className="font-semibold text-lg">Conditional Rendering</h3>
<p className="text-gray-600">
Conditional rendering allows components to show or hide UI
based on conditions.
</p>
</div>

<div>
<h3 className="font-semibold text-lg">useEffect</h3>
<p className="text-gray-600">
useEffect runs side effects like fetching data or updating
document.title.
</p>
</div>

<div>
<h3 className="font-semibold text-lg">Routing Components</h3>
<p className="text-gray-600">
BrowserRouter wraps the app. Routes contains Route components.
Link allows navigation without refreshing the page.
</p>
</div>
</div>
</div>
</div>
);
}

export default HomePage;