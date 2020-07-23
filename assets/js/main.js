//------------for menu button
const menu = document.querySelector('.nav-container');

const menuOpenBtn = document.querySelector('.nav-open-btn');
const menuCloseBtn = document.querySelector('.nav-close-btn');

menuOpenBtn.addEventListener('click', e=> {
    menu.classList.add('nav-container-open');


    document.querySelector('body').addEventListener('click', e=>{
        if(!e.target.classList.contains('nav-container') && menu.clientWidth !== 0){
            menu.classList.remove('nav-container-open');
        }
    })
});




menuCloseBtn.addEventListener('click', e=> {
    menu.classList.remove('nav-container-open');
});


//-----------for scroll function on enquire button------
var scroll = new SmoothScroll('.smooth-scroll', {
    speed : 800,
    updateURL:false,
    offset:80
});



//-----------class type button
const classroomBtn = document.querySelector(".classroom-btn");
const oneononeBtn = document.querySelector('.one-on-one-btn');

const classTypeContainer = document.querySelector('.class-type-container');


console.log(classroomBtn);
console.log(oneononeBtn);
console.log(classTypeContainer);
oneononeBtn.addEventListener('click', e=>{
    classTypeContainer.style.marginLeft = '-100%';

    oneononeBtn.classList.remove('class-type-goto');
    classroomBtn.classList.add('class-type-goto');

    document.querySelectorAll('.benefits').forEach(item => {
            item.classList.remove('benefits-open');
    })
});
classroomBtn.addEventListener('click',e =>{
    classTypeContainer.style.marginLeft = '100%';

    oneononeBtn.classList.add('class-type-goto');
    classroomBtn.classList.remove('class-type-goto');

    document.querySelectorAll('.benefits').forEach(item => {
            item.classList.remove('benefits-open');
    })
})


//for showing page active tab
const classInfo = document.querySelector('.class-info');
const collection = document.querySelector('.collection');
const getInTouch = document.querySelector('.get-in-touch');

const menuList = document.querySelector('.nav-list');

window.addEventListener('scroll', e=>{
   
    if(collection.getBoundingClientRect().top - 100 < 0){
        menuList.querySelector('.to-collection').classList.add('active-section');
        menuList.querySelector('.to-get-in-touch').classList.remove('active-section');
        menuList.querySelector('.to-courses').classList.remove('active-section');


    }
    else if(getInTouch.getBoundingClientRect().top - 100 < 0){
        menuList.querySelector('.to-collection').classList.remove('active-section');
        menuList.querySelector('.to-get-in-touch').classList.add('active-section');
        menuList.querySelector('.to-courses').classList.remove('active-section');
    }
    else if(classInfo.getBoundingClientRect().top < 0){
      
        menuList.querySelector('.to-collection').classList.remove('active-section');
        menuList.querySelector('.to-get-in-touch').classList.remove('active-section');
        menuList.querySelector('.to-courses').classList.add('active-section');
    }
})

// for sticking header to the top on movement

// const header = document.querySelector('header');
// const hero = document.querySelector('.hero');

// window.addEventListener('scroll',e =>{
//     if(hero.getBoundingClientRect().top < 0){
//         header.style.position = "fixed";
//         console.log("it happened")
//     }
//     else{
//         header.style.position = '';
//     }
// })


//urgent btn code
document.querySelectorAll('.urgent-info').forEach(item => {
   item.querySelector('button').addEventListener('click', e =>{
       item.classList.add('urgent-info-close');
   })
  });

//for benfit button
document.querySelectorAll('.benefits').forEach(item => {
    item.addEventListener('click', e=>{
        item.classList.toggle('benefits-open');
    })
})



