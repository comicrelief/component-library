import type React from 'react';

export interface PopUpGiftAidProps extends React.HTMLAttributes<HTMLDivElement> {
  textColour?: string;
  hoverColour?: string;
  backgroundColour?: string;
  openWindowWidth?: string;
  heading?: string;
  paragraphs?: string[];
  onOpenChange?: (isOpen: boolean) => void;
}

declare const PopUpGiftAid: React.FC<PopUpGiftAidProps>;
export default PopUpGiftAid;
