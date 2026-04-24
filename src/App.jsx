import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Dashboard from "./pages/dashboard.jsx";
import Analytics from "./pages/Analytics";
import ApiKeys from "./pages/ApiKeys";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="apikeys" element={<ApiKeys />} />
      </Route>
    </Routes>
  );
}

export default App;