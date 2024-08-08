/* eslint-disable */
import React from 'react';
import styles from './ArrowButtons.module.css';

export default function ArrowButtonRight({ nextSlide, fill }) {
  return (
    <button
      onClick={nextSlide}
      className={`${styles.btnSlide} ${styles.next}`}
    >

      <svg
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 31.49 31.49"
        style={{ enableBackground: 'new 0 0 31.49 31.49' }}
        xmlSpace="preserve"
      >
        <path
          style={fill}
          d="M21.205,5.007c-0.429-0.444-1.143-0.444-1.587,0c-0.429,0.429-0.429,1.143,0,1.571l8.047,8.047H1.111
            C0.492,14.626,0,15.118,0,15.737c0,0.619,0.492,1.127,1.111,1.127h26.554l-8.047,8.032c-0.429,0.444-0.429,1.159,0,1.587
            c0.444,0.444,1.159,0.444,1.587,0l9.952-9.952c0.444-0.429,0.444-1.143,0-1.571L21.205,5.007z"
        />
      </svg>

    </button>
  );
}
