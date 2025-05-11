document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    Swal.fire({
      icon: 'success',
      title: 'Message Sent!',
      text: 'Thank you for contacting me.',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'OK'
    });

    form.reset();
  });
});
