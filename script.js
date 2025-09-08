let password = document.getElementById("password");
let checkbtn = document.getElementById("checkbtn");
let container = document.getElementById("info");

checkbtn.addEventListener("click", () => {
  let checkPassword = String(password.value);

  let count = 0;
  if (checkPassword.length >= 8) {
      let specialCharacter = checkPassword.match(/[^a-zA-Z0-9]/g);
    for (let i = 0; i < checkPassword.length; i++) {
        let char = checkPassword.charAt(i);
      if (char === char.toUpperCase() && char !== char.toLowerCase() ) {
        count = count + 1;
        break;
      }
    }
    let presentNum = checkPassword.match(/\d/g);
    console.log(specialCharacter);
    console.log(presentNum);
    if (specialCharacter != null && presentNum != null) {
      count = count + 1;
    }
    if (count == 2) {
      container.innerHTML = "<b>✅ Strong Password — Good job!</b>";
    } else {
      container.innerHTML =
        "<b>⚠️ Weak Password — Try adding numbers, uppercase letters, and special characters.</b>";
    }
  } else {
    container.innerHTML = "<b>⚠️ Enter 8 digit password</b>";
  }
});
