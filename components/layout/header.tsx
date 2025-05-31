"use client";

import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  Carrot,
  Home,
  ShoppingCart,
  UserCircle,
  Menu,
  LogIn,
  LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";
// import { useCart } from "@/context/cart-context";
// import { useAuth } from "@/context/auth-context"; // Import useAuth
import { useIsMobile } from "@/hooks/use-mobile";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
// import { toast } from "@/hooks/use-toast";

const NavLink = ({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) => (
  <Link href={href} passHref>
    <Button
      variant="ghost"
      className="text-foreground hover:bg-primary/20"
      onClick={onClick}
    >
      {children}
    </Button>
  </Link>
);

export function Header() {
  //   const { getItemCount, cartItems } = useCart(); // get cartItems for useEffect dependency
  //   const { user, signOut, isLoading: authLoading } = useAuth(); // Get user and signOut from useAuth
  const [cartItemCount] = useState(0);
  const [authLoading] = useState(false); // Simulating auth loading state
  const [user] = useState(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  //   useEffect(() => {
  //     setCartItemCount(getItemCount());
  //   }, [cartItems, getItemCount]); // Depend on cartItems to re-calculate count when cart changes

  const isMobile = useIsMobile();

  //   const handleSignOut = async () => {
  //     if (isSheetOpen) setIsSheetOpen(false);
  //     await signOut();
  //     toast({
  //       title: "Signed Out",
  //       description: "You have been successfully signed out.",
  //     });
  //     // Navigation will be handled by AuthProvider/AccountPage
  //   };

  const authRelatedLinks = (
    <>
      {user ? (
        <>
          <NavLink href="/account" onClick={() => setIsSheetOpen(false)}>
            <UserCircle className="mr-2 h-5 w-5" /> Account
          </NavLink>
          <Button
            variant="ghost"
            className="text-foreground hover:bg-destructive/20"
            // onClick={handleSignOut}
          >
            <LogOut className="mr-2 h-5 w-5" /> Sign Out
          </Button>
        </>
      ) : (
        <NavLink href="/auth/login" onClick={() => setIsSheetOpen(false)}>
          <LogIn className="mr-2 h-5 w-5" /> Sign In
        </NavLink>
      )}
    </>
  );

  const navLinks = (
    <>
      <NavLink href="/" onClick={() => setIsSheetOpen(false)}>
        <Home className="mr-2 h-5 w-5" /> Home
      </NavLink>
      <NavLink href="/ebooks" onClick={() => setIsSheetOpen(false)}>
        <BookOpen className="mr-2 h-5 w-5" /> Ebooks
      </NavLink>
      <NavLink href="/groceries" onClick={() => setIsSheetOpen(false)}>
        <Carrot className="mr-2 h-5 w-5" /> Groceries
      </NavLink>
      <NavLink href="/cart" onClick={() => setIsSheetOpen(false)}>
        <ShoppingCart className="mr-2 h-5 w-5" /> Cart ({cartItemCount})
      </NavLink>
      {!authLoading && authRelatedLinks}
    </>
  );

  const mobileNavLinks = (
    <nav className="flex flex-col space-y-3 pt-4">
      <NavLink href="/" onClick={() => setIsSheetOpen(false)}>
        <Home className="mr-2 h-5 w-5" /> Home
      </NavLink>
      <NavLink href="/ebooks" onClick={() => setIsSheetOpen(false)}>
        <BookOpen className="mr-2 h-5 w-5" /> Ebooks
      </NavLink>
      <NavLink href="/groceries" onClick={() => setIsSheetOpen(false)}>
        <Carrot className="mr-2 h-5 w-5" /> Groceries
      </NavLink>
      <NavLink href="/cart" onClick={() => setIsSheetOpen(false)}>
        <ShoppingCart className="mr-2 h-5 w-5" /> Cart ({cartItemCount})
      </NavLink>
      <hr className="my-2 border-border/70" />
      {!authLoading && authRelatedLinks}
    </nav>
  );

  return (
    <header className=" sticky top-0 z-50 w-full border-b border-border/40 bg-[#c7ea465f] backdrop-blur supports-[backdrop-filter]:bg-[#c7ea4636]">
      <div className="container flex h-16 max-w-7xl items-center justify-between mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-2xl font-bold text-gray-700">
          <Image
            src={"/logo.png"}
            alt="Company logo"
            height={100}
            width={100}
            className="w-14 h-auto"
            priority
          />
        </Link>
        {isMobile ? (
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px] bg-white p-6"
            >
              <Link
                href="/"
                className="text-xl font-bold text-primary mb-4 block"
                onClick={() => setIsSheetOpen(false)}
              >
                <Image
                  src={"/logo.png"}
                  alt="Company logo"
                  height={100}
                  width={100}
                  className="w-14 h-auto"
                  priority
                />
              </Link>
              {mobileNavLinks}
            </SheetContent>
          </Sheet>
        ) : (
          <nav className="flex items-center space-x-1">{navLinks}</nav>
        )}
      </div>
    </header>
  );
}
