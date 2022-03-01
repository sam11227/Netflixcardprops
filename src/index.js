import React from 'react';
import ReactDOM from 'react-dom';

import CardForm from"./card"
import Btn from "./btn";
import "./index.css";


const App = () =>{
    return(
        <div className='ui container comments' style={{display:'flex'}}>
            <CardForm 
            imgscr='https://www.whatsappimages.in/wp-content/uploads/2021/04/black-whatsapp-dp-images-Photo-Download.gif'
            content = 'Sam'
            about = 'Web Devloper'/>
            <CardForm
            imgscr='https://w0.peakpx.com/wallpaper/122/734/HD-wallpaper-dark-sexy-dark-thumbnail.jpg'
            content = 'Jak'
            about = 'Graphic Design'/>
            <CardForm
            imgscr='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1cY2xKKJogtPZS_-3qB2O3m3BxUMJq59Wnw&usqp=CAU'
            content = 'Jon'
            about = 'Web Designer'/>
    </div>
    )
}

ReactDOM.render(<App/>,document.querySelector('#root'));
