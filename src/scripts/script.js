function colorChange(color) {
    var body = window.document.getElementById('body');
    body.classList.remove('white', 'black', 'bisque', 'green'); // Remove all previous colors
    body.classList.add(color);
  }