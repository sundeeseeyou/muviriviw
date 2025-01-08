import React from "react";
import { Link, Form } from "react-router-dom";
import { useState } from "react";
import {
  Button,
  Dialog,
  Card,
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
        <Link to="/top-10">Top 10 Ranks</Link>
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
            <Input label="Username" size="md" required />
            <Typography className="-mb-2" variant="h6">
              Password
            </Typography>
            <Input label="Password" size="md" required />
            <div className="-ml-2.5 -mt-3">
              <Checkbox label="Remember Me" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button className="bg-primaryColor" onClick={openHandle} fullWidth>
              Login
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}
