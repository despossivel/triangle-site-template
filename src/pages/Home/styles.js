import styled from 'styled-components';
import {
    theme
} from '../../utils/theme';

export const Container = styled.div` 
    padding:10px;
    background:#fff;
    border-top: 1px solid #f5f5f5;
    min-height: 55vh;
`;



export const Section = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
margin-bottom: 100px;

img{
    width: 68vh;
}

@media (min-width:300px) and (max-width: 800px)
{
    display: flex;
    flex-direction: column-reverse;
 

    img{
        width: 50vh;
    }



}
 


 
`

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