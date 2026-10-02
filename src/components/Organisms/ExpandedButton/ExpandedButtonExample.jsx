import React, { useState, useEffect } from 'react';
import ExpandedButton from './ExpandedButton';
import CalendarIcon from '../../../data/expanded-button-icons/calendar.svg';
import HeartHandIcon from '../../../data/expanded-button-icons/heart-hand.svg';
import CupcakeIcon from '../../../data/expanded-button-icons/cupcake.svg';
import styled from 'styled-components';

const ExpandedButtonExampleWrapper = styled.div`
  margin-bottom: 50px;
`;

export default function ExpandedButtonExample() {
  const [selectedId, setSelectedId] = useState('monthly');

  useEffect(() => {
    console.log('Selected option:', selectedId);
  }, [selectedId]);

  const baseOptions = [
    {
      id: 'monthly',
      title: 'Set up a regular gift',
      description: 'Your monthly gift could make a lasting impact where it matters most.'
    },
    {
      id: 'single',
      title: 'Make a one off donation',
      description: 'Help fund life-changing projects in the UK and around the world.'
    },
    {
      id: 'payin',
      title: 'Pay in your fundraising money',
      description: 'You\'re amazing and we thank you! Let\'s start paying in all of your fantastic work!'
    }
  ];

  const icons = [CalendarIcon, HeartHandIcon, CupcakeIcon];

  const optionsWithIcons = baseOptions.map((option, index) => ({
    ...option,
    icon: icons[index]
  }));

  return (
    <>
      <ExpandedButtonExampleWrapper>
        <h3>Expanded Button with icons</h3>
        <ExpandedButton
          options={optionsWithIcons}
          selectedId={selectedId}
          onSelect={setSelectedId}
        />
      </ExpandedButtonExampleWrapper>
      <ExpandedButtonExampleWrapper>
        <h3>Expanded Button without icons</h3>
        <ExpandedButton
          options={baseOptions}
          selectedId={selectedId}
          onSelect={setSelectedId}
        />
      </ExpandedButtonExampleWrapper>
    </>
  );
}
