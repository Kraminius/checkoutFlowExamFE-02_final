// src/ShippingForm.jsx
import React, { useState } from 'react'; 

const ShippingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    addressLine1: '',  
    addressLine2: '', 
    city: '',
    state: '',
    zip: ''
  });

  const handleChange = (event) => {
    setFormData({
        ...formData,
        [event.target.name]: event.target.value
    });
  };

  // We'll come back to handleSubmit later
  const handleSubmit = (event) => {
    event.preventDefault(); 
    // Logic to handle form submission 
  };

  return (
    <div className="shipping-form-container">
      <h2>Shipping Details</h2>
      <form onSubmit={handleSubmit}> 
          <form onSubmit={handleSubmit}>
    <div className="form-group"> 
      <label htmlFor="name">Full Name:</label>
      <input 
        type="text" 
        id="name" 
        name="name" 
        value={formData.name}
        onChange={handleChange} 
        required 
      />
    </div>
    {/* Add similar structures for Address  */}
   </form>

      </form>
    </div>
  );
};

export default ShippingForm;
