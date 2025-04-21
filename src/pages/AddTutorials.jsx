import axios from 'axios'
import { useContext } from 'react';
import { toast } from 'react-toastify';
import { authContext } from '../provider/AuthProvider';

const AddTutorials = () => {
    const { user } = useContext(authContext)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const image = form.image.value;
        const language = form.language.value;
        const price = form.price.value;
        const description = form.description.value;
        const review = form.review.value;

        const formData = { name, email, image, language, price, description, review, status:"online", rating:0 }

        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/add-tutorials`, formData)
            toast.success('Added Successfully!')
            form.reset();
        } catch (err) {
            toast.error(err)
        }
    };


    return (
        <div className="min-h-screen ">
            <div className="hero-content flex-col lg:flex-row mx-auto ">
                <div className="card flex-shrink-0 w-full max-w-2xl shadow-2xl ">
                    <form className="card-body " onSubmit={handleSubmit}>
                        <div className="form-control ">
                            <label className="label ">
                                <span className="label-text dark:text-white">Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={user.displayName || "New User"}
                                className="input input-bordered dark:text-black"
                                readOnly
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={user.email}
                                className="input input-bordered text-black"
                                readOnly
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text dark:text-white">Image</span>
                            </label>
                            <input
                                type="url"
                                name="image"
                                
                                placeholder="Image URL"
                                className="input input-bordered w-full text-black"
                            />
                        </div>
                        <div className="flex gap-3">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text dark:text-white">Language</span>
                                </label>
                                <select
                                    name="language"
                                    className="input input-bordered w-full text-black"
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
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text dark:text-white">Price</span>
                                </label>
                                <input
                                    type="number"
                                    name="price"
                                    placeholder="Price"
                                    className="input input-bordered w-full text-black"
                                />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text dark:text-white">Description</span>
                            </label>
                            <textarea
                                name="description"
                                placeholder="Description"
                                className="textarea textarea-bordered text-black"
                            ></textarea>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text dark:text-white">Review</span>
                            </label>
                            <input
                                type="number"
                                name="review"
                                value={user.review}
                                readOnly
                                className="input input-bordered text-black"
                            />
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddTutorials;
