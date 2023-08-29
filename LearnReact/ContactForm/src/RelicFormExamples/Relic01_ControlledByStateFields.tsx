//The key takeaway from this section is that controlling field values with the state can lead to performance problems(the form loads every single time we type). Having to bind the state to each field also feels a bit repetitive.

import { useState, FormEvent } from "react";

interface Contact {
  name: string;
  email: string;
  reason: string;
  notes: string;
}

export function ContactPage() {
  const [contact, setContact] = useState<Contact>({
    name: "",
    email: "",
    reason: "",
    notes: "",
  });

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("Submitted details:", contact);
  }

  const fieldStyle = "flex flex-col mb-2";

  return (
    <div className="flex flex-col py-10 max-w-md mx-auto">
      <h2 className="text-3xl font-bold underline mb-3">Contact Us</h2>
      <p className="mb-4">
        If you enter your details we'll get back to you ASAP.
      </p>
      <form onSubmit={handleSubmit}>
        <div className={fieldStyle}>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            value={contact.name}
            onChange={(e) => setContact({ ...contact, name: e.target.value })}
          />
        </div>

        <div className={fieldStyle}>
          <label htmlFor="email">Your Email Address</label>
          <input
            type="text"
            id="email"
            value={contact.email}
            onChange={(e) => setContact({ ...contact, email: e.target.value })}
          />
        </div>

        <div className={fieldStyle}>
          <label htmlFor="reason">Reason you need to contact us</label>
          <select
            id="reason"
            value={contact.reason}
            onChange={(e) => setContact({ ...contact, reason: e.target.value })}
          >
            <option value=""></option>
            <option value="Support">Support</option>
            <option value="Feedback">Feedback</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className={fieldStyle}>
          <label htmlFor="notes">Additional Notes</label>
          <textarea
            id="notes"
            value={contact.notes}
            onChange={(e) => setContact({ ...contact, notes: e.target.value })}
          />
        </div>

        <div>
          <button
            type="submit"
            className="mt-2 h-10 px-6 font-semibold bg-black text-white"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
