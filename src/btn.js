import React from 'react';


function btnall(props){
    console.log(props)
    return (
        <div className="extra content">
            <div className="ui two buttons">
            <div className="ui basic green button">Approve</div>
            <div className="ui basic red button">Decline</div>
            </div>
</div>
    )
}


export default btnall;