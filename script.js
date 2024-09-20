function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
    });
    // Show the selected section with smooth scroll
    const selectedSection = document.getElementById(sectionId);
    selectedSection.style.display = 'block';
    selectedSection.scrollIntoView({ behavior: 'smooth' });
}

// Form submission handler with success message display
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Simulate form submission (replace with actual submission code)
    document.getElementById('formMessage').style.display = 'block';
    document.getElementById('contactForm').reset();
});
