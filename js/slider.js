//SLIDER
let currentIndex = 0;

function showSlide(index){
    const slides = document.querySelectorAll('.slide');
    if(index>=slides.length){
        index=0;
    }
    const slide = slides[index];
    slide.style.display = 'block';

    document.querySelectorAll('div.dot')[index].style.backgroundColor = "#07688f";
}

function hideSlide(index){
    const slides = document.querySelectorAll('.slide');
    const slide = slides[index];
    slide.style.display = null;

    document.querySelectorAll('div.dot')[index].style.backgroundColor = "#08A6E4";
}


showSlide(0);

document.querySelector('div.next').addEventListener('click', ()=>{
    hideSlide(currentIndex);
    if(currentIndex>=document.querySelectorAll('.slide').length-1){
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    showSlide(currentIndex);
});

document.querySelector('div.prev').addEventListener('click', ()=>{
    hideSlide(currentIndex);
    if(currentIndex<=0){
        currentIndex = document.querySelectorAll('.slide').length-1;
    } else {
        currentIndex--;
    }
    console.log(currentIndex);
    showSlide(currentIndex);
});

function changeSlide(index){
    if(index>=document.querySelectorAll('.slide').length){
        index=0;
    }
    hideSlide(currentIndex);
    currentIndex = index;
    showSlide(currentIndex);
    
}

const delay = ms => new Promise(res => setTimeout(res, ms));

async function changeSlideAutomatic(index){
    while(true){
        await delay(2000);
        if(index>=document.querySelectorAll('.slide').length){
            changeSlide(0);
        } else {
            changeSlide(currentIndex+1);
        }
        
    }
    
    
}

changeSlideAutomatic(currentIndex+1);