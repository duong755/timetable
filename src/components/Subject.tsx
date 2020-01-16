import React from "react";
import * as PropTypes from "prop-types";
export interface SubjectProps {
  id: string;
  name?: string | null | undefined;
  room?: string | null | undefined;
  lecturer?: string | null | undefined;
  note?: string | null | undefined;
}

const Subject: React.FC<SubjectProps> = props => {
  return (
    <div>
      <strong>{props.id}</strong>
      <div>{props.name}</div>
      <div>{props.room}</div>
      <div>{props.lecturer}</div>
      {props.note ?? <em>{props.note}</em>}
    </div>
  );
};

Subject.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  room: PropTypes.string,
  lecturer: PropTypes.string,
  note: PropTypes.string
};

export default Subject;
