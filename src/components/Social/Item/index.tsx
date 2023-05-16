import { FC } from "react";

import { Wrapper, Link } from "components/Social/Item/styles";
interface Props {
  icon: JSX.Element;
  path: string;
  name: string;
  id: number;
}

export const ListItem: FC<Props> = ({ icon, path }) => (
  <Wrapper>
    <Link href={path} target="_blank">
      {icon}
    </Link>
  </Wrapper>
);
