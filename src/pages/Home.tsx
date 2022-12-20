import EthicalManagement from '../components/home/ethical-management/EthicalManagement';
import MainBanner from '../components/main-banner/MainBanner';

const Home = (): JSX.Element => {
  return (
    <div>
      <MainBanner />
      <EthicalManagement />
    </div>
  );
};

export default Home;
