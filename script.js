const toggle = document.querySelector('#toggle')
const slideCircle = document.querySelector('#slide-circle')
const amount = document.querySelector('#amt');
const slider = document.querySelector('#price-slider')
const track = document.querySelector('#track')

const price = document.querySelector('#amt')
const pages = document.querySelector('#pages')
const monthOrYear = document.querySelector('#month-or-year');

let ipcPrice =16.00;
let interval = 'month';
let yearly = toggle.checked;

function changePrice(value){
    if(value =='0'){
        if(interval =='month'){
        ipcPrice = 8.00; 
        amount.innerHTML = `$${ipcPrice}.00`
        monthOrYear.innerHTML = '/month'
        }
        if(interval =='year'){
            ipcPrice = (8.00 * 12) * 0.75;
            amount.innerHTML = `$${ipcPrice}.00`
            monthOrYear.innerHTML = '/year'
        }
        pages.innerHTML = '10k ';
    }
    if(value =='1'){
        if(interval =='month'){
            ipcPrice = 12.00;
            amount.innerHTML = `$${ipcPrice}.00`
            monthOrYear.innerHTML = '/month'
        }
        if(interval =='year'){
            ipcPrice = (12.00 * 12) * 0.75;
            amount.innerHTML = `$${ipcPrice}.00`
            monthOrYear.innerHTML = '/year'
        }
        pages.innerHTML = '50k ';
    }
    if(value =='2'){
        if(interval =='month'){
            ipcPrice = 16.00;
            amount.innerHTML = `$${ipcPrice}.00`
            monthOrYear.innerHTML='/month';
        }
        if(interval =='year'){
            ipcPrice = (16.00 * 12) * 0.75;
            amount.innerHTML = `$${ipcPrice}.00`
            monthOrYear.innerHTML = '/year';
        }
        pages.innerHTML = '100k ';
    }
    if(value =='3'){
        if(interval=='month'){
            ipcPrice = 24.00;
            amount.innerHTML = `$${ipcPrice}.00`
            monthOrYear.innerHTML='/month';
        }
        if(interval =='year'){
            ipcPrice = (24.00 * 12) * 0.75;
            amount.innerHTML = `$${ipcPrice}.00`
            monthOrYear.innerHTML = '/year';
        }
        pages.innerHTML = '500k ';
    }
    if(value =='4'){
        if(interval =='month'){
            ipcPrice = 36.00;
            amount.innerHTML = `$${ipcPrice}.00`
            monthOrYear.innerHTML='/month';
        }
        if(interval =='year'){
            ipcPrice = (36.00 * 12) * 0.75;
            amount.innerHTML = `$${ipcPrice}.00`
            monthOrYear.innerHTML = '/year';
        }
        pages.innerHTML = '1m ';
    }
}

toggle.addEventListener('input',()=>{
    if(toggle.checked == true){
        slideCircle.classList.add('slide-the-toggle')
        interval = 'year';
        changePrice(slider.value);
    }else{
        slideCircle.classList.remove('slide-the-toggle')
        interval ='month';
        changePrice(slider.value);
    }
})
slider.addEventListener('input', ()=>{
    track.style.width= slider.value*25+'%';
    changePrice(slider.value)
})