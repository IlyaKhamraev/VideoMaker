import { social } from "src/components/Social/constants";
import { ListItem } from "src/components/Social/Item";

import styles from "src/components/Social/styles.module.css";

export const Social = () => (
  <ul className={styles.list}>
    {social.map((item) => (
      <ListItem key={item.id} {...item} />
    ))}
  </ul>
);
