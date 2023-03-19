import styled from '@emotion/styled';
import { invertHexColor } from '../../../utils/invertHexColor';

export const StatItemStyled = styled.li`
  display: flex;
  flex-direction: column;
  flex-basis: 18%;
  padding: 3px;
  background-color: ${props => {
    return props.bgcolor;
  }};
  color: ${props => {
    return invertHexColor(props.bgcolor);
  }};
`;
