import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import Text from '../Text/Text';
import fontHelper from '../../../theme/crTheme/fontHelper';
import spacing from '../../../theme/shared/spacing';

const Root = styled.div`
  background-color: ${({ theme, $backgroundColor }) => theme.color($backgroundColor)};
  border-radius: ${spacing('md')};
  padding: ${spacing('l')};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: ${spacing('md')};
  box-sizing: border-box;
  width: 100%;
`;

const TitleText = styled(Text)`
  ${({ theme }) => css`
    ${fontHelper(theme, 'p')}
  `};
  font-weight: 700;
  margin: 0;
`;

const BodyText = styled(Text)`
  ${({ theme }) => css`
    ${fontHelper(theme, 'p')}
  `};
  margin: 0;
  a {
    text-decoration: underline;
  }
`;

const InfoMessage = ({
  title,
  message,
  backgroundColor = 'blue_light',
  dataTestId = 'info-message',
  ...rest
}) => (
  <Root
    $backgroundColor={backgroundColor}
    {...rest}
    data-testid={dataTestId}
  >
    <TitleText tag="p">{title}</TitleText>
    <BodyText tag="p">{message}</BodyText>
  </Root>
);

InfoMessage.propTypes = {
  /** Theme colour key from our colour list. */
  backgroundColor: PropTypes.string,
  /** Value for `data-testid` on the root  (defaults to `info-message`). */
  dataTestId: PropTypes.string,
  /** Bold line; string for the title */
  title: PropTypes.node.isRequired,
  /** Normal-weight line; string or include `Link` for inline links */
  message: PropTypes.node.isRequired
};

export default InfoMessage;
