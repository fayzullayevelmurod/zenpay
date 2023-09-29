let bars = document.querySelector('.bars');
let mobile_menu = document.querySelector('.mobile_menu');
let body = document.querySelector('body');
let head_link = document.querySelectorAll('header .mobile_menu a[class="link"]');

if (bars) {
    bars.onclick = () => {
        if (mobile_menu.classList.contains('active')) {
            mobile_menu.classList.add('noActive')
            mobile_menu.classList.remove('active')
            body.classList.remove('active_body_from_menu');
        } else {
            mobile_menu.classList.remove('noActive')
            mobile_menu.classList.add('active')
            body.classList.add('active_body_from_menu');
        }
    }
    
    head_link.forEach((item) => {
        item.onclick = () => {
            mobile_menu.classList.add('noActive')
            mobile_menu.classList.remove('active')
            body.classList.remove('active_body_from_menu');
        }
    })
}

let btn1 = document.querySelectorAll('.open_modal');
let modal = document.querySelector('.modal');
let modal_close = document.querySelector('.modal .modal_close');

if (btn1.length) {
    btn1.forEach(btn => {
        btn.onclick = e => {
            e.preventDefault();
            modal.classList.remove('noActive');
            modal.classList.add('active');
            body.classList.add('modal_active');
        }
    })

    modal_close.onclick = () => {
        modal.classList.add('noActive');
        modal.classList.remove('active');
        body.classList.remove('modal_active')
    }
}

AOS.init();