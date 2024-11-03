import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";
import Heading from "../components/Heading";


const Coffees = () => {
    const data = useLoaderData();
    return (
        <>
        <Heading title={'Here is all our available Coffees'} subtitle={'Choose your desired category to browse through specific coffees that fit in your taste'}></Heading>

        <div className="flex justify-between items-center my-12 px-1">
            <div>
                <h1 className="text-2xl lg:text-3xl font-thin">Sort Coffee's by Popularity & Rating</h1>
            </div>
            <div className="w-[155px] md:w-[280px] md:space-x-1">
                <button className="btn btn-warning my-2">Sort By Popularity</button>
                <button className="btn btn-warning mb-2 ">Sort By Rating</button>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-8">
            {
                data.map(coffee => <Card key={coffee.id} coffee={coffee}></Card>)
            }
        </div>
        </>
    );
};

export default Coffees;