import React, { useState } from "react";
import "../styles/faq.css";
import { Plus, Minus, ChevronLeft, ChevronRight } from "lucide-react";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const faqs = [
    {
      question: "How many team members do I need?",
      answer:
        "You cannot partcipate individually . You must participate in a Team of minimum of 2 members and maximum of 4 members ",
    },
    {
      question: "Will the hackathon be in person or online?",
      answer: "Yes , it a 36hr long in person Hackathon .",
    },
    {
      question: "How much are the participation fees?",
      answer: "There are no participation fees for the Hackathon .",
    },
    {
      question: "What are the prerequisites to participate in GeekHacks 1.0 ?",
      answer:
        "To participate, you must be a student or a working professional in the technology industry. No prior hackathon experience is required.",
    },
    {
      question: "How do I register?",
      answer:
        "You can register for the hackathon from our website. The registration deadline is not decided yet",
    },
    {
      question: "What is the venue for GeekHacks 1.0 ?",
      answer: "The hackathon will be held at the Techno Main Salt Lake Campus",
    },
    {
      question:
        "Is food and accommodation provided free of charge, or are there any associated costs?",
      answer:
        "Food and accommodation will be provided free of charge for all participants.",
    },
  ];

  return (
    <div className="faq-container">
      <h1 className="faq-title">
        Frequently Asked <span className="text-purple-600">Questions</span>
      </h1>
      <div className="faq-items">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div
              className="faq-question flex justify-between items-center "
              onClick={() => toggleAnswer(index)}
            >
              <h3>{faq.question}</h3>
              <div className="faq-icons flex items-center gap-2">
                {openIndex === index ? (
                  <>
                    <ChevronLeft color="yellow" strokeWidth={2} />
                    <Minus
                      strokeWidth={2}
                      color="yellow"
                      className="faq-icon"
                    />
                    <ChevronRight color="yellow" strokeWidth={2} />
                  </>
                ) : (
                  <>
                    <ChevronLeft color="yellow" strokeWidth={2} />
                    <Plus strokeWidth={2} color="yellow" className="faq-icon" />
                    <ChevronRight color="yellow" strokeWidth={2} />
                  </>
                )}
              </div>
            </div>
            {openIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
