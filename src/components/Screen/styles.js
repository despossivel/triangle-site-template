import styled from 'styled-components';
import {
    theme
} from '../../utils/theme';



export const Title = styled.div`
    font-size: 1.3rem;
    color: ${theme.corPrimary};
    font-weight: 900;
    margin-bottom: 21px;
`;


export const Content = styled.div`
    width: 46vh;
    .text{
        margin-bottom: 21px;
    }


`;

export const Screen = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: ${props => props.direction};
    justify-content: space-evenly;
    align-items: center;
    min-height: 50vh;


    img{
        width: 68vh;
    }

    .big-title{
        font-weight: 800;
        color:${theme.corPrimary};
        font-size:1.3rem;
    }

    .small-title{}



@media (min-width:300px) and (max-width: 800px)
{
    display: flex;
    flex-direction: column;

    img{
        width: 50vh;
    }


}

 

    `;