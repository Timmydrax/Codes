import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import styles from "../../styles/landingcss/testimonials.module.css"; // Import your landing page styles here

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Patient",
    content:
      "CuraMap has completely changed how I get my medications. I can easily search for what I need, find a nearby pharmacy, and even pay online before picking up.",
    avatar:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Chronic Condition Patient",
    content:
      "As someone with multiple prescriptions, the convenience of uploading my prescriptions and seeing which pharmacies have my medications in stock has been invaluable.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
  },
  {
    id: 3,
    name: "David Chen",
    role: "Caregiver",
    content:
      "Managing medications for my elderly parent used to be stressful. With CuraMap, I can find their medications at nearby pharmacies and even pay online to make pickup easier.",
    avatar:
      "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
  },
  {
    id: 4,
    name: "Priya Patel",
    role: "New Parent",
    content:
      "When my child needed urgent medication late at night, CuraMap helped me find the nearest 24-hour pharmacy with the medication in stock. A true lifesaver!",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
  },
  {
    id: 5,
    name: "James Wilson",
    role: "Regular User",
    content:
      "The ability to see medication availability and pricing before heading to the pharmacy has saved me countless trips. I recommend CuraMap to everyone who takes regular medications.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const visibleTestimonials = 3;

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) =>
      prevIndex + 1 >= testimonials.length - (visibleTestimonials - 1)
        ? 0
        : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) =>
      prevIndex - 1 < 0
        ? testimonials.length - visibleTestimonials
        : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className={styles.testimonialsSection}>
      <div className={styles.container}>
        <h2 className="text-center text-healthmap-secondary mb-4">
          What Our Clients Say
        </h2>
        <p>
          Hear from people who have transformed their medication experience with
          CuraMap.
        </p>

        <div className={styles.innerChild1}>
          <div className={styles.innerChild2}>
            <div
              className={styles.innerChild3}
              style={{
                transform: `translateX(-${
                  activeIndex * (100 / visibleTestimonials)
                }%)`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className={styles.testimonials}>
                  <Card className={styles.card}>
                    <CardContent className={styles.cardContent}>
                      <div className={styles.content}>
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className={styles.avatar}
                        />
                        <div>
                          <h4>{testimonial.name}</h4>
                          <p>{testimonial.role}</p>
                        </div>
                      </div>
                      <p className={styles.cardText}>"{testimonial.content}"</p>
                      <div className={styles.stars}>
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={styles.star}
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.dots}>
            {testimonials
              .slice(0, testimonials.length - (visibleTestimonials - 1))
              .map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`${styles.testy} ${
                    activeIndex === index ? styles.active : styles.inactive
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
          </div>

          <div className={styles.buttonContainer1}>
            <Button
              onClick={prevTestimonial}
              size="icon"
              variant="ghost"
              className={styles.btn1}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
              <span className={styles.srOnly}>Previous</span>
            </Button>
          </div>

          <div className={styles.buttonContainer2}>
            <Button
              onClick={nextTestimonial}
              size="icon"
              variant="ghost"
              className={styles.btn1}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
              <span className={styles.srOnly}>Next</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
