console.log("done")

import "./index.css"
import Icon from '../pic.png';

const myIcon=new Image();
myIcon.src=Icon;
myIcon.classList.add("text")



const input = document.createElement("input");

input.setAttribute("id","mytext")


var button = document. createElement("button");
button. innerHTML = "submit";

button.addEventListener("click",()=>{
    const txt=document.querySelector("#mytext").value
    document.querySelector("p").innerHTML=txt
})
const container=document.querySelector("#text")
container.append(input,button,myIcon)