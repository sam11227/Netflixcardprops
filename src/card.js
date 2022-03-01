import React from 'react';
import Btn from './btn';

function Cards(props){
    console.log('props')
    return (
        <>
           <div className="ui link cards">
                <div className="card">
                    <div className="image">
                         <img alt='' src={props.imgscr}/>
                    </div>
                    <div className="content">
                         <div className="header">{props.childeren}</div>
                    <div className="description">
                        {props.about    }
                    </div>
                    </div>
                    <Btn/>
                </div>
            </div>
        </>
    )
}
export default Cards;