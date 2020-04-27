import styled from 'styled-components';

export const theme = {
    corPrimary:'#1b3b73',
    corSecondary:'#edb82b'
};



export const Actions = styled.div`
a{
    margin-left:15px;
    margin-rigth:15px;
    color:${theme.corPrimary};
    cursor:pointer;
    text-decoration:none;
}
a:hover{
    color:${theme.corSecondary};
}
button{
    margin-left:15px;
    margin-rigth:15px;
    background:${theme.corPrimary};
    padding:10px;   
    color:#fff;
    font-weight: 900;
    border: 0;
    border-radius: 7px;
    cursor:pointer;
}

button:hover{
    background:${theme.corSecondary};
    color:${theme.corPrimary};
}

`;