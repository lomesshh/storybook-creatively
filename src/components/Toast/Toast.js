import React, { useState } from 'react'
import './Toast.css'

const Toast = () => {


// var toastBtn = document.getElementsByClassName("toast")[0];

// // toastBtn.onclick = function () {
// //  var x = document.getElementById("toast-message");
// //  x.className = "show";

// //  setTimeout(function () 
// //  {
// //  x.className = x.className.replace("show", "");
// //  }, 3000);};

 const [visible, setVisible] = useState()

 const viewToast = () => {
    setVisible('show')
    setTimeout(() => {
        setVisible('')
    }, 3000);
 }

  return (
    <div>
        <button className='toast btn' onClick={viewToast}>Show Toast</button>
        <div className={`toast-message ${visible}`}><p>This is demo Toast</p></div> 
    </div>
  )
}

export default Toast