import { Link } from "react-router-dom";


const BrandsCard = ({item}) => {
    const {image} = item;
    return (
        <div>
   <Link to='/CardDetails'>

   <div className="card w-80 bg-base-100  rounded-full ">
  <figure className="">
    <img src={image} alt="Shoes" className="rounded-xl" />
  </figure>
  
</div>
   </Link>
        </div>
    );
};

export default BrandsCard;