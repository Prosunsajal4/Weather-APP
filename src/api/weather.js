const GEO_URL = "https://geocoding-api.open-meteo.com/v1/search";
const WEATHER_URL = "https://api.open-meteo.com/v1/forecast";

export async function getWeatherByCity(city) {
  const geoRes = await fetch(
    `${GEO_URL}?name=${encodeURIComponent(city)}&count=1&language=en`
  );

  if (!geoRes.ok) {
    throw new Error("Failed to search city. Please try again.");
  }

  const geoData = await geoRes.json();

  if (!geoData.results || geoData.results.length === 0) {
    throw new Error("City not found. Please check the spelling and try again.");
  }

  const { latitude, longitude, name, country } = geoData.results[0];

  const weatherRes = await fetch(
    `${WEATHER_URL}?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,surface_pressure&timezone=auto`
  );

  if (!weatherRes.ok) {
    throw new Error("Failed to fetch weather data. Please try again later.");
  }

  const weatherData = await weatherRes.json();

  return {
    name,
    country,
    current: {
      temperature: weatherData.current.temperature_2m,
      humidity: weatherData.current.relative_humidity_2m,
      feels_like: weatherData.current.apparent_temperature,
      weather_code: weatherData.current.weather_code,
      wind_speed: weatherData.current.wind_speed_10m,
      pressure: weatherData.current.surface_pressure,
    },
    timezone: weatherData.timezone,
  };
}

export async function getWeatherByCoords(lat, lon) {
  const geoRes = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=&count=1&language=en`
  );

  const weatherRes = await fetch(
    `${WEATHER_URL}?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,surface_pressure&timezone=auto`
  );

  if (!weatherRes.ok) {
    throw new Error("Failed to fetch weather data. Please try again later.");
  }

  const weatherData = await weatherRes.json();

  const reverseRes = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=&count=1`
  );

  return {
    name: "Your Location",
    country: "",
    current: {
      temperature: weatherData.current.temperature_2m,
      humidity: weatherData.current.relative_humidity_2m,
      feels_like: weatherData.current.apparent_temperature,
      weather_code: weatherData.current.weather_code,
      wind_speed: weatherData.current.wind_speed_10m,
      pressure: weatherData.current.surface_pressure,
    },
    timezone: weatherData.timezone,
  };
}
