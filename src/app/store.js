import { configureStore } from "@reduxjs/toolkit";
import previewReducer from "../features/previewer/previewSlice";

export default configureStore({
  reducer: {
    previewer: previewReducer,
  },
});
