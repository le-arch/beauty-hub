import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Home, Search, Sparkles } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-beauty-secondary flex items-center justify-center p-4">
      <Card className="max-w-md w-full text-center border-purple-100">
        <CardContent className="p-8">
          <div className="mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-warmgray-900 mb-2">404</h1>
            <h2 className="text-xl font-semibold text-warmgray-700 mb-2">Page Not Found</h2>
            <p className="text-warmgray-600">
              Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
            </p>
          </div>

          <div className="space-y-3">
            <Button
              asChild
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
            >
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Go Home
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="w-full border-purple-200 text-purple-600 hover:bg-purple-50 bg-transparent"
            >
              <Link href="/explore">
                <Search className="mr-2 h-4 w-4" />
                Explore Salons
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
