import { useState } from "react";

// THIS IS OUR SIMPLE FORM WITH A SINGLE INPUT FIELD
// IT DOES NOT CALL A SEPERATE ONCHANGE HANDLER FUNCTION, IT USES A SIMPLE INLINE ARROW FUNCTION INSTEAD
// export default function App() {
//   const [input, setInput] = useState("");

//   return (
//     <div>
//       <form>
//         <p>This is a simple input:</p>
//         <input type="text" onChange={(e) => setInput(e.target.value)} />
{
  /* every time the user types, the onChange will fire and save whatever they typed as input in state */
}
//         <p>You typed: {input}</p>
//       </form>
//     </div>
//   );
// }

export default function App() {
  const [input, setInput] = useState("");
  const [form, setForm] = useState({
    location: "",
    profession: "",
    nationality: "",
  });

  function handleChange(e) {
    setInput(e.target.value);
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log({ ...form, [e.target.name]: e.target.value });
  }
  // IN THIS HANDLER FUNCTION WE ARE SPREADING (MERGING) THE INITIAL EMPTY STRING VALUE OF THE FORM STATE, WITH THE NEW UPDATED VALUE WE TARGET WITH
  // [e.target.name]: e.target.value.
  // REMEMBER THAT IF THERE ARE MULTIPLE INSTANCES OF A PROPERTY IN THIS SPREAD(MERGE) THEN THE 'NEWEST' ONE 'WINS' AND IS SAVED INTO STATE.
  // BECAUSE [e.target.name] IS WRAPPED IN SQUARE BRACKETS, WE ARE DYNAMICALLY ASSIGNING VALUES TO DIFFERENT PROPERTIES BASED ON THE NAME OF THE SPECIFIC INPUT EMELEMENT IN THE FORM.

  return (
    <div>
      <form>
        <p>More complex inputs:</p>
        <input name="location" type="text" onChange={handleChange} />
        {/* every time the user types, the onChange will fire and save whatever they typed as input in state */}
        <input name="profession" type="text" onChange={handleChange} />
        <input name="nationality" type="text" onChange={handleChange} />
      </form>
    </div>
  );
}
