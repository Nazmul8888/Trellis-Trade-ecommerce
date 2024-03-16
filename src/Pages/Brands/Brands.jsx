import { useEffect, useState } from "react";
import BrandsCard from "./BrandsCard";


const Brands = () => {

    const [brandsCard, setBrandsCard] = useState();


    useEffect(()=>{

        fetch('brand.json')
        .then(res=>res.json())
        .then(data=>setBrandsCard(data))


    },[])
    return (
        <div>

            <div>
               <img className=" ml-10 rounded-badge" src="https://i.ibb.co/FxVDNG5/brand-banner.jpg" alt="" />
            </div>
            <br />
            <br />

            <h1 className=" text-3xl font-bold text-center text-red-500">All Brands</h1>
            
            <div className=" grid grid-cols-4  gap-10 py-10">

                

                {
                    brandsCard?.map(item=><BrandsCard key={brandsCard._id} item={item}></BrandsCard>)
                }
            </div>
        </div>
    );
};

export default Brands;