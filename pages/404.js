import { Button } from "@material-ui/core";
import React from "react";
import Link from "next/link";

const Page404 = () => {
  return (
    <div>
      <Button variant="contained">
        <Link href="/">
          <a>Home</a>
        </Link>
      </Button>
      <img
        className="w-100"
        src="https://znaiwifi.com/wp-content/uploads/2018/01/hqdefault.jpg"
        alt="rasm"
      />
    </div>
  );
};

export default Page404;
