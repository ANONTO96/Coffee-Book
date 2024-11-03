

const Heading = ({title, subtitle}) => {
    return (
        <div className="flex flex-col w-full justify-center items-center my-10">
            <h1 className="text-xl md:text-2xl lg:text-4xl font-thin mb-4">{title}</h1>
            <p className="text-base md:text-lg text-gray-600 text-center font-thin">{subtitle}</p>
        </div>
    );
};

export default Heading;