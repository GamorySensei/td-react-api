import './App.css';
import EmployeeList from './components/Employee/EmployeeList';
import ProductsList from './components/Products/ProductsList';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/employees">Utilisateurs</Link>
          </li>
          <li>
            <Link to="/products">Produits</Link>
          </li>
        </ul>
      </nav>

      <hr />
      <Outlet />
    </div>
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
