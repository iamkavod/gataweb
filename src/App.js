import { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Home } from './Layouts/Pages';
import { GATAToken, GATAMembershipNFTs } from './Layouts/Pages/Tokens';
import { LatestNews, RoadMap } from './Layouts/Pages/Resources';
import { LatestNewsA, LatestNewsB, LatestNewsC, LatestNewsD, LatestNewsE } from './Layouts/Pages/Resources/LatestNews/Layout';
import { AboutUs, ContactUs, OurPartners, TheTeam } from './Layouts/Pages/More/Layout'
import { Framework } from './Layouts/Pages/Home/Layout/Layout';
import { GataCoinUi, GataMarketUI } from './Layouts/Pages/Home/Layout/Layout/TheProtocol';
import GataNow from './Layouts/Pages/Home/Layout/Layout/TheProtocol/GataNow/GataNow';
import GataBusinessNetwork from './Layouts/Pages/Home/Layout/Layout/TheProtocol/GataBusinessNetwork/GataBusinessNetwork';
import { BuySell, JoinCommunity, ShipTrackPackage } from './Layouts/Pages/Economy/SubPage';
import { Loader } from './Layouts/Constants'

const LocationWrapper = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Show the loader when route changes
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    handleStart();

    // Simulate loading time
    const timer = setTimeout(() => {
      handleComplete();
    }, 3000);

    return () => clearTimeout(timer); 
  }, [location]);

  return (
    <div className='bg-darkShadeA'>
      {loading ? <Loader /> : children}
    </div>
  );
};


function App() {
  return (
    <BrowserRouter>
      {/* <LocationWrapper> */}
        <div className="App">
          <Routes>
            {/* Home */}
            <Route path='/' element={<Home />} />

            {/* Tokens */}
            <Route path='/buyandsell' element={<GATAToken />} />

            {/* Gata Membership NFTs */}
            <Route path='/get' element={<GATAMembershipNFTs />} />

            {/* Latest News */}
            <Route path='/latestnews' element={<LatestNews />} />

            {/* Roadmap */}
            <Route path='/roadmap' element={<RoadMap />} />

            {/* Uniswap */}
            <Route path='/latestnews=1' element={<LatestNewsA />} />

            {/* Partnership */}
            <Route path='/latestnews=2' element={<LatestNewsB />} />

            {/* Engage */}
            <Route path='/latestnews=3' element={<LatestNewsC />} />

            {/* Upcoming Events */}
            <Route path='/latestnews=4' element={<LatestNewsD />} />

            {/* Event Recaps */}
            <Route path='/latestnews=5' element={<LatestNewsE />} />

            {/* About */}
            <Route path='/about' element={<AboutUs />} />

            {/* Team */}
            <Route path='/team' element={<TheTeam />} />

            {/* Partners */}
            <Route path='/partners' element={<OurPartners />} />

            {/* Contact */}
            <Route path='/contacts' element={<ContactUs />} />

            {/* Framework */}
            <Route path='/framwork' element={<Framework />} />


            {/* The Protocol */}
            {/* GataMarket */}
            <Route path='/gatamarket' element={<GataMarketUI />} />
            <Route path='/buyandsellproducts' element={<BuySell />} />

            {/* GataNow */}
            <Route path='/gatanow' element={<GataNow />} />
            <Route path='/shipandtrack' element={<ShipTrackPackage />} />

            {/* GataBusinessNetwork */}
            <Route path='/gatabusinessnetwork' element={<GataBusinessNetwork />} />
            <Route path='/jointhecommunity' element={<JoinCommunity />} />

            {/* GataCoin */}
            <Route path='/gatacoin' element={<GataCoinUi />} />
          </Routes>
        </div>
      {/* </LocationWrapper> */}
    </BrowserRouter>
  );
}

export default App;
