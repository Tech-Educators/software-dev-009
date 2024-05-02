import { useState } from "react";

export default function ContestantForm() {
  const [form, setForm] = useState({ name: "", age: 0 });

  function handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:8080/contestant", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add a new contestant</h3>
      <p>
        Tim is very naughty for not putting labels on this form. Do not be like
        Tim.
      </p>
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input
        name="age"
        type="number"
        placeholder="Age"
        onChange={handleChange}
      />
      <button>Add Contestant</button>
    </form>
  );
}
