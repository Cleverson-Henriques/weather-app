import { useState } from "react";
import Data from "./components/Data";


function App() {
  const [data, setData] = useState();
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const API_KEY = 'CHAVE_API';
	
    const res = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`
    );
    const result = await res.json();
    if (res.ok) {
      setData(result);
      setLoading(false);
      setCity("");
      return;
    }
    setError(result.error.message);
    setLoading(false);
  };
  if (loading) {
    return <h3>Loading...</h3>;
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="City name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button>Get Data</button>
      </form>
      {error && <p>{error}</p>}
      {!error && data && <Data data={data} />}
    </div>
  );
}

export default App;
