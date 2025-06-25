import { Availability } from "../availability";

export const CurrentStatus = () => {
  return (
    <div className="flex gap-3 items-center">
      <strong className="font-medium">Current Status:</strong> <Availability />
    </div>
  );
};
