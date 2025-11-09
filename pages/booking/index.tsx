// pages/booking/index.tsx
import axios from "axios";
import { useState } from "react";

export default function BookingForm() {
  // ... (formData state remains correct)
  const [formData] = useState({ 
    // ... form fields
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const _response = await axios.post("/api/bookings", formData); // FIX 2 is applied here
      alert("Booking confirmed!");
    } catch (_error) { // <-- FIX 3: Changed 'error' to '_error' to silence the unused variable warning
      setError("Failed to submit booking.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* ... rest of the form */}
    </form>
  );
}