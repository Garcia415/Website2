const typed = new Typed('.auto',{
    strings : ['Angel Garcia'],
    typeSpeed : 150,
    startDelay: 2200
});


const tl = gsap.timeline({defaults: {ease: 'power1.out'}})

tl.to('.text', {y: "0%", duration: 1, stagger: 0.25})
tl.to('.slider', {y: "-100%", duration: 1.5, stagger: 0.25, delay: 0.5})
tl.to('.intro', {y: "-100%", duration: 1}, '-=1')



const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    })
})
const hiddenElements = document.querySelectorAll('.hidden')
const hiddenElements2 = document.querySelectorAll('.hidden-diverse')
hiddenElements.forEach((el) => observer.observe(el));
hiddenElements2.forEach((el) => observer.observe(el));