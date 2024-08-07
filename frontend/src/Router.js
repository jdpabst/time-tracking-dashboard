import {
  Route,
  Routes
} from "react-router-dom";

import Home from "./components/Home/Home.tsx";

function Router() {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={<Home />}
      />
    </Routes>

  )
}

export default Router;