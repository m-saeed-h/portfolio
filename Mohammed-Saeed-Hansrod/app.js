  function openNav() {
    document.getElementById("static-left-nav-section").style.width = "100%";
  
  }
  
  /* Close/hide the sidenav */
  function closeNav() {
    document.getElementById("static-left-nav-section").style.width = "0";
  }


window.addEventListener('scroll',()=>{

  let content = document.querySelector('footer');

  let contentPosition = content.getBoundingClientRect().top;

  let screenPosition = window.innerHeight;

  if(contentPosition < screenPosition) {

    content.classList.add('footer')
  }else{
    content.classList.remove('footer')
  }
});