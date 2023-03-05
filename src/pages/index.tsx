import axios from "axios";
import React, { FC } from "react";
import { User } from "../interfaces/users";

const Page = (props: FC) => {
  async function getUsers(token: string, server: string) {
    let users = await axios({
      url: server,
      headers: {
        auth: token,
      },
    });

    return users;
  }

  React.useEffect(() => {
    getUsers("smth", "http://localhost:8080/users");
  }, []);
  return <div>Page</div>;
};

export default Page;
