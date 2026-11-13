import type React from 'react';

export interface PopUpSecurePaymentProps extends React.HTMLAttributes<HTMLDivElement> {
  triggerText?: string;
  heading?: string;
  paragraphs?: string[];
  openWindowWidth?: string;
  onOpenChange?: (isOpen: boolean) => void;
}

declare const PopUpSecurePayment: React.FC<PopUpSecurePaymentProps>;
export default PopUpSecurePayment;
