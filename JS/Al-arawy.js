   // JavaScript to toggle the mega-menu
    document.querySelector('.other').addEventListener('click', function(event) {
        event.preventDefault();
        var megaMenu = document.querySelector('.mega-menu');
        if (megaMenu.style.display === 'flex') {
            megaMenu.style.display = 'none';
        } 
        else {
            megaMenu.style.display = 'flex';
        }
});

// Close the mega-menu when clicking outside of it
window.addEventListener('click', function(event) {
    var megaMenu = document.querySelector('.mega-menu');
    if (!event.target.matches('.other')) {
        if (megaMenu.style.display === 'flex') {
            megaMenu.style.display = 'none';
        }
    }
});