// HearHere - Minimal JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Beta Form Handling
    const betaForm = document.getElementById('betaForm');
    if (betaForm) {
        betaForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const email = document.getElementById('email').value;

            // Show success message
            alert('Thanks for your interest!\n\nWe\'ll send a TestFlight invitation to ' + email + ' within 24-48 hours.\n\nCheck your email (including spam) for our invitation.');

            // Reset form
            betaForm.reset();

            // In production, send to backend:
            // fetch('/api/beta-signup', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify({ email }),
            // });
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
