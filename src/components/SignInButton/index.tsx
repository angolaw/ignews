import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import styles from "./styles.module.scss";
import { signIn, useSession } from "next-auth/client";
export function SignInButton() {
  const [session] = useSession();

  console.log(session);

  return session ? (
    <button type="button" className={styles.signInButton}>
      <FaGithub color={"#04d361"} />
      {session.user.name}
      <MdClose color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button
      type="button"
      className={styles.signInButton}
      onClick={() => signIn("github")}
    >
      <FaGithub color={"#eba417"} />
      Sign in with GitHub
    </button>
  );
}
