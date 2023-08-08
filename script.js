var hr = 0;
var min = 0;
var sec = 0;
var count = 0;

var timer = false;


function start(){
    
    timer = true;
    stopwatch();
}

function stop(){

  timer = false;
}

function reset(){

  timer = false;
  
    hr = 0;
    min = 0;
    sec = 0;
    count = 0;

  document.getElementById("hr").innerHTML= "00";

  document.getElementById("min").innerHTML = "00";

  document.getElementById("sec").innerHTML = "00";

  document.getElementById("count").innerHTML = "00";

}

function stopwatch(){
    if(timer == true){
        count++;
        if(count==100){
            count = 0;
            sec++;
        }

        if(sec == 60){
            sec = 0;
            count = 0;  
            min++;
        }

        if(min == 60){
            sec = 0;
            min = 0;
            count = 0;
            hr++;
        }

        var hrString = hr;
        var secString = sec;
        var minString = min;
        var countString = count;
        if(hr<10){
            hrString = "0" + hr;
        }

        if(min<10){
            minString = "0" + min;
        }

        if(sec<10){
            secString = "0" + sec;
        }

        if(count<10){
            countString = "0" + count;
        }

        document.getElementById("count").innerHTML = countString;
        document.getElementById("sec").innerHTML = secString;
        document.getElementById("min").innerHTML = minString;
        document.getElementById("hr").innerHTML = hrString;
        setTimeout("stopwatch()",10)
    }

}