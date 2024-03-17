import { useState } from "react";


const PreOrder = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        quantity: 1, // Default quantity
        comments: ''
      });
    
      // Handle form input changes
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      // Handle form submission
      const handleSubmit = (e) => {
        e.preventDefault();
        // Send preorder request with formData
        console.log('Preorder form submitted:', formData);
        // You can send the data to your backend or perform any other actions here
      };
    
    return (
        <div className=" bg-[#8C6A5D] py-10 ">
        <h2 className=" text-4xl font-sans  font-bold text-center text-purple-500 ">Product Preorder Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">Name:</label>
            <input  type="text" className=" border-2  " name="name" value={formData.name} onChange={handleChange} required />
          </div>
          
          <div className=" form-control">
            <label className=" label">Email:</label>
            <input type="email" className=" border" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className=" form-control">
            <label className="label">Phone Number:</label>
            <input type="tel" className=" border" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
          </div>
          <div className=" form-control">
            <label className="label">Quantity:</label>
            <input type="number" className=" border" name="quantity" value={formData.quantity} onChange={handleChange} min="1" required />
          </div>
          <div className=" form-control">
            <label className="label">Comments:</label>
            <textarea name="comments" className=" border" value={formData.comments} onChange={handleChange}></textarea>
          </div>
          <br />
         <div className=" form-control">
         <button className=" btn btn-accent" type="submit">Submit Preorder</button>
         </div>
        </form>
      </div>
    );
  };

export default PreOrder;