//Menu bar
let openMenu=document.getElementById('open-menu')
let closeMenu=document.getElementById('close-menu')
openMenu.addEventListener('click',()=>{
    document.querySelector('.menubar ul').style.right="0"
    document.getElementById('overlay').style.display="initial"
    

})

closeMenu.addEventListener('click',()=>{
    document.querySelector('.menubar ul').style.right="-400px"
    document.getElementById('overlay').style.display="none"
})

//About section ----------***-------

let tabLinks=document.getElementsByClassName('tab-link')
let tabContents=document.getElementsByClassName('tab-contents')

function openTab(tabname){
    for(tabLink of tabLinks){
        tabLink.classList.remove("tab-link-active")
    }
    for(tabContent of tabContents){
         tabContent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("tab-link-active")
    document.getElementById(tabname).classList.add("active-tab")

}

///Work 
