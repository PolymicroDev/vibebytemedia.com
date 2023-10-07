if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // Load the mobile version stylesheets
    var link = document.createElement("link");
    link.href = "style-mobile.css";
    link.rel = "stylesheet";
    document.getElementsByTagName("head")[0].appendChild(link);
  }

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        } else {
            entry.target.classList.remove('show');
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}