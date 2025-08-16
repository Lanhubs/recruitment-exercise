import { create } from 'zustand'

interface DashboardStats {
  totalListings: number
  activeListings: number
  archivedListings: number
  totalUsers: number
  riders: number
  subscribers: number
}

interface SalesData {
  totalInflow: number
  totalInflowChange: number
  mhr: number
  mhrChange: number
  commissionRevenue: number
  commissionRevenueChange: number
  gmv: number
  gmvChange: number
}

interface PropertyCard {
  id: string
  title: string
  image: string
  category: 'MOST CLICKED' | 'MOST WATCHLISTED' | 'HOTTEST LISTING'
}

interface DashboardState {
  stats: DashboardStats
  salesData: SalesData
  properties: PropertyCard[]
  selectedTimeframe: '1 Week' | '1 Month' | '1 Year'
  setTimeframe: (timeframe: '1 Week' | '1 Month' | '1 Year') => void
}

export const useDashboardStore = create<DashboardState>((set) => ({
  stats: {
    totalListings: 1800,
    activeListings: 80,
    archivedListings: 1000,
    totalUsers: 20700,
    riders: 8500,
    subscribers: 7500,
  },
  salesData: {
    totalInflow: 120000000.00,
    totalInflowChange: 6.0,
    mhr: 50000000.00,
    mhrChange: 2.0,
    commissionRevenue: 200000000.00,
    commissionRevenueChange: 0.2,
    gmv: 100000000.00,
    gmvChange: 0.9,
  },
  properties: [
    {
      id: '1',
      title: 'Urban Prime Plaza Premiere',
      image: '/api/placeholder/300/200',
      category: 'MOST CLICKED'
    },
    {
      id: '2',
      title: 'Urban Prime Plaza Premiere',
      image: '/api/placeholder/300/200',
      category: 'MOST WATCHLISTED'
    },
    {
      id: '3',
      title: 'Urban Prime Plaza Premiere',
      image: '/api/placeholder/300/200',
      category: 'HOTTEST LISTING'
    }
  ],
  selectedTimeframe: '1 Month',
  setTimeframe: (timeframe) => set({ selectedTimeframe: timeframe }),
}))