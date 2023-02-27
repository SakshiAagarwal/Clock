setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    mstime = d.getMilliseconds();

    hRotation = 30*htime + mtime/2;
    mRotation = 6*mtime;
    sRotation = 6*(stime + mstime / 1000);

    hour.style.transform = `rotate(${hRotation}deg)`;
    minute.style.transform = `rotate(${mRotation}deg)`;
    second.style.transform = `rotate(${sRotation}deg)`;
},1000);