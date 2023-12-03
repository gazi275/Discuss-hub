
import { useRef, useState } from "react";
import Dashboard from "../Dashboard/Dashboard";
import Footer from "../Shared/footer";
import Announments from "./Announments";
import Banner from "./Banner";
import Cards from "./Cards";
import ExtraSection from "./ExtraSection";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { serverURL } from "../utils/url";


const Home = () => {
    const [searchValue, setSearchValue] = useState('')

    const { isLoading,isPending, isError, data:postData, refetch } = useQuery({
        queryKey: ['postdata'],
        queryFn: async () => {
            const res = await axios.get(`${serverURL}/post?search=${searchValue.length > 0 ? searchValue : ''}`)
            return res.data
        }
    })




    // handle search
    const handleSearch = (e) => {
        console.log(e.target.value);
        setSearchValue(e.target.value);
        refetch()
    }
    // handle tag search popular
    const handlePopularSearch = (tag) => {
        console.log(tag);
        setSearchValue(tag);
        refetch()
    }

    console.log(postData);


    return (
        <div className="max-w-[1440px] mx-auto space-y-6 ">
            <Banner searchValue={handleSearch} handlePopularSearch={handlePopularSearch}></Banner>
            {
                isLoading || isPending ? <h1>Looding........</h1>
                    :
                    <Cards postData={postData}></Cards>
            }

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