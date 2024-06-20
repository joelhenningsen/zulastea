// Gets year for copyright
document.getElementById('current-year').textContent = new Date().getFullYear();

// Collapses navigation bar after selection
document.addEventListener('DOMContentLoaded', function () {
    var navbarCollapse = document.getElementById('navbarNav');
    navbarCollapse.addEventListener('click', function(event) {
        if (event.target.classList.contains('nav-link')) {
            var bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                toggle: false
            });
            bsCollapse.hide();
        }
    });
});

// Determine which section is currently active
function onScroll(event) {
    var sections = document.querySelectorAll('.navbar-nav .nav-item .nav-link');
    var scrollPos = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;

    // Height of your navbar here (plus 5px extra)
    var navbarHeight = 85;

    sections.forEach(function(section) {
        var currLink = section;
        var val = currLink.getAttribute('href');
        var refElement = document.querySelector(val);

        // Adjusts the condition to include the navbar height
        if (refElement.offsetTop - navbarHeight <= scrollPos && (refElement.offsetTop + refElement.offsetHeight - navbarHeight > scrollPos)) {
            document.querySelectorAll('.navbar-nav .nav-item .nav-link').forEach(function(link) {
                link.classList.remove('active');
            });
            currLink.classList.add('active');
        } else {
            currLink.classList.remove('active');
        }
    });
}

// Event listener for scroll events
window.document.addEventListener('scroll', onScroll);