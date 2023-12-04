
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Cart = ({card}) => {
     const {  user } = useContext(AuthContext);
  
    return (
      <div>
        {
            user.email==card.email ? <div>
                <div>
        <div className=" bg-gray-100 flex justify-center items-center h-[500px] mt-10 ">
<div className="w-[400px] container bg-white rounded-xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
 <div>
   <span className="text-white text-xs font-bold rounded-lg bg-green-500 inline-block mt-4 ml-4 py-1.5 px-4 cursor-pointer">{card.tag}</span>
   <h1 className="text-2xl mt-2 ml-4 font-bold text-gray-800 cursor-pointer hover:text-gray-900 transition duration-100">{card.title}</h1>
   
 </div>
 <div>
     <p className="text-center text-gray-800 my-4">{card.description}</p>
 </div>
 <div className=" p-4 justify-between">
   <div className="flex items-center space-x-2">
     <img className="w-full rounded-full h-[320px]" src={card.image} />
     <h2 className="text-gray-800 font-bold cursor-pointer">{card.name}</h2>
   </div>
   <div className=" flex items-center justify-between space-x-2">
     <div className="flex text-lg gap-5">
     <AiOutlineLike />
     <AiOutlineDislike />
     
     </div>
    
     
      </div>
      
 </div>
</div>
</div> 
     </div>
            </div>:<div></div>
        }
      </div>
    
    );
};
export default Cart;
