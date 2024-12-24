import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../provider/AuthProvider';
import { toast } from 'react-toastify';

const MyTutorials = () => {
    const { user, loading } = useContext(authContext)
    const [postedTutorials, setPostedTutorials] = useState([]);

    useEffect(() => {

        const fetchPostedTutorials = async () => {
            try {
                const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/my-tutorials`, {
                    params: { email: user?.email }
                });
                setPostedTutorials(data)
                console.log(postedTutorials, user)
            } catch (error) {
                toast.error(error)
            }
        }
        fetchPostedTutorials()

    }, [user])

    return (
        <div>
            MyTutors
        </div>
    );
};

export default MyTutorials;