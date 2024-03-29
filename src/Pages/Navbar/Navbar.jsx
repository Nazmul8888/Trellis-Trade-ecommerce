
import { Link } from "react-router-dom";


const Navbar = () => {
 

    const navLinks = <>
    <li ><Link  to='/'>Home</Link></li>
    <li><Link to='/brands'>Brands</Link></li>
    <li><Link to='/product'>Product</Link></li>
    <li><Link to='/personalCare'>Personal Care</Link></li>
    
    
    </>
    return (
        <div>
   <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLinks}
        
      </ul>
    </div>
    <img className=" w-20 rounded-full" src="https://i.ibb.co/drDNg7G/25200658-7074375.jpg" alt="" />
    <a className="btn btn-ghost text-xl">TrellisTrade</a>
  </div>
  
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>
  
  <div className="navbar-end gap-5">
    <Link to='/preOrder'><a className="rounded-full bg-sky-600 px-6 py-2 text-white transition-all duration-300 hover:scale-90">Pre Order</a></Link>
  </div>
  <div className="flex-none">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg  xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item">8</span>
        </div>
      </div>
     <Link>

     <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
          <span className="font-bold text-lg">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>
     </Link>
    </div>
    </div>
</div>

{/* second */}





   


        </div>
    );
};

export default Navbar;