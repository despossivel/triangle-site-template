import styled from 'styled-components';
import {
    theme
} from '../../../utils/theme';




export const Main = styled.div``;

export const NavigationScreen = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    `;

export const A = styled.a` 
    font-weight: 700;
    color: ${props => props.actived === true ? '#ccc' : `${theme.corPrimary}`};
    cursor:pointer;
    border-bottom: ${props => props.actived === true ? `2px solid ${theme.corSecondary}` : `0px`} ;
    padding-bottom: ${props => props.actived === true ? `5px` : `0px`};


    &:hover {
        border-bottom: 2px solid ${theme.corSecondary};
    }


    @media (min-width:300px) and (max-width: 800px)
    {
        margin-right: 10px;
        margin-left: 10px;
    }

`;
