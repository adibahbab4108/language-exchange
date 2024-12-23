import axios from 'axios'

const AddTutorials = () => {
    const user = {
        name: "Adib Ahbab",
        email: "adibahbab@gmail.com",
        review: 0
    }


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

        const formData = { name, email, image, language, price, description, review }

        const { data } =await axios.post(`${import.meta.env.VITE_API_URL}/add-tutorials`, formData)
        console.log(data);

    };


    return (
        <div className="min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={user.name}
                                className="input input-bordered"
                                readOnly
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={user.email}
                                className="input input-bordered"
                                readOnly
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input
                                type="url"
                                name="image"
                                // value={formData.image}
                                // onChange={handleChange}
                                placeholder="Image URL"
                                className="input input-bordered w-full"
                            />
                        </div>
                        <div className="flex gap-3">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Language</span>
                                </label>
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
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input
                                    type="number"
                                    name="price"
                                    // value={formData.price}
                                    // onChange={handleChange}
                                    placeholder="Price"
                                    className="input input-bordered w-full"
                                />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea
                                name="description"
                                // value={formData.description}
                                // onChange={handleChange}
                                placeholder="Description"
                                className="textarea textarea-bordered"
                            ></textarea>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Review</span>
                            </label>
                            <input
                                type="number"
                                name="review"
                                value={user.review}
                                readOnly
                                className="input input-bordered"
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
