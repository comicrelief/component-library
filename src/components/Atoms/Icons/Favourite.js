import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

const Favourite = ({ colour, theme, ...rest }) => {
  return (
    <svg
      {...rest}
      width="22"
      height="20"
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.966 3.7968L10.4357 4.32713C10.5894 4.48087 10.8023 4.56033 11.0192 4.54491C11.236 4.5295 11.4356 4.42074 11.566 4.2468L10.966 3.7968ZM20.849 7.54555L21.5798 7.71418L20.849 7.54555ZM10.966 19.1326L10.4878 19.7104C10.7735 19.9468 11.189 19.939 11.4655 19.692L10.966 19.1326ZM1.08293 7.54555L1.8242 7.4315L1.08293 7.54555ZM5.17249 1.07044L5.2785 1.81291L5.17249 1.07044ZM11.566 4.2468C12.0798 3.56174 12.5395 2.97982 13.1936 2.54857C13.8279 2.13037 14.7014 1.82044 16.0779 1.82044V0.32044C14.4555 0.32044 13.2842 0.6921 12.3679 1.29628C11.4713 1.88742 10.8746 2.66868 10.366 3.3468L11.566 4.2468ZM16.0779 1.82044C17.692 1.82044 18.8251 2.55368 19.5013 3.59018C20.1926 4.64962 20.4228 6.05697 20.1182 7.37691L21.5798 7.71418C21.9691 6.02711 21.6882 4.19691 20.7576 2.77055C19.812 1.32125 18.2126 0.32044 16.0779 0.32044V1.82044ZM20.1182 7.37691C19.6564 9.37834 18.11 11.4395 16.1809 13.4109C14.2583 15.3756 12.0962 17.1181 10.4665 18.5731L11.4655 19.692C13.0166 18.3071 15.2848 16.4712 17.253 14.46C19.2146 12.4554 21.0193 10.1431 21.5798 7.71418L20.1182 7.37691ZM11.4442 18.5548C9.77263 17.1714 7.51771 15.4183 5.5788 13.4515C3.621 11.4656 2.12648 9.39623 1.8242 7.4315L0.341647 7.65959C0.720988 10.1252 2.52084 12.4862 4.51059 14.5046C6.51923 16.5421 8.86504 18.3674 10.4878 19.7104L11.4442 18.5548ZM1.8242 7.4315C1.39764 4.65896 2.7941 2.16763 5.2785 1.81291L5.06649 0.32797C1.47817 0.840301 -0.164596 4.36916 0.341647 7.65959L1.8242 7.4315ZM5.2785 1.81291C6.68085 1.61269 7.60687 1.91349 8.33836 2.38391C9.13093 2.89361 9.68828 3.57973 10.4357 4.32713L11.4963 3.26647C10.8806 2.65069 10.1225 1.74785 9.14971 1.12228C8.11589 0.457434 6.82674 0.0766445 5.06649 0.32797L5.2785 1.81291Z"
        fill={theme.color(colour)}
      />
    </svg>
  );
};

Favourite.propTypes = {
  colour: PropTypes.string,
  theme: PropTypes.objectOf({
    color: PropTypes.func.isRequired
  }).isRequired
};

Favourite.defaultProps = {
  colour: 'white'
};

export default withTheme(Favourite);
