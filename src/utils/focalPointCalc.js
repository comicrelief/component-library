/* A handy to make the percentage math nice and reusable */
const focalPointCalc = focalPointData => {
  // Calculate the focal points as percentages of the image dimensions
  let x = (focalPointData.focalPointX / focalPointData.rawImageWidth) * 100;
  let y = (focalPointData.focalPointY / focalPointData.rawImageHeight) * 100;

  // Some ugly maths to basically just sweetenen the percentage, resulting
  // in a slightly higher value (up to * 1.1 around the 25% and 75% points)
  // to get the position close to what we actually want visually with our
  // fluid layout and 'cover' object-fit CSS rule

  const maths = true;

  if (maths) {
    x *= (0.1 / 25) * (25 - Math.abs((x % (2 * 25)) - 25)) + 1;
    y *= (0.1 / 25) * (25 - Math.abs((y % (2 * 25)) - 25)) + 1;
  }

  // Round-up for best browser compatibility
  x = Math.round(x);
  y = Math.round(y);

  // Return this directly as a percentage to be used within CSS;
  // hard pixel values won't ever work, given that fluid layout
  return {
    x: `${x}%`,
    y: `${y}%`
  };
};

export default focalPointCalc;
