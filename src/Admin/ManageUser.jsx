import { FaTrashAlt, FaUsers } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

import toast from "react-hot-toast";

const ManageUser = () => {
    const users=useLoaderData()
    console.log(users);

    



    const handleMakeAdmin = user =>{
        fetch(`http://localhost:5001/users/${user._id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({isAdmin : true}),
          })
            .then((res) => res.json())
            .then((data) => {
              
                toast.success('Successfully added as an admin !');
              
            });
    }


    const handleDeleteUser=(user)=>{
    fetch(`http://localhost:5001/users/${user._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
            
            toast.success('Successfully created!');
          
        });
    }
    
    return (
        <div>
            <div>
            <div className="flex justify-evenly my-4">
                <h2 className="text-3xl">All Users</h2>
                <h2 className="text-3xl">Total Users: {users.length}</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    { user.role === 'admin' ? 'Admin' : <button
                                        onClick={() => handleMakeAdmin(user)}
                                        className="btn btn-lg bg-orange-500">
                                        <FaUsers className="text-white 
                                        text-2xl"></FaUsers>
                                    </button>}
                                </td>
                                <td>
                                    <button
                                        onClick={() => handleDeleteUser(user)}
                                        className="btn btn-ghost btn-lg">
                                        <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                    </button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div> 
        </div>
    );
};

export default ManageUser;