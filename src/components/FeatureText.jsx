import { Link } from "react-router-dom";


const FeatureText = () => {
    return (
        <section className="relative  py-20 mt-20 ">
            <div className=" px-6 md:px-12 flex flex-col-reverse md:flex-row items-center">
                <div className="md:w-1/2 flex flex-col justify-center items-start space-y-6">
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight ">
                        Welcome to Your Dream Platform
                    </h2>
                    <p className="text-lg md:text-xl ">
                        Experience the future of interactions with our state-of-the-art features. Join us and embark on a journey towards excellence.
                    </p>
                </div>
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <img
                        src="https://www.learnfasthq.com/hubfs/learn-ga9a09e839_1920.jpeg#keepProtocol"
                        alt="Welcome illustration"
                        className="rounded-lg shadow-lg"
                    />
                </div>
            </div>
            <div className={`absolute inset-0 opacity-10 bg-[url('https://i0.wp.com/danceofbusiness.com/drivingir/wp-content/uploads/2010/08/learning.jpg')] bg-cover`}></div>
        </section>
    );
};

export default FeatureText;
