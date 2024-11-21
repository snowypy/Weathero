'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'
import WeatherDisplay from './components/WeatherDisplay'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function WeatherDashboard() {
  const [location, setLocation] = useState('')
  const [weatherData, setWeatherData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchWeather = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch(`/api/weather?location=${encodeURIComponent(location)}`)
      if (!res.ok) throw new Error('Failed to fetch weather data')
      const data = await res.json()
      setWeatherData(data)
    } catch (err) {
      setError('Failed to fetch weather data. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#13111C] text-white p-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-[#DCB8B0]">Weather Dashboard</h1>
      <form onSubmit={fetchWeather} className="mb-8 flex justify-center">
        <Input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter location"
          className="mr-2 bg-white/10 border-white/20 text-white placeholder-white/50"
        />
        <Button type="submit" disabled={loading}>
          <Search className="mr-2 h-4 w-4" /> Search
        </Button>
      </form>
      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      {weatherData && <WeatherDisplay data={weatherData} />}
    </div>
  )
}

