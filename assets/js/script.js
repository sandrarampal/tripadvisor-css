document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".login");
  //   console.log(button);

  button.addEventListener("click", () => {
    const formAppear = document.getElementById("form-appear");
    const bodyFixed = document.querySelector(".to-fixed");
    // console.log(formAppear);
    formAppear.classList.remove("hide");
    bodyFixed.classList.add("fixed");
  });

  const closeButton = document.querySelector(".close-button");
  //   console.log(closeButton);

  closeButton.addEventListener("click", () => {
    const formAppear = document.getElementById("form-appear");
    formAppear.classList.add("hide");
    const bodyFixed = document.querySelector(".to-fixed");
    bodyFixed.classList.remove("fixed");
  });

  const sendButton = document.querySelector(".send");

  sendButton.addEventListener("click", () => {
    const formAppear = document.getElementById("form-appear");
    formAppear.classList.add("hide");
    const bodyFixed = document.querySelector(".to-fixed");
    bodyFixed.classList.remove("fixed");
  });

  document.querySelector("form").addEventListener("submit", async (event) => {
    event.preventDefault();
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // console.log({ firstname, lastname, email, message });

    const response = await axios.post(
      "https://site--mailer-tripadvisor--96jcjn4jx467.code.run/",
      {
        firstname,
        lastname,
        email,
        message,
      }
    );
  });
});
