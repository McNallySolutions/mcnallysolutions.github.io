function sendMail() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  window.location.href = `mailto:kenneth.mcnally.dev@gmail.com?subject=Message from ${name}&body=From: ${email}%0D%0A%0D%0A${message}`;
}

function sendAppointment() {
  const name = document.getElementById("appt-name").value;
  const email = document.getElementById("appt-email").value;
  const date = document.getElementById("appt-date").value;
  const time = document.getElementById("appt-time").value;
  const subject = `Appointment Request from ${name}`;
  const body = `Client: ${name}%0D%0AEmail: ${email}%0D%0ADate: ${date}%0D%0ATime: ${time}`;
  window.location.href = `mailto:kenneth.mcnally.dev@gmail.com?subject=${subject}&body=${body}`;
}
