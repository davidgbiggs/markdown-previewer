import React from "react";
import { useSelector } from "react-redux";
import { selectValue } from "./previewSlice";
import marked from "marked";

export function Previewer() {
  const value = useSelector(selectValue);
  console.log(value);
  return (
    <div id="preview-box" className="box">
      <div className="title">Preview</div>
      <div
        dangerouslySetInnerHTML={{ __html: marked(value, { breaks: true }) }}
        id="preview"
      ></div>
    </div>
  );
}
