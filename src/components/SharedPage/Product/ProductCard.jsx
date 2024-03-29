import { Link } from "react-router-dom";


const ProductCard = ({item}) => {

    const {title, price, description, category,image, rating} = item;
    return (
        <div>
           <div className="max-[350px] md:w-[350px] bg-slate-100/70 px-10 py-8 mx-auto rounded-2xl space-y-6 shadow-md">
            {/* Card Image */}
                <img className="w-[350px] h-[190px] bg-gray-400 rounded-2xl" src={image} alt="card navigate ui" />
                {/* Card Heading */}
                <div className="space-y-2">
                    <h2 className="text-slate-800 font-medium md:text-xl sm:text-lg ">{title}</h2>
                    {/* rating  */}
                    <div className="flex gap-1">
                        {[...Array(5)].map((_, index) => (
                            <svg key={index} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#1E293B" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                        ))}
                    </div>
                </div>
                {/* Price and action button */}
               <Link to='/check'>
               <div className="mt-5 flex justify-between items-center font-medium">
                    <h2 className="md:text-xl text-gray-800">${price}</h2>
                    <button className="bg-slate-700 text-white px-6 py-2 rounded-lg font-semibold md:text-base sm:text-sm text-[12px] hover:bg-slate-900">Add to Cart</button>
                </div>
               </Link>
            </div>
  
        </div>
    );
};

export default ProductCard;