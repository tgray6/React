import { FieldError } from "react-hook-form";

interface Props {
  fieldError: FieldError | undefined;
}

//The component has a fieldError prop for the field error from React Hook Form. Nothing is rendered if there is no field error.
export function ValidationError({ fieldError }: Props) {
  if (!fieldError) {
    return null;
  }

  return (
    <div role="alert" className="text-red-500 text-xs mt-1">
      {fieldError.message}
    </div>
  );
}
