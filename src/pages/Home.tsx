import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div>
      <section className='relative h-[600px] bg-cover bg-center' style={{ backgroundImage: "url('https://storage.googleapis.com/dala-prod-public-storage/generated-images/96ea59e7-e0af-46f0-b72e-77e8b09f4e2c/eco-connect-hero-x17swmp-1765088416293.webp')" }}>
        <div className='absolute inset-0 bg-black/50 flex items-center justify-center'>
          <div className='text-center text-white p-4'>
            <h1 className='text-5xl md:text-6xl font-bold tracking-tight'>Welcome to EcoConnect</h1>
            <p className='mt-4 text-lg md:text-xl max-w-2xl mx-auto'>
              Inspiring individuals and communities to engage in sustainable practices for a greener lifestyle.
            </p>
            <Button size='lg' className='mt-8 bg-green-600 hover:bg-green-700 text-white'>
              Get Started <ArrowRight className='ml-2 h-5 w-5' />
            </Button>
          </div>
        </div>
      </section>
      <section className='py-20 px-4 sm:px-6 lg:px-8'>
        <div className='container mx-auto text-center'>
          <h2 className='text-4xl font-bold text-gray-800 mb-4'>What is EcoConnect?</h2>
          <p className='max-w-3xl mx-auto text-lg text-gray-600'>
            EcoConnect is your all-in-one platform for sustainable living. Discover resources, connect with a like-minded community, find local events, and track your positive impact on the planet.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;