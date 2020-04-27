import React, { useState, useMemo } from 'react';

import {
    Main,
    NavigationScreen,
    A
} from './styles';


import  Screen from '../../../components/Screen'

export default function _Main() {

    const [screen, setScreen] = useState(0);


    const switchRender = useMemo(() => {
        switch (screen) {
            case 0:
                return <Screen 
                    direction="row"
                    bigTitle="Why do we use it"
                    smallTitle="Lorem ipsum is simply"
                    img={"/asserts/section-2.png"}
                    text="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and "
                    actions={
                        <button>Cadastre seu estabelecimento</button>
                    }
                />

            case 1:
                return <Screen direction="row-reverse"
                    bigTitle="Why do we use it"
                    smallTitle="Lorem ipsum is simply"
                    img={"/asserts/section-3.jpeg"}
                    text="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and "
                    actions={<>
                        <button>Download</button>
                        <button>Download</button>
                    </>}
                />

            case 2:

                return <Screen direction="row" 
                bigTitle="Why do we use it"
                smallTitle="Lorem ipsum is simply"
                img={"/asserts/section-4.png"}
                text="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and "
                actions={<>
                   <button>Cadastre-se como entregador</button>
                </>} />

                default:
                    return;

        }
    }, [screen])

    return <Main>
        <NavigationScreen >
            <A  actived={screen === 0 ? true : false} href={true} onClick={e => setScreen(0)}>Para empresas</A>
            <A  actived={screen === 1 ? true : false} href={true} onClick={e => setScreen(1)}>Para cliente final</A>
            <A  actived={screen === 2 ? true : false} href={true} onClick={e => setScreen(2)}>Para entregadores</A>
        </NavigationScreen>
        {switchRender}
    </Main>
}