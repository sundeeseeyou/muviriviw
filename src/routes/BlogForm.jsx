import { Link, Form } from "react-router";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Button } from "@material-tailwind/react";

export default function BlogForm() {
  return (
    <>
      <Form method="post" className="my-auto mx-20">
        <article className="flex flex-col gap-8">
          <section className="flex flex-row justify-between gap-4">
            <input
              type="text"
              id="author"
              name="articleTitle"
              className="bg-gray-200 py-2 px-4 rounded-md w-8/12"
              placeholder="Post Title"
              required
            />

            <input
              type="date"
              className="bg-gray-200 w-4/12 py-2 px-4 rounded-md"
              placeholder="Pick Date"
            />
          </section>

          {/* <label htmlFor="textArea" className="font-semibold">
            Post your idea about the movie ...
          </label> */}
          <ReactQuill
            theme="snow"
            value=""
            name="textArea"
            placeholder="Post your idea about the movie ..."
            className="h-[40dvh] rounded-md mb-16"
          />
        </article>

        <Link to={".."}>
          <Button type="submit" fullWidth>
            Submit
          </Button>
        </Link>
      </Form>
    </>
  );
}
