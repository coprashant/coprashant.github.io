document.getElementById('contactForm').onsubmit = function(event) {
    event.preventDefault();
    document.getElementById('formMessage').style.display = 'block';
    this.reset();
};

function showSection(sectionId) {
    const sections = document.querySelectorAll('main > section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}
