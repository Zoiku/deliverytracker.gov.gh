import "../styles/TreeView.css";
import { Collapse } from "@mui/material";
import { MinusSquare, PlusSquare } from "./Misc";
import { useState } from "react";

const TreeView = ({ children, label }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const buttonState = {
    false: <PlusSquare />,
    true: <MinusSquare />,
  };
  const toggleIsExpanded = () => {
    setIsExpanded((state) => !state);
  };

  return (
    <div className="tree-view-item">
      <div onClick={toggleIsExpanded} className="tree-view-item-inner">
        <div className="tree-view-item-inner-inner">
          <div className="tree-view-button-icon">{buttonState[isExpanded]}</div>
          <div className="tree-view-label">{label}</div>
        </div>
      </div>
      <Collapse in={isExpanded}>
        <div className="tree-view-items-container">
          <div className="tree-view-items">{children}</div>
        </div>
      </Collapse>
    </div>
  );
};

export default TreeView;
