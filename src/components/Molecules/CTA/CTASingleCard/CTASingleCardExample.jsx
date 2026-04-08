import React from 'react';
import CTASingleCard from './CTASingleCard';
import Text from '../../../Atoms/Text/Text';

const fallback = 'https://images.ctfassets.net/zsfivwzfgl3t/4VsIykPLHDNkNCT9djGrX/c8f1e4cb5c6bda5a7b77f18501e9304d/challenge-1.jpg?w=678&h=501&fl=progressive&q=80&fm=jpg';
const imageLow = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAPABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAcIBAb/xAAjEAACAgIBBAIDAAAAAAAAAAABAgMEABEGBRIhMQdBE1Fh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgT/xAAaEQADAQADAAAAAAAAAAAAAAAAAQIDERIT/9oADAMBAAIRAxEAPwBzRcrjVY+0tonyT41nG8y+SLFTkgpQTVFpoqiRZGHc2/egf4RrMM12OHpNi3LsrAjO2vsKCcQtvkbTW570sMUt6xphJKnd+Ma9A78ZRWcS+SWNLpNMqAdQidVaSxErEA6ZgCNj9YZNPTOTpJW7+ovdlnLHyjgAD6GGPug+bP/Z';
const images = 'https://images.ctfassets.net/zsfivwzfgl3t/4VsIykPLHDNkNCT9djGrX/c8f1e4cb5c6bda5a7b77f18501e9304d/challenge-1.jpg?w=678&h=501&q=80&fm=webp 678w';

const baseCard = {
  link: '/test',
  linkLabel: 'Learn more',
  fallback,
  imageLow,
  images,
  description: 'Example image',
  target: 'self',
  external: null,
};

export default function CTASingleCardExample() {
  return (
    <>
      <h3>Basic</h3>
      <div style={{ background: '#E1E2E3' }}>
        <CTASingleCard data={{
          card: { ...baseCard, id: 'single-card-1', label: 'Example Label', body: <Text tag="p"><strong>Single Card</strong> content here</Text> },
          backgroundColour: 'Transparent',
          paddingAbove: '1rem',
          paddingBelow: '2rem',
        }} />
      </div>

      <h3>With background colour</h3>
      <div style={{ background: '#E1E2E3' }}>
        <CTASingleCard data={{
          card: { ...baseCard, id: 'single-card-2', label: 'Example Label', body: <Text tag="p">Single card</Text> },
          backgroundColour: 'grey_medium',
          paddingAbove: '1rem',
          paddingBelow: '2rem',
        }} />
      </div>
    </>
  );
}
