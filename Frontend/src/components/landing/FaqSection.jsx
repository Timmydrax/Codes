import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import styles from "../../styles/landingcss/faq.module.css"; // Import your landing page styles here

const FaqSection = () => {
  const faqs = [
    {
      question: "What does CuraMap do?",
      answer:
        "CuraMap is a platform that connects patients with pharmacies, allowing you to find, compare, and access medications at the best prices. We help you locate nearby pharmacies with your medications in stock, compare prices, and even transfer prescriptions.",
    },
    {
      question: "How does CuraMap ensure the security of my information?",
      answer:
        "We employ industry-leading encryption and security protocols to protect your personal and health information. All data is encrypted both in transit and at rest, and we comply with all relevant healthcare privacy regulations including HIPAA.",
    },
    {
      question: "Is my data safe and confidential?",
      answer:
        "Absolutely. Protecting your privacy is our top priority. We never sell your personal data and only share necessary prescription information with your chosen pharmacy. Our platform is fully HIPAA-compliant and undergoes regular security audits.",
    },
    {
      question: "Can I order my medications for delivery?",
      answer:
        "Yes! Many of our partner pharmacies offer delivery services. When searching for medications, you can filter results to show pharmacies that offer delivery, along with estimated delivery times and any associated fees.",
    },
    {
      question: "How do I transfer my prescriptions using CuraMap?",
      answer:
        "Transferring prescriptions is simple. After creating an account, you can select the prescriptions you want to transfer and your preferred pharmacy. We handle the communication between pharmacies, and you'll receive notifications throughout the process.",
    },
    {
      question: "Is there a fee to use CuraMap?",
      answer:
        "CuraMap's basic services are completely free for patients. We make our revenue through our partnerships with pharmacies. Premium features, such as priority service and medication management tools, are available through our subscription plans.",
    },
  ];

  return (
    <section id="faq" className={styles.faqSection}>
      <div className={styles.container}>
        <h2>Frequently Asked Questions</h2>

        <div className={styles.faqWrapper}>
          <Accordion type="single" collapsible className={styles.faq}>
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className={styles.faqItem}
              >
                <AccordionTrigger className={styles.question}>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className={styles.answer}>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className={styles.footer}>
          <p>Can't find what you're looking for?</p>
          <a href="#contact">
            Contact our support team
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
