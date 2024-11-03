import { Link } from "react-router-dom";


const Card = ({ coffee }) => {
    const {name, image, category, origin, type, id, rating, popularity} = coffee
    return (
        <div className="card card-compact bg-base-100 w-96 shadow-xl h-[500px]">
            <Link to='/coffees'>
            <figure className="h-[55%] rounded-t-2xl">
                <img className="h-[300px] object-cover"
                    src={image}
                    alt="coffee" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-xl">{name}</h2>
                <p>Category: {category}</p>
                <p>Type: {type}</p>
                <p>Origin: {origin}</p>
                <p>Rating: {rating}</p>
                <p>Popular: {popularity}</p>
            </div>
            </Link>
        </div>
    );
};

export default Card;