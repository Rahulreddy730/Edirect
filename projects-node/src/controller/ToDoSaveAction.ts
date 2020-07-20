import {Request, Response} from "express";
import {getManager} from "typeorm";
import { ToDo } from "../entity/ToDo";

/**
 * Saves given post.
 */
export async function todoSaveAction(request: Request, response: Response) {

    // get a post repository to perform operations with post
    const todoRepository = getManager().getRepository(ToDo);

    // create a real post object from post json object sent over http
    const newTodo = todoRepository.create(request.body);

    // save received post
    await todoRepository.save(newTodo);

    // return saved post back
    response.send(newTodo);
}