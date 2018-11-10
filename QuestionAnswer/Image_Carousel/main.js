
window.addEventListener('load', function(){

let slideIndex = 0;

const showSlides = () => {
    debugger;
    // step 1: Grep all divs
    const slides = document.getElementsByClassName("myslides");

    // step 2: hide all divs
   
    document.querySelector(".myslides").style.display = 'none';
    
    // slides[slideIndex].style.display = "block";
    
    /*for(let i=0; i < slides.length; i++){
        setTimeout(() => {
            slides[i].style.display = "block";
            
        }, 3000)
        
    }*/
   
    // step 3: index increment 
    // slideIndex++;

     // step 4: condition if greater than slider length 
    // if(slideIndex > slides.length){
        // slideIndex = 1;
    // }
    // step 5: get index  and display block
    
    // slides[slideIndex - 1].style.display = "block";
    
    // step 6: recursively looping 
    
    // setTimeout(showSlides, 3000);
   
};

showSlides();


})