import { Link, useLoaderData, useParams } from "react-router-dom";


const CardDetails = () => {
    const id  = useParams()
    console.log(id);
      const details=useLoaderData()
     console.log(details);

      const handleSubmit = (e) => {
        e.preventDefault();

        
       
         const comments = e.target.comment.value;
         console.log(comments);

         fetch("http://localhost:5001/comments", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
         },
             body: JSON.stringify({comments:comments}),
           })
             .then((res) => res.json())
             .then((data) => {
               console.log(data);
            });
      }

    return (
        <div>
           
<div className="bg-gray-100 h-screen flex items-center justify-center">
	<div className="bg-white p-8 rounded-lg shadow-md max-w-md">
		
		<div className="flex items-center justify-between mb-4">
			<div className="flex items-center space-x-2">
				<img src={details.image} alt="User Avatar" className="w-8 h-8 rounded-full"/>
				<div>
					<p className="text-gray-900 font-semibold">{details.name}</p>
					<p className="text-gray-900 text-sm">Posted {details.time}</p>
				</div>
			</div>
			<div className="text-gray-900 cursor-pointer">
				
				<button className="hover:bg-gray-900 rounded-full p-1">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
						<circle cx="12" cy="7" r="1" />
						<circle cx="12" cy="12" r="1" />
						<circle cx="12" cy="17" r="1" />
					</svg>
				</button>
			</div>
		</div>
	
		<div className="mb-4">
			<p className="text-gray-900"> {details.description} <a  className="text-blue-600">#{details.tag}</a>
				
			</p>
		</div>
		
		<div className="mb-4">
			<img src="https://ibb.co/XYzdpyL" alt="Post Image" className="w-full h-48 object-cover rounded-md"/>
		</div>
		
		<div className="flex items-center justify-between text-gray-900">
			<div className="flex items-center space-x-2">
				<button className="flex justify-center items-center gap-2 px-2 hover:bg-gray-50 rounded-full p-1">
					<svg className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
						<path d="M12 21.35l-1.45-1.32C6.11 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-4.11 6.86-8.55 11.54L12 21.35z" />
					</svg>
					<span> Likes</span>
				</button>
			</div>

<button className=" justify-center items-center gap-2 px-2 hover:bg-gray-50 rounded-full p-1">
				<svg width="22px" height="22px" viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
					<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
					<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
					<g id="SVGRepo_iconCarrier">
						<path fillRule="evenodd" clipRule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22ZM8 13.25C7.58579 13.25 7.25 13.5858 7.25 14C7.25 14.4142 7.58579 14.75 8 14.75H13.5C13.9142 14.75 14.25 14.4142 14.25 14C14.25 13.5858 13.9142 13.25 13.5 13.25H8ZM7.25 10.5C7.25 10.0858 7.58579 9.75 8 9.75H16C16.4142 9.75 16.75 10.0858 16.75 10.5C16.75 10.9142 16.4142 11.25 16 11.25H8C7.58579 11.25 7.25 10.9142 7.25 10.5Z"></path>
					</g>
				</svg>
				<span> Comments</span>
			</button>
            
            <div className="inline-flex">
            <form  onSubmit={handleSubmit} className="mb-6">
        <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <label for="comment" className="sr-only">Your comment</label>
            <textarea name="comment" id="comment" rows="6"
                className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                placeholder="Write a comment..." required></textarea>
        </div>
        <div className="flex gap-2">
        <button type="submit"
            className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
            Post comment
        </button>
        <Link to="/comment">
        <button 
            className="flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
            show comment
        </button>
        </Link>
        
        </div>
    </form>
            </div>

			
		</div>
		
			
			
		</div>
	</div>
</div>
        
        
    );
};

export default CardDetails;