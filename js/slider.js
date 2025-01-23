class Slider {
    constructor(id){
        this.id = id;
    }

    showSlide(index){
        const slides = document.querySelectorAll('.slide');
        if(index>=slides.length){
            index=0;
        }
        const slide = slides[index];
    
        slide.style.display = 'block';
        slide.style.opacity = "1";
    
        document.querySelector("#slider").style.opacity = 1;
        
    
        document.querySelectorAll('div.dot')[index].style.backgroundColor = "#07688f";
        document.querySelectorAll('div.dot')[index].style.width = "2rem";
        document.querySelectorAll('div.dot')[index].style.height = "2rem";
        document.querySelectorAll('div.dot')[index].style.marginBottom = "0rem";
        document.querySelectorAll('div.dot')[index].style.marginTop = "0rem";
        
    }

    hideSlide(index){
        const slides = document.querySelectorAll('.slide');
        const slide = slides[index];
        slide.style.display = null;
        slide.style.opacity = null;
    
        document.querySelector("#slider").style.opacity = 0;
    
        document.querySelectorAll('div.dot')[index].style.backgroundColor = "#08A6E4";
        document.querySelectorAll('div.dot')[index].style.width = "1rem";
        document.querySelectorAll('div.dot')[index].style.height = "1rem";
        document.querySelectorAll('div.dot')[index].style.marginBottom = "0.5rem";
        document.querySelectorAll('div.dot')[index].style.marginTop = "0.5rem";
    }


}

//SLIDER
let currentIndex = 0;

function showSlide(index){
    const slides = document.querySelectorAll('.slide');
    if(index>=slides.length){
        index=0;
    }
    const slide = slides[index];

    slide.style.display = 'block';
    slide.style.opacity = "1";

    document.querySelector("#slider").style.opacity = 1;
    

    document.querySelectorAll('div.dot')[index].style.backgroundColor = "#07688f";
    document.querySelectorAll('div.dot')[index].style.width = "2rem";
    document.querySelectorAll('div.dot')[index].style.height = "2rem";
    document.querySelectorAll('div.dot')[index].style.marginBottom = "0rem";
    document.querySelectorAll('div.dot')[index].style.marginTop = "0rem";
    
}

function hideSlide(index){
    const slides = document.querySelectorAll('.slide');
    const slide = slides[index];
    slide.style.display = null;
    slide.style.opacity = null;

    document.querySelector("#slider").style.opacity = 0;

    document.querySelectorAll('div.dot')[index].style.backgroundColor = "#08A6E4";
    document.querySelectorAll('div.dot')[index].style.width = "1rem";
    document.querySelectorAll('div.dot')[index].style.height = "1rem";
    document.querySelectorAll('div.dot')[index].style.marginBottom = "0.5rem";
    document.querySelectorAll('div.dot')[index].style.marginTop = "0.5rem";
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
    showSlide(currentIndex);
});

async function changeSlide(index){
    if(index>=document.querySelectorAll('.slide').length){
        index=0;
    }
    hideSlide(currentIndex);
    currentIndex = index;
    await delay(500);
    showSlide(currentIndex);
    
}

const delay = ms => new Promise(res => setTimeout(res, ms));

async function changeSlideAutomatic(index){
    while(true){
        await delay(3000);
        if(index!==currentIndex+1){
            if(index<currentIndex+1){
                index++;
            } else if(index>currentIndex+1){
                index--;
            }
            await delay(3000); //EXTRA WAIT FOR USER IF USER CHANGE SLIDE MANUALLY
        }

        if(index>=document.querySelectorAll('.slide').length){
            changeSlide(0);
            index=0;
        } else {
            changeSlide(currentIndex+1);
        }
        index++;
    }
    
    
}

changeSlideAutomatic(currentIndex+1);


const dots = document.querySelectorAll('div.dot');
for(let i=0; i< dots.length; i++){
    dots[i].addEventListener('click', () => changeSlide(i));
};