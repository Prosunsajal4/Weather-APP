const WMO_CODES = {
  0: { desc: "Clear sky", icon: "☀️", main: "Clear" },
  1: { desc: "Mainly clear", icon: "🌤️", main: "Clear" },
  2: { desc: "Partly cloudy", icon: "⛅", main: "Clouds" },
  3: { desc: "Overcast", icon: "☁️", main: "Clouds" },
  45: { desc: "Fog", icon: "🌫️", main: "Fog" },
  48: { desc: "Depositing rime fog", icon: "🌫️", main: "Fog" },
  51: { desc: "Light drizzle", icon: "🌦️", main: "Drizzle" },
  53: { desc: "Moderate drizzle", icon: "🌦️", main: "Drizzle" },
  55: { desc: "Dense drizzle", icon: "🌦️", main: "Drizzle" },
  56: { desc: "Freezing drizzle", icon: "🌧️", main: "Drizzle" },
  57: { desc: "Heavy freezing drizzle", icon: "🌧️", main: "Drizzle" },
  61: { desc: "Slight rain", icon: "🌧️", main: "Rain" },
  63: { desc: "Moderate rain", icon: "🌧️", main: "Rain" },
  65: { desc: "Heavy rain", icon: "🌧️", main: "Rain" },
  66: { desc: "Freezing rain", icon: "🌧️", main: "Rain" },
  67: { desc: "Heavy freezing rain", icon: "🌧️", main: "Rain" },
  71: { desc: "Slight snow", icon: "❄️", main: "Snow" },
  73: { desc: "Moderate snow", icon: "❄️", main: "Snow" },
  75: { desc: "Heavy snow", icon: "❄️", main: "Snow" },
  77: { desc: "Snow grains", icon: "❄️", main: "Snow" },
  80: { desc: "Slight rain showers", icon: "🌦️", main: "Rain" },
  81: { desc: "Moderate rain showers", icon: "🌧️", main: "Rain" },
  82: { desc: "Violent rain showers", icon: "🌧️", main: "Rain" },
  85: { desc: "Slight snow showers", icon: "🌨️", main: "Snow" },
  86: { desc: "Heavy snow showers", icon: "🌨️", main: "Snow" },
  95: { desc: "Thunderstorm", icon: "⛈️", main: "Thunderstorm" },
  96: { desc: "Thunderstorm with hail", icon: "⛈️", main: "Thunderstorm" },
  99: { desc: "Thunderstorm with heavy hail", icon: "⛈️", main: "Thunderstorm" },
};

const weatherGradients = {
  Clear: "from-sky-500 to-orange-400",
  Clouds: "from-slate-500 to-gray-600",
  Rain: "from-blue-700 to-gray-500",
  Drizzle: "from-blue-500 to-gray-400",
  Thunderstorm: "from-purple-800 to-gray-700",
  Snow: "from-blue-200 to-slate-400",
  Fog: "from-gray-500 to-gray-400",
  default: "from-indigo-500 to-purple-600",
};

export default function WeatherCard({ data }) {
  const code = data.current.weather_code;
  const weatherInfo = WMO_CODES[code] || { desc: "Unknown", icon: "🌡️", main: "default" };

  return (
    <div className="w-full max-w-md mx-auto mt-8 p-8 rounded-3xl bg-white/15 backdrop-blur-lg border border-white/25 shadow-2xl">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-white">
            {data.name}{data.country ? `, ${data.country}` : ""}
          </h2>
          <p className="text-white/70 mt-1 text-sm">
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
        <span className="text-6xl">{weatherInfo.icon}</span>
      </div>

      <div className="mt-6">
        <div className="flex items-start">
          <span className="text-7xl font-extralight text-white">
            {Math.round(data.current.temperature)}
          </span>
          <span className="text-2xl text-white/70 mt-1">°C</span>
        </div>
        <p className="text-xl text-white/80 capitalize mt-1">
          {weatherInfo.desc}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-8">
        <div className="bg-white/10 rounded-2xl p-4">
          <p className="text-white/50 text-sm">Feels Like</p>
          <p className="text-white text-xl font-semibold">
            {Math.round(data.current.feels_like)}°C
          </p>
        </div>
        <div className="bg-white/10 rounded-2xl p-4">
          <p className="text-white/50 text-sm">Humidity</p>
          <p className="text-white text-xl font-semibold">{data.current.humidity}%</p>
        </div>
        <div className="bg-white/10 rounded-2xl p-4">
          <p className="text-white/50 text-sm">Wind Speed</p>
          <p className="text-white text-xl font-semibold">{data.current.wind_speed} km/h</p>
        </div>
        <div className="bg-white/10 rounded-2xl p-4">
          <p className="text-white/50 text-sm">Pressure</p>
          <p className="text-white text-xl font-semibold">{Math.round(data.current.pressure)} hPa</p>
        </div>
      </div>
    </div>
  );
}

export { weatherGradients, WMO_CODES };
