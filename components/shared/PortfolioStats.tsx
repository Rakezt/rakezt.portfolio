import { Eye, Heart } from 'lucide-react';
import StatsCard from './StatsCard';

export default function PortfolioStats() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6'>
      <StatsCard
        title='Total Views'
        value='1488'
        icon={<Eye className='text-purple-500' />}
      />

      <StatsCard
        title='Appreciation Count'
        value='655'
        icon={<Heart className='text-red-500' />}
      />
    </div>
  );
}
