import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Carrot } from "lucide-react";
// import { ProductCard } from "@/components/product-card";
// import PersonalizedRecommendations from "@/components/personalized-recommendations";
// import { getProducts } from "@/lib/firebase/firestore";
// import type { Product } from "@/lib/types";

export default async function HomePage() {
  // Fetch featured products from Firestore
  //   const featuredEbooks: Product[] = await getProducts("ebooks", 2);
  //   const featuredGroceries: Product[] = await getProducts("groceries", 2);

  //   // Fetch all products for personalized recommendations
  //   const allEbooks: Product[] = await getProducts("ebooks");
  //   const allGroceries: Product[] = await getProducts("groceries");

  return (
    <div className="space-y-12">
      <section className="text-center py-12 bg-gradient-to-br from-primary/20 via-background to-background rounded-lg shadow-sm">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[hsl(120 25% 15%)]">
          Welcome to <span className="text-[#C7EA46]">eStore Central</span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover a world of knowledge with our curated ebooks and stock up on
          fresh, quality groceries. All in one place.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/ebooks" passHref>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <BookOpen className="mr-2 h-5 w-5" /> Explore Ebooks
            </Button>
          </Link>
          <Link href="/groceries" passHref>
            <Button
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
            >
              <Carrot className="mr-2 h-5 w-5" /> Shop Groceries
            </Button>
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-6 text-foreground flex items-center">
          <BookOpen className="mr-3 h-7 w-7 text-primary" /> Featured Ebooks
          <Link
            href="/ebooks"
            className="ml-auto text-sm text-primary hover:underline"
          >
            View All <ArrowRight className="inline h-4 w-4" />
          </Link>
        </h2>
        {/* {featuredEbooks.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredEbooks.map((ebook) => (
              <ProductCard key={ebook.id} product={ebook} />
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">
            No featured ebooks available at the moment.
          </p>
        )} */}
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-6 text-foreground flex items-center">
          <Carrot className="mr-3 h-7 w-7 text-primary" /> Top Grocery Picks
          <Link
            href="/groceries"
            className="ml-auto text-sm text-primary hover:underline"
          >
            View All <ArrowRight className="inline h-4 w-4" />
          </Link>
        </h2>
        {/* {featuredGroceries.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredGroceries.map((grocery) => (
              <ProductCard key={grocery.id} product={grocery} />
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">
            No featured groceries available at the moment.
          </p>
        )} */}
      </section>

      <section>
        {/* <PersonalizedRecommendations
          itemType="ebook"
          allAvailableProducts={allEbooks}
        /> */}
      </section>

      <section>
        {/* <PersonalizedRecommendations
          itemType="grocery"
          allAvailableProducts={allGroceries}
        /> */}
      </section>
    </div>
  );
}
