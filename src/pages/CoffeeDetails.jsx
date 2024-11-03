import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const CoffeeDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const [coffee, setCoffee] = useState({})

    useEffect(() => {
        const singleData = data.find(coffee => coffee.id == id)
        setCoffee(singleData)
    }, [data, id])
    return (
        <div className="space-y-1 lg:space-y-3">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-thin">{coffee.description}</h1>
            <img className="rounded-2xl w-[1000px] lg:h-[600px] object-contain " src={coffee.image} alt="coffee" />
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-thin">{coffee.name}</h1>
            <br />
            <p className="text-gray-600">Popularity: {coffee.popularity}</p>
            <p className="text-gray-600">Category: {coffee.category}</p>
            <p className="text-gray-600">Type: {coffee.type}</p>
            <p className="text-gray-600">Origin: {coffee.origin}</p>
            <p className="text-gray-600">Rating: {coffee.rating}</p>
            <br />
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-thin">Making Process :</h1>
            <p className="text-gray-600">{coffee.making_process}</p>
            <br />
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-thin">Ingredients :</h1>
            <ul className="text-gray-600">
                {/* {coffee?.ingredients?.[0] && <li>{coffee.ingredients[0]}</li>}
                {coffee?.ingredients?.[1] && <li>{coffee.ingredients[1]}</li>} */}
                {coffee.ingredients?.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <br />
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-thin">Nutrition :</h1>
            <ul className="text-gray-600">
                <li>1. Calories: {coffee?.nutrition_info?.calories}</li>
                <li>2. Fat: {coffee?.nutrition_info?.fat}</li>
                <li>3. Carbohydrates: {coffee?.nutrition_info?.carbohydrates}</li>
                <li>4. Protein: {coffee?.nutrition_info?.protein}</li>

            </ul>
        </div>
    );
};

export default CoffeeDetails;