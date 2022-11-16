const email_regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
const $email = document.getElementById("email");
const $email_warning = document.getElementById("email_warning");

$email.addEventListener("input", (event) => {
  if (!email_regex.test($email.value)) {
    $email_warning.innerHTML = "이메일 형식을 확인해 주세요.";
    $email_warning.style.color = "red";
    $sendcode_btn.disabled = true;
  } else {
    $email_warning.innerHTML = " 맞아요";
    $sendcode_btn.disabled = false;
  }
});
