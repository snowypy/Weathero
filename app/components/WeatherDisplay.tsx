import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Cloud, Droplets, Thermometer, Wind } from 'lucide-react'

interface WeatherData {
  location: string
  region: string
  country: string
  temperature: number
  feelsLike: number
  condition: string
  humidity: number
  windSpeed: number
  icon: string
}

export default function WeatherDisplay({ data }: { data: WeatherData }) {
  return (
    <Card className="bg-white/10 border-white/20">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center text-[#DCB8B0]">{data.location}</CardTitle>
        <p className="text-center text-[#DCB8B0]">{data.region}, {data.country}</p>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center">
          <img
            src={`https:${data.icon}`}
            alt={data.condition}
            className="w-24 h-24"
          />
          <p className="text-4xl font-bold mb-2">{Math.round(data.temperature)}°C</p>
          <p className="text-xl mb-4 capitalize">{data.condition}</p>
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <Thermometer className="inline-block mr-2" />
              <span>Feels like: {Math.round(data.feelsLike)}°C</span>
            </div>
            <div>
              <Droplets className="inline-block mr-2" />
              <span>Humidity: {data.humidity}%</span>
            </div>
            <div>
              <Wind className="inline-block mr-2" />
              <span>Wind: {data.windSpeed} km/h</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

