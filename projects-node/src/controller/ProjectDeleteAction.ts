import {Request, Response} from "express";
import {getManager} from "typeorm";
import {Project} from "../entity/Project";

/**
 * Saves given post.
 */
export async function projectDeleteAction(request: Request, response: Response) {

    // get a post repository to perform operations with post
    const projectRepository = getManager().getRepository(Project);
    console.log("deleteing project", request.params.id);
    // create a real post object from post json object sent over http
    await projectRepository.delete(request.params.id);

    // save received post
    

    // return saved post back
    response.send();
}