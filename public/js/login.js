function login_pass_show() {
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
    button_eye.onclick = login_pass_hide;
    document.getElementById("password").type = "text";
}
function login_pass_hide() {
    event.preventDefault();
    let button_eye = document.getElementById("see_pass_btn");
    button_eye.innerHTML = `      <lord-icon src="https://cdn.lordicon.com/vfczflna.json" trigger="in" delay="500"
                                stroke="bold" state="morph-cross" style="width: 50px; height: 50px">
                            </lord-icon>
                       `;
    button_eye.onclick = login_pass_show;
    document.getElementById("password").type = "password";
}
function errorLog() {
    let errorOut = document.getElementById("errors");
    errorOut.style.display = "block";
}
