// Icons with drawn circular border (old style)
import facebookCircled from '../assets/circled/facebook.svg';
import twitterCircled from '../assets/circled/X-white-Subtract.svg';
import youtubeCircled from '../assets/circled/youtube.svg';
import instagramCircled from '../assets/circled/instagram.svg';

// Standard icons without drawn border (new style)
import facebookStandard from '../assets/standard/facebook.svg';
import xStandard from '../assets/standard/x.svg';
import youtubeStandard from '../assets/standard/youtube.svg';
import instagramStandard from '../assets/standard/instagram.svg';
import tiktokStandard from '../assets/standard/tiktok.svg';

export const circledIcons = {
  facebook: facebookCircled,
  instagram: instagramCircled,
  twitter: twitterCircled,
  youtube: youtubeCircled
};

export const standardIcons = {
  facebook: facebookStandard,
  instagram: instagramStandard,
  x: xStandard,
  youtube: youtubeStandard,
  tiktok: tiktokStandard
};

// Default export for backward compatibility (circled icons)
export default circledIcons;
