import PropTypes from "prop-types";
import { Form } from "react-router-dom";

export default function Favorite({ contactInfo }) {
  const isFavorite = contactInfo.favorite;

  return (
    <div>
      <Form method="post">
        <button
          name="favorite"
          value={isFavorite}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          {isFavorite ? "★" : "☆"}
        </button>
      </Form>
    </div>
  );
}

Favorite.propTypes = {
  contactInfo: PropTypes.object.isRequired
};
