import React from 'react';

const CheckoutPage = () => {
    return (
        <div style={{ padding: '20px' }}>
            <h1>Checkout</h1>
            <div style={{ margin: '20px 0', borderBottom: '1px solid #ccc' }}>
                <h2>Product Summary</h2>
                {/* Replace with actual product data */}
                <p>Product Name: Example Product</p>
                <p>Price: $99</p>
                <p>Quantity: 1</p>
            </div>
            <div style={{ margin: '20px 0', borderBottom: '1px solid #ccc' }}>
                <h2>User Information</h2>
                <form>
                    <input type="text" placeholder="Full Name" style={{ margin: '10px 0', padding: '10px', width: '100%' }} />
                    <input type="text" placeholder="Address" style={{ margin: '10px 0', padding: '10px', width: '100%' }} />
                    <input type="email" placeholder="Email" style={{ margin: '10px 0', padding: '10px', width: '100%' }} />
                    {/* Add more fields as necessary */}
                </form>
            </div>
            <div style={{ margin: '20px 0' }}>
                <h2>Payment</h2>
                {/* Payment integration or information */}
                <p>Payment Gateway Integration Placeholder</p>
            </div>
            <button style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                Submit Order
            </button>
        </div>
    );
};

export default CheckoutPage;
