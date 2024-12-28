$(document).ready(function () {
    $(".circle").on("click", function () {
      // Add an effect when clicked: Change color and stop rotating
      $(this).css({
        "border-top": "5px solid #ff0066",
        "animation": "none" // Stop the rotation
      });
  
      // Restart the animation after 1 second
      setTimeout(() => {
        $(this).css({
          "border-top": "5px solid #00ffcc",
          "animation": "rotateCircle 3s linear infinite"
        });
      }, 1000);
    });
  });
  