import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Card from "react-bootstrap/Card";

import PropTypes from "prop-types";

export function SortableItem(props) {
  const { id } = props;

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <Card body className="m-3">
        {id}
      </Card>
    </div>
  );
}

SortableItem.propTypes = {
  id: PropTypes.string.isRequired,
};
