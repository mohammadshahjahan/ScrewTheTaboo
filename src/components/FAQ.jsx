import React from "react";
import DATA from "../faq.json";

const FAQ = () => {
  return (
    <div className="space-y-4 bg-black p-20">
      {DATA.map((e) => (
        <div
          key={e.id}
          className="border rounded bg-gray-800 p-4 hover:scale-105"
        >
          <div className="font-bold text-red-500">
            <span className="mr-2">Q{e.id})</span> <span>{e.question}</span>
          </div>
          <div className="mt-2">
            <span className="font-bold text-white">Answer: </span>
            <span className="text-white">{e.answer}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;