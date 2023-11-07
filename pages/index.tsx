import Header from '@/components/Header';
import { NextPage } from 'next';



const Home: NextPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="mt-10" />
      {/* <Trending /> */}
      <div className="mt-20" />
      {/* <CMCTable /> */}
    </div>
  );
};

export default Home;
