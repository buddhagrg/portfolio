import clsx from "clsx";
import { Badge } from "./ui/badge";

type Config = {
  isAvailable: boolean;
  status: string;
};
const statusConfig: Config = {
  isAvailable: true,
  status: "Open to Opportunities",
};

export const Availability = () => {
  const badgeClass = statusConfig.isAvailable
    ? "bg-green-100 text-green-800 border-green-200"
    : "bg-orange-100 text-orange-800 border-orange-200";
  const statusClass = statusConfig.isAvailable
    ? "bg-green-600"
    : "bg-orange-600";

  return (
    <div className="flex">
      <Badge variant="outline" className={badgeClass}>
        <div
          className={clsx(
            "w-2 h-2 rounded-full animate-pulse mr-2",
            statusClass
          )}
        />
        <div className="text-sm">{statusConfig.status}</div>
      </Badge>
    </div>
  );
};
