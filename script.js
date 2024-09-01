// Select all accordion buttons
var buttons = document.querySelectorAll('.accordion-button');

buttons.forEach(function (button) {
  button.addEventListener('click', function () {
    // Find the corresponding accordion content
    var content = button.parentElement.nextElementSibling;

    // Toggle the content display
    content.classList.toggle('my-toggle');

    // Toggle between plus and minus icon inside the button
    var icon = button.querySelector('svg path');
    if (content.classList.contains('my-toggle')) {
      icon.setAttribute(
        'd',
        'M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z'
      );
    } else {
      icon.setAttribute(
        'd',
        'M15 3.313A12.187 12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z'
      );
    }
  });
});
