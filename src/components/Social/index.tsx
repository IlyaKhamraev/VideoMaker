import { social } from "components/Social/constants";
import { ListItem } from "components/Social/Item";

import styles from "components/Social/styles.module.css";

export const Social = () => (
  <ul className={styles.list}>
    {social.map((item) => (
      <ListItem key={item.id} {...item} />
    ))}
  </ul>
);
