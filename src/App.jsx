
import './App.css'
import Brand from './components/Brand/Brand'
import Discover from './components/Discover/Discover'
import FindHome from './components/FindHome/FindHome'
import OurMission from './components/OurMission/OurMission'
import RecentProperty from './components/RecentProperty/RecentProperty'
import RecentSale from './components/RecentSale/RecentSale'
import RecentRent from './components/Recentrent/RecentRent'
import Banner from './components/banner/Banner'
import Explore from './components/explore/Explore'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Work from './components/workwithus/Work'

function App() {
 

  return (
    <>
    <Header/>
    <Hero/>
    <RecentProperty/>
    <OurMission/>
    <Discover/>
    <Explore/>
    <RecentRent/>
    <RecentSale/>
    <FindHome/>
     <Banner/>
     <Work/>
     <Brand/>
     <Footer/>
    </>
  )
}

export default App
