import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { update } from "./previewSlice";
import defaultString from "./defaultValue";

export function Editor() {
  const dispatch = useDispatch();
  const [editValue, setEditValue] = useState(defaultString);

  const handleChange = (e) => {
    setEditValue(e.target.value);
    dispatch(update(String(e.target.value)));
  };

  return (
    <div id="editor-box" className="box">
      <div className="title">Editor</div>
      <textarea
        value={editValue}
        onChange={handleChange}
        id="editor"
      ></textarea>
    </div>
  );
}
