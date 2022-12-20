import EthicalManagement from '../components/home/ethical-management/EthicalManagement';
import MainBanner from '../components/main-banner/MainBanner';
import NewsRoom from '../components/home/news-room/NewsRoom';
import Footer from '../components/footer/Footer';

const Home = (): JSX.Element => {
  return (
    <div>
      <MainBanner />
      <EthicalManagement />
      <NewsRoom />
      <Footer></Footer>
    </div>
  );
};

export default Home;
