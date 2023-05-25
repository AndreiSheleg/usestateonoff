import React, {useState} from 'react';

export type OnOffPropsType = {
   // on: boolean
}

export const OnOff = (props: OnOffPropsType) => {
    console.log('OnOFF RENDERING')
    let [on, setOn] = useState<boolean>(false) //hook
    console.log('on: ',on)
    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor:on ? 'green' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor:on ?'white': 'red'

    }
    const indikatorStyle = {
        // значения пишутся через ЗАПЯТУЮ, бордер радиус через кэмелкейс
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '10px',
        backgroundColor: on ?'green': 'red'
    }


    return (
        <div>
            <div style={onStyle} onClick={ () => { setOn(true)} }>On</div>
            <div style={offStyle} onClick={ ()=> { setOn(false)} }>Off</div>
            <div style={indikatorStyle}></div>
        </div>
    );
};