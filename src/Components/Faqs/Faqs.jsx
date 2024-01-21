import { useState } from "react";
import { Parallax } from "react-parallax";

const Faqs = () => {
  // add your array of object data
  const array = [
    {
      number: 1,
      question: "How do I participate in a contest?",
      answer:
        " To participate, navigate to the contest page, click on the Join or Enter button, and follow the provided instructions. Make sure to read the contest rules and guidelines before submitting your entry.",
    },
    {
      number: 2,
      question: "Can I submit multiple entries for a single contest?",
      answer:
        "The submission rules may vary for each contest. Some contests allow multiple entries, while others may restrict participants to a single submission. Check the specific contest rules on the contest page for clarification.",
    },
    {
      number: 3,
      question: "How are contest winners determined?",
      answer:
        "Winners are typically chosen based on specific criteria outlined in the contest rules. This may include creativity, originality, adherence to guidelines, or community voting. Winners will be announced on the contest page, and prizes will be awarded accordingly.",
    },
    
    {
      number: 5,
      question: "Question: How do I claim my prize if I win a contest?",
      answer:
        " If you're selected as a winner, you'll be notified through the contact information provided during registration. Follow the instructions in the winner notification to claim your prize. This may involve providing additional information or completing a verification process.",
    },
  ];

  // toggle state and function
  const [isOpen, setIsOpen] = useState(null);
  const handleToggle = (idx) =>
    setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));
  return (
    <Parallax
      strength={500}
      bgImage="https://i.ibb.co/w7z6Knx/pngwing-com-23.png"
      renderLayer={() => (
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            blur: { min: 0, max: 5 },
            backgroundPosition: "fixed",
            transform: "translate(-50%, -50%)", // Center the content
            zIndex: 1, // Add a higher z-index if needed
          }}
          className="bg-opacity-30 bg-black"
        />
      )}
    >
      {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}
      <div className="absolute bg-black bg-opacity-75 inset-0 "></div>
      <div className="flex justify-center p-4 min-h-screen items-center">
        <div className=" max-w-[550px] rounded-lg py-20 space-y-6 cursor-pointer">
          {/* maping each accordion  */}
          {array.map((item) => (
            <div
              key={item?.number}
              onClick={() => handleToggle(item?.number)}
              className="flex items-center"
            >
              {/* the index div  */}
              <div className="w-16 h-16 bg-[#355E72] flex justify-center items-center text-white text-2xl font-semibold rounded-xl font-sans">
                <span>0{item?.number}</span>
              </div>
              <div className="w-10 h-[2px] bg-[#355E72] relative">
                <span className="w-3 h-3 bg-white absolute -left-2 -top-[5px] z-40 rounded-full border-2 border-[#355E72]"></span>
                <span className="bg-[#355E72] w-10 h-1"></span>
              </div>
              {/* main accordion div  */}
              <div>
                <div className="max-w-[450px] bg-sky-50 shadow-md border-t-[12px] p-3 border-[#355E72] relative">
                  <span className="h-0 w-0 border-b-[40px] border-b-transparent border-r-[40px] border-r-[#355E72] absolute top-0 right-0"></span>
                  <h1 className="text-[#355E72] text-xl text-center">
                    {item?.question}
                  </h1>
                </div>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600  ${
                    isOpen === item?.number
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className=" max-w-[450px] rounded-br-xl rounded-bl-xl bg-[#355E72] text-white p-6 text-center text-sm">
                      {item?.answer}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Parallax>
  );
};

export default Faqs;
