import React, { useState, useRef, useEffect } from 'react';

const Faq = ({ question, answer1, answer2 }) => {
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState('0px');

  const toggleAnswer = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (open) {
      // Set the max height to the content's scrollHeight for smooth transition
      setMaxHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      // Collapse the content by setting max-height to 0
      setMaxHeight('0px');
    }
  }, [open]);

  return (
    <div className="w-full max-w-[1200px] my-[5px] mx-auto">
      <h3 className={`transition-[cubic-bezier(0.5,0,0.1,1)] bg-[#414141]`}>
        <button
          onClick={toggleAnswer}
          className="flex justify-between w-full transition-[cubic-bezier(0.5,0,0.1,1)] bg-[#414141] items-center p-[15px] outline-none text-[1.2rem]"
        >
          {question}
          <svg
            className={`transition-transform duration-300 ${open ? '-rotate-45' : 'rotate-0'}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            role="img"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11 11V2H13V11H22V13H13V22H11V13H2V11H11Z"
              fill="currentColor"
            ></path>
          </svg>
        </button>
      </h3>
      <div
        ref={contentRef}
        className="overflow-hidden transition-[max-height] duration-500 ease-[cubic-bezier(0.5,0,0.1,1)]"
        style={{ "maxHeight":   maxHeight }}
      >
        <div className="p-6 text-left bg-[#2d2d2d] text-white">
          <span>{answer1}</span>
          {answer2 && (
            <>
              <br />
              <br />
              <span>{answer2}</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Faq;
