import {Request, Response} from "express";
import {getManager} from "typeorm";
import { ToDo } from "../entity/ToDo";

/**
 * Saves given post.
 */
export async function todoUpdateAction(request: Request, response: Response) {

    // get a post repository to perform operations with post
    const todoRepository = getManager().getRepository(ToDo);

    // create a real post object from post json object sent over http
    const todo = await todoRepository.update(request.params.id, request.body);

    // return saved post back
    response.send(todo);
}