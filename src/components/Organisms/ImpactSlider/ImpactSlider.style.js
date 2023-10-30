import styled from 'styled-components';
import RichText from '../../Atoms/RichText/RichText';

const OuterWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 1200px;
  background-color: ${props => props.theme.color('grey_extra_light')};
  padding: 10px;

  @media ${({ theme }) => theme.breakpoint('small')} {
    padding: 30px 60px;
  }
`;

const Copy = styled(RichText)`
  position: relative;
`;

const CurrentAmountCopy = styled.p`
  font-weight: bold;
  margin-top: 20px;
`;

const SubmitButton = styled.button`
  margin-top: 20px;
  width: 100%;
  background-color: red;
`;

export {
  OuterWrapper, Copy, CurrentAmountCopy, SubmitButton
};
