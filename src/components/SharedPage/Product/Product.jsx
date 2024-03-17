
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";


const Product = () => {

    const [product, setProduct] = useState();

    useEffect(()=>{

        fetch('product.json')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])



    return (
        <div>
            <div className=" grid grid-cols-4 gap-10 py-10">
                {
                    product?.map(item=><ProductCard key={product._id} item={item}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Product;