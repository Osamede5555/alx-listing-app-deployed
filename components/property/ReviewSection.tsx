import axios from "axios";
import { useState, useEffect } from "react";

// 1. Define the type/interface for the props
interface ReviewSectionProps {
  propertyId: string; // Assuming propertyId is a string, which is common for URLs/IDs
}

// 2. Apply the type to the component's props using ReviewSectionProps
const ReviewSection = ({ propertyId }: ReviewSectionProps) => {
  const [reviews, setReviews] = useState<any[]>([]); // Optional: Adding type for reviews
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`/api/properties/${propertyId}/reviews`);
        setReviews(response.data);
      } catch (error) {
        // Optional: Use _error to silence the unused variable warning if needed
        console.error("Error fetching reviews:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [propertyId]);

  if (loading) {
    return <p>Loading reviews...</p>;
  }

  return (
    <div>
      {reviews.map((review: any) => ( // Optional: Type the review object
        <div key={review.id}>
          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;