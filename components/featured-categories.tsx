import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Scissors, Palette, Sparkles, Heart } from "lucide-react"

const categories = [
  {
    name: "Hair Styling",
    icon: Scissors,
    description: "Professional cuts, braids & styling",
    href: "/explore?category=hair",
  },
  {
    name: "Nail Art",
    icon: Palette,
    description: "Manicures, pedicures & nail designs",
    href: "/explore?category=nails",
  },
  {
    name: "Spa & Wellness",
    icon: Heart,
    description: "Facials, massages & relaxation",
    href: "/explore?category=spa",
  },
  {
    name: "Makeup",
    icon: Sparkles,
    description: "Professional makeup & beauty",
    href: "/explore?category=makeup",
  },
]

export default function FeaturedCategories() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Explore our most requested beauty services</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <Link key={category.name} href={category.href}>
                <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-purple-100">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                      <Icon className="h-8 w-8 text-purple-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.name}</h3>
                    <p className="text-sm text-gray-600">{category.description}</p>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
