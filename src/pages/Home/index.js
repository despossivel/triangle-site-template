import React from 'react';

import {
        Container,
        Section,
        Content,
        Title
} from './styles';
import { Actions } from '../../utils/theme'
import Main from './Main';

import { MdAndroid } from 'react-icons/md';
import {FaApple} from 'react-icons/fa';

export default function Home() {
        return (<Container>
                <Section>
                        <Content>
                                <Title>Lorem ipsum is simply</Title>
                                <div className="text">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and </div>
                                <Actions>
                                        <button><MdAndroid /> Android</button>
                                        <button><FaApple /> Apple</button>
                                </Actions>
                        </Content>
                        <div className="content-img">
                                <img src="/asserts/section-1.jpg" alt="illustration" />
                        </div>
                </Section>
                <Main />
        </Container>);
}
