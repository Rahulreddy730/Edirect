import {Request, Response} from "express";
import {getManager} from "typeorm";
import {Project} from "../entity/Project";

/**
 * Saves given post.
 */
export async function projectSaveAction(request: Request, response: Response) {

    // get a post repository to perform operations with post
    const projectRepository = getManager().getRepository(Project);

    // create a real post object from post json object sent over http
    const newProject = projectRepository.create(request.body);

    // save received post
    await projectRepository.save(newProject);

    // return saved post back
    response.send(newProject);
}