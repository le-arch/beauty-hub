export interface Salon {
  id: string
  name: string
  location: string
  rating: number
  reviews: number
  image: string
  imageHint?: string
  startingPrice: number
  services: Service[]
  featured?: boolean
  verified?: boolean
}

export interface Service {
  name: string
  price: number
  duration: number
}

export interface Booking {
  id: string
  created_at: string
  user_id: string
  salon_id: string
  service_name: string
  booking_time: string
  total_price: number
  deposit_paid: boolean
  notes?: string
  status: "Pending" | "Confirmed" | "Completed" | "Cancelled"
  salons: {
    name: string
    image: string
  }
}

export interface Message {
  id: string
  sender: "user" | "salon"
  text: string
  timestamp: string
  type?: "text" | "booking" | "system"
  bookingDetails?: {
    service: string
    date: string
    time: string
  }
}

export interface Conversation {
  id: string
  salon: {
    id: string
    name: string
    image: string
  }
  lastMessage: Message
  unreadCount: number
  messages: Message[]
}
