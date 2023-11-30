import { useLoaderData } from "react-router-dom";
import TablePost from "./tablePost";



const MyPost = () => {
  const myPost=useLoaderData();
  console.log(myPost);
    return (
        <div>
          <div className="-m-1.5 overflow-auto">
  <div className="p-1.5 min-w-full inline-block align-middle">
    <div className="overflow-hidden">
      <div className="table border-collapse table-auto w-full divide-y divide-gray-200 dark:divide-gray-700">
   
          <div className="table-header-group">
          <div className="table-row">
            <div className="table-cell px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Name</div>
            <div className="table-cell px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Number of Vote</div>
            <div className="table-cell px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">description</div>
            <div className="table-cell px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Action</div>
          </div>
        </div>
        </div>
</div>
</div>
</div> 
          {
   myPost?.map(table=> <TablePost key={table.id} table={table}></TablePost>)
} 

</div>
    );
};

export default MyPost;