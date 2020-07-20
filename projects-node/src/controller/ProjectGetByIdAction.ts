import {Request, Response} from "express";
import {getManager} from "typeorm";
import {Project} from "../entity/Project";

/**
 * Loads post by a given id.
 */
export async function projectGetByIdAction(request: Request, response: Response) {

    // get a post repository to perform operations with post
    const projectRepository = getManager().getRepository(Project);

    // load a post by a given post id
    const project = await projectRepository.findOne(request.params.id);

    // if post was not found return 404 to the client
    if (!project) {
        response.status(404);
        response.end();
        return;
    }

    // return loaded post
    response.send(project);
}
