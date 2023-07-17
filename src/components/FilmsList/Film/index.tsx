import { useParams } from "react-router-dom";

import { Wrapper } from "components/Wrapper";

export const Film = () => {
  const { id } = useParams();

  return (
    <Wrapper>
      <div>
        FILM {id}
        <div>
          <iframe
            title="test"
            scrolling="no"
            frameBorder="0"
            allowFullScreen
            src="https://www.youtube.com/embed/xB4nyimch8E"
          />
        </div>
      </div>
    </Wrapper>
  );
};
