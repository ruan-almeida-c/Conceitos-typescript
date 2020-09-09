import {Request, Response} from "express";
import createUser from "./services/CreateUser";

export function helloWorld( request: Request, response: Response){
  const user = createUser({
    email: "ru_almeida@id.uff.br",
    password: "52158",
    techs: [
      "React Native",
      "ReactJS"
    ],
  });

  return response.json({ message: "Hello Wordl"});
}