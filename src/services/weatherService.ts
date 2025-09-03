import { TemperatureResponse } from 'types/temperature';

class WeatherService {
  private readonly baseUrl: string;

  constructor() {
    this.baseUrl = process.env.REACT_APP_API_URL || '';
  }

  async getWeather(): Promise<TemperatureResponse> {
    console.log(this.baseUrl);
    const url = `${this.baseUrl}/temperature`;
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Something went wrong`);
    }
    const data = (await res.json()) as TemperatureResponse;
    return data;
  }
}

const weatherService = new WeatherService();
export default weatherService;
