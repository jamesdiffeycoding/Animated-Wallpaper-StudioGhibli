const sectiontohide = document.getElementById('navbar');
const toggleButton = document.getElementById('toggleButton');

toggleButton.addEventListener('click', function() {
  sectiontohide.classList.toggle('hidden');
  if (toggleButton.textContent=="Display links") {
    toggleButton.textContent="Hide links and audio";
  } else {toggleButton.textContent="Display links"}})
