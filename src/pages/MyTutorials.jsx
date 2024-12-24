import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../provider/AuthProvider';
import { toast } from 'react-toastify';
import { MdDelete, MdEditSquare } from "react-icons/md";
import { Link } from 'react-router-dom';

const MyTutorials = () => {
    const { user } = useContext(authContext)
    const [postedTutorials, setPostedTutorials] = useState([]);

    const handleDelete = (id) => {
        try {
            const { data } = axios.delete(`${import.meta.env.VITE_API_URL}/delete-tutorial/${id}`)
            toast.success("Deleted Successfully")
            fetchPostedTutorials()
            console.log(data)
        } catch (error) {
            toast.error(error);
        }
    }

    useEffect(() => {
        fetchPostedTutorials()

    }, [user])

    const fetchPostedTutorials = async () => {
        try {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/my-tutorials/${user?.email}`);
            setPostedTutorials(data)
        } catch (error) {
            toast.error(error)
        }
    }

    return (
        <div className='container mx-auto  '>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Profile</th>
                            <th>Name</th>
                            <th>Teaches</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            postedTutorials.map((tutorial, index) => (
                                <tr key={index}>
                                    <td><img src={tutorial.image} alt="" className='w-14 rounded-full ' /></td>
                                    <td>{tutorial.name}</td>
                                    <td>{tutorial.language}</td>
                                    <td className='flex items-center gap-2'>
                                        <button onClick={() => handleDelete(tutorial._id)}>
                                            <MdDelete className="text-red-500 text-2xl" />
                                        </button>
                                        <Link to={`/update/${tutorial._id}`}>
                                            <MdEditSquare className='text-2xl text-blue-500' />
                                        </Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyTutorials;