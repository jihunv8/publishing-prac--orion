import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import EthicalManagement from '../components/home/ethical-management/EthicalManagement';
import MainBanner from '../components/main-banner/MainBanner';
import NewsRoom from '../components/home/news-room/NewsRoom';

const Home = (): JSX.Element => {
  return (
    <div>
      <Header />
      <MainBanner />
      <EthicalManagement />
      <NewsRoom />
      <Footer></Footer>
    </div>
  );
};

export default Home;
