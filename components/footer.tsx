import Link from "next/link"
import { Sparkles } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Sparkles className="h-6 w-6 text-purple-400" />
              <span className="font-bold text-xl">BeautyHub</span>
            </Link>
            <p className="text-gray-400 mb-4 max-w-md">
              Connecting you with the best beauty professionals in your area. Book appointments, discover new salons,
              and elevate your beauty experience.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/explore" className="hover:text-white transition-colors">
                  Find Salons
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">For Businesses</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/owner" className="hover:text-white transition-colors">
                  Join as Salon
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:text-white transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 BeautyHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
