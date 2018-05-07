var btnModal = document.querySelector("#btnModal");
var modal = document.querySelector(".Modal-Container");
var close_modal = document.querySelector('.close');
var selected = 0;

var btnNextSlide = document.querySelectorAll(".next");
var btnPrevSlide = document.querySelectorAll(".prev");
var slides = document.querySelectorAll(".matches");
var slideTxtUnder = document.querySelector(".slideTxtUnder");
var slideTxtUnderArray = ["North America - NA LCS","Europe - EU LCS","China - LPL","Korea - LCK","HONG KONG, MACAU, Taiwan - LMS",
                          "BRAZIL - CBLOL", "LATIN AMERICA SOUTH - CLS", "SOUTH EAST ASIA - GPL", "COMMONWEALTH OF Independent STATES - LCL",
                          "JAPAN - LJL", "LATIN AMERICA NORTH - LLN", "OCEANIA - OPL", "TURKEY - TCL", "Vietnam - VCS"];
var slideTeamName = document.querySelector(".slideTeamName");
var slideTeamNameArray = ["TEAM LIQUID", "FNATIC", "ROYAL NEVER GIVE UP", "KING-ZONE DRAGON X", "FLASH WOLVES", "KABUM! E-SPORTS",
                          "KAOS LATIN GAMERS", "ASCENSION GAMING", "GAMBIT GAMING", "PENTAGRAM", "RAINBOW7", "DIRE WOLVES", "BAUSUPERMASSIVE", "EVOS ESPORTS"];

var video = document.querySelector("#myVideo");
var hero = document.querySelector(".Hero-Content");

var navContainer = document.querySelector(".Nav-Container");

var btnScrollTop = document.querySelector("#btnScrollTop");
var maxHeight = document.documentElement.scrollHeight;

var currentSlide = 0;
showSlides(currentSlide);
slideTxtUnder.textContent = slideTxtUnderArray[currentSlide];
slideTeamName.textContent = slideTeamNameArray[currentSlide];

btnModal.addEventListener("click", function(){
  modal.style.display = "block";
})

close_modal.addEventListener("click", function(){
  modal.style.display = "none";
})

window.addEventListener("click", function(event){
  if(event.target == modal) {
    modal.style.display = "none";
  }
})

btnScrollTop.addEventListener("click", scrollTop);

for(var i = 0; i < btnNextSlide.length; i++){
  btnNextSlide[i].addEventListener("click", function(){
    currentSlide++;
    if(currentSlide == slides.length){
      currentSlide = 0;
      showSlides(currentSlide);
      hideSlides(slides.length-1);
      slideTxtUnder.textContent = slideTxtUnderArray[currentSlide];
      slideTeamName.textContent = slideTeamNameArray[currentSlide];

    }
    else {
      showSlides(currentSlide);
      hideSlides(currentSlide-1);
      slideTxtUnder.textContent = slideTxtUnderArray[currentSlide];
      slideTeamName.textContent = slideTeamNameArray[currentSlide];
    }
  })
}
for (var i = 0; i < btnNextSlide.length; i++) {
  btnPrevSlide[i].addEventListener("click", function(){
    currentSlide--;
    if(currentSlide == -1){
      currentSlide = slides.length - 1;
      showSlides(currentSlide);
      hideSlides(0);
      slideTxtUnder.textContent = slideTxtUnderArray[currentSlide];
      slideTeamName.textContent = slideTeamNameArray[currentSlide];
    }
    else {
      showSlides(currentSlide);
      hideSlides(currentSlide + 1);
      slideTxtUnder.textContent = slideTxtUnderArray[currentSlide];
      slideTeamName.textContent = slideTeamNameArray[currentSlide];
    }
  })
}

function showSlides(slideNum){
  slides[slideNum].style.display = "block";
}
function hideSlides(slideNum){
  slides[slideNum].style.display = "none";

}

// function videoFunctions(){
//   if(video.paused) {
//     video.play()
//     hero.style.display = "none";
//   }
//   else {
//     video.pause();
//   }
//   video.setAttribute("controls", "1");
// }
window.onscroll = function() {
  navBarScroll()
  scrollAppear()
  modalScroll()
};

function documentHeight() {
    return Math.max(
        window.innerHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight
    );
}

function modalScroll() {
    if (document.body.scrollTop > (maxHeight * .75) || document.documentElement.scrollTop > (maxHeight * .75) && selected == 0) {
        modal.style.display = "block";
        selected = 1;
    }
}

function navBarScroll() {
    if (document.body.scrollTop > 950 || document.documentElement.scrollTop > 950) {
        navContainer.style.backgroundColor = "rgb(0, 0, 0)";
        navContainer.style.fontSize = "1.4em";
    } else {
        navContainer.style.backgroundColor = "rgba(0, 0, 0, 0.25)";
        navContainer.style.fontSize = "2vw";
    }
}

function scrollAppear() {
    if (document.body.scrollTop > (maxHeight * .8) || document.documentElement.scrollTop > (maxHeight * .8)) {
      btnScrollTop.style.display = "block";
    } else {
      btnScrollTop.style.display = "none";
    }
}

function scrollTop(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  hero.style.display = "block";
}
