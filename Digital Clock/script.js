const hours = document.getElementById("hours");
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const ampm = document.getElementById('ampm');

setInterval(()=> {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    h = h<10? "0" + h : h;
    m = m<10? "0" + m : m;
    s = s<10? "0" + s : s;
    am = h>12? "PM" : "AM";

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    ampm.innerHTML = am;
    
},1000);
