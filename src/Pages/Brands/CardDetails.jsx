const CardDetails = () => {
  return (
    <div>
      <div>
        <img
          className=" ml-10 rounded-badge"
          src="https://i.ibb.co/y6cWG4X/New-zeland-dairy.png"
          alt=""
        />
      </div>

      <div className=" py-10">
        <h1 className=" text-4xl text-red-500 font-bold text-center py-6">
          About brand
        </h1>
        <h6 className=" text-center">
          New Zealand Dairy, a pioneering company with 27 years of success,
          introduces therapeutic brands in their product range, featuring a
          diverse portfolio and nearly <br /> 250 distributors nationwide.
          Expanding into the Culinary and Snacks industry since 2014, the
          company is poised for continued growth in the dynamic
          consumer-packaged goods space.
        </h6>
      </div>

      <div className=" flex justify-evenly py-10 ">
        <div className=" bg-red-400 w-96 rounded-badge">
          <div className="stat">
          <img className=" w-[68px]" src="https://priyoshopretail.com/wp-content/uploads/2023/11/category.png" alt="" />
            <div className="text-2xl font-bold text-center">SKUs</div>
            <div className="text-2xl font-bold text-center">47+</div>
            <div className=" text-center">
           
              
            </div>
          </div>
        </div>
        <div className=" bg-[#9AD0C2] w-96 rounded-badge  ">
          <div className="stat">
          <img className=" w-[68px]" src="https://priyoshopretail.com/wp-content/uploads/2023/11/Frame-925.png" alt="" />
            <div className=" text-2xl font-bold text-center">Total Category</div>
            <div className="text-2xl font-bold text-center ">5</div>
            <div className="stat-actions text-center">
              
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
