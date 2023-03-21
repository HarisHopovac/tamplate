//about section 

let btns = document.querySelectorAll('.about .leftAbout button');

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        let single_btn = e.target;
        single_btn.classList.add('purple');
        let plus = single_btn.querySelector('span');
        let p = single_btn.querySelectorAll('p');
        p.forEach((paragraph) => {
            
            paragraph.style.display = 'block';
            plus.innerText = '-';
            paragraph.addEventListener('click', () =>{
                paragraph.style.display = 'none';
                single_btn.classList.toggle('purple');
                plus.innerText = '+';
            });
            
         });
    });
});

//menu

let menuBtn = document.querySelector('.leftNav button');

menuBtn.addEventListener('click', () => {
    nav = document.querySelector('.rightNav');

    if(menuBtn.innerText === 'Menu') {
        nav.style.transform = 'translateY(10%)';
        menuBtn.innerText = 'close';
    } else if (menuBtn.innerText === 'close') {
        nav.style.transform = 'translateY(-100%)';
        menuBtn.innerText = 'Menu';
    }
})

//img slider

let leftBtn = document.querySelector('#left-btn');
let rightBtn = document.querySelector('#right-btn');
let imgs = document.querySelectorAll('.background');


let img = 0;

const moveRight = () => {
    displayNone();

    img++;

    if(img === imgs.length) {
        img = 0;
    }

    imgs[img].style.display = 'block';
}

const moveLeft = () => {
    displayNone();
    
    img--;

    if(img === -1) {
        img = imgs.length -1;
    }

    imgs[img].style.display = 'block';
}

const displayNone = () => {
    imgs.forEach((img) => {
        img.style.display = 'none';
    })
}

rightBtn.addEventListener('click', moveRight);
leftBtn.addEventListener('click', moveLeft);

//num intervals

window.addEventListener('scroll', () => {
    scrollValue = document.documentElement.scrollTop;

    if(scrollValue > 2600) {
        let i = 0;
        const interval = setInterval(()=> {
            i++;
            document.querySelector('.numbers .single-number .number').innerText = `${i} +`;
            if(i === 150) {
                clearInterval(interval);
            }
        },20);

        let k = 0;
        const interval2 = setInterval(()=> {
            k++;
            document.querySelector('.numbers .single-number .number2').innerText = `${k} +`;
            if(k === 854) {
                clearInterval(interval2);
            }
        },1);

        let j = 0;
        const interval3 = setInterval(()=> {
            j++;
            document.querySelector('.numbers .single-number .number3').innerText = `${j} +`;
            if(j === 50) {
                clearInterval(interval3);
            }
        },70);

        let h = 0;
        const interval4 = setInterval(()=> {
            h++;
            document.querySelector('.numbers .single-number .number4').innerText = `${h} +`;
            if(h === 15) {
                clearInterval(interval4);
            }
        },200);
            }
        } ) 

//courses

let category = document.querySelectorAll('.courses .menu ul li');
category.forEach((li) => {
    li.addEventListener('click', () => {
        let att = li.getAttribute('data-category');
        let singleCategory = document.querySelectorAll('.single-course');

        singleCategory.forEach((item) => {
            item.style.display = 'none';
        })

        if(att === 'all') {
            singleCategory.forEach((item) => {
                item.style.display = 'block';
            });
        };

        singleCategory.forEach((item) => {
            if(item.getAttribute('data-category').includes(att)) {
                item.style.display = 'block';
            };
        });
    });
    
});

