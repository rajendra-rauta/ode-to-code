
/* ====================== toogle icon navbar =======================*/

let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuicon.onclick =() => {
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

};



/* ====================== scroill section avtive link =======================*/
let section = document.querySelectorAll( 'section');
let navlink = document.querySelectorAll( 'header nav a');


window.onscroll = () => {
    section.forEach(sec => {
        let top =window.scrollY;
        let offset =sec.offsetTop -150;
        let height =sec.offsetHeight;
        let id = sec.getAttribute('id');


        if(top >= offset  && top < offset+ height){
            navlink.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +  ']').classList.add('active');

        });

        };

    });


/* ====================== stickly navbar  =======================*/

let header =document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);






/* ====================== remove toggle icon and navbar when click navbar link (scroll) =======================*/


menuicon.classList.remove('bx-x');
navbar.classList.remove('active');

};

/* ====================== scrole reveal  =======================*/
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration:2000,
    delay: 200
});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .service-container, .protofolio-box, .contact form, .skills-row ', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img ', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content ', { origin: 'right' });




/* ====================== typed javascript =======================*/


const typed = new Typed('.multiple-text',{
    strings: ['Frontend Devloper','Student','Web Devloper'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true
    


});