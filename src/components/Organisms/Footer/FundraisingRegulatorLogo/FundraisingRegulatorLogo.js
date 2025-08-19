import React from 'react';
import styled from 'styled-components';
import spacing from '../../../../theme/shared/spacing';

const FundraisingRegulatorWrapper = styled.div`
  // Overriding the baked-in styles for ease of update
  width: 75%;
  margin: ${spacing('lg')} 0;
  max-width: 200px;

  img {
    display: block;
  }
`;

const FundraisingRegulatorLogo = () => (
  <FundraisingRegulatorWrapper>
    {/* Code from https://www.fundraisingregulator.org.uk/ */}
    {/* eslint-disable-next-line react/jsx-no-target-blank */}
    <a href="https://www.fundraisingregulator.org.uk/validate?registrant=COMIC+RELIEF" className="fr-digital-badge" style={{ height: 'auto', width: '150px', textDecoration: 'none' }} target="_blank">
      <img src="https://www.fundraisingregulator.org.uk/fr-badge/80983ed7-ea80-40db-8e52-4a3351d9e77d/en/white" width="100%" alt="Fundraising Regulator badge with validation link" loading="lazy" />
    </a>
  </FundraisingRegulatorWrapper>
);

export default FundraisingRegulatorLogo;
