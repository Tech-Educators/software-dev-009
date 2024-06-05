"use client";
import { formAction } from "@/lib/actions";
import { useRef } from "react";

export default function Home() {
  // useRef gives us an object with a "current" property
  // like useState, what we put in the brackets is the initial value of our variable
  // so ref = { current: null }
  const formRef = useRef(null);

  // putting ref={formRef} on our form tag sets formRef to be the DOM node of our form
  // meaning, when we update the inputs on the form, the DOM node updates
  // and therefore formRef is updating

  // so after we submit the form, we set formRef back to null
  // thereby making the form empty again!

  return (
    <div>
      <h1>Form that resets</h1>
      <form
        ref={formRef}
        action={(formData) => {
          formAction(formData);
          formRef.current.reset(); // current is our DOM node, which means it has a reset method (to reset the form)
        }}
      >
        <input name="message" placeholder="Your message" />
        <button>Submit</button>
      </form>
    </div>
  );
}
