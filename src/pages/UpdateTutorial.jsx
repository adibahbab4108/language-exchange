import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLoaderData, useParams } from 'react-router-dom';

const UpdateTutorial = () => {
    const updateData = useLoaderData()

    const { _id, name, email, image, language, price, review, description } = updateData.data
    const [tutorial, setTutorial] = useState({
        name: '',
        email: '',
        image: '',
        language: '',
        price: '',
        description: '',
        review: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTutorial((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`${import.meta.env.VITE_API_URL}/tutorials/${tutorialId}`, tutorial);
            alert('Tutorial updated successfully!');
        } catch (error) {
            console.error('Error updating tutorial:', error);
        }
    };

    return (
        <div className="max-w-lg mx-auto bg-white p-8 rounded shadow-md">
            <h2 className="text-2xl font-bold mb-4">Update Tutorial</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        readOnly
                        className="mt-1 p-2 w-full border rounded bg-gray-200 cursor-not-allowed"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Email</label>
                    <input
                        type="text"
                        name="email"
                        value={email}
                        readOnly
                        className="mt-1 p-2 w-full border rounded bg-gray-200 cursor-not-allowed"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Image</label>
                    <input
                        type="text"
                        name="image"
                        value={image}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Language</label>
                    <select
                        name="language"
                        // value={formData.language}
                        // onChange={handleChange}
                        className="input input-bordered w-full"
                    >
                        <option value="" disabled>Select a language</option>
                        <option value="English">English</option>
                        <option value="Spanish">Spanish</option>
                        <option value="French">French</option>
                        <option value="German">German</option>
                        <option value="Mandarin">Mandarin</option>
                        <option value="Japanese">Japanese</option>
                        <option value="Korean">Korean</option>
                        <option value="Italian">Italian</option>
                        <option value="Russian">Russian</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Price</label>
                    <input
                        type="text"
                        name="price"
                        value={price}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Description</label>
                    <textarea
                        name="description"
                        value={description}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded"
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Review</label>
                    <input
                        type="text"
                        name="review"
                        value={review}
                        readOnly
                        className="mt-1 p-2 w-full border rounded bg-gray-200 cursor-not-allowed"
                    />
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
                    Update Tutorial
                </button>
            </form>
        </div>
    );
};

export default UpdateTutorial;
