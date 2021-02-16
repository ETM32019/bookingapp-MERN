import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";
import { useState, useEffect } from "react";

const DraftjsScreen = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [title, setTitle] = useState("");

  useEffect(() => {
    console.log(editorState);
  }, [editorState]);

  return (
    <>
      <section className="py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <h1>Title</h1>
              <input
                type="text"
                class="form-control"
                placeholder="Title..."
                aria-label="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <Editor editorState={editorState} onChange={setEditorState} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DraftjsScreen;
