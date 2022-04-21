var a, x=1;

setInterval(
    function(){
        a = Math.floor(Math.random()*8);
        if(a==x){ ++a }
        x = a;
        for(var i=1; i<=9; i++){
            document.querySelector(`.a${i}`).style.background='rgb(26, 25, 25)';
        }
        document.querySelector(`.a${a+1}`).style.background='#f55';
    },
    1000
)

