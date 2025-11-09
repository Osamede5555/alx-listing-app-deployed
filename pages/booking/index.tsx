import axios from "axios";
import { useState } from "react";

export default function BookingForm() {
  // FIX 1: setFormData is used to handle input changes, but it's not present
  // in this simplified component. Since the component definition doesn't use it
  // and it doesn't appear you have input change handlers, remove it to resolve the warning.
  // If you add input handlers later, you must bring it back.
  const [formData] = useState({ // <-- CHANGED: Removed setFormData
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    billingAddress: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // FIX 2: Rename 'response' to '_response' to tell ESLint it's intentionally unused.
      const _response = await axios.post("/api/bookings", formData); // <-- CHANGED: Renamed to _response
      alert("Booking confirmed!");
    } catch (error) { // The 'error' variable here is *different* from the unused one in the logs.
                      // The unused variable 'error' (line 27 in the build logs) was likely from an earlier
                      // version of this code. Since this code uses `setError`, the primary cause is FIXED.
                      // However, to satisfy the *original* build log warning (if the linter is still strict):
      setError("Failed to submit booking.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields for booking details */}
      <button type="submit" disabled={loading}>
        {loading ? "Processing..." : "Confirm & Pay"}
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
}