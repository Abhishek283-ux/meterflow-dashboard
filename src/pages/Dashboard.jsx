import { useEffect, useState } from "react";
import API from "../services/api";

const Dashboard = () => {
  const [data, setData] = useState(null);
  const apiKey = "abc123";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await API.get("/usage", {
          headers: {
            "x-api-key": apiKey
          }
        });

        setData(res.data);

      } catch (err) {
        console.log(err.message);
      }
    };

    fetchData();
  }, []);

  if (!data) return <h2>Loading...</h2>;

  return (
    <div>
      <h1>MeterFlow Dashboard</h1>
      <h3>API Key: {data.apiKey}</h3>
      <h3>Total Requests: {data.totalRequests}</h3>
      <h3>Total Cost: ₹{data.totalCost}</h3>
    </div>
  );
};

export default Dashboard;