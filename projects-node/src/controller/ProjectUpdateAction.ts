import {Request, Response} from "express";
import {getManager} from "typeorm";
import {Project} from "../entity/Project";

/**
 * Saves given post.
 */
export async function projectUpdateAction(request: Request, response: Response) {

    // get a post repository to perform operations with post
    const projectRepository = getManager().getRepository(Project);
    console.log("in update ", request.params.id, request.body)
    // create a real post object from post json object sent over http

    const dbProject = await projectRepository.findOne(request.params.id);
    console.log(" db project ", dbProject);
    dbProject.name = request.body.name;
    dbProject.description = request.body.description;
    dbProject.title = request.body.title;
    dbProject.todos = request.body.todos;
    const updatedProject = await projectRepository.save(dbProject);

    // return saved post back
    response.send(updatedProject);
}