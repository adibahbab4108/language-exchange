import { Link, useNavigate } from "react-router-dom";


const NoDataAvailabe = () => {
    const navigate = useNavigate();
    return (
        <div className='min-h-screen mt-20 col-span-full '>
            <h1 className=' text-5xl text-center '> No Data Availabe</h1>
            <div className="flex justify-center">
                <Link to="/add-tutorials" className="btn btn-wide btn-warning mt-10 text-center text-lg ">Please Add </Link>

            </div>
        </div>
    );
};

export default NoDataAvailabe;