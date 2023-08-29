import { useNavigate } from "react-router-dom";
import { useForm, FieldError } from "react-hook-form";
import { ValidationError } from "./ValidationError";
import ClipLoader from "react-spinners/ClipLoader";

interface Contact {
  name: string;
  email: string;
  reason: string;
  notes: string;
}

export function ContactPage() {
  const {
    register,
    handleSubmit,
    //Destructure the errors state from useForm, and any other state we want to desctructure, like "isSubmitting"
    formState: {
      /*errors will contain validation errors if there are any*/
      errors,
      isSubmitting,
    },
  } = useForm<Contact>({
    mode: "onBlur",
    reValidateMode: "onBlur",
  });

  const navigate = useNavigate();

  async function onSubmit(contact: Contact) {
    console.log("Submitted details:", contact);
    //threw in the await so I could test the while (isSubmmitting) below
    await new Promise((f) => setTimeout(f, 5000));
    navigate(`/thank-you/${contact.name}`);
  }

  //If there is no field error, aka input field is valid requirement, then it will always be undefined, otherwise, we will have a FieldError
  function getEditorStyle(fieldError: FieldError | undefined) {
    return fieldError ? "border-red-500" : "";
  }

  const fieldStyle = "flex flex-col mb-2";

  return (
    <div className="flex flex-col py-10 max-w-md mx-auto">
      <h2 className="text-3xl font-bold underline mb-3">Contact Us</h2>
      <p className="mb-4">
        If you enter your details we'll get back to you ASAP.
      </p>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div className={fieldStyle}>
          <label htmlFor="name">Your Name</label>
          <input
            className={getEditorStyle(errors.name)}
            type="text"
            id="name"
            {...register("name", {
              required: "You must enter your NAME yah tard",
            })}
          />
          {/* {errors.name && (
            <div role="alert" className="text-red-500 text-xs mt-1">
              {errors.name.message}
            </div>
          )} */}
          <ValidationError fieldError={errors.name} />
        </div>

        <div className={fieldStyle}>
          <label htmlFor="email">Your Email Address</label>
          <input
            className={getEditorStyle(errors.email)}
            type="text"
            id="email"
            {...register("email", {
              required: "You must enter your EMAIL yah tard",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Entered value does not match email format",
              },
            })}
          />
          <ValidationError fieldError={errors.email} />
        </div>

        <div className={fieldStyle}>
          <label htmlFor="reason">Reason you need to contact us</label>
          <select
            className={getEditorStyle(errors.reason)}
            id="reason"
            {...register("reason", {
              required: "You must enter your REASON yah tard",
            })}
          >
            <option value=""></option>
            <option value="Support">Support</option>
            <option value="Feedback">Feedback</option>
            <option value="Other">Other</option>
          </select>
          <ValidationError fieldError={errors.reason} />
        </div>

        <div className={fieldStyle}>
          <label htmlFor="notes">Additional Notes</label>
          <textarea id="notes" {...register("notes")} />
        </div>

        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`mt-2 h-10 px-6 font-semibold bg-black text-white ${
              isSubmitting ? "opacity-25" : "opacity-100"
            }`}
          >
            Submit
          </button>
        </div>
        {isSubmitting ? (
          <ClipLoader
            color={"#8401ff"}
            size={100}
            aria-label="Loading Spinner"
            speedMultiplier={0.5}
          />
        ) : (
          ""
        )}
      </form>
    </div>
  );
}
