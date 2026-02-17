import styled from 'styled-components';
import spacing from '../../../theme/shared/spacing';
import Link from '../../Atoms/Link/Link';
import Text from '../../Atoms/Text/Text';

const OuterWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 75vh;
  min-height: 600px;
  max-height: 750px;
  padding: ${({ paddingTop, paddingBottom }) => `${paddingTop} 1rem ${paddingBottom}`};
  background-color: ${({ theme, backgroundColour }) => theme.color(backgroundColour)};
  color: ${({ theme, textColour }) => theme.color(textColour)};

  @media ${({ theme }) => theme.breakpoints2026('M')} {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

const InnerWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex: 1 1 auto;
  max-width: 1500px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
`;

const PictureWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: ${spacing('md')};
  background: ${({ theme }) => theme.color('grey_2')};
  overflow: hidden;
  z-index: 1;
`;

const TextWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  z-index: 2;
  padding: 2rem;
`;

const Heading = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 0;
  max-width: 500px;
  line-height: 1;
  text-align: center;
  text-wrap: balance;

  @media ${({ theme }) => theme.breakpoints2026('M')} {
    font-size: 2.5rem;
  }
  @media ${({ theme }) => theme.breakpoints2026('L')} {
    font-size: 3rem;
  }
`;

const Body = styled(Text)`
  white-space: pre-wrap;
`;

const CTAButton = styled(Link)`
  width: auto;
`;

export {
  OuterWrapper,
  InnerWrapper,
  PictureWrapper,
  TextWrapper,
  Heading,
  Body,
  CTAButton
};
