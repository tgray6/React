import { useParams } from "react-router-dom";

type name = {
  name: string;
};

export function ThankYouPage() {
  const { name } = useParams<name>();
  return (
    <div className="flex flex-col py-10 max-w-wmd mx-auto">
      <div className="bg-green-100 py-5 px-6 text-base-text-green-700">
        Thanks {name}, we will be in touch shortly.
      </div>
    </div>
  );
}
