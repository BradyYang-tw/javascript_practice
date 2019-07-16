// create random function
function get_random(min, max){
    return Math.floor(Math.random()*(max-min+1))+min;
}
console.log(get_random(1, 10));
console.log(Math.random());
console.log(Math.floor(Math.random()*10)+0);

function gogo(){
    a = aa.t1.value;
    b = get_random(1, 10);
    if(a < b){
    document.write("很抱歉您並未獲得獎品");
    }else if(a > b){
    document.write("恭喜您獲得精美禮物");
    }else{
    document.write("很抱歉您並未獲得獎品");
    }
}