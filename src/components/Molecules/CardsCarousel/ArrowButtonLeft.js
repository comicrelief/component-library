/* eslint-disable */
import React from 'react';
import styles from './ArrowButtons.module.css';

export default function ArrowButtonLeft({ prevSlide, fill }) {
  return (
    <button
      onClick={prevSlide}
      className={`${styles.btnSlide} ${styles.prev}`}
    >

      <svg
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 31.494 31.494"
        style={{ enableBackground: 'new 0 0 31.494 31.494' }}
        xmlSpace="preserve"
      >
        <path
          style={fill}
          d="M10.273,5.009c0.444-0.444,1.143-0.444,1.587,0c0.429,0.429,0.429,1.143,0,1.571l-8.047,8.047h26.554
					c0.619,0,1.127,0.492,1.127,1.111c0,0.619-0.508,1.127-1.127,1.127H3.813l8.047,8.032c0.429,0.444,0.429,1.159,0,1.587
					c-0.444,0.444-1.143,0.444-1.587,0l-9.952-9.952c-0.429-0.429-0.429-1.143,0-1.571L10.273,5.009z"
        />
      </svg>

    </button>
  );
}
