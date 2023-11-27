import Login from "../Register/Login";
import Register from "../Register/Register";
import Banner from "./Banner";


const Home = () => {
    return (
        <div className="max-w-[1440px] mx-auto ">
            <Banner></Banner>
            <Login></Login>
            <Register></Register>
        </div>
    );
};

export default Home;