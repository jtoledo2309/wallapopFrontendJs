import { pubSub } from "../pubSub.js";
import { loginApiUser } from "../signup/SignupProvider.js";

export class LoginController {
  constructor(nodeElement) {
    this.loginElement = nodeElement;

    this.subscribeToEvents();
  }

  subscribeToEvents() {
    this.loginElement.addEventListener("submit", (event) => {
      event.preventDefault();
      this.validatePassword();
    });

    const loginInputElements = Array.from(
      this.loginElement.querySelectorAll("input")
    );

    const loginButtonElement =
      this.loginElement.querySelector("#loginUserButton");

    loginInputElements.forEach((loginUserInputElement) => {
      loginUserInputElement.addEventListener("input", () => {
        const areInputsFilled = loginInputElements.every(
          (inputElement) => inputElement.value
        );
        if (areInputsFilled) {
          loginButtonElement.removeAttribute("disabled");
        } else {
          loginButtonElement.setAttribute("disabled", "");
        }
      });
    });
  }

  validatePassword() {
    const passwordElement = this.loginElement.querySelector("#password");
    const minLength = 6;

    if (passwordElement.value.length <= minLength) {
      pubSub.publish(
        pubSub.TOPICS.PRODUCT_LOAD_ERROR,
        `La contraseña debe tener mas de ${minLength} caracteres`
      );
    }

    const regExp = new RegExp(/^[a-zA-Z0-9]*$/);

    if (regExp.test(passwordElement.value)) {
      this.loginUser();
    } else {
      pubSub.publish(
        pubSub.TOPICS.PRODUCT_LOAD_ERROR,
        `La contraseña debe contener unicamente mayusculas, minusculas y numeros`
      );
    }
  }

  async loginUser() {
    const formData = new FormData(this.loginElement);
    const username = formData.get("username");
    const password = formData.get("password");
    //console.log(username);
    //console.log(password);

    const jwt = await loginApiUser(username, password);
    //console.log(jwt);
    if (jwt) {
      localStorage.setItem("token", jwt);
      alert("Usuario logeado correctamente");
      window.location = "/";
      return;
    }
    pubSub.publish(pubSub.TOPICS.PRODUCT_LOAD_ERROR, "Usuario no existe");
  }
}
