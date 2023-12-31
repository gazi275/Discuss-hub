import { useEffect, useState } from "react";
import Card from "./Card";



const Cards = ({postData}) => {
  // const [postData, setPostData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('https://discuss-hubs.vercel.app/post');
  //       // console.log(response);
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }

  //       const data = await response.json();
  //       setPostData(data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []); 
  // The empty dependency array ensures that this effect runs once after the initial render

// console.log(postData);



    return (
        <div className=" ">
          
          <div className="flex flex-wrap justify-center text-center ">
                    <div className=" lg:w-6/12 px-4">
                      
                        <h1 className="text-gray-900 text-4xl font-bold mb-8">
                         See Your Posts
                        </h1>

                        
                        <p className="text-gray-700 text-lg font-light mb-6">
                            With over 100 years of combined experience, we've got a well-seasoned team at the helm.
                        </p>
                    </div>
                </div>
           <div className="grid grid-cols-1   mt-10  gap-20   md:grid-cols-3 lg:grid-cols-4" >
            
           {
   postData?.map(card=> <Card key={card.id} card={card}></Card>)
}  
           </div>

        </div>
    );
};

export default Cards;