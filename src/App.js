import './App.css';
import Banner from './components/Banners';
import ArticleCardFooter from './components/BottomCards';
import LandingPage from './components/LandingPage';
import LimitedDeals from './components/LimitedDeals';
import HeaderSearch from './components/Navbar';
function App() {
  return (
    <div>
      <HeaderSearch/>
      <LandingPage/>
      <LimitedDeals/>
      <Banner/>
      <ArticleCardFooter/>
    </div>
  );
}

export default App;
