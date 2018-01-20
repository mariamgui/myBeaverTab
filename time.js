function doTime()
{
    var time = "";
    var now = new Date();
    time += ('0' + now.getHours()).slice(-2) +":" +('0' +now.getMinutes()).slice(-2) + ":" + ('0'+now.getSeconds()).slice(-2);
    document.getElementById("time").innerHTML = time;
}

setInterval(doTime, 125);
