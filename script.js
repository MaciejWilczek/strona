window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        //console.log("test1");
        const navbar = document.body.querySelector('#mainNav');
        if (!navbar) {
            return;
        }
        if (window.scrollY === 0) {
            navbar.classList.remove('navbar-zwiniety')
            navbar.classList.add('navbar-rozwiniety')
            //console.log("test2");
        } else {
            navbar.classList.add('navbar-zwiniety')
            navbar.classList.remove('navbar-rozwiniety')
            //console.log("test3");
        }

    };
    //console.log("test");

    navbarShrink();

    document.addEventListener('scroll', navbarShrink);

    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };
    
    console.log("dziala")
    var row = document.getElementById("karty");
    for(var i=0; i<6; i++)
    {
        //console.log("dziala")
        row.innerHTML+='<div class="col-lg-3 col-sm-5 animacja-scroll mt-2"> <div class="card"> <img src="./img-prace/Logo Bieda Manager.png" class="card-img-top img-fluid" alt="logo pracy semestralnej"> <div class="card-body"> <h5 class="card-title">Bieda Football Manager 2077</h5> <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p> <a href="#" class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#example-offcanvas">Zobacz więcej</a> </div> </div> </div>';
    }
});
const wheel = document.querySelector('.kolo-scroll');

function rotateWheel() {
    document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight))
}

window.addEventListener('scroll', rotateWheel);

const toasst = new bootstrap.Toast('.toast');

function PokazToast()
{
    bootstrap.Toast.getOrCreateInstance(document.getElementById('toast')).show()
}