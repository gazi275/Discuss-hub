import toast from "react-hot-toast";



const Announcement = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

        
       
         
        const announce = e.target.announce.value;
        

       const announces ={
        announce
       }
console.log(announces);
    
 
    fetch("http://localhost:5001/announcements", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(announces),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success('Successfully created!');
      });
  };







    return (
        <div className=""  style={{backgroundImage:"url('https://i.ibb.co/vhtY2fV/images-2.jpg')"}}>


<div className="min-h-screen">
<form onSubmit={handleSubmit} className="max-w-xl mx-auto pt-52 " >
  <label for="message" className="block mb-2 text-3xl font-medium text-gray-900 dark:text-white">Make An Announcement</label>
  <textarea id="message" name="announce" rows="5" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Make An Announcement"></textarea>
  <button type="submit" className=" mt-4 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Submit</button>
</form>
</div>





        

        </div>
    );
};

export default Announcement;