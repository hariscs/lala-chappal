import { Check } from "lucide-react";

export default function Success() {
  return (
    <div className="flex items-center justify-center bg-white shadow-md rounded-md w-[400px] mx-auto mt-4 p-4 leading-tight">
      <div className="flex items-center flex-col space-y-4">
        <div className="bg-green-600 rounded-full h-[50px] w-[50px] flex items-center justify-center">
          <Check color="white" />
        </div>

        <h2 className="text-center font-semibold">Purchase Success!</h2>

        <p className="text-center font-semibold">
          Thank you for purchasing our chappals. We hope to see you again soon
        </p>
      </div>
    </div>
  );
}
