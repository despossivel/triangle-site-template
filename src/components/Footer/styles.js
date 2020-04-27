import styled from 'styled-components';
import {
    theme
} from '../../utils/theme';

export const Footer = styled.div`
display:flex;
flex-direction:collumn;
    justify-content: space-around;
    align-items: center;
    color:#fff;
    background:${theme.corPrimary};
    height:145px;
    padding:15px;`;



export const SocialMedias = styled.div`
    width: 100px;
    display: flex;
    flex-direction: initial;
    justify-content: inherit;
    align-items: center;
    cursor:pointer;
    `