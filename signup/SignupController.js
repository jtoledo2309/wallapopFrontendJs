import { pubSub } from "../pubSub.js";
import { createApiUser, loginApiUser } from "./SignupProvider.js";

export class SignupController {
  constructor(nodeElement) {
    this.signupElement = nodeElement;

    this.subscribeEvents();
  }

  subscribeEvents() {
    this.signupElement.addEventListener("submit", (event) => {
      event.preventDefault();
      this.validatePassword();
    });

    const createUserInputElements = Array.from(
      this.signupElement.querySelectorAll("input")
    );

    const createUserButtonElement =
      this.signupElement.querySelector("#createUserButton");

    const passwordElement = this.signupElement.querySelector("#password");

    createUserInputElements.forEach((createUserInputElement) => {
      createUserInputElement.addEventListener("input", () => {
        const areInputsFilled = createUserInputElements.every(
          (inputElement) => inputElement.value
        );
        if (areInputsFilled && passwordElement.value.length >= 6) {
          createUserButtonElement.removeAttribute("disabled");
        } else {
          createUserButtonElement.setAttribute("disabled", "");
        }
      });
    });
  }

  validatePassword() {
    const passwordElement = this.signupElement.querySelector("#password");
    const minLength = 6;

    if (passwordElement.value.length <= minLength) {
      pubSub.publish(
        pubSub.TOPICS.PRODUCT_LOAD_ERROR,
        `La contraseña debe tener mas de ${minLength} caracteres`
      );
    }

    const regExp = new RegExp(/^[a-zA-Z0-9]*$/);

    if (regExp.test(passwordElement.value)) {
      this.createUser();
    } else {
      pubSub.publish(
        pubSub.TOPICS.PRODUCT_LOAD_ERROR,
        `La contraseña debe contener unicamente mayusculas, minusculas y numeros`
      );
    }
  }

  async createUser() {
    const formData = new FormData(this.signupElement);
    const username = formData.get("username");
    const password = formData.get("password");

    try {
      await createApiUser(username, password);
      const jwt = await loginApiUser(username, password);
      if (jwt === undefined) {
        alert("Usuario ya registrado, pruebe con otro");
        window.location = "/signup.html";
        return;
      }
      localStorage.setItem("token", jwt);
      alert("Usuario registrado correctamente");
      window.location = "/";
    } catch (error) {
      throw new Error(error);
    }
  }
}
