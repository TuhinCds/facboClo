const homeI = document.getElementById('homeI');
const videoI = document.getElementById('videoI');
const accountI = document.getElementById('accountI');
const gameI = document.getElementById('gameI');
const HomeII = homeI.querySelector('i');
const VideoII = videoI.querySelector('i');
const GameII = gameI.querySelector('i');
const AccountII = accountI.querySelector('i');
const searchBar = document.getElementById('searchBar');
const searchBarIcon = searchBar.querySelector('i');
const searchData = document.getElementById('searchBarIcon')
const colorAc = 'rgb(0, 89, 255)';
const openM = document.getElementById('openM');
const loader = document.getElementById("loader");
const homeL = document.getElementById('homeL');
const videoL = document.getElementById('videoL');
const accountL = document.getElementById('accountL');
const gameL = document.getElementById('gameL');
const HomeIIL = homeL.querySelector('i');
const VideoIIL = videoL.querySelector('i');
const GameIIL = gameL.querySelector('i');
const AccountIIL = accountL.querySelector('i');
const MouseForEdit = document.getElementById('MouseForEdit');
const editG = document.getElementById('editG')
const OpenMenu = document.getElementById('OpenMenu');
const MS = document.getElementById('MS');
const LeftSide = document.getElementById('LeftSide');
const OpenMenuI = OpenMenu.querySelector('i');
//Header Controll Section
function home(){

    HomeII.classList.remove('ri-home-5-fill');
    HomeII.classList.add('ri-home-5-line')
    homeI.classList.remove('active');
    HomeII.style.color = ''

    HomeIIL.classList.remove('ri-home-5-fill');
    HomeIIL.classList.add('ri-home-5-line')
    homeL.classList.remove('active');
    HomeIIL.style.color = ''
}
function video(){
  VideoII.classList.remove('fa-solid');
  VideoII.classList.add('fa-regular');
    videoI.classList.remove('active');
    VideoII.style.color = '';

    VideoIIL.classList.remove('fa-solid');
    VideoIIL.classList.add('fa-regular');
    videoL.classList.remove('active');
    VideoIIL.style.color = ''
}
function account(){
    AccountII.classList.remove('ri-account-circle-fill');
    AccountII.classList.add('ri-account-circle-line');
   accountI.classList.remove('active');
   AccountII.style.color = '';

   AccountIIL.classList.remove('ri-account-circle-fill');
   AccountIIL.classList.add('ri-account-circle-line');
   accountL.classList.remove('active');
   AccountIIL.style.color = ''
}
function game(){
            GameII.classList.remove('ri-gamepad-fill');
            GameII.classList.add('ri-gamepad-line');
            gameI.classList.remove('active');
            GameII.style.color = '';

            GameIIL.classList.remove('ri-gamepad-fill');
            GameIIL.classList.add('ri-gamepad-line');
            gameL.classList.remove('active');
            GameIIL.style.color = '';

}


//THIS IS A CLICK FUNCTION SECTION ON ICON

  HomeII.classList.remove('ri-home-5-line');
  HomeII.classList.add('ri-home-5-fill');
  homeI.classList.add('active');
   HomeII.style.color = colorAc ;
  
  video();
  account();
  game();


homeI.addEventListener('click', () =>{
  HomeII.classList.remove('ri-home-5-line');
  HomeII.classList.add('ri-home-5-fill');
  homeI.classList.add('active');
   HomeII.style.color = colorAc ;
  
  video();
  account();
  game();


})
videoI.addEventListener('click', () =>{
  VideoII.classList.remove('fa-regular');
  VideoII.classList.add('fa-solid')
  videoI.classList.add('active');
  VideoII.style.color = colorAc;
  home();
  account();
  game();

})

accountI.addEventListener('click', () =>{
 AccountII.classList.remove('ri-account-circle-line');
 AccountII.classList.add('ri-account-circle-fill')
  accountI.classList.add('active');
  AccountII.style.color = colorAc;
  video();
  home();
  game();
})

gameI.addEventListener('click', () =>{
  GameII.classList.remove('ri-gamepad-line');
  GameII.classList.add('ri-gamepad-fill')
  gameI.classList.add('active');
  GameII.style.color = colorAc;
  video();
  account();
  home();
})

// !THIS IS NUMBER TWO SECTION FOR MOBILE CON
  HomeIIL.classList.remove('ri-home-5-line');
  HomeIIL.classList.add('ri-home-5-fill');
  homeL.classList.add('active');
   HomeIIL.style.color = colorAc ;
  
  video();
  account();
  game();

homeL.addEventListener('click', () =>{
  HomeIIL.classList.remove('ri-home-5-line');
  HomeIIL.classList.add('ri-home-5-fill');
  homeL.classList.add('active');
   HomeIIL.style.color = colorAc ;
  
  video();
  account();
  game();


})
videoL.addEventListener('click', () =>{
  VideoIIL.classList.remove('fa-regular');
  VideoIIL.classList.add('fa-solid')
  videoL.classList.add('active');
  VideoIIL.style.color = colorAc;
  home();
  account();
  game();

})

accountL.addEventListener('click', () =>{
 AccountIIL.classList.remove('ri-account-circle-line');
 AccountIIL.classList.add('ri-account-circle-fill')
  accountL.classList.add('active');
  AccountIIL.style.color = colorAc;
  video();
  home();
  game();
})

gameL.addEventListener('click', () =>{
  GameIIL.classList.remove('ri-gamepad-line');
  GameIIL.classList.add('ri-gamepad-fill')
  gameL.classList.add('active');
  GameIIL.style.color = colorAc;
  video();
  account();
  home();
})

//THIS IS A CLICK FUNCTION SECTION ON ICON

searchBar.addEventListener('click', ()=>{
    searchBar.style.width = '240px';
    searchBarIcon.style.left= '10px';

})



window.addEventListener('load', function(){
  this.setTimeout(()=>{
   loader.style.top = '-300px'
  }, 3000)


    this.setTimeout(function(){
        
    loader.style.top = '-300px'
    loader.style.opacity = '0';
    }, 1300)


})

function editGN(){
  editG.style.opacity = '0'
}



 

MouseForEdit.addEventListener('mouseover', ()=>{

  editG.style.opacity = '1'


})
MouseForEdit.addEventListener('mouseout', ()=>{

  editG.style.opacity = '0'


})

OpenMenu.addEventListener('click', ()=>{
LeftSide.classList.toggle('sideBarToggle');
  if(LeftSide.classList.contains('sideBarToggle')){
LeftSide.classList.add('sideBarToggle');
OpenMenuI.classList.remove('fa-bars');
OpenMenuI.classList.add('fa-xmark');
  }
 else{
  LeftSide.classList.remove('sideBarToggle');
  OpenMenuI.classList.remove('fa-xmark');
OpenMenuI.classList.add('fa-bars');
 }

})
