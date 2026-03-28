import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6">
      <h1 className="mb-2 text-6xl font-extrabold text-primary/20">404</h1>
      <p className="mb-6 text-lg text-muted-foreground">This page doesn't exist.</p>
      <Link
        href="/"
        className="inline-flex h-10 items-center rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground transition-all hover:brightness-110"
      >
        Back to Home
      </Link>
    </div>
  );
}
