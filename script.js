window.onload = function() {
    // variables & functions
        // submenu
        let submenuBtn = document.querySelector('#submenu__btn');
        let headerCont = document.querySelector('header');
        let rotateSvg = document.querySelector('#rotatesvg');
        let submenuBody = document.querySelector('.header__submenu');
        // /submenu
        // high_slider
        let arrowLeft = document.querySelector('#arrow__left');
        let arrowRight = document.querySelector('#arrow__right');
        let counter = document.querySelector('#numofimg');
        let countOfImg = document.querySelector('#countofimg');
        let arrayOfImg = Array.from(document.querySelectorAll('.top__img'));
        let sliderBody = document.querySelector('.slider__wrapper');
        // /high_slider
        // burger_menu
        let burgerBtn = document.querySelector('.burger__button');
        let burgerOpn = document.querySelector('.open__burger');
        let burgerCls = document.querySelector('.close__burger');
        let burgerBody = document.querySelector('.burger__body');
        let pageBody = document.querySelector('body');
        let darkBg = document.querySelector('.dark_bg');
        let requestBtn = document.querySelector('.sendrequest');
        // /burger_menu
        // actions__slider
        let actSliderBody = document.querySelector('.actions__slider');
        let actArrowLeft = document.querySelector('#actions_left');
        let actArrowRight = document.querySelector('#actions_right');
        // /actions__slider
        // visit__forms
        let formVisitBody = document.querySelector('.form__visit');
        let formVisitBtn = document.querySelector('.sendrequest');
        let closeBtnVisit = document.querySelector('.close__form__visit');
        let formCallmeBtn = document.querySelector('.send__button');
        let closeBtnCallme = document.querySelector('.close__form__callme');
        let formCallmeBody = document.querySelector('.form__callme');
        let formBg = document.querySelector('.form_bg');
        console.log(formCallmeBtn, closeBtnCallme);
        // /visit__forms
        // other
        let servBtn = document.querySelector('#servicebutton');
        if (window.innerWidth < 701) {
            servBtn.innerHTML = 'Услуги автосервиса';
        }
        let detector = document.querySelector('.car__logo');
        // /other
    // /variables & functions

    // construct_page
    countOfImg.innerHTML = '';
    countOfImg.innerHTML = `${arrayOfImg.length}`;
    // /construct_page

    // events
        // submenu
        let subOpen = () => {
            submenuBody.classList.add('submenu__active');
            rotateSvg.classList.add('rotate180');
        };
        let subClose = () => {
            submenuBody.classList.remove('submenu__active');
            rotateSvg.classList.remove('rotate180');
        };
        submenuBtn.addEventListener('mouseenter', subOpen);
        headerCont.addEventListener('mouseleave', subClose);
        // /submenu
        // high_slider
        const moveSliderRight = () => {
            if (counter.innerHTML === '1') {
                    sliderBody.classList.remove('moveto1');
                    sliderBody.classList.add('moveto2');
                    counter.innerHTML = +counter.innerHTML + 1;
                    moveSliderRight;
            } else if (counter.innerHTML === '2') {
                sliderBody.classList.remove('moveto2');
                sliderBody.classList.add('moveto3');
                counter.innerHTML = +counter.innerHTML + 1;
                moveSliderRight;
            } else if (counter.innerHTML === '3'){
                moveSliderRight;
            }
        };
        const moveSliderLeft = () => {
            if (counter.innerHTML === '1') {
                moveSliderLeft;
            } else if (counter.innerHTML === '2') {
                sliderBody.classList.remove('moveto2');
                sliderBody.classList.add('moveto1');
                counter.innerHTML = +counter.innerHTML - 1;
                moveSliderLeft;
            } else if (counter.innerHTML === '3'){
                sliderBody.classList.remove('moveto3');
                sliderBody.classList.add('moveto2');
                counter.innerHTML = +counter.innerHTML - 1;
                moveSliderLeft;
        }
        };
        arrowRight.addEventListener('click', moveSliderRight);
        arrowLeft.addEventListener('click', moveSliderLeft);
        // /high_slider
        // burger_menu
        burgerBtn.addEventListener('click', () => {
            burgerBody.classList.toggle('burger__hide');
            burgerOpn.classList.toggle('burger__hidden');
            burgerCls.classList.toggle('burger__hidden');
            darkBg.classList.toggle('dark_bg_visible');
            pageBody.classList.toggle('of_hidden');
            requestBtn.classList.toggle('big__button');
            submenuBody.classList.toggle('submenu__disabled');
            submenuBody.classList.remove('submenu__active');
        });
        darkBg.addEventListener('click', () => {
            burgerBody.classList.add('burger__hide');
            burgerOpn.classList.toggle('burger__hidden');
            burgerCls.classList.toggle('burger__hidden');
            darkBg.classList.remove('dark_bg_visible');
            pageBody.classList.remove('of_hidden');
            requestBtn.classList.remove('big__button');
            submenuBody.classList.remove('submenu__disabled');
            submenuBody.classList.remove('submenu__active');
        });
        // /burger_menu
        // actions__slider
        actArrowLeft.addEventListener('click', () => {
            actSliderBody.classList.remove('actions_goto2');
            actSliderBody.classList.add('actions_goto1');
        });
        actArrowRight.addEventListener('click', () => {
            actSliderBody.classList.remove('actions_goto1');
            actSliderBody.classList.add('actions_goto2');
        });
        // /actions__slider
        // visit__forms
        let openFormVisit = () => {
            formVisitBody.classList.add('form__active');
            formBg.classList.add('form_bg_visible');
        };
        formVisitBtn.addEventListener('click', openFormVisit);
        let CloseFormVisit = () => {
            formVisitBody.classList.remove('form__active');
            formBg.classList.remove('form_bg_visible');
        };
        closeBtnVisit.addEventListener('click', CloseFormVisit);

        let openFormCallme = () => {
            formCallmeBody.classList.add('form__active');
            formBg.classList.add('form_bg_visible');
        }
        formCallmeBtn.addEventListener('click', openFormCallme);
        let closeFormCallme = () => {
            formCallmeBody.classList.remove('form__active');
            formBg.classList.remove('form_bg_visible');
        }
        closeBtnCallme.addEventListener('click', closeFormCallme);
        // /visit__forms
    // /events
};