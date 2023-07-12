window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navli');
  
    let currentSectionIndex = 0;
    let maxSectionOffset = 0;
  
    sections.forEach((section, index) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      const sectionOffset = sectionTop - sectionHeight / 2;
  
      if (window.scrollY >= sectionOffset) {
        currentSectionIndex = index;
        maxSectionOffset = sectionOffset;
      }
    });
  
    navLinks.forEach((link, index) => {
      if (index === currentSectionIndex) {
        link.classList.add('nav-active');
      } else {
        link.classList.remove('nav-active');
      }
    });
  });
  