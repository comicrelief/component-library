import styled from 'styled-components';

import spacing from '../../../theme/shared/spacing';
import zIndex from '../../../theme/shared/zIndex';
import media from '../../../theme/shared/breakpoint';
import redShed from './assets/CR_RedShed.svg';
import howWeFund from './assets/CR_Funding.svg';
import mentalHealth from './assets/CR_MentalHealth.svg';
import socialTech from './assets/CR_SocialTech.svg';
import sportForChange from './assets/CR_Sport.svg';
import genderJustice from './assets/CR_Justice.svg';
import safePlaceToBe from './assets/CR_SafePlace.svg';
import partnerships from './assets/CR_Partnerships.svg';
import childrenThrive from './assets/CR_Children.svg';
import clear from './assets/clear.svg';

const selectIcon = name => {
  switch (name) {
    case 'How we Fund':
      return howWeFund;
    case 'Red Shed':
      return redShed;
    case 'Mental Health':
      return mentalHealth;
    case 'Social Tech':
      return socialTech;
    case 'Gender Justice':
      return genderJustice;
    case 'Sport for Change':
      return sportForChange;
    case 'Safe Place to Be':
      return safePlaceToBe;
    case 'Partnerships':
      return partnerships;
    case 'Children Survive & Thrive':
      return childrenThrive;
    default:
      return null;
  }
};

const LabelGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const CheckLabel = styled.label`
  display: flex;
  align-items: center;
  width: auto;
  height: 48px;
  border-radius: 2rem;
  background-color: #d5d5d5;
  margin: ${spacing('sm')} ${spacing('sm')} 0 0;
  padding: 4px;
  padding-right: 1rem;
  flex: 0 0 auto;
  position: relative;
  ${media('small')} {
    margin: ${spacing('md')} ${spacing('md')} 0 0;
  }
`;

const Overlay = styled.span`
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.2;
  border-radius: 2rem;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  ${zIndex('low')};
  :hover {
    background: ${({ theme }) => theme.color('grey_medium')};
  }
`;

const CheckInput = styled.input`
  font-size: ${({ theme }) => theme.fontSize('sm')};
  display: block;
  box-sizing: border-box;
  opacity: 0;
  position: absolute;
  left: 0px;
  width: 40px;
  height: 40px;
  margin: 0;
  border: 1px solid ${({ theme }) => theme.color('grey_for_forms')};
  + span {
    background: url(${({ value }) => selectIcon(value)}) no-repeat center;
    background-size: 24px;
    margin-right: ${spacing('md')};
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color('grey')};
    float: left;
    ${zIndex('medium')};
  }
  :checked ~ span {
    background-size: 24px;
    background-color: ${({ theme, color }) => theme.color(color)};
  }
  :focus + span {
    border-color: ${({ theme }) => theme.color('grey_for_forms')};
    border-width: 3px;
  }
  :focus + span {
    border-color: ${({ theme }) => theme.color('grey_for_forms')};
    border-width: 3px;
  }
`;

const ClearButton = styled.button`
  border-radius: 2rem;
  background: none;
  padding: ${spacing('sm')} ${spacing('md')};
  margin: ${spacing('md')} 0 0 0;
  border: 1px solid ${({ theme }) => theme.color('grey_medium')};
  outline: none;
  padding-left: 3rem;
  position: relative;
  height: 48px;
  :focus {
    border-color: ${({ theme }) => theme.color('grey_for_forms')};
  }

  :before {
    content: '';
    background: url(${clear}) no-repeat center;
    width: 20px;
    height: 20px;
    display: block;
    position: absolute;
    left: 1rem;
  }
`;

export {
  LabelGroup, CheckLabel, Overlay, CheckInput, ClearButton
};
