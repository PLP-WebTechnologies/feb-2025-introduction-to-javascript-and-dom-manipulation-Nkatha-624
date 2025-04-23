// Change text content dynamically
document.getElementById('changeTextBtn').addEventListener('click', function() {
    document.getElementById('paragraph').textContent = 'The text has been changed dynamically!';
  });
  
  // Modify CSS styles via JavaScript
  document.getElementById('changeStyleBtn').addEventListener('click', function() {
    document.body.style.backgroundColor = 'lightblue';  // Change the background color
    document.getElementById('paragraph').style.fontSize = '20px';  // Increase the font size
    document.getElementById('paragraph').style.color = 'green';  // Change text color
  });
  
  // Add a new element dynamically
  document.getElementById('addElementBtn').addEventListener('click', function() {
    const newElement = document.createElement('div');
    newElement.textContent = 'This is a new element added dynamically!';
    newElement.style.marginTop = '10px';
    newElement.style.padding = '10px';
    newElement.style.backgroundColor = 'lightgrey';
    document.getElementById('dynamicElement').appendChild(newElement);
  });
  