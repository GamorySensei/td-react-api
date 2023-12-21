import "./App.css";
import EmployeeList from "./components/Employee/EmployeeList";
import ProductsList from "./components/Products/ProductsList";
import Dashboard from "./components/Dashboard";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
	Outlet,
} from "react-router-dom";

function Layout() {
	return (
		<>
			{/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
			<header>
				<nav class="navbar navbar-expand-lg bg-body-tertiary">
					<div class="container-fluid">
						<a class="navbar-brand" href="#">
							React App
						</a>
						<button
							class="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span class="navbar-toggler-icon"></span>
						</button>
						<div
							class="collapse navbar-collapse"
							id="navbarSupportedContent"
						>
							<ul class="navbar-nav me-auto mb-2 mb-lg-0">
								<li class="nav-item">
                  <Link to="/" className="nav-link">Dashboard</Link>
								</li>
                <li class="nav-item">
                  <Link to="/employees" className="nav-link">Utilisateurs</Link>
								</li>
                <li class="nav-item">
                  <Link to="/products" className="nav-link">Produits</Link>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</header>

			<main>
			  <Outlet />
      </main>
		</>
	);
}

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Dashboard />} />
					<Route path="/employees" element={<EmployeeList />} />
					<Route path="/products" element={<ProductsList />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
