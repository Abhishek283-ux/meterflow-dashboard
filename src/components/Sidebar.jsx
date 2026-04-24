import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div style={{
      width: "200px",
      height: "100vh",
      background: "#111",
      color: "#fff",
      padding: "20px"
    }}>
      <h2>MeterFlow</h2>

      <nav style={{ marginTop: "20px" }}>
        <p><Link to="/">Dashboard</Link></p>
        <p><Link to="/analytics">Analytics</Link></p>
        <p><Link to="/apikeys">API Keys</Link></p>
      </nav>
    </div>
  );
};

export default Sidebar;