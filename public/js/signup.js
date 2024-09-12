function signup_a_pass_show() {
  event.preventDefault();
  let button_eye = document.getElementById("see_a_pass_btn");
  button_eye.innerHTML = `
                             <lord-icon
      src="https://cdn.lordicon.com/vfczflna.json"
      trigger="loop"
      delay="500"
      stroke="bold"
      state="hover-look-around"
      style="width: 50px; height: 50px"
    >
    </lord-icon>
                        `;
  button_eye.onclick = signup_a_pass_hide;
  document.getElementById("adminPass").type = "text";
}
function signup_a_pass_hide() {
  event.preventDefault();
  let button_eye = document.getElementById("see_a_pass_btn");
  button_eye.innerHTML = `      <lord-icon src="https://cdn.lordicon.com/vfczflna.json" trigger="in" delay="500"
                                stroke="bold" state="morph-cross" style="width: 50px; height: 50px">
                            </lord-icon>
                       `;
  button_eye.onclick = signup_a_pass_show;
  document.getElementById("adminPass").type = "password";
}
function signup_pass_show() {
  event.preventDefault();
  let button_eye = document.getElementById("see_pass_btn");
  button_eye.innerHTML = `
                             <lord-icon
      src="https://cdn.lordicon.com/vfczflna.json"
      trigger="loop"
      delay="500"
      stroke="bold"
      state="hover-look-around"
      style="width: 50px; height: 50px"
    >
    </lord-icon>
                        `;
  button_eye.onclick = signup_pass_hide;
  document.getElementById("passBoxIN").type = "text";
  document.getElementById("passBoxIN2").type = "text";
}
function signup_pass_hide() {
  event.preventDefault();
  let button_eye = document.getElementById("see_pass_btn");
  button_eye.innerHTML = `      <lord-icon src="https://cdn.lordicon.com/vfczflna.json" trigger="in" delay="500"
                                stroke="bold" state="morph-cross" style="width: 50px; height: 50px">
                            </lord-icon>
                       `;
  button_eye.onclick = signup_pass_show;
  document.getElementById("passBoxIN").type = "password";
  document.getElementById("passBoxIN2").type = "password";
}
function errorlog(text) {
  let errorOut = document.getElementById("errors");
  errorOut.style.display = "block";
  errorOut.innerHTML = `<h4> ${text} </h4>`;
}
