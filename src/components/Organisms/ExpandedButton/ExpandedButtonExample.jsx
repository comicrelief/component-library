import React, { useState } from 'react';
import ExpandedButton from './ExpandedButton';
import CalendarIcon from './expanded-button-icons/calendar.svg';
import HeartHandIcon from './expanded-button-icons/heart-hand.svg';
import CupcakeIcon from './expanded-button-icons/cupcake.svg';

export default function ExpandedButtonExample() {
  const [selectedId, setSelectedId] = useState('monthly');

  const options = [
    {
      id: 'monthly',
      title: 'Set up a regular gift',
      description: 'Your monthly gift could make a lasting impact where it matters most.',
      icon: CalendarIcon
    },
    {
      id: 'single',
      title: 'Make a one off donation',
      description: 'Help fund life-changing projects in the UK and around the world.',
      icon: HeartHandIcon
    },
    {
      id: 'payin',
      title: 'Pay in your fundraising money',
      description: 'You\'re amazing and we thank you! Let\'s start paying in all of your fantastic work!',
      icon: CupcakeIcon
    }
  ];

  return (
    <ExpandedButton
      options={options}
      selectedId={selectedId}
      onSelect={setSelectedId}
    />
  );
}
