import { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const Add = () => {
    const [startDate, setStartDate] = useState(new Date());
    const handleSubmit = (e) => {
        e.preventDefault();

        
       
         const title = e.target.title.value;
        const email = e.target.email.value;
        const level = e.target.level.value;
          const marks = e.target.marks.value;
        const image = e.target.image.value;
         const date = e.target.date.value;
          const description = e.target.description.value;
       

       const assignment={title,email,level, marks,image,date ,description};
        console.log(assignment);
    }

    return (
        <div>
        <section className=" dark:bg-gray-900 " style={{ backgroundImage: 'url("https://i.ibb.co/tBvVpMm/images-1.jpg")' }}>
<div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
  <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a new Assignment</h2>
  <form onSubmit={handleSubmit} >
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <div className="sm:col-span-2">
              <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
              <input type="text" name="title" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type Assignment Title" required=""/>
          </div>
          <div className="w-full">
              <label for="brand" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Email</label>
              <input type="text" name="email" id="brand" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter your Email" required=""/>
          </div>
          <div className="w-full">
              <label for="marks" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Marks</label>
              <input type="number" min={0} max={100} name="marks" id="marks" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="99" required=""/>
          </div>
          <div>
              <label for="level" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Difficulty Level</label>
            <select name="level" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                <option value="easy">Easy</option>
                <option value="Medium">Medium</option>
                 <option value="Hard">Hard</option>
              </select>
          </div>
          <div>
              <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image URL</label>
              <input type="text" name="image" id="item-weight" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Image Link" required=""/>
          </div> 
          <div>
              <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Due Date</label>
              <DatePicker name="date" selected={startDate} onChange={(date) => setStartDate(date)} />
         
         
          </div> 
          <div className="sm:col-span-2">
              <label for="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
              <textarea id="description" rows="8" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your description here"></textarea>
          </div>
      </div>
      <button type="submit" className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
          Add product
      </button>
  </form>
</div>
</section>
    </div>
    );
};

export default Add;