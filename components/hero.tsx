import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BookOpen, Carrot } from "lucide-react";

export function Hero() {
  return (
    // <div className="flex flex-col gap-16 items-center">
    //   <div className="flex gap-8 justify-center items-center">
    //     <a
    //       href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
    //       target="_blank"
    //       rel="noreferrer"
    //     >
    //       <SupabaseLogo />
    //     </a>
    //     <span className="border-l rotate-45 h-6" />
    //     <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
    //       <NextLogo />
    //     </a>
    //   </div>
    //   <h1 className="sr-only">Supabase and Next.js Starter Template</h1>
    //   <p className="text-3xl lg:text-4xl !leading-tight mx-auto max-w-xl text-center">
    //     The fastest way to build apps with{" "}
    //     <a
    //       href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
    //       target="_blank"
    //       className="font-bold hover:underline"
    //       rel="noreferrer"
    //     >
    //       Supabase
    //     </a>{" "}
    //     and{" "}
    //     <a
    //       href="https://nextjs.org/"
    //       target="_blank"
    //       className="font-bold hover:underline"
    //       rel="noreferrer"
    //     >
    //       Next.js
    //     </a>
    //   </p>
    //   <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
    // </div>
    <div className="relative py-12 overflow-hidden bg-white min-h-screen flex items-center justify-center w-full bg-gradient-to-t from-[#c7ea465f] to-white lg:bg-gradient-to-r lg:from-[#c7ea465f] lg:to-white">
      <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-6xl mx-auto">
          <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 gap-x-16">
            <div className="max-w-lg mx-auto text-center lg:max-w-none lg:mx-0 lg:order-2 lg:text-left">
              <Image
                src={"/logo.png"}
                alt="Company logo"
                height={100}
                width={100}
                className="w-32 mx-auto h-auto"
                priority
              />
              <h1 className="text-3xl font-bold text-[#1a1f1a] tracking-tight sm:text-4xl xl:text-5xl xl:leading-tight">
                Welcome to
                <span className="text-[#C7EA46]"> Home Veer Realities</span>
              </h1>

              <p className="mt-4 text-lg text-gray-700 max-w-xl mx-auto">
                Discover a world of edification for your soul and edible for
                your journey.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <Link href="/#ebooks" passHref>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-[#C7EA46] text-[#233a23] hover:bg-white hover:border-[#C7EA46] hover:text-[#C7EA46]"
                  >
                    <BookOpen className="mr-2 h-5 w-5" /> Explore Ebooks
                  </Button>
                </Link>
                <Link href="/#groceries" passHref>
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

            <div className="relative lg:order-1">
              <div className="relative">
                <Image
                  src={"/image.png"}
                  alt="Grocery and Ebook Image"
                  height={1000}
                  width={1000}
                  className="w-full h-auto max-w-[490px] mx-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
