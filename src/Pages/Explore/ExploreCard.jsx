import { Link } from "react-router-dom";


const ExploreCard = ({item}) => {
    const {image} = item;
    return (
       <Link to='/checkout'>
        <div>
            <div className="card  w-60 ">
  <figure className="px-10 pt-10">
    <img   src={image} alt="Shoes" className=" rounded-full " />
  </figure>
  <div className="card-body items-center text-center">

    <div >
      <button className=" underline">Buy Now</button>



    </div>
  </div>
</div>
        </div>
       </Link>
    );
};

export default ExploreCard;