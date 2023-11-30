

const Card = ({card}) => {
    console.log(card);
    return (
        <div>
           <div className=" bg-gray-100 flex justify-center items-center ">
  <div className="max-w-xs container bg-white rounded-xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
    <div>
      <span className="text-white text-xs font-bold rounded-lg bg-green-500 inline-block mt-4 ml-4 py-1.5 px-4 cursor-pointer">{card.tag}</span>
      <h1 className="text-2xl mt-2 ml-4 font-bold text-gray-800 cursor-pointer hover:text-gray-900 transition duration-100">{card.title}</h1>
      
    </div>
    <div>
        <p className="text-center text-gray-800 my-4">{card.description}</p>
    </div>
    <div className="flex p-4 justify-between">
      <div className="flex items-center space-x-2">
        <img className="w-full rounded-full" src={card.image} />
        <h2 className="text-gray-800 font-bold cursor-pointer">{card.name}</h2>
      </div>
      <div className="flex space-x-2">
        <div className="flex space-x-1 items-center">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gray-600 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </span>
          <span>22</span>
        </div>
        <div className="flex space-x-1 items-center">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-red-500 hover:text-red-400 transition duration-100 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
          </span>
          <span>20</span>
        </div>
      </div>
    </div>
  </div>
</div> 
        </div>
    );
};

export default Card;