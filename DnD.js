let btns = document.querySelectorAll('.circl');

btns.forEach(btn => {
    btn.addEventListener('click', function() {
        btn.classList.add('blur-in-expand');
    });
    
    btn.addEventListener('animationend',
    AnimationHandler, false);
    
    function AnimationHandler () {
        btn.classList.remove('blur-in-expand');
    }
});

// btn.addEventListener('click', function() {
//     btn.classList.add('blur-in-expand');
// });

// btn.addEventListener('animationend',
// AnimationHandler, false);

// function AnimationHandler () {
//     btn.classList.remove('blur-in-expand');
// }

let btnsLink = document.querySelectorAll('.js-btn-link');

btnsLink.forEach(btnLink=>{
    const href = btnLink.getAttribute('data-href');
    
    if (href) {
        btnLink.addEventListener('click', function() {
            window.location.href = href
        });
    };
});

