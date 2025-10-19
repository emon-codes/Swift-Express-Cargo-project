document.querySelectorAll('.faq-toggle').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const content = btn.parentElement.nextElementSibling;
      content.classList.toggle('hidden');
      btn.textContent = content.classList.contains('hidden') ? '+' : '-';
    });
  });