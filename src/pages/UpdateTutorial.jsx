import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLoaderData, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateTutorial = () => {
    const updateData = useLoaderData()

    const { _id, name, email, image, language, price, review, description } = updateData.data

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const image = form.image.value;
        const language = form.language.value;
        const price = form.price.value;
        const description = form.description.value;
        const newFormData = { image, language, price, description }

        try {
            const { data } = await axios.put(`${import.meta.env.VITE_API_URL}/update-tutorial/${_id}`, newFormData);
            if (data.modifiedCount > 0)
                toast.success('Tutorial updated successfully!');
            else return toast.error("Failed to update")
        } catch (error) {
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
                        defaultValue={name}
                        readOnly
                        className="mt-1 p-2 w-full border rounded bg-gray-200 cursor-not-allowed"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Email</label>
                    <input
                        type="text"
                        name="email"
                        defaultValue={email}
                        readOnly
                        className="mt-1 p-2 w-full border rounded bg-gray-200 cursor-not-allowed"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Image</label>
                    <input
                        type="text"
                        name="image"
                        defaultValue={image}
                        className="mt-1 p-2 w-full border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Language</label>
                    <select
                        name="language"
                        className="input input-bordered w-full"
                        defaultValue={language}
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
                        defaultValue={price}
                        className="mt-1 p-2 w-full border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Description</label>
                    <textarea
                        name="description"
                        defaultValue={description}
                        className="mt-1 p-2 w-full border rounded"
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Review</label>
                    <input
                        type="text"
                        name="review"
                        defaultValue={review}
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
