"use client"

import Header from "@/src/components/header"
import Footer from "@/src/components/footer"
import FeaturedCategories from "@/src/components/featured-categories"
import TopRatedSalons from "@/src/components/top-rated-salons"
import HowItWorks from "@/src/components/how-it-works"
import PromoteSalon from "@/src/components/promote-salon"
import AiStylist from "@/src/components/ai-stylist"
import BlogTeasers from "@/src/components/blog-teasers"
import HeroSection from "@/src/components/hero-section"

export default function SyntheticV0PageForDeployment() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturedCategories />
        <TopRatedSalons />
        <HowItWorks />
        <PromoteSalon />
        <AiStylist />
        <BlogTeasers />
      </main>
      <Footer />
    </div>
  )
}
