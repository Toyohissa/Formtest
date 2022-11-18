const button = document.querySelector('#button');
const header = document.querySelector('.welc');
const form = document.querySelector('#Form');
const popup = document.querySelector('.popup');
const sub = document.querySelector('.sub');
let end = true;
function submit(){
    if (end){
        header.style.opacity = 0;
        form.style.opacity = 0;
        button.style.opacity = 0;
        setTimeout(() => {
        popup.style.zIndex = 100;
        popup.style.opacity = 1;
        }, 500);
        end = false;
    }else{
        setTimeout(() => {
            header.style.opacity = 1;
            form.style.opacity = 1;
            button.style.opacity = 1;
        }, 500);
        popup.style.zIndex = 0;
        popup.style.opacity = 0;
        end = true;
    }  
}
button.addEventListener('click', submit);
sub.addEventListener('click', submit);
