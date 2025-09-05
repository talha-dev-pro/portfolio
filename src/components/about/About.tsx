import styles from "@/styles/components/about.module.scss";

export default function About() {
  return (
    <section className={styles.wrapper}>
      <h2>About</h2>
      <p>This is a small About component. Style is placed in About.module.scss (scoped).</p>
    </section>
  );
}
