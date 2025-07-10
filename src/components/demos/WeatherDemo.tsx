import { MapPin, Wind, Droplets, Eye, Thermometer, Sun, Cloud, CloudRain } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const WeatherDemo = () => {
  const currentWeather = {
    location: "New York, NY",
    temperature: 22,
    condition: "Partly Cloudy",
    humidity: 65,
    windSpeed: 12,
    visibility: 10,
    pressure: 1013,
    uvIndex: 6
  };

  const hourlyForecast = [
    { time: "12:00", temp: 22, condition: "sunny", icon: Sun },
    { time: "13:00", temp: 24, condition: "sunny", icon: Sun },
    { time: "14:00", temp: 26, condition: "cloudy", icon: Cloud },
    { time: "15:00", temp: 25, condition: "cloudy", icon: Cloud },
    { time: "16:00", temp: 23, condition: "rainy", icon: CloudRain },
    { time: "17:00", temp: 21, condition: "rainy", icon: CloudRain },
  ];

  const weeklyForecast = [
    { day: "Today", high: 26, low: 18, condition: "Partly Cloudy", icon: Cloud },
    { day: "Tomorrow", high: 28, low: 20, condition: "Sunny", icon: Sun },
    { day: "Wednesday", high: 24, low: 16, condition: "Rainy", icon: CloudRain },
    { day: "Thursday", high: 23, low: 15, condition: "Cloudy", icon: Cloud },
    { day: "Friday", high: 27, low: 19, condition: "Sunny", icon: Sun },
    { day: "Saturday", high: 29, low: 21, condition: "Sunny", icon: Sun },
    { day: "Sunday", high: 25, low: 17, condition: "Partly Cloudy", icon: Cloud },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Weather App</h1>
          <Button variant="outline" className="text-blue-600 border-white hover:bg-white">
            <MapPin className="h-4 w-4 mr-2" />
            Change Location
          </Button>
        </header>

        {/* Current Weather */}
        <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white mb-8">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2 text-lg">
              <MapPin className="h-5 w-5" />
              {currentWeather.location}
            </CardTitle>
            <CardDescription className="text-white/80">
              {new Date().toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="mb-6">
              <Cloud className="h-24 w-24 mx-auto mb-4 text-white/80" />
              <h2 className="text-6xl font-bold mb-2">{currentWeather.temperature}°</h2>
              <p className="text-xl text-white/80">{currentWeather.condition}</p>
            </div>
            
            {/* Weather Details */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <Wind className="h-6 w-6 mx-auto mb-2 text-white/60" />
                <p className="text-sm text-white/60">Wind</p>
                <p className="font-semibold">{currentWeather.windSpeed} km/h</p>
              </div>
              <div className="text-center">
                <Droplets className="h-6 w-6 mx-auto mb-2 text-white/60" />
                <p className="text-sm text-white/60">Humidity</p>
                <p className="font-semibold">{currentWeather.humidity}%</p>
              </div>
              <div className="text-center">
                <Eye className="h-6 w-6 mx-auto mb-2 text-white/60" />
                <p className="text-sm text-white/60">Visibility</p>
                <p className="font-semibold">{currentWeather.visibility} km</p>
              </div>
              <div className="text-center">
                <Thermometer className="h-6 w-6 mx-auto mb-2 text-white/60" />
                <p className="text-sm text-white/60">Pressure</p>
                <p className="font-semibold">{currentWeather.pressure} mb</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Hourly Forecast */}
        <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white mb-8">
          <CardHeader>
            <CardTitle>Hourly Forecast</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4 overflow-x-auto pb-2">
              {hourlyForecast.map((hour, index) => (
                <div key={index} className="flex-shrink-0 text-center min-w-[80px]">
                  <p className="text-sm text-white/60 mb-2">{hour.time}</p>
                  <hour.icon className="h-6 w-6 mx-auto mb-2 text-white/80" />
                  <p className="font-semibold">{hour.temp}°</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* 7-Day Forecast */}
        <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
          <CardHeader>
            <CardTitle>7-Day Forecast</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {weeklyForecast.map((day, index) => (
                <div key={index} className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-3 flex-1">
                    <day.icon className="h-6 w-6 text-white/80" />
                    <span className="font-medium">{day.day}</span>
                  </div>
                  <div className="text-center flex-1">
                    <span className="text-sm text-white/60">{day.condition}</span>
                  </div>
                  <div className="text-right">
                    <span className="font-semibold">{day.high}°</span>
                    <span className="text-white/60 ml-2">{day.low}°</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WeatherDemo;