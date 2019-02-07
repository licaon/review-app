import styled from 'styled-components';

import { PINK_SWAN } from 'constants/colors';

const LineSeparator = styled.hr`
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid ${PINK_SWAN}57;
    margin: 1em 0;
    padding: 0; 
`;

export default LineSeparator;