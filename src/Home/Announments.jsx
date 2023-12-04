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
        <div>

{ann}


        </div>
       
    );
};

export default Announments;