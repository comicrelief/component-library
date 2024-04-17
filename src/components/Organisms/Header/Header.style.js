import styled from 'styled-components';

import zIndex from '../../../theme/shared/zIndex';
import allContainers from '../../../theme/shared/allContainers';
import spacing from '../../../theme/shared/spacing';

const HeaderWrapper = styled.header.attrs(() => ({
  role: 'banner'
}))`
  position: relative;
  background-color: ${({ theme }) => theme.color('white')};
  padding: 0;
  height: 75px;

  @media ${({ theme }) => theme.allBreakpoints('Nav')} {
    height: auto;
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 12px;
  cursor: pointer;
  max-width: ${allContainers.large};

  @media ${({ theme }) => theme.allBreakpoints('Nav')} {
    margin: 0 auto;
  }
`;

const Brand = styled.div`
  ${zIndex('high')};
  margin-right: auto;
  display: flex;
  align-items: center;
  a {
    border: 0;
    color: transparent;
    margin-right: ${spacing('md')};
    img {
      width: 100%;
      object-fit: contain;
    }
    :hover {
      border: 0;
    }
  }
`;

const MetaIcons = styled.div`
  width: auto;
  display: flex;
  align-items: center;

  > div {
    height: 35px;
    width: auto;
    display: inline-block;

    > a {
      height: inherit;
      width: inherit;
      margin-left: 0.5rem;

      img {
        padding: 5px;
        height: inherit;
        width: inherit;
      }
    }
  }

  @media ${({ theme }) => theme.allBreakpoints('Nav')} {
    position: relative;
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.color('white')};
    margin-right: 0px;
    right: 0px;
  }
`;

export {
  Brand, HeaderWrapper, InnerWrapper, MetaIcons
};
