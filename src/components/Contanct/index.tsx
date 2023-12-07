import { contacts } from "src/components/Contanct/contacts";
import { Wrapper } from "src/components/Wrapper";

import styles from "src/components/Contanct/styles.module.css";

export const Contact = () => (
  <Wrapper>
    <>
      <h2 className={styles.title}>Get in touch</h2>
      <p className={styles.subtitle}>Don't hold back...</p>

      {contacts.map((contact) => (
        <div className={styles.mb12} key={`${contact.text}_${contact.title}`}>
          <p className={styles.titleLink}>{contact.title}</p>
          <a className={styles.link} href={contact.link}>
            {contact.text}
          </a>
        </div>
      ))}
    </>
  </Wrapper>
);
