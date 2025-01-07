import Modal from "../components/Modal";
import { Link, Form } from "react-router-dom";
export default function Login() {
  return (
    <>
      <Modal>
        <Form method="post" className="">
          <p>
            <label htmlFor="author">Your name</label>
            <input type="text" id="author" name="author" required />
          </p>
          <p>
            <label htmlFor="post">Text</label>
            <textarea id="post" name="post" required rows={3} />
          </p>
          <p className="">
            <Link to={".."} type="button">
              Cancel
            </Link>
            <button>Submit</button>
          </p>
        </Form>
      </Modal>
    </>
  );
}
