import ReactPaginate from 'react-paginate';
import styled from 'styled-components';

export const PaginateStyled = styled(ReactPaginate)`
  display: flex;
  gap: 8px;
  color: ${p => p.theme.colors.titleText};
  cursor: pointer;
  & > li {
    padding: 10px 15px;
    border-radius: 4px;
    box-shadow: 0px 2px 3px 0px ${p => p.theme.colors.secondaryText};
    &:hover {
      box-shadow: 0px 2px 4px 0px ${p => p.theme.colors.secondBckg};
    }
    &.selected {
      color: ${p => p.theme.colors.accentText};
      box-shadow: 0px 2px 3px 0px ${p => p.theme.colors.accentBckg};
    }
    &.disabled {
      pointer-events: none;
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
  & > a {
    &:active {
      background-color: blue;
    }
  }
`;
