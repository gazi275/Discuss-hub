

const TablePost = ({table}) => {
   const deleted=()=>{

        fetch(`https://discuss-hubs.vercel.app/posted/${table._id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
            });
    
    
    
    
    
    
    }
  

    console.log(table);
    return (
        <div>
            <div className="-m-1.5 overflow-auto">
  <div className="p-1.5 min-w-full inline-block align-middle">
    <div className="overflow-hidden">
      <div className="table border-collapse table-auto w-full divide-y divide-gray-200 dark:divide-gray-700">
        
        <div className="table-row-group divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-slate-800">
          <div className="table-row">
            <div className="table-cell px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">{table.title}</div>
            <div className="table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">0</div>
            <div className="table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{table.description}</div>
            <div className="table-cell px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
            <button onClick={deleted} className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md">
	<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
	  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
	</svg>

	Delete
  </button>  </div>
          </div>
          
          </div>
        
  </div>
</div>
</div>
</div> 
        </div>
    );
};

export default TablePost;