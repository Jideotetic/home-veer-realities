"use client";

// import { DeployButton } from "@/components/deploy-button";
// import { EnvVarWarning } from "@/components/env-var-warning";
// import { AuthButton } from "@/components/auth-button";
import { Hero } from "@/components/hero";
// import { ThemeSwitcher } from "@/components/theme-switcher";
// import { ConnectSupabaseSteps } from "@/components/tutorial/connect-supabase-steps";
// import { SignUpUserSteps } from "@/components/tutorial/sign-up-user-steps";
// import { hasEnvVars } from "@/lib/utils";
import Link from "next/link";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Carrot } from "lucide-react";
import { useState } from "react";
import { ProductCard } from "@/components/product-card";
import { Product } from "@/lib/types";

export default function Home() {
  const [featuredEbooks] = useState<Product[]>([
    {
      id: "3",
      name: "React for Beginners",
      description:
        "Learn React from the ground up with this beginner-friendly guide.",
      image: "/image.png",
      price: 14.99,
      type: "ebook",
      dataAiHint: "react-ebook-image",
    },
    {
      id: "5",
      name: "Advanced TypeScript",
      description: "Master TypeScript with this in-depth technical ebook.",
      image: "/image.png",
      price: 19.99,
      type: "ebook",
      dataAiHint: "typescript-ebook-image",
    },
    {
      id: "6",
      name: "Advanced TypeScript",
      description: "Master TypeScript with this in-depth technical ebook.",
      image: "/image.png",
      price: 19.99,
      type: "ebook",
      dataAiHint: "typescript-ebook-image",
    },
  ]);
  const [featuredGroceries] = useState<Product[]>([
    {
      id: "1",
      name: "Organic Bananas",
      description: "Fresh organic bananas, perfect for a healthy snack.",
      image: "/image.png",
      price: 2.99,
      type: "grocery",
      dataAiHint: "bananas-image",
    },
    {
      id: "2",
      name: "Whole Wheat Bread",
      description: "Soft, delicious, and made with whole grains.",
      image: "/image.png",
      price: 3.49,
      type: "grocery",
      dataAiHint: "bread-image",
    },
    {
      id: "4",
      name: "Almond Milk",
      description: "Unsweetened almond milk, dairy-free and delicious.",
      image: "/image.png",
      price: 3.29,
      type: "grocery",
      dataAiHint: "almond-milk-image",
    },
  ]);
  return (
    <>
      <Hero />
      <div
        className="relative py-12 overflow-hidden bg-white min-h-screen flex items-center justify-center w-full bg-gradient-to-t from-[#c7ea4628] to-white lg:bg-gradient-to-r lg:from-white lg:to-[#c7ea4628]"
        id="ebooks"
      >
        <div className="relative px-4 mx-auto sm:px-6 lg:px-8 w-full max-w-5xl text-center text-sm">
          <h2 className="text-3xl font-semibold mb-6 text-[#1a1f1a] flex items-center justify-center">
            <BookOpen className="mr-3 h-7 w-7 text-[#C7EA46]" /> Featured Ebooks
            <Link
              href="/ebooks"
              className="ml-auto text-sm text-gray-700 hover:underline"
            >
              View All <ArrowRight className="inline h-4 w-4" />
            </Link>
          </h2>
          {featuredEbooks.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {featuredEbooks.map((ebook) => (
                <ProductCard key={ebook.id} product={ebook} />
              ))}
            </div>
          ) : (
            <p className="text-gray-700 text-center">
              No ebooks available at the moment.
            </p>
          )}
        </div>
      </div>

      <div
        className="relative py-12 bg-white overflow-hidden min-h-screen flex items-center justify-center w-full bg-gradient-to-t from-[#c7ea4628] to-white lg:bg-gradient-to-r lg:from-[#c7ea4628] lg:to-white"
        id="groceries"
      >
        <div className="relative px-4 mx-auto sm:px-6 lg:px-8 w-full max-w-5xl text-center text-sm">
          <h2 className="text-3xl font-semibold mb-6 text-[#1a1f1a] flex items-center justify-center">
            <Carrot className="mr-3 h-7 w-7 text-[#FFD700]" /> Top Grocery Picks
            <Link
              href="/groceries"
              className="ml-auto text-sm text-gray-700 hover:underline"
            >
              View All <ArrowRight className="inline h-4 w-4" />
            </Link>
          </h2>

          {featuredGroceries.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {featuredGroceries.map((grocery) => (
                <ProductCard key={grocery.id} product={grocery} />
              ))}
            </div>
          ) : (
            <p className="text-gray-700 text-center">
              No groceries available at the moment.
            </p>
          )}
        </div>
      </div>

      {/* <main className="flex flex-col items-center">
        <div className="flex-1 w-full flex flex-col gap-20 items-center">
          <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
            <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
              <div className="flex gap-5 items-center font-semibold">
                <Link href={"/"}>
                  <Image
                    src={"/logo.png"}
                    alt="Company logo"
                    height={100}
                    width={100}
                    className="w-12 h-auto"
                    priority
                  />
                </Link>
                <div className="flex items-center gap-2">
                <DeployButton />
              </div>
              </div>
              {!hasEnvVars ? <EnvVarWarning /> : <AuthButton />}
            </div>
          </nav>

          <div className="flex-1 flex flex-col gap-20 max-w-5xl p-5">
            <Hero />
            <main className="flex-1 flex flex-col gap-6 px-4">
              <h2 className="font-medium text-xl mb-4">Next steps</h2>
              {hasEnvVars ? <SignUpUserSteps /> : <ConnectSupabaseSteps />}
            </main>
          </div>

          <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-16">
            <p>
              Powered by{" "}
              <a
                href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
                target="_blank"
                className="font-bold hover:underline"
                rel="noreferrer"
              >
                Supabase
              </a>
            </p>
            <ThemeSwitcher />
          </footer>
        </div>
      </main> */}
    </>
  );
}
