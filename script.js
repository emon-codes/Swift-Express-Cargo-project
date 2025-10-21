// scroll nav

let lastScrollY = window.scrollY;
const navbar = document.getElementById('scrollNavbar');

window.addEventListener('scroll', () => {
  
    const currentScrollY = window.scrollY;

   
    if (currentScrollY > lastScrollY) {
      
        navbar.style.top = '-100px'; 
    } 
   
    else {
     
        navbar.style.top = '0'; 
    }

  
    lastScrollY = currentScrollY;
});



// -------scroll nav end --------



















document.querySelectorAll('.faq-toggle').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const content = btn.parentElement.nextElementSibling;
      content.classList.toggle('hidden');
      btn.textContent = content.classList.contains('hidden') ? '+' : '-';
    });
  });