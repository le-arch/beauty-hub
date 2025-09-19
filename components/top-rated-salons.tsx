"use client"

import { useState } from "react"
import SalonCard from "./salon-card"
import { mockSalons } from "@/lib/mock-data"
import type { Salon, Booking } from "@/lib/types"

export default function TopRatedSalons() {
  const [bookings, setBookings] = useState<Booking[]>([])

  const handleBookNow = (salon: Salon) => {
    // This would typically open a booking modal
    console.log("Booking salon:", salon.name)
  }

  const handleBookingComplete = (booking: Booking) => {
    setBookings((prev) => [...prev, booking])
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Top Rated Salons</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the most loved beauty destinations in your area
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockSalons.map((salon) => (
            <SalonCard key={salon.id} salon={salon} onBookNow={handleBookNow} viewMode="grid" />
          ))}
        </div>
      </div>
    </section>
  )
}
