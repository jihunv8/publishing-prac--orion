import EthicalManagement from '../components/home/ethical-management/EthicalManagement';
import MainBanner from '../components/main-banner/MainBanner';
import NewsRoom from '../components/home/news-room/NewsRoom';

const Home = (): JSX.Element => {
  return (
    <div>
      <MainBanner />
      <EthicalManagement />
      <NewsRoom />
    </div>
  );
};

export default Home;
