import { Link, Outlet } from "react-router-dom";

function Layout() {
return (
<div>
<nav>
<Link to="/">Home</Link> |
<Link to="/price-checker">Price Checker</Link> |
<Link to="/api-practice">API Practice</Link>
</nav>

<hr />
<Outlet />
</div>
);
}

export default Layout;
