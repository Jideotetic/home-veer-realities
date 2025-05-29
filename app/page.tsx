"use client";

import { DeployButton } from "@/components/deploy-button";
import { EnvVarWarning } from "@/components/env-var-warning";
import { AuthButton } from "@/components/auth-button";
import { Hero } from "@/components/hero";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { ConnectSupabaseSteps } from "@/components/tutorial/connect-supabase-steps";
import { SignUpUserSteps } from "@/components/tutorial/sign-up-user-steps";
import { hasEnvVars } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BookOpen, Carrot, ArrowRight } from "lucide-react";
import { useState } from "react";
import { ProductCard } from "@/components/product-card";
import { Product } from "@/lib/types";

export default function Home() {
  const [featuredEbooks, setFeaturedEbooks] = useState<Product[]>([]);
  const [featuredGroceries, setFeaturedGroceries] = useState<Product[]>([]);
  return (
    <>
      <div className="space-y-12 py-12">
        <div className="w-full max-w-5xl mx-auto text-center p-3 px-5 text-sm">
          <Image
            src={"/logo.png"}
            alt="Company logo"
            height={100}
            width={100}
            className="w-32 mx-auto h-auto"
            priority
          />
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1a1f1a]">
            Welcome to{" "}
            <span className="text-[#C7EA46]">Home Veer Realities</span> Store
          </h1>

          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover a world of knowledge with our curated ebooks and stock up
            on fresh, quality groceries. All in one place.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/ebooks" passHref>
              <Button
                size="lg"
                variant="outline"
                className="bg-[#C7EA46] text-[#233a23] hover:bg-white hover:border-[#C7EA46] hover:text-[#C7EA46]"
              >
                <BookOpen className="mr-2 h-5 w-5" /> Explore Ebooks
              </Button>
            </Link>
            <Link href="/groceries" passHref>
              <Button
                size="lg"
                variant="outline"
                className="hover:border-[#FFD700] hover:text-[#FFD700] hover:bg-white bg-[#FFD700] text-[#663d1f]"
              >
                <Carrot className="mr-2 h-5 w-5" /> Shop Groceries
              </Button>
            </Link>
          </div>
        </div>

        <div className="w-full max-w-5xl mx-auto text-center p-3 px-5 text-sm">
          <h2 className="text-3xl font-semibold mb-6 text-foreground flex items-center">
            <BookOpen className="mr-3 h-7 w-7 text-primary" /> Featured Ebooks
            <Link
              href="/ebooks"
              className="ml-auto text-sm text-primary hover:underline"
            >
              View All <ArrowRight className="inline h-4 w-4" />
            </Link>
          </h2>
          {featuredEbooks.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {featuredEbooks.map((ebook) => (
                <ProductCard key={ebook.id} product={ebook} />
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">
              No featured ebooks available at the moment.
            </p>
          )}
        </div>

        <div className="w-full max-w-5xl mx-auto text-center p-3 px-5 text-sm">
          <h2 className="text-3xl font-semibold mb-6 text-foreground flex items-center">
            <Carrot className="mr-3 h-7 w-7 text-primary" /> Top Grocery Picks
            <Link
              href="/groceries"
              className="ml-auto text-sm text-primary hover:underline"
            >
              View All <ArrowRight className="inline h-4 w-4" />
            </Link>
          </h2>
          {featuredGroceries.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {featuredGroceries.map((grocery) => (
                <ProductCard key={grocery.id} product={grocery} />
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">
              No featured groceries available at the moment.
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

// import HomePage from "./(main)/page";

// /**
//  * The root page of the application.
//  * It directly renders the HomePage component located in the (main) route group.
//  */
// export default HomePage;
