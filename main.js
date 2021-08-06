var number = 0;
var vbucks = 0;
lastmegalovania = Date.now();

function amogus(){
    number += 1;   
}

function sus(){
    if(number >= 10 * Math.pow(1.01, vbucks)){
        number -= 10 * Math.pow(1.01, vbucks);
        vbucks++;
    }
}

function sans(megalovania){
    number += vbucks * (megalovania / 1000);
}

function undertail(){
    document.getElementById("impostor").innerHTML = "YO HAV " + number.toFixed(2) + "IQ AMOUGUS IMPOSTOR OUPLYS!!!1!!111!!!!";
    document.getElementById("papyrus").innerHTML = "PURCHASE VBUCKS NOW FOR" + (10*Math.pow(1.01, vbucks)).toFixed(2) + "AMOGUS IMPOSTOR IQ!!!!!!!!!!!!!!!";
    document.getElementById("crewmate").innerHTML = "YOU HAEV" + vbucks + "VBUCKS !!!1!!111!!!";
    document.getElementById("robux").innerHTML = "THYE AR INCRESNG UR ULTRA IMPOSTOR PLAY IQ BY" + vbucks + "PR SECND!!!!!!!!!!"
}

function communism(){
    megalovania = Date.now() - lastmegalovania;
    sans(megalovania);
    undertail();
    lastmegalovania = Date.now();
}

setInterval(communism, 50);