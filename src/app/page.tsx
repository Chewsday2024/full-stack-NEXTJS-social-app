import ModeToggle from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <SignedOut>
        <SignInButton mode='modal'>
          <Button className="cursor-pointer">
            Sign in
          </Button>
        </SignInButton>
      </SignedOut>
      
      <ModeToggle />
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
}
