import { useEffect, useState } from "react";



const Announments = () => {
  const [postData, setPostData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://discuss-hubs.vercel.app/announcement`);
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        const data = await response.json();
        setPostData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
    
  }, []);

console.log(postData);

    return (
        <div className="mt-20">
<div>
  {postData?.length==0 ? <div className="hidden"></div>
  : <div>
    <div>     
<h1 className="mb-4 text-4xl font-extrabold leading-none text-center tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">The Announcement</h1>
<p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">we focus on markets where technology, innovation, and capital can unlock long-term value and drive social growth.</p>


    </div>

  { postData?.map(data=>
   <div key={data.id} className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto my-5">
   <div className="bg-blue-600 bg-[url('https://preline.co/assets/svg/examples/abstract-1.svg')] bg-no-repeat bg-cover bg-center p-4 rounded-lg text-center">
     <p className="me-2 inline-block text-white">
      {data.announce}
     </p>
     
   </div>
 </div> )}
 



    </div>}
</div>



        </div>
       
    );
};

export default Announments;