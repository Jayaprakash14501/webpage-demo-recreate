const track = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.slides');
const nextButton = document.getElementById('nextBtn');
const prevButton = document.getElementById('prevBtn');

let currentIndex = 0;

function updateSlider() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    const offset = currentIndex * slideWidth;
    track.style.transform = 'translateX(-' + offset + 'px)';
    updateButtonsVisibility();
}

function updateButtonsVisibility() {
    console.log('Current Index:', currentIndex);  // Debugging
    // Hide buttons based on current index
    if (currentIndex === 0) {
        prevButton.style.visibility = 'hidden';
        nextButton.style.visibility = 'visible';
    } else if (currentIndex === slides.length - 1) {
        nextButton.style.visibility = 'hidden';
        prevButton.style.display = 'visible';
    } else {
        prevButton.style.visibility = 'visible';
        nextButton.style.visibility = 'visible';
    }
}

// Button event listeners
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
});

// Initial visibility update
updateButtonsVisibility();
window.addEventListener('resize', updateSlider);
//floating buttons
const specificArea1 = document.getElementById("specificArea1");
const specificArea = document.getElementById("specificArea");
const floatingDiv = document.getElementById("floatingdiv");
const floatingButton = document.getElementById("floatingButton");

// Get the position of the specific area
let areaRect = specificArea.getBoundingClientRect();
let areaRect1 = specificArea1.getBoundingClientRect();

window.addEventListener("scroll", function() {
    areaRect = specificArea.getBoundingClientRect(); // Update area position
    areaRect1 = specificArea1.getBoundingClientRect();
    // Get the current scroll position
    const scrollY = window.scrollY;

    // Check if the scroll position is within the area
    if ((scrollY >= areaRect.top + window.scrollY && scrollY < areaRect.bottom + window.scrollY)||(scrollY >= areaRect1.top + window.scrollY && scrollY < areaRect1.bottom + window.scrollY)) {
        floatingDiv.style.display = 'none'; // Hide the button
    } else {
        floatingDiv.style.display = 'block'; // Show the button
    }
});

// Optionally, add an action for the button when clicked
floatingButton.addEventListener("click", function() {
    alert("Button clicked!"); // Perform action when button is clicked
});
