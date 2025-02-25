import { useState } from "react";

const faqs = [
  { question: "What is The Uniques?", answer: "The Uniques is a community focused on innovation and collaboration in various fields." },
  { question: "How does The Uniques work?", answer: "We bring together talented individuals to work on impactful projects and initiatives." },
  { question: "Do I need experience to join?", answer: "No, we welcome everyone, from beginners to professionals, who are passionate about learning and growing." },
  { question: "Is there any membership fee?", answer: "No, joining The Uniques is completely free and open to all." },
  { question: "How can I contribute?", answer: "You can contribute by sharing your skills, collaborating on projects, and participating in events." },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-white py-12 overflow-x-hidden">
      <div className="max-w-screen-xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-red-500 mb-6">FAQS</h2>

        {/* FAQ List */}
        <div className="border-t border-gray-300">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300">
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-4 flex justify-between items-center font-medium text-black hover:bg-gray-100 transition"
              >
                <span>{faq.question}</span>
                <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="bg-red-500 text-red px-6 py-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;