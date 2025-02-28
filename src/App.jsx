import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RegistrationForm from "./components/Register";
import HomePage from "./pages/HomePage";

// Layout Component
const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-5">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

// Router Configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/register", element: <RegistrationForm /> },
    ],
  },
]);

// App Component
function App() {
  return <RouterProvider router={router} />;
}

export default App;
