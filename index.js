
const navEl = document.querySelector("nav");
const sectionOne =document.querySelector(".home-intro")

const sectionOneOptions = {
    rootMargin: "-250px 0px 0px 0px"
 };

const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver) {
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            navEl.classList.add("nav-scrolled");
        } else {
            navEl.classList.remove("nav-scrolled")
        }
    })
}, sectionOneOptions);

sectionOneObserver.observe(sectionOne);


const texts = ['Professional Email Software',"Elegantly simple email marketing"]
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type(){
    if(count === texts.length){
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector('.typing').textContent = letter;
    if(letter.length === currentText.length){
        count++;
        index = 0;
    }
    setTimeout(type,100)
}())








