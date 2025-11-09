import axios from "axios";
import { useState, useEffect } from "react";

// 1. Define the type/interface for the props
interface ReviewSectionProps {
  propertyId: string; // Assuming propertyId is a string
}

// 2. Apply the type to the component's props (Line 4 fix)
const ReviewSection = ({ propertyId }: ReviewSectionProps) => { // <-- FIX IS HERE
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  // ... rest of the code
};

export default ReviewSection;