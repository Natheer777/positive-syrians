

const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show')
        }
    });
})




const scrollLeft = document.querySelectorAll('.left')
const scrollRight = document.querySelectorAll('.right')
const scrollTop = document.querySelectorAll('.top')
scrollLeft.forEach((el) => observer.observe(el));
scrollRight.forEach((el) => observer.observe(el));
scrollTop.forEach((el) => observer.observe(el));

let span = document.querySelector(".upp");

window.onscroll = function () {

  this.scrollY >= 1000 ? span.classList.add("look") : span.classList.remove("look");
};

span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

