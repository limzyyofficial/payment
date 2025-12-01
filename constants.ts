import { PaymentMethod } from './types';

export const PAYMENT_METHODS: PaymentMethod[] = [
  {
    id: 'gopay',
    name: 'GOPAY',
    accountNumber: '0852-8001-9052',
    accountName: 'Priadi',
    iconUrl: 'https://raw.githubusercontent.com/LimzyyEzy/webimage/refs/heads/main/icon%20gopay.png',
  },
  {
    id: 'dana',
    name: 'DANA',
    accountNumber: '0852-8001-905', // As per user request (intentionally incomplete or specific)
    accountName: 'Priadi',
    iconUrl: 'https://raw.githubusercontent.com/LimzyyEzy/webimage/refs/heads/main/icon%20dana.png',
  },
  {
    id: 'ovo',
    name: 'OVO',
    accountNumber: '0852-8001-9052',
    accountName: 'Sukmala Sari',
    iconUrl: 'https://raw.githubusercontent.com/LimzyyEzy/webimage/refs/heads/main/icon%20ovo.png',
  },
  {
    id: 'shopeepay',
    name: 'Binance', // Kept name as Binance per request, though ID is shopeepay in original code
    accountNumber: '1067125846',
    accountName: 'Priadi',
    iconUrl: 'https://raw.githubusercontent.com/LimzyyEzy/webimage/refs/heads/main/icon.png',
  },
  {
    id: 'seabank',
    name: 'SeaBank',
    accountNumber: '901713874089',
    accountName: 'Priadi',
    iconUrl: 'https://raw.githubusercontent.com/LimzyyEzy/webimage/refs/heads/main/icon%20seabank.png',
  },
];

export const QRIS_DATA: PaymentMethod = {
  id: 'qris',
  name: 'QRIS',
  accountNumber: 'Scan QR Code Below',
  iconUrl: 'https://raw.githubusercontent.com/LimzyyEzy/webimage/refs/heads/main/QRIS.png',
  isQris: true,
};

export const CONTACT_INFO = {
  whatsapp: 'https://wa.me/6285173360622',
};

export const TERMS = [
  "Transfer sesuai nominal total pesanan Anda.",
  "Setelah pembayaran, kirim bukti transfer ke Admin melalui WhatsApp atau Telegram.",
  "Pesanan diproses setelah verifikasi berhasil.",
  "Pastikan hanya transfer ke rekening/nomor yang tertera di halaman ini."
];