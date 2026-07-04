import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import LoadingSpinner from "./components/LoadingSpinner";
import ErrorMessage from "./components/ErrorMessage";
import Footer from "./components/Footer";
import { getWeatherByCity, getWeatherByCoords } from "./api/weather";
import { weatherGradients, WMO_CODES } from "./components/WeatherCard";

export default function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [locationFetched, setLocationFetched] = useState(false);

  useEffect(() => {
    navigator.geolocation?.getCurrentPosition(
      async (position) => {
        try {
          setLoading(true);
          const data = await getWeatherByCoords(
            position.coords.latitude,
            position.coords.longitude
          );
          setWeather(data);
          setError(null);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
          setLocationFetched(true);
        }
      },
      () => {
        setLocationFetched(true);
      }
    );
  }, []);

  const handleSearch = async (city) => {
    setLoading(true);
    setError(null);
    try {
      const data = await getWeatherByCity(city);
      setWeather(data);
    } catch (err) {
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  const weatherCode = weather?.current?.weather_code;
  const weatherMain = WMO_CODES[weatherCode]?.main || "default";
  const gradient = weatherGradients[weatherMain] || weatherGradients.default;

  return (
    <div
      className={`min-h-screen bg-gradient-to-br ${gradient} transition-all duration-1000 flex flex-col items-center px-4 py-10`}
    >
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
        Weather App
      </h1>
      <p className="text-white/70 mb-8">Search any city worldwide</p>

      <SearchBar onSearch={handleSearch} loading={loading} />

      {loading && <LoadingSpinner />}
      {error && <ErrorMessage message={error} />}
      {weather && !loading && <WeatherCard data={weather} />}

      {!weather && !loading && !error && locationFetched && (
        <p className="text-white/50 mt-16 text-center">
          Search for a city to see the weather
        </p>
      )}

      {!weather && !loading && !error && !locationFetched && (
        <LoadingSpinner />
      )}

      <Footer />
    </div>
  );
}
