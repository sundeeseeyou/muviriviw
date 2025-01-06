import { Link, Form } from "react-router";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { RiMovie2Fill } from "react-icons/ri";
import { Button } from "@material-tailwind/react";

export default function BlogForm() {
  return (
    <>
      <Form method="post">
        <div className="flex flex-col gap-4">
          <label htmlFor="movieTitle">Movie Title</label>
          <input
            type="text"
            id="author"
            name="movieTitle"
            className="bg-gray-200 w-full py-2 rounded-md"
            required
          />

          <label htmlFor="textArea">Write down what you think ...</label>
          <ReactQuill
            theme="snow"
            value=""
            name="textArea"
            className="h-60 rounded-md"
          />
        </div>
        <div>
          <Button type="submit" className="w-100">
            <Link to={".."}>Submit</Link>
          </Button>
        </div>
      </Form>
    </>
  );
}
