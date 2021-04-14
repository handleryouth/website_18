const hamburger = document.querySelector(".hamburger-icon")
const close = document.querySelector(".close-icon")
const popchoice = document.querySelector(".pop-choice")


const firstpage = document.querySelector(".first-page")
const secondpage = document.querySelector(".second-page")
const fourthpage = document.querySelector(".fourth-page")
const footerpage = document.querySelector(".footer-page")



hamburger.addEventListener("click", function(){
  popchoice.classList.remove("notshowed")
  hamburger.classList.add("notshowed")
  close.classList.remove("notshowed")


  firstpage.classList.add("opacity-reduced")
  secondpage.classList.add("opacity-reduced")
  fourthpage.classList.add("opacity-reduced")
  footerpage.classList.add("opacity-reduced")
})

close.addEventListener("click", function(){
  popchoice.classList.add("notshowed")
  hamburger.classList.remove("notshowed")
  close.classList.add("notshowed")

  firstpage.classList.remove("opacity-reduced")
  secondpage.classList.remove("opacity-reduced")
  fourthpage.classList.remove("opacity-reduced")
  footerpage.classList.remove("opacity-reduced")
})
