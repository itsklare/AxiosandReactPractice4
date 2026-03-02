import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./HomePage.jsx";
import PriceChecker from "./components/PriceChecker.jsx";
import ApiPractice from "./components/ApiPractice.jsx";

function App() {
return (
<BrowserRouter>
<Routes>
<Route path="/" element={<Layout />}>
<Route index element={<HomePage />} />
<Route path="price-checker" element={<PriceChecker />} />
<Route path="api-practice" element={<ApiPractice />} /> 
</Route>
</Routes>
</BrowserRouter>
);
}

export default App;