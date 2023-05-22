import { useParams } from "react-router-dom";

export const Film = () => {
  const { id } = useParams();

  return <div>FILM {id}</div>;
};
