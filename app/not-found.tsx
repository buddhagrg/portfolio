import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-xs mx-auto pt-10">
      <h2 className="text-3xl font-bold">Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/" className="underline underline-offset-4">
        Return Home
      </Link>
    </div>
  );
}
