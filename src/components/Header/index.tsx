/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import Link from "next/link"
import { SignInButton } from "../SignInButton";
import styles from "./styles.module.scss";
import { ActiveLink } from "../ActiveLink";

export function Header() {
  return(
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="ig.news" />
        <nav>
          <ActiveLink activeClassName={styles.active} href="/">
            <a>Home</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/posts">
            <a>Posts</a>
          </ActiveLink>
        </nav>

        <SignInButton />
      </div>
    </header>
  );
}

/* 

prefetch => Adicionar em links para facilitar acesso futuro ao conteúdo

*/

/* 

asPath - Outra forma de uso


          <Link href="/">
            <a className={asPath === "/" ? styles.active : ""}>Home</a>
          </Link>
          <Link href="/posts">
            <a className={asPath === "/posts" ? styles.active : ""}>Posts</a>
          </Link>


*/