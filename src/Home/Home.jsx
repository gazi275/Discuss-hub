
import Dashboard from "../Dashboard/Dashboard";
import Footer from "../Shared/footer";
import Announments from "./Announments";
import Banner from "./Banner";
import Cards from "./Cards";
import ExtraSection from "./ExtraSection";


const Home = () => {
    return (
        <div className="max-w-[1440px] mx-auto space-y-6 ">
            <Banner></Banner>
            <Cards></Cards>
            <div className="mt-32">
            <Announments></Announments>
            </div>
            {/* <Dashboard></Dashboard> */}
            <ExtraSection></ExtraSection>
           <Footer></Footer> 
        </div>
    );
};

export default Home;