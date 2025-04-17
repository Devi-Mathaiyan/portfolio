document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("messageBox").value.trim();
    const response = document.getElementById("formResponse");
  
    if (name === "" || email === "" || message === "") {
      response.textContent = "Please fill out all fields.";
      response.style.color = "red";
      return;
    }
  
    response.textContent = `Thanks, ${name}! I'll get back to you soon.`;
    response.style.color = "green";
  
    // Optionally clear form
    document.getElementById("contactForm").reset();
  });
  