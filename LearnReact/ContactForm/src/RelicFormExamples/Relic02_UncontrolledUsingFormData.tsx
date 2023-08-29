//field values aren’t controlled by useState anymore. Instead, native browser features are used to obtain field values, look below at the FormData method.
import { FormEvent } from "react";

interface Contact {
  name: string;
  email: string;
  reason: string;
  notes: string;
}

export function ContactPage() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    //Form data gets all the information from the input fields based on their "name" attribute. We no longer need to store and set the values into a useState anymore with this method. ALSO, we no longer render the input field every single time we type, since we do not need to use an onChange event for each input field. So now, when we submit, we just get the values once.
    const formData = new FormData(e.currentTarget);
    const contact = {
      name: formData.get("name"),
      email: formData.get("email"),
      reason: formData.get("reason"),
      notes: formData.get("notes"),
    } as Contact;

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
          <input type="text" id="name" name="name" />
        </div>

        <div className={fieldStyle}>
          <label htmlFor="email">Your Email Address</label>
          <input type="text" id="email" name="email" />
        </div>

        <div className={fieldStyle}>
          <label htmlFor="reason">Reason you need to contact us</label>
          <select id="reason" name="reason">
            <option value=""></option>
            <option value="Support">Support</option>
            <option value="Feedback">Feedback</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className={fieldStyle}>
          <label htmlFor="notes">Additional Notes</label>
          <textarea id="notes" name="notes" />
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
