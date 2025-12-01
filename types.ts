export interface PaymentMethod {
  id: string;
  name: string;
  accountNumber: string;
  accountName?: string;
  iconUrl: string; // URL to the image icon
  isQris?: boolean;
  colorTheme?: string;
}

export interface ToastMessage {
  id: number;
  message: string;
  type: 'success' | 'error';
}