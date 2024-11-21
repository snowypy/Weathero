import { NextResponse } from 'next/server'

const API_KEY = process.env.WEATHERAPI_API_KEY

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const location = searchParams.get('location')

  if (!location) {
    return NextResponse.json({ error: 'Location is required' }, { status: 400 })
  }

  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}&aqi=no`
    )

    if (!response.ok) {
      throw new Error('Failed to fetch weather data')
    }

    const data = await response.json()

    const weatherData = {
      location: data.location.name,
      region: data.location.region,
      country: data.location.country,
      temperature: data.current.temp_c,
      feelsLike: data.current.feelslike_c,
      condition: data.current.condition.text,
      humidity: data.current.humidity,
      windSpeed: data.current.wind_kph,
      icon: data.current.condition.icon,
    }

    return NextResponse.json(weatherData)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch weather data' }, { status: 500 })
  }
}

