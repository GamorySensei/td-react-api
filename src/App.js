import "./App.css";
import EmployeeList from "./components/Employee/EmployeeList";
import ProductsList from "./components/Products/ProductsList";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
	Outlet,
} from "react-router-dom";
import { useState, useEffect } from "react";


const handleLogout = () => {
  sessionStorage.removeItem("accessToken");
  window.location.href = "/";
}

function Layout() {
	return (
		<>
			{/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
			<header>
				<nav className="navbar navbar-expand-lg bg-body-tertiary">
					<div className="container-fluid">
						<a className="navbar-brand" href="#">
							React App
						</a>
						<button
							className="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="navbar-toggler-icon"></span>
						</button>
						<div
							className="collapse navbar-collapse"
							id="navbarSupportedContent"
						>
							<ul className="navbar-nav me-auto mb-2 mb-lg-0">
								<li className="nav-item">
									<Link to="/" className="nav-link">
										Dashboard
									</Link>
								</li>
								<li className="nav-item">
									<Link to="/employees" className="nav-link">
										Utilisateurs
									</Link>
								</li>
								<li className="nav-item">
									<Link to="/products" className="nav-link">
										Produits
									</Link>
								</li>
                <li className="nav-item">
									<a href="#" className="nav-link" onClick={ handleLogout }>Déconnexion</a>
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
  const [userLogged, setUserLogged] = useState(false);

  useEffect(() => {
    if(sessionStorage.getItem('accessToken')){
      setUserLogged(true); return
    }
  }, [])


	return (
		<>
			{userLogged ? (
				<Router>
					<Routes>
						<Route path="/" element={<Layout />}>
							<Route index element={<Dashboard />} />
							<Route
								path="/employees"
								element={<EmployeeList />}
							/>
							<Route
								path="/products"
								element={<ProductsList />}
							/>
						</Route>
					</Routes>
				</Router>
			) : (
				<Login />
			)}
		</>
	);
}

export default App;
