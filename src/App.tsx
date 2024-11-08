import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Users, { loader } from "./pages/Users";
import FormPage, { action } from "./pages/FormPage";
const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<Home />} />
      <Route path="users" element={<Users />} loader={loader} />
      <Route path="about" element={<About />} />
      <Route path="form-page" element={<FormPage />} action={action} />
    </Route>
  )
);

const App: React.FC = () => {
  return <RouterProvider router={routes} />;
};

export default App;
