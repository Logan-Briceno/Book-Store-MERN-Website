//This is the home page for the website that is being sent to router.jsx
import Banner from "./Banner"
import TopSellers from "./TopSellers"
import Recommended from "./Recommended"

export const Home = () => {
  return (
    <>
    <Banner />
    <TopSellers />
    <Recommended />
    </>
  )
}

export default Home
