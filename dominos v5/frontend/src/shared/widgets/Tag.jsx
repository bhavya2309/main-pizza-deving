/* eslint-disable react/prop-types */
import './styles/tag.css';

const Tag = (props) => {
  return (
    <div className="tag">
      <span className="tag-text">{props.text}</span>
    </div>
  );
};

export default Tag;