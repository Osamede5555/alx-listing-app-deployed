import React from 'react';
// 1. Import the Next.js Image component for performance optimization
import Image from 'next/image'; 

// 2. Define the exact structure of the expected data (replacing 'any')
interface BookingDetails {
  propertyName: string;
  startDate: string;
  totalNights: number;
  bookingFee: number;
  price: number;
  imageUrl: string; // Assuming you have an image URL field
}

// 3. Apply the new interface to the component props
const OrderSummary: React.FC<{ bookingDetails: BookingDetails }> = ({ bookingDetails }) => (
  <div className="bg-white p-6 shadow-md rounded-lg">
    <h2 className="text-xl font-semibold">Review Order Details</h2>
    <div className="flex items-center mt-4">
      {/* 4. Replace <img> with <Image /> and add required props (width, height, priority) */}
      <Image 
        src={bookingDetails.imageUrl || "https://example.com/property.jpg"} // Use the dynamic URL or fallback
        alt={bookingDetails.propertyName || "Property"} 
        width={128} // Equivalent to w-32 (128px)
        height={128} // Equivalent to h-32 (128px)
        className="object-cover rounded-md" 
        priority // Consider adding priority if this is above the fold
      />
      <div className="ml-4">
        <h3 className="text-lg font-semibold">{bookingDetails.propertyName}</h3>
        <p className="text-sm text-gray-500">4.76 (345 reviews)</p>
        <p className="text-sm text-gray-500">{bookingDetails.startDate} • {bookingDetails.totalNights} Nights</p>
      </div>
    </div>

    {/* Price Breakdown */}
    <div className="mt-6">
      <div className="flex justify-between">
        <p>Booking Fee</p>
        <p>${bookingDetails.bookingFee.toFixed(2)}</p>
      </div>
      <div className="flex justify-between mt-2">
        <p>Subtotal</p>
        <p>${bookingDetails.price.toFixed(2)}</p>
      </div>
      <div className="flex justify-between mt-2 font-semibold">
        <p>Grand Total</p>
        <p>${(bookingDetails.bookingFee + bookingDetails.price).toFixed(2)}</p>
      </div>
    </div>
  </div>
);

export default OrderSummary;