import { useState } from "react";
import { faqData } from "./FAQData";

function FAQ() {

  const [selected, setSelected] = useState(null);

  const toggleQuestion = (index) => {

    if (selected === index) {
      setSelected(null);
    } else {
      setSelected(index);
    }
  };

  return (
    <div className="faq-section">

      <h2 className="section-title">Frequently Asked Questions</h2>

      {faqData.map((item, index) => (

        <div
          key={item.id}
          className="faq-item glass-card"
        >

          <div
            className="faq-question"
            onClick={() => toggleQuestion(index)}
          >
            <h3>{item.question}</h3>

            <span>
              {selected === index ? "−" : "+"}
            </span>

          </div>

          {selected === index && (

            <p className="faq-answer">
              {item.answer}
            </p>

          )}

        </div>

      ))}

    </div>
  );
}

export default FAQ;