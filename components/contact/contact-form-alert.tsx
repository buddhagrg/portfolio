import { CheckCircle, CircleX } from "lucide-react";
import type { FormState } from "@/types";

export const ContactFormAlert = ({
  success,
  message,
}: Pick<FormState, "message" | "success">) => {
  const bg = success ? "bg-green-100" : "bg-red-100";
  const color = `text-gray-700`;
  const label = success ? "Success" : "Error";
  const iconClass = `size-6 md:size-5`;

  return (
    <div className={`p-2 border rounded-md flex gap-2 ${bg}`}>
      <div className="mt-1">
        {success ? (
          <CheckCircle className={iconClass} />
        ) : (
          <CircleX className={iconClass} />
        )}
      </div>

      <div>
        <h6 className={`text-lg font-medium  ${color}`}>{label}</h6>
        <p className={color}>{message}</p>
      </div>
    </div>
  );
};
