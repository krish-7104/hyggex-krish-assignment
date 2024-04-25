import React, { useState } from "react";
import Accordian from "./Accordian";

const Faq = () => {
  const [open, setOpen] = useState(0);
  return (
    <div className="mb-40 mt-20">
      <p className="md:w-full w-[90%] mx-auto text-transparent font-bold bg-gradient-to-b from-[#06286E] to-[#164EC0] bg-clip-text mt-10 text-3xl">
        FAQ
      </p>
      <div className="mt-5 md:w-[70%] mx-auto md:mx-0 w-[90%]">
        <Accordian
          index={1}
          setOpen={setOpen}
          open={open}
          title={"Can education flashcards be used for all age groups?"}
          description={
            "Yes, education flashcards can be adapted for use by all age groups, from young children to adults, depending on the content and complexity of the information presented on the flashcards."
          }
        />
        <Accordian
          index={2}
          setOpen={setOpen}
          open={open}
          title={"How do education flashcards work?"}
          description={
            "Education flashcards typically feature a question or prompt on one side and the corresponding answer or information on the other side. They work by presenting information in a concise and easily digestible format, facilitating active recall and reinforcing learning through repetition."
          }
        />
        <Accordian
          index={3}
          setOpen={setOpen}
          open={open}
          title={"Can education flashcards be used for test preparation?"}
          description={
            "Yes, education flashcards can be effectively used for test preparation."
          }
        />
      </div>
    </div>
  );
};

export default Faq;
