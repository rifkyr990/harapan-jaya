// Type untuk setiap tipe armada
export interface FleetType {
  images: string[];
  fasilitas: string[];
}

// Semua tipe armada (Eksekutif, VIP, Sleeper)
const fleetData: Record<string, FleetType> = {
  Eksekutif: {
    images: [
      '/images/eksekutif-1.jpg',
      '/images/eksekutif-2.jpg',
    ],
    fasilitas: [
      'AC Full',
      'Reclining Seat',
      'USB Charger',
      'Toilet',
      'TV & Audio',
      'Bagasi Luas',
    ],
  },
  Patas: {
    images: [
      '/images/patas/patas.png',
      '/images/patas/interior.png',
    ],
    fasilitas: [
      'AC',
      'Reclining Seat',
      'USB Port',
      'Snack & Air Mineral',
      'TV Tengah',
    ],
  },
  Sleeper: {
    images: [
      '/images/sleeper-1.jpg',
      '/images/sleeper-2.jpg',

    ],
    fasilitas: [
      'Kursi Sleeper Individual',
      'Layar Sentuh Pribadi',
      'Wi-Fi',
      'USB Charger',
      'Selimut & Bantal',
      'Tirai Privasi',
    ],
  },
  Ekonomi: {
    images: [
      '/images/ekonomi/akdp2.png',
      '/images/ekonomi/interior.png',
    ],

    fasilitas: [
      'AC Full',
      'Reclining Seat',
      'USB Charger',
      'Toilet',
      'TV & Audio',
      'Bagasi Luas',
    ]
  },
  Vip: {
    images: [
      '/images/vip/bus-01.png',
      '/images/vip/interior.jpg',
    ],

    fasilitas: [
      'AC Full',
      'Reclining Seat',
      'USB Charger',
      'Toilet',
      'TV & Audio',
      'Bagasi Luas',
    ]
  }
};

export default fleetData;
