
import Dashboard from "../Dashboard/Dashboard";
import Footer from "../Shared/footer";
import Announments from "./Announments";
import Banner from "./Banner";
import Cards from "./Cards";


const Home = () => {
    return (
        <div className="max-w-[1440px] mx-auto space-y-6 ">
            <Banner></Banner>
            <Cards></Cards>
            <Announments></Announments>
            {/* <Dashboard></Dashboard> */}
           <Footer></Footer> 
        </div>
    );
};

export default Home;