import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";

export default function NavMenu() {
  const [open, setOpen] = useState(false);
  const openHandle = () => setOpen((cur) => !cur);

  return (
    <>
      <nav className="flex flex-row items-center text-md text-primaryColor space-x-16 font-bold">
        <Link to="/menu">Home</Link>
        <Link to="/review">Review</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Button
          onClick={openHandle}
          className="text-white bg-primaryColor px-12 py-4 shadow-sm"
        >
          Login
        </Button>
      </nav>
      <Dialog
        size="xs"
        open={open}
        handler={openHandle}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem] pb-4">
          <CardBody className="flex flex-col gap-4">
            <Typography className="text-center" variant="h4" color="black">
              Login
            </Typography>
            <Typography
              className="mb-3 font-normal text-center"
              variant="paragraph"
              color="gray"
            >
              Enter your username and password to login.
            </Typography>
            <Typography className="-mb-2" variant="h6">
              Username
            </Typography>
            <Input label="Username" size="lg" />
            <Typography className="-mb-2" variant="h6">
              Password
            </Typography>
            <Input label="Password" size="lg" />
            <div className="-ml-2.5 -mt-3">
              <Checkbox label="Remember Me" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Link to="/post">
              <Button
                to="/post"
                className="bg-primaryColor"
                onClick={openHandle}
                fullWidth
              >
                Login
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}
