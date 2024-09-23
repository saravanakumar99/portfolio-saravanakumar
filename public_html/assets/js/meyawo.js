/*!
=========================================================
* Meyawo Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});

// Get the subtitle element
const subtitleElement = document.getElementById('subtitle');

// Array of subtitles
const subtitles = ['FRONTEND DEVELOPER', 'UI/UX DESIGNER', 'RESPONSIVE DESIGNER','SOFTWARE DEVELOPER'];

let currentSubtitleIndex = 0;

function updateSubtitle() {
    // Clear the previous typed text
    subtitleElement.textContent = '';

    // Create a new instance of Typed
    const typed = new Typed(subtitleElement, {
        strings: [subtitles[currentSubtitleIndex]],
        typeSpeed: 40, // Adjust the typing speed
        backSpeed: 20,
        smartBackspace: false,
        loop: false,
        cursorChar: '',
        onComplete: () => {
            // Update the current subtitle index
            currentSubtitleIndex = (currentSubtitleIndex + 1) % subtitles.length;
        }
    });
}

// Update the subtitle every 5 seconds
setInterval(updateSubtitle, 5000);

// Initialize the typing animation
updateSubtitle();



// download c.v

const downloadBtn = document.getElementById('download-btn');

downloadBtn.addEventListener('click', () => {
  const pdfUrl = 'public_html/assets/SaravanaKumar_V_Resume.pdf'; // replace with your PDF file URL
  const link = document.createElement('a');
  link.href = pdfUrl;
  link.download = 'SaravanaKumar_V_Resume.pdf'; // replace with your desired file name
  link.click();
});