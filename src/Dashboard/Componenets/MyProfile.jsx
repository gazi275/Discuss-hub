import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../Provider/AuthProvider";
import Cart from "../../Home/UserProfile/Cart";



const MyProfile = () => {
    const [postData, setPostData] = useState([]);
    const { user  } = useContext(AuthContext)
 console.log(user);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://discuss-hubs.vercel.app/post');
        
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
        <div className=" w-full flex items-center justify-center dark:bg-gray-900">


<div
    className="e w-full max-w-2xl my-8 md:my-16 flex flex-col items-start space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6 px-4 py-8 border-2 border-dashed border-gray-400 dark:border-gray-400 shadow-lg rounded-lg">

    <span className="absolute text-xs font-medium top-0 left-0 rounded-br-lg rounded-tl-lg px-2 py-1 bg-primary-100 dark:bg-gray-900 dark:text-gray-300 border-gray-400 dark:border-gray-400 border-b-2 border-r-2 border-dashed ">
        author
    </span>

    <div className="w-full flex justify-center sm:justify-start sm:w-auto">
        <img className="object-cover w-20 h-20 mt-3 mr-3 rounded-full" src={user.photoURL}/>
    </div>

    <div className="w-full sm:w-auto flex flex-col items-center sm:items-start">

        <p className="font-display mb-2 text-2xl font-semibold dark:text-gray-200" itemProp="author">
         {user.displayName}
        </p>

        <div className="mb-4 md:text-lg text-gray-400">
            <p>{user.displayName} is a versatile content writer with a strong background in web development.</p>
        </div>

        <div className="flex gap-4">

        
<p >My email {user.email} </p>

        </div>
    </div>

</div>

</div>


        
<div className="grid grid-cols-1   gap-2  md:grid-cols-3 lg:grid-cols-4   " >
            
            { 


    postData?.map(card=> <Cart key={card.id} card={card}></Cart>)
 }  
            </div>
 
        </div>
    );
};

export default MyProfile;