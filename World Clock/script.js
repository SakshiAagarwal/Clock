const UI = {
    date: document.querySelector('.date'),
    am_pm: document.querySelector('.am-pm'),
    second: document.querySelector('.hand--second'),
    minute: document.querySelector('.hand--minute'),
    hour: document.querySelector('.hand--hour')
}

function updateClock(){
    const now = new Date();
    //update date
    const date = now.getDate();
    UI.date.textContent = date;
    UI.am_pm.textContent = now.getHours() > 12 ? 'PM' : 'AM';

    htime = now.getHours();
    mtime = now.getMinutes();
    stime = now.getSeconds();
    mstime = now.getMilliseconds();

    hRotation = 30*htime + mtime/2;
    mRotation = 6*(mtime + stime / 60);
    sRotation = 6*(stime + mstime / 1000);
    
    //update clock hands
    UI.hour.style.transform = `rotate(${hRotation}deg)`;
    UI.minute.style.transform = `rotate(${mRotation}deg)`;
    UI.second.style.transform = `rotate(${sRotation}deg)`;
    requestAnimationFrame(updateClock);
}

requestAnimationFrame(updateClock);