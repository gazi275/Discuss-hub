import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const TablePost = ({table}) => {

  const [postData, setPostData] = useState([]);
  const {user} = useContext(AuthContext);
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




   const deleted=()=>{

        fetch(`https://discuss-hubs.vercel.app/posted/${table._id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
            });
    
    
    
    
    
    
    }
  

 
    return (
        <div>
            

<div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                Post Title
                </th>
                <th scope="col" className="px-6 py-3">
                Number of votes  
                </th>
                <th scope="col" className="px-6 py-3">
               Description

                </th>
                <th scope="col" className="px-6 py-3">
                
                Action
                </th>
            </tr>
        </thead>
   <div>
    <tbody>
   {
   postData?.map(data=>
    
{user.email==data.email ? <div>

<div>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                 {/* {data.title} */}
                </th>
                <td className="px-6 py-4">
                    {data.upvote}
                </td>
                <td className="px-6 py-4">
                   {data.description}
                </td>
                <td className="px-6 py-4">
                 delete
                </td>
            </tr>
</div>
</div> :
<div>


</div>

})
} 
</tbody> 
     </div> 
    </table>
</div>

        </div>
    );
};

export default TablePost;