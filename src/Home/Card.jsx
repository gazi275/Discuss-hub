import { Link } from "react-router-dom";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";

const Card = ({card}) => {
    
    return (
        <div>
           <div className=" bg-gray-100 flex justify-center items-center  mt-10 w-[350px]">
  <div className=" container bg-white rounded-xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
    <div>
      <span className="text-white text-xs font-bold rounded-lg bg-green-500 inline-block mt-4 ml-4 py-1.5 px-4 cursor-pointer">{card.tag}</span>
      <h1 className="text-2xl mt-2 ml-4 font-bold text-gray-800 cursor-pointer hover:text-gray-900 transition duration-100">{card.title}</h1>
      
    </div>
    <div>
        <p className="text-center text-gray-800 my-4">{card.description}</p>
    </div>
    <div className=" p-4 justify-between">
      <div className="flex items-center space-x-2 ">
        <img className="w-full rounded-full h-56" src={card.image} />
        <h2 className="text-gray-800 font-bold cursor-pointer">{card.name}</h2>
      </div>
      <div className=" flex items-center justify-between space-x-2">
        <div className="flex text-lg gap-5">
        <AiOutlineLike />
        <AiOutlineDislike />
        
        </div>
       
        <div>
        <Link to={`/details/${card._id}`}>
        <button type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">details</button>
     </Link>
        </div>
         </div>
         
    </div>
  </div>
</div> 
        </div>
    );
};

export default Card;