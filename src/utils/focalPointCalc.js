// A handy to make the percentage math nice and reusable
const focalPointCalc = focalPointData => {
  // Calculate the focal point as a percentage of the image dimension
  let x = Math.round((focalPointData.focalPointX / focalPointData.rawImageWidth) * 100);
  let y = Math.round((focalPointData.focalPointY / focalPointData.rawImageHeight) * 100);

  // Some ugly maths to basically just sweetenen to percentage, resulting
  // in a slightly higher value (* 1.1) around the 25% and 75% points
  // to get the position close to what we actually want visually
  x *= (0.1 / 25) * (25 - Math.abs((x % (2 * 25)) - 25)) + 1;
  y *= (0.1 / 25) * (25 - Math.abs((y % (2 * 25)) - 25)) + 1;

  // Return this directly as a percentage to be used within CSS;
  // hard pixel values won't ever work, given the object-fit: contains
  // rule and fluid layout
  return {
    x: `${x}%`,
    y: `${y}%`
  };
};

export default focalPointCalc;
