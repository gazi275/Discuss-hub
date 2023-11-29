

const MyPost = () => {
    return (
        <div>
            <div className="-m-1.5 overflow-auto">
  <div className="p-1.5 min-w-full inline-block align-middle">
    <div className="overflow-hidden">
      <div className="table border-collapse table-auto w-full divide-y divide-gray-200 dark:divide-gray-700">
        <div className="table-header-group">
          <div className="table-row">
            <div className="table-cell px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Name</div>
            <div className="table-cell px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Age</div>
            <div className="table-cell px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Address</div>
            <div className="table-cell px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Action</div>
          </div>
        </div>
        <div className="table-row-group divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-slate-800">
          <div className="table-row">
            <div className="table-cell px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">John Brown</div>
            <div className="table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">45</div>
            <div className="table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">New York No. 1 Lake Park</div>
            <div className="table-cell px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
              <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Delete</button>
            </div>
          </div>
          <div className="table-row">
            <div className="table-cell px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">Jim Green</div>
            <div className="table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">27</div>
            <div className="table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">London No. 1 Lake Park</div>
            <div className="table-cell px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
              <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Delete</button>
            </div>
          </div>
          <div className="table-row">
            <div className="table-cell px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">Joe Black</div>
            <div className="table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">31</div>
            <div className="table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">Sidney No. 1 Lake Park</div>
            <div className="table-cell px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
              <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default MyPost;