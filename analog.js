
// var tim = setInterval(clock);

// function clock(){
// var date = new Date();
// var sec = date.getSeconds();
// var min = date.getMinutes();
// var hour = date.getHours();

// document.getElementById("hour").style.transform = "rotate(" + hour * 30 + "deg)";

// document.getElementById("min").style.transform = "rotate(" + min * 6 + "deg)";

// document.getElementById("sec").style.transform = "rotate(" + sec * 6 + "deg)";


// }

function clock(){
    var date= new Date();

    var hour = ( date.getHours() + date.getMinutes()/60) / 12 * 360;
    var min = date.getMinutes() / 60 * 360;
    var sec = ( date.getSeconds() + date.getMilliseconds()/1000) /60 * 360;
    document.getElementById('hour').style.transform = 'rotate('+hour+'deg)';
    document.getElementById('min').style.transform = 'rotate('+min+'deg)';
        document.getElementById('sec').style.transform = 'rotate('+sec+'deg)';
    document.getElementById("demo").innerHTML= date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
        }
    setInterval(clock,1);

function btn(){
    console.log("h")
    document.getElementById("clock").style.backgroundColor="black";
    document.getElementById("design1").style.backgroundColor="black";
}
function btn1(){
    console.log("h")
    document.getElementById("clock").style.backgroundColor="orange";
    document.getElementById("design1").style.backgroundColor="orange";

}


