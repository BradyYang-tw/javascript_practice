// if else & switch
// outout： console.log()、window.alert()、document.write()、innerHTML()

//p1
var test = 123;
if (test<=100){
    console.log("Goog Job!");
} else if(test === 103){
    console.log("soso!");
} else{
    console.log("It's OK!")
    document.getElementById("demo").innerHTML = "go!"
}

//p2
var test2 = "handsomeboy"
switch(test2){
    case "me":
        console.log("Ofcourse");
        break;
    case "you":
        console.log("Impossible!!!");
        break;
    case "handsomeboy":
        console.log("WTF!!!?");
        break;
}

//p3
var myday = new Date().getDay();mydate = new Date().getDate();tt = new Date().toDateString();
console.log(myday)
console.log(mydate)
console.log(tt)

switch(myday){
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("Work day!");
        break;
    case 6:
    case 7:
        console.log("Happy day!");
        break;

}

var x = new Date().getHours();
console.log(x);

function ShowTime(){
    　var NowDate=new Date();
    　var h=NowDate.getHours();
    　var m=NowDate.getMinutes();
    　var s=NowDate.getSeconds();　
    　document.getElementById('showbox').innerHTML = h+'時'+m+'分'+s+'秒';
    　setTimeout('ShowTime()',1000);
    }