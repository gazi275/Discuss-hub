
import Footer from "../Shared/footer";
import Banner from "./Banner";
import Cards from "./Cards";


const Home = () => {
    return (
        <div className="max-w-[1440px] mx-auto ">
            <Banner></Banner>
            <Cards></Cards>
           <Footer></Footer>
        </div>
    );
};

export default Home;