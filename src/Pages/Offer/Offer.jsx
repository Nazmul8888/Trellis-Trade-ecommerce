
 import img from '../../assets/image/$_57.jpg'


const Offer = () => {
    return (
        <div className=' bg-[#f7f7f7] rounded-badge'>
            <div className=' flex justify-evenly pt-10'>
                <div>
                    <br />
                    <br />
                    <h1 className=' text-4xl  font-bold'>Luxury <br />  accessories,<br /> savings you’ ll love</h1>
                    <br />
                    <br />
                    <p>Save 15%* now on luxury watches, jewelry and handbags.</p>
                    <br />
                    <br />
                    <button className=' btn btn-accent btn-wide'>Code LUXDEALS15</button>
                </div>
                <div>
                    <img className=' w-[960px]' src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Offer;