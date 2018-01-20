function doTime()
{
    var time = "";
    var now = new Date();
    time +=  now.getHours() +":" + now.getMinutes() + ":" + now.getSeconds();
    document.getElementById("time").innerHTML = time;
}

setInterval(doTime, 125);
