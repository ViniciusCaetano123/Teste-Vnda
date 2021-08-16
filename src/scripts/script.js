    const svgHamburguer = document.querySelector('.menu-h-e img');
    const nav = document.querySelector('header nav');     
    const regex = new RegExp('menu.svg');
    const header =  document.querySelector('header') ; 
    const menu1 = document.querySelector('#menu1');
    const menu2 = document.querySelector('#menu2');
    const menu3 = document.querySelector('#menu3');
    const menu4 = document.querySelector('#menu4');
    const menu5 = document.querySelector('#menu5');
    const menu6 = document.querySelector('#menu6');
function exibirMenu(){
    if(regex.test(svgHamburguer.src)){
        svgHamburguer.src = "./img/exit.svg";
        nav.classList.add("active");
    }else{
        nav.classList.remove("active");
        svgHamburguer.src = "./img/menu.svg";
    }
};
function topZero(){
    if (document.documentElement.scrollTop == 0) {
        header.classList.remove('diminuir');
    }  else{
        header.classList.add('diminuir');
    }
}
topZero();
document.addEventListener("scroll", (e)=> {    
    topZero();
});
var pesquisar = true;
var pes = document.querySelector('.pesquisar');
function Pesquisar(){    
    pesquisar = !pesquisar;
    if(pesquisar){
        pes.style.display = "none";
    }else{
        pes.style.display = "flex";
    }
};
const swiperPizzas = new Swiper('.pizzas', {    
    direction: 'horizontal',
    slidesPerView:  3,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    breakpoints: { 
        900:{
            slidesPerView: 5,
        },        
        700: {
            slidesPerView: 3,
            spaceBetweenSlides: 30
        },  
        600: {
            slidesPerView: 3,
            spaceBetweenSlides: 30
        },  
        500: {
            slidesPerView: 2,            
        },
        400: {
            slidesPerView: 2,            
        },
        300: {
            slidesPerView: 2,
           
        }
    }
});
const swiperConteudos = new Swiper('.conteudos', {    
    direction: 'horizontal', 
    observer: true,
    observeParents: true,
    parallax:true,  
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
});

const lista =[
    {
        img:'https://picsum.photos/id/231/400/300',
        p1:'Lorem Ipsum is simply dummy',
        h1:'What is Lorem Ipsum?',
        p2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries'
    },
    {
        img:'https://picsum.photos/id/232/400/300',
        p1:'It is a long established',
        h1:'Why do we use it?',
        p2: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English'
    },
    {
        img:'https://picsum.photos/id/233/400/300',
        p1:'There are many variations',
        h1:'Where can I get some?',
        p2: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable'
    }
];
var p1 = document.querySelector('#menu4 > div > div.item-atual > div > p:nth-child(1)');
var h1 = document.querySelector('#menu4 > div.menu4 > div.item-atual > div > h1');

var p2 = document.querySelector('#menu4 > div.menu4 > div.item-atual > div > p:nth-child(3)');
var img = document.querySelector('#menu4 > div.menu4 > div.item-atual img');
swiperConteudos.on('slideChange',(e)=>{ 
    img.src = lista[e.activeIndex].img;
    p1.innerHTML = lista[e.activeIndex].p1;
    h1.innerHTML = lista[e.activeIndex].h1;
    p2.innerHTML = lista[e.activeIndex].p2 ;
})
