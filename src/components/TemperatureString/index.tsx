import { useEffect, useState } from 'react';
import weatherService from 'services/weatherService';

export default function TemperatureString() {
  const [temperature, setTemperature] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const load = async () => {
      try {
        setIsLoading(true);
        setError(false);
        const data = await weatherService.getWeather();
        setTemperature(data.temperature);
      } catch (e) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    load();
  }, []);
  return (
    <p className="hidden lg:inline font-bold text-[1.125rem] text-brand-black mb-4">
      {isLoading && 'Loading, please wait'}
      {!isLoading && error && 'Weather service doesn`t work, please try later'}
      {!isLoading && !error && temperature !== null && `Current temperature is: ${temperature}°C`}
    </p>
  )
}