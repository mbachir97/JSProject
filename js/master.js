

// check the local storage 
let maincolor = window.localStorage.getItem("color")
let israndomizeinlocalstorage = localStorage.getItem("isRandomizeback")
let backgroundInterval ;
let israndomize =  israndomizeinlocalstorage === "no" ? false : true 
// let israndomize =  Boolean(israndomizeinlocalstorage)

if(israndomizeinlocalstorage !== null){
    document.querySelectorAll(".random-backgrounds span").forEach(span => {
        span.classList.remove("active")
    if(span.dataset.background === israndomizeinlocalstorage ) {
        span.classList.add("active")
        
    } 

    })
}



if(maincolor !== null){
    document.documentElement.style.setProperty('--main-color',maincolor) 

    document.querySelectorAll(".colors-list li").forEach(li => {
        li.classList.remove("active")
        if(li.dataset.color === maincolor)
            li.classList.add("active")
    })
     

    // or this methode in th next line 
    // document.querySelector(`[data-color = "${maincolor}"]`).classList.add("active")

}


//  show and hide  setting box 

let settingbox = document.querySelector(".setting-box") 

document.querySelector(".toggle-setting .fa.fa-gear").onclick= function(){
    // if(settingbox.classList.contains("open")){
    //     settingbox.classList.remove("open")
    //     document.querySelector(".fa.fa-gear").classList.remove("fa-spin")
    // }
    // else{
    //     settingbox.classList.add("open")
    //     document.querySelector(".fa.fa-gear").classList.add("fa-spin")
    // }
     this.classList.toggle("fa-spin")
    settingbox.classList.toggle("open")
}

// swich color 
const MyLis = document.querySelectorAll(".colors-list li")


MyLis.forEach(li => {

   

   li.addEventListener("click", function(e){
    
    // we can use the comment 
    // MyLis.forEach(element => {
    //     element.classList.remove("active")
    // });


    // e.currentTarget.parentElement.querySelectorAll(".active")
    // .forEach(
    //     li => {
    //      li.classList.remove("active")
    //     }
    // )

    //  this.classList.add("active") => the function bellow minimize and organize the code 
    handleActive(e)

     window.localStorage.setItem("color",e.currentTarget.dataset.color)
     document.documentElement.style.setProperty('--main-color',e.currentTarget.dataset.color) 
      
   })


})

const randombackelement = document.querySelectorAll(" .random-backgrounds span")


randombackelement.forEach(span => {

   

   span.addEventListener("click", function(e){
    
 
    // e.currentTarget.parentElement.querySelectorAll(".active")
    // .forEach(
    //     span => {
    //      span.classList.remove("active")
    //     }
    // )

    //  this.classList.add("active") // this is Organazition of Code
    handleActive(e)

    if(e.target.dataset.background === 'yes'){
       israndomize = true
       Randomizebackground()
       localStorage.setItem("isRandomizeback","yes")
    }
    else{
        israndomize = false
        clearInterval(backgroundInterval)
       localStorage.setItem("isRandomizeback","no")

    }
   
      
   })


})



// Randomize Page 
let page = document.querySelector(".landing-page")

let MyImages = ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg"]
let count = 0


function Randomizebackground(){
    if(israndomize){
       backgroundInterval =  window.setInterval(function(){

            let Number = Math.floor(Math.random() * MyImages.length)
        page.style.setProperty("background-image", `url(../images/${MyImages[Number]})`)
        page.style.setProperty(" background-size", 'cover')
        
        },1000)
    }
}

Randomizebackground()
let ourSkills = document.querySelector(".skills");

window.onscroll = function () {

  // Skills Offset Top
  let skillsOffsetTop = ourSkills.offsetTop;

  // Skills Outer Height
  let skillsOuterHeight = ourSkills.offsetHeight;

  // Window Height
  let windowHeight = this.innerHeight;


  // Window ScrollTop
  let windowScrollTop = this.scrollY;

  if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)) {

    let allSkills = document.querySelectorAll(".skill-box .skill-progress span");

    allSkills.forEach(skill => {

      skill.style.width = skill.dataset.progress;
    

    });

  }

};

// create popep 

images = document.querySelectorAll(".gallery img ")

images.forEach(img => {

    img.addEventListener('click', (e)=> {

     let overlay = document.createElement("div");
     overlay.className = "popup-overlay"
     document.body.appendChild(overlay);

     let poupbox = document.createElement("div");
     
     if(img.alt != null){
        let imageheading = document.createElement("h3")
      
        let imagetext = document.createTextNode(img.alt)
        imageheading.appendChild(imagetext)
        
        poupbox.appendChild(imageheading)   
    }

     poupbox.className = "popup-box"
    let popupimage = document.createElement("img");

    popupimage.src = e.target.src
      
    poupbox.appendChild(popupimage)
    document.body.appendChild(poupbox)
    let closebutton = document.createElement("span")

    let closeText = document.createTextNode("X")
 
 
    closebutton.appendChild(closeText)
 
    closebutton.className = "close-button"
    poupbox.appendChild(closebutton)
  

    } )
     


})

document.addEventListener('click',function (e) {


if(e.target.classList.contains("close-button")){

    e.target.parentElement.remove()

    document.querySelector(".popup-overlay").remove()
}

}) 
//************************************************************************************ */
//select All bullet
const allbullet = document.querySelectorAll(".nav-bullet .bullet")
const alllinks = document.querySelectorAll(".links a")
// allbullet.forEach(bul => {
// bul.addEventListener("click" ,(e) =>{

//     document.querySelector(bul.dataset.section).scrollIntoView(
//         {
//             behavior : "smooth"
//         }
//     )
// })
// }) => it replace by this function  scrollToSomeWere bellow

function scrollToSomeWere(elements){

    elements.forEach((ele) => {
      
        ele.addEventListener("click" ,(e) =>{

            document.querySelector(e.target.dataset.section).scrollIntoView(
                {
                    behavior : "smooth"
                }
            )
        })

    })

}

scrollToSomeWere(allbullet)
scrollToSomeWere(alllinks)
//Handlle Active Class On self

 function  handleActive(ev){
   ev.target.parentElement.querySelectorAll(".active").forEach(ele =>{
    ele.classList.remove("active")
   })

   ev.target.classList.add('active')
 }

 let bulletSpan = document.querySelectorAll(".bullets-option span");

 let bulletContainer = document.querySelector(".nav-bullet")

  let loclstorgebullet = localStorage.getItem("bullet-option")
  if(loclstorgebullet !== null){
    bulletSpan.forEach(span =>{
        span.classList.remove("active")
        
    })
    if(loclstorgebullet =="block"){
         bulletContainer.style.display = "block"
         document.querySelector(".bullets-option .yes").classList.add("active")
    }
    else{
      bulletContainer.style.display = "none"
      document.querySelector(".bullets-option .no").classList.add("active")

    }

   
      
  }

 bulletSpan.forEach(span => {
    span.addEventListener("click",(e)=>{
  if(span.dataset.display === 'show'){
    bulletContainer.style.display = "block"
    localStorage.setItem("bullet-option","block")
  }
  else{
    bulletContainer.style.display = "none"
    localStorage.setItem("bullet-option","none")


  }
  handleActive(e)
   

    })
 });
 //********** Reset option ****************************** */

 document.querySelector(".reset-options").onclick = function(){
localStorage.removeItem('bullet-option')
localStorage.removeItem('isRandomizeback')
localStorage.removeItem('color')
window.location.reload()

 }

 let togelbutn = document.querySelector(".toggle-menu")
 let tlinks = document.querySelector(".links")
 togelbutn.onclick = function(e){
  e.stopPropagation()
  this.classList.toggle("menu-active")
  tlinks.classList.toggle('open')
}

//click anywhere outside Menu And Toggle 
document.addEventListener('click',(e)=>{
if(e.target !== togelbutn && e.target !== tlinks){
   if(tlinks.classList.contains("open")){
    togelbutn.classList.remove("menu-active")
    tlinks.classList.remove('open')
   }
}


})

tlinks.onclick = function(e){
e.stopPropagation()
}