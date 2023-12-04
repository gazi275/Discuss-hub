import { Link, useNavigate } from "react-router-dom";
import GoogleLogin from "./GoogleLogin";
import { useContext } from "react";

import toast from "react-hot-toast";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import { serverURL } from './../utils/url';


const Register = () => {
    const { createUser, updateUser } = useContext(AuthContext)
    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault();

        // get field values 

        const firstname = e.target.firstName.value;
        const lastname = e.target.lastName.value;
        const email = e.target.email.value;
        const image = e.target.photo.value
        const password = e.target.password.value;
        console.log(firstname, lastname, email, password);


        // validation 
        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(password)) {
            toast.error('Password must be at least 6 characters,Uppercase-letter and special characters');
            return;
        }


        createUser(email, password)
            .then(res => {
                updateUser({ displayName: firstname, photoURL: image })
                    .then(res => {
                        const newUsers = {
                            name: firstname,
                            email: email,
                            image:image
                        }
                        axios.post(`${serverURL}/users`, newUsers)
                            .then(res => {
                                console.log(res);
                                toast.success('you have registered  successfully Please Go to login');
                                navigate('/login')
                            })

                    })

            })
            .catch(error => {
                console.log(error);
                toast.error("Please fil up your form correctly")
            })
    }












    return (
        <div>

            <div className="h-full bg-blue-300 dark:bg-gray-900">

                <div className="mx-auto">
                    <div className="flex justify-center px-6 py-12 ">

                        <div className="w-full xl:w-3/4 lg:w-11/12 flex ">

                            <div className="w-full h-auto bg-gray-400 dark:bg-gray-800 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg bg-[url('https://i.ibb.co/VqjZhj0/regiseter.jpg')]"></div>

                            <div className="w-full lg:w-7/12 bg-[#f5f5f5] dark:bg-gray-700 p-5 rounded-lg lg:rounded-l-none">
                                <h3 className="py-4 text-2xl text-center text-gray-800 dark:text-white">Create an Account!</h3>
                                <form onSubmit={handleSubmit} className="px-8 pt-6 pb-8 mb-4 bg- dark:bg-gray-800 rounded">
                                    <div className="mb-4 md:flex md:justify-between">
                                        <div className="mb-4 md:mr-2 md:mb-0">
                                            <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="firstName">
                                                First Name
                                            </label>
                                            <input
                                                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                id="firstName"
                                                type="text"
                                                placeholder="First Name"
                                                name="firstName"
                                            />
                                        </div>
                                        <div className="md:ml-2">
                                            <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="lastName">
                                                Last Name
                                            </label>
                                            <input
                                                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                id="lastName"
                                                type="text"
                                                placeholder="Last Name"
                                                name="LastName"
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="email">
                                            Email
                                        </label>
                                        <input
                                            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="email"
                                            type="email"
                                            placeholder="Email"
                                            name="email"
                                        />
                                    </div>
                                    <div className="mb-4 md:flex md:justify-between">
                                        <div className="mb-4 md:mr-2 md:mb-0">
                                            <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="password">
                                                Password
                                            </label>
                                            <input
                                                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                id="password"
                                                type="password"
                                                placeholder="******************"
                                                name="password"
                                            />
                                            <p className="text-xs italic text-red-500">Please choose a password.</p>
                                        </div>
                                        <div className="md:ml-2">
                                            <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="c_password">
                                                Photo-Url
                                            </label>
                                            <input
                                                className="w-full px-2 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                id="photo"
                                                type="text"

                                                name="photo"
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-6 text-center">
                                        <button
                                            className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                                            type="submit"
                                        >
                                            Register Account
                                        </button>
                                    </div>
                                    <hr className="mb-6 border-t" />
                                    <div className="text-center">
                                        <a className="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
                                            href="#">
                                            Forgot Password?
                                        </a>
                                    </div>
                                    <div className="text-center space-y-3">
                                        <p className="inline-block text-sm text-black dark:text-blue-500 align-baseline hover:text-blue-800"
                                        >
                                            Already have an account?<Link to="/login"> <span className="text-blue-500"> Login!</span> </Link>
                                        </p>
                                        <GoogleLogin></GoogleLogin>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;