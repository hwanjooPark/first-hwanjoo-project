"use strict"

const socket = io();

const nickname = document.querySelector("#nickname")
const chatList = document.querySelector(".listt")
const chatInput = document.querySelector(".inputt")
const sendButton = document.querySelector(".buttonn")
const displayContainer = document.querySelector(".display-container")

chatInput.addEventListener("keypress", (event)=>{
    if(event.keyCode === 13){
            send();
    }   if(event.keyCode === 13) {
        return test();
    } 
    } 
  
) 

function send(){
    const param = {
        name: nickname.value,
        msg: chatInput.value
    }
    socket.emit("chatting", param)
}

sendButton.addEventListener("click",send)

socket.on("chatting", (data) => {
    const {name, msg, time} = data;
    const item = new LiMedel(name, msg, time);
    item.makeLi()
    displayContainer.scrollTo(0, displayContainer.scrollHeight)
})

function LiMedel(name, msg, time){
    this.name=name;
    this.msg=msg;
    this.time=time;

    this.makeLi = ()=>{
        const li= document.createElement("li")
        li.classList.add(nickname.value === this.name ? "sent": "received")
        const dom =`<span class="profile">
        <span class="user">${this.name}</span>
    <img class="image" src="https://placeimg.com/50/50/any" alt="any">
    </span>
    <span class="message">${this.msg}</span>
    <span class="time">${this.time}</span>`;
    li.innerHTML = dom;
    chatList.appendChild(li);
    }
}
