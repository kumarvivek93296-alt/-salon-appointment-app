document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const service = document.getElementById("service").value;
  const datetime = document.getElementById("datetime").value;

  document.getElementById("confirmation").innerHTML = 
    `Thanks ${name}! Your ${service} appointment is booked for ${datetime}.`;

  this.reset();
});document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const service = document.getElementById("service").value;
  const datetime = document.getElementById("datetime").value;

  document.getElementById("confirmation").innerHTML = 
    `Thanks ${name}! Your ${service} appointment is booked for ${datetime}.`;

  this.reset();
});


