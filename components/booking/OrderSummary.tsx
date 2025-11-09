// components/booking/OrderSummary.tsx (Ensure this code is saved)
import React from 'react';
import Image from 'next/image'; // Required to fix the <img> warning

// FIX: Replace 'any' with a defined interface
interface BookingDetails {
  propertyName: string;
  startDate: string;
  totalNights: number;
  bookingFee: number;
  price: number;
  imageUrl?: string; 
}

// FIX: Apply the interface to the component props
const OrderSummary: React.FC<{ bookingDetails: BookingDetails }> = ({ bookingDetails }) => (
  // ... component implementation using <Image />
  <div className="bg-white p-6 shadow-md rounded-lg">
    <h2 className="text-xl font-semibold">Review Order Details</h2>
    <div className="flex items-center mt-4">
      {/* FIX: Use <Image /> to fix the <img> warning */}
      <Image 
        src={bookingDetails.imageUrl || "https://example.com/property.jpg"} 
        alt={bookingDetails.propertyName || "Property"} 
        width={128}
        height={128} 
        className="object-cover rounded-md" 
      />
      {/* ... rest of the component */}
    </div>
    {/* ... rest of the component */}
  </div>
);

export default OrderSummary;