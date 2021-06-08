import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import styles from "./styles.module.scss";
export function SignInButton() {
  const [isUserLoggedIn, setisUserLoggedIn] = useState(false);
  function toggleSignIn() {
    const oldValue = isUserLoggedIn;
    setisUserLoggedIn(!oldValue);
  }

  return isUserLoggedIn ? (
    <button
      type="button"
      className={styles.signInButton}
      onClick={toggleSignIn}
    >
      <FaGithub color={"#04d361"} />
      w0ken0ne
      <MdClose color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button
      type="button"
      className={styles.signInButton}
      onClick={toggleSignIn}
    >
      <FaGithub color={"#eba417"} />
      Sign in with GitHub
    </button>
  );
}
