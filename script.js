document.getElementById("accept").addEventListener("click", function() {
  sendEmail("mailto:your-email@example.com?subject=Response%20to%20Date%20Request&body=I'd%20love%20to%20go%20out%20with%20you!");
});

document.getElementById("decline").addEventListener("click", function() {
  sendEmail("mailto:your-email@example.com?subject=Response%20to%20Date%20Request&body=I'm%20sorry%2C%20I%20can't.");
});

function sendEmail(mailtoLink) {
  window.location.href = mailtoLink;
}
