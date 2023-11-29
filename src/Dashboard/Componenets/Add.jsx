import { useState } from "react";

import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';



const Add = () => {
    const [value, onChange] = useState('10:00');
    const handleSubmit = (e) => {
        e.preventDefault();

        
       
         const title = e.target.title.value;
        const email = e.target.email.value;
        const name = e.target.name.value;
          const upvote = e.target.upvote.value;
          const downvote = e.target.downvote.value;
        const image = e.target.image.value;
         const time = e.target.time.value;
          const description = e.target.description.value;
       

       const posts={title,email,name, upvote,image,time ,description,downvote};
        console.log(posts);
        fetch("http://localhost:5001/posts", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
         },
             body: JSON.stringify(posts),
           })
             .then((res) => res.json())
             .then((data) => {
               console.log(data);
               
            });


    }


    return (
        <div>
        <section className=" dark:bg-gray-900 " style={{ backgroundImage: 'url("https://i.ibb.co/tBvVpMm/images-1.jpg")' }}>
<div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
  <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a new Post</h2>
  <form onSubmit={handleSubmit} >
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <div className="sm:col-span-2">
              <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Authors Name</label>
              <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your Name" required=""/>
          </div>
          <div className="sm:col-span-2">
              <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
              <input type="text" name="title" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="post title" required=""/>
          </div>
          <div className="w-full">
              <label for="brand" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Email</label>
              <input type="text" name="email" id="brand" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter your Email" required=""/>
          </div>
          
         
          <div>
              <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Photo</label>
              <input type="text" name="image" id="item-weight" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Image Link" required=""/>
          </div> 
          <div>
              <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Due Date</label>
              <TimePicker name="time" onChange={onChange} value={value} />
         
         
          </div> 
          <div>
              <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tags</label>
              <input type="text" name="tag" id="item-weight" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="tag" required=""/>
          </div> 
          <div>
              <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Upvote</label>
              <input type="number" min={0} max={0} name="upvote" id="item-weight" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="0" required=""/>
          </div> 
          <div>
              <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Downvote</label>
              <input type="number" min={0} max={0} name="downvote" id="item-weight" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="0" required=""/>
          </div> 
          <div className="sm:col-span-2">
              <label for="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
              <textarea id="description" rows="8" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your description here"></textarea>
          </div>
      </div>
      <button type="submit" className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
          Add post
      </button>
  </form>
</div>
</section>
    </div>
    );
};

export default Add;