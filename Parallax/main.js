let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountain3 = document.getElementById('mountain3');
let mountain4 = document.getElementById('mountain4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let logo = document.querySelector('.logo2');


window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value +'px';
    moon.style.top = value * 4+'px';
    mountain3.style.top = value * 2+'px';
    mountain4.style.top = value * 1.5+'px';
    river.style.top = value +'px';
    boat.style.top = value +'px';
    boat.style.left = value *3 +'px';
    logo.style.fontSize = value +'px';

    if (scrollY >= 67){
        logo.style.fontSize  = 67 +'px';
        logo.style.position= 'fixed';

        if (scrollY>= 478){
            logo.style.display='none';
        }
        else{
            logo.style.display='block';
        }
        if (scrollY>=107){
            document.querySelector('.main').style.background='linear-gradient(#376281, #10001f)';
            logo.style.color='#6495ED';
        }else{
            document.querySelector('.main').style.background='linear-gradient(#200016, #10001f)';
            logo.style.color='#a9a9e4';
        }

        
    }
}
