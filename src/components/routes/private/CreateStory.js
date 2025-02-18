import { useState } from "react";

import { Button2 } from "../../utils/buttons";
import { Input2, Input3 } from "../../utils/inputs";
import { Route3 } from "../../utils/routes";

const CreateStory = () => {
  const [formData, setFormData] = useState({
    title: "",
    tags: "",
    story: "",
    publicStory: false,
  });
  const [files, setFiles] = useState([]);

  const { title, tags, story, publicStory } = formData;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
    console.log(files[0]);
  };

  return (
    <Route3
      content={
        <div>
          <form className="form" onSubmit={handleSubmit}>
            <Input2
              name="title"
              onChange={handleChange}
              placeholder="enter title"
              value={title}
            />
            <Input2
              name="tags"
              onChange={handleChange}
              placeholder="enter tags"
              value={tags}
            />
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleFileChange}
            />
            <Input3
              name="story"
              onChange={handleChange}
              placeholder="enter story"
              value={story}
            />
            <p>
              stories are private by default(only registered users can see
              them), tick here if you are happy to share to the world
            </p>
            <input
              type="checkbox"
              onClick={() =>
                setFormData({ ...formData, publicStory: !publicStory })
              }
            />
            <p>
              this story is currently set to be -{" "}
              <span>{publicStory ? "public" : "private"}</span>
            </p>
            <Button2 text="share" />
          </form>
        </div>
      }
    />
  );
};

export default CreateStory;
