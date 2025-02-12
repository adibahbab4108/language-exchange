
const SectionTitle = ({ title="", subtitle="" }) => {
    return (
        <div className="mb-12">
            <h1 className='text-4xl font-bold text-center '>{title}</h1>
            <p>{subtitle}</p>
        </div>
    );
};

export default SectionTitle;