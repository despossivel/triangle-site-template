import React, { memo } from 'react';

import { Screen as ScreenDiv, Title, Content } from './styles';
import { Actions } from '../../utils/theme';

const Screen = ({
    bigTitle,
    smallTitle,
    img,
    text,
    actions,
    direction
}) => {
    return (
        <ScreenDiv direction={direction}>
            <div>
                <Title>{bigTitle}</Title>
                <div>
                    <img src={img} alt="img"/>
                </div>
            </div>
            <Content>
                <Title>{smallTitle}</Title>
                <div className="text">{text}</div>
                <Actions>
                    {actions}
                </Actions>
            </Content>
        </ScreenDiv>
    );
}

export default memo(Screen)