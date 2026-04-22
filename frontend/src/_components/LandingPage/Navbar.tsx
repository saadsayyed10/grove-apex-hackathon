import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/react";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center px-8 py-4 border-b">
      <h1 className="font-semibold text-lg">Grove Apex</h1>

      <div className="hidden md:flex gap-6 text-sm text-gray-600">
        <a href="#">Platform</a>
        <a href="#">Features</a>
        <a href="#">How it Works</a>
        <a href="#">Security</a>
      </div>

      <div className="flex gap-3">
        <Button variant="ghost" asChild>
          <SignInButton mode="modal">Login</SignInButton>
        </Button>
        <Button>Request Demo</Button>
      </div>
    </div>
  );
}
