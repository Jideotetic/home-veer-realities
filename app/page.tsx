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
      {/* <div className="relative py-12 overflow-hidden bg-white min-h-screen flex items-center justify-center w-full bg-gradient-to-t from-[#c7ea465f] to-white lg:bg-gradient-to-r lg:from-[#c7ea465f] lg:to-white">
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
      </div> */}
      <Hero />
      <div
        className="relative py-12 overflow-hidden bg-white min-h-screen flex items-center justify-center w-full bg-gradient-to-t from-[#c7ea465f] to-white lg:bg-gradient-to-r lg:from-white lg:to-[#c7ea4628]"
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
        className="relative py-12 bg-white overflow-hidden min-h-screen flex items-center justify-center w-full bg-gradient-to-t from-[#c7ea465f] to-white lg:bg-gradient-to-r lg:from-[#c7ea4628] lg:to-white"
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

      <div className="py-12 bg-[#c7ea4694]">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
            <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
              <img
                className="w-auto h-9"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg"
                alt=""
              />

              <p className="text-base leading-relaxed text-gray-600 mt-7">
                Discover a world of edification for your soul and edible for
                your journey.
              </p>

              <ul className="flex items-center space-x-3 mt-9">
                <li>
                  <a
                    href="#"
                    title=""
                    className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600"
                  >
                    <svg
                      className="w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600"
                  >
                    <svg
                      className="w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600"
                  >
                    <svg
                      className="w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                      <circle cx="16.806" cy="7.207" r="1.078"></circle>
                      <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path>
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600"
                  >
                    <svg
                      className="w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                      ></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
                Company
              </p>

              <ul className="mt-6 space-y-4">
                <li>
                  <a
                    href="#"
                    title=""
                    className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                  >
                    {" "}
                    About{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                  >
                    {" "}
                    Features{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                  >
                    {" "}
                    Works{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                  >
                    {" "}
                    Career{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
                Help
              </p>

              <ul className="mt-6 space-y-4">
                <li>
                  <a
                    href="#"
                    title=""
                    className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                  >
                    {" "}
                    Customer Support{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                  >
                    {" "}
                    Delivery Details{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                  >
                    {" "}
                    Terms & Conditions{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                  >
                    {" "}
                    Privacy Policy{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
              <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
                Subscribe to newsletter
              </p>

              <form action="#" method="POST" className="mt-6">
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-6 py-4 mt-3 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <hr className="mt-16 mb-10 border-gray-200" />

          <p className="text-sm text-center text-gray-600">
            © Copyright 2021, All Rights Reserved by Postcraft
          </p>
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
