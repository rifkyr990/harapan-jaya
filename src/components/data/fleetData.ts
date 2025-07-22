export interface FleetType {
  images: string[];
  fasilitas: { nama: string, icon: string }[];
  jurusan: string[];
}

const fleetData: Record<string, FleetType> = {
  Sleeper: {
    images: [
      '/images/sleeper/sleeper.png',
      '/images/sleeper/interior.jpg',
    ],
    fasilitas: [
      { nama: 'Kursi Sleeper Individual', icon: '/images/icons/seat.png' },
      { nama: 'Layar Sentuh Pribadi', icon: '/images/icons/tv.png' },
      { nama: 'Wi-Fi', icon: '/images/icons/wi-fi.png' },
      { nama: 'USB Charger', icon: '/images/icons/usb.png' },
      { nama: 'Selimut & Bantal', icon: '/images/icons/folding.png' },
      { nama: 'Toilet', icon: '/images/icons/toilet.png' },
      { nama: 'Makan', icon: '/images/icons/dish.png' },
      { nama: 'Snack & Minuman', icon: '/images/icons/snack.png' },
    ],
    jurusan: [
      'Malang - Surabaya - Jakarta',
      'Blitar - Tulungagung - Trenggalek - Jakarta'
    ]
  },

  Executive: {
    images: [
      '/images/sleeper/sleeper.png',
      '/images/sleeper/interior.jpg',
    ],
    fasilitas: [
      { nama: 'Reclining Seat', icon: '/images/icons/seat.png' },
      { nama: 'TV & Audio', icon: '/images/icons/tv.png' },
      { nama: 'Wi-Fi', icon: '/images/icons/wi-fi.png' },
      { nama: 'USB Charger', icon: '/images/icons/usb.png' },
      { nama: 'Selimut & Bantal', icon: '/images/icons/folding.png' },
      { nama: 'Toilet', icon: '/images/icons/toilet.png' },
      { nama: 'Makan', icon: '/images/icons/dish.png' },
      { nama: 'Snack & Minuman', icon: '/images/icons/snack.png' },
    ],
    jurusan: [
      'Malang - Surabaya - Jakarta',
      'Blitar - Tulungagung - Trenggalek - Jakarta'
    ]
  },

  Ekonomi: {
    images: [
      '/images/ekonomi/akdp2.png',
      '/images/ekonomi/interior.png',
    ],
    fasilitas: [
      { nama: 'AC', icon: '/images/icons/ac.png' },
      { nama: 'USB Port', icon: '/images/icons/usb.png' },
      { nama: 'TV Tengah', icon: '/images/icons/tv.png' },
    ],
    jurusan: [
      'Blitar - Tulungagung - Surabaya',
      'Trenggalek - Tulungagung - Surabaya'
    ]
  },

  Vip: {
    images: [
      '/images/vip/bus-01.png',
      '/images/vip/interior.jpg',
    ],
    fasilitas: [
      { nama: 'AC Full', icon: '/images/icons/ac.png' },
      { nama: 'Reclining Seat', icon: '/images/icons/seat.png' },
      { nama: 'USB Charger', icon: '/images/icons/usb.png' },
      { nama: 'Wi-Fi', icon: '/images/icons/wi-fi.png' },
      { nama: 'Toilet', icon: '/images/icons/toilet.png' },
      { nama: 'TV & Audio', icon: '/images/icons/tv.png' },
    ],
    jurusan: [
      'Blitar - Tulungagung - Jakarta',
      'Jakarta - Surabaya',
      'Trenggalek - Jakarta',
      'Malang - Bandar lampung',
      'Malang - Merak'
    ]
  },
  Patas: {
    images: [
      '/images/patas/patas.png',
      '/images/patas/interior.png',
    ],
    fasilitas: [
      { nama: 'AC', icon: '/images/icons/ac.png' },
      { nama: 'Reclining Seat', icon: '/images/icons/seat.png' },
      { nama: 'USB Port', icon: '/images/icons/usb.png' },
      { nama: 'TV Tengah', icon: '/images/icons/tv.png' },
    ],
    jurusan: [
      'Blitar - Tulungagung - Surabaya',
      'Trenggalek - Tulungagung - Surabaya'
    ]
  },
};

export default fleetData;
