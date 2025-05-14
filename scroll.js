function checkOverflow() {
      const square = document.body;
    console.log("checked");
    if (square.scrollHeight > square.clientHeight) {
      // Content is overflowing, disable justify-content: center;
      square.style.justifyContent = 'flex-start'; // Align content to the top
    } else {
      // Content fits, keep it centered
      square.style.justifyContent = 'center';
    }
}

document.addEventListener('DOMContentLoaded', function () {

  // Initial check
  checkOverflow();

  // Optionally, recheck if the window is resized
  window.addEventListener('resize', checkOverflow);
});

//checkOverflow();