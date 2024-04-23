import React, { useState, useEffect, useRef } from 'react';

const Faq = () => {
  const faqData = [
    { question: 'What is this component for?', answer: 'This component displays a frequently asked questions (FAQ) section.' },
    { question: 'How do I use it?', answer: 'Import the FaqSection component and provide an array of questions and answers as props.' },
    { question: 'Is it customizable?', answer: 'Yes, you can customize the styling and functionality of this component according to your requirements.' },
    { question: 'Can I add more questions?', answer: 'Absolutely! Simply add more objects to the faqData array with your desired questions and answers.' },
    { question: 'How can I contribute?', answer: 'You can contribute by suggesting improvements, reporting bugs, or submitting pull requests on GitHub.' },
    { question: 'Is it customizable?', answer: 'Yes, you can customize the styling and functionality of this component according to your requirements.' },
    { question: 'Can I add more questions?', answer: 'Absolutely! Simply add more objects to the faqData array with your desired questions and answers.' },
    { question: 'How can I contribute?', answer: 'You can contribute by suggesting improvements, reporting bugs, or submitting pull requests on GitHub.' },
    // Add more question-answer objects here...
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const faqRef = useRef(null);

  // Slide-up animation when FAQ items become visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          } else {
            entry.target.classList.remove('animate');
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5, // Trigger when 50% of the FAQ item is visible
      }
    );

    document.querySelectorAll('.faq-item').forEach((item) => {
      observer.observe(item);
    });

    return () => {
      document.querySelectorAll('.faq-item').forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, []);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
        <h2 className="faq-title">FAQ</h2> {/* Title centered */}
        {faqData.map((item, index) => (
          <div key={index} className="faq-item container">
            <button className={`faq-question ${openIndex === index ? 'active' : ''}`} onClick={() => toggleAnswer(index)}>
              {item.question}
            </button>
            {openIndex === index && <div className="faq-answer">{item.answer}</div>}
          </div>
        ))}
    </div>
  );
};

export default Faq;
