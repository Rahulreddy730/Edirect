import {projectGetAllAction} from "./controller/ProjectGetAllAction";
import {projectGetByIdAction} from "./controller/ProjectGetByIdAction";
import {projectSaveAction} from "./controller/ProjectSaveAction";
import { projectUpdateAction } from "./controller/ProjectUpdateAction";
import { todoSaveAction } from "./controller/ToDoSaveAction";
import { todoUpdateAction } from "./controller/ToDoUpdateAction";
import { projectDeleteAction } from "./controller/ProjectDeleteAction";

/**
 * All application routes.
 */
export const AppRoutes = [
    {
        path: "/app/projects",
        method: "get",
        action: projectGetAllAction
    },
    {
        path: "/app/projects/:id",
        method: "get",
        action: projectGetByIdAction
    },
    {
        path: "/app/projects",
        method: "post",
        action: projectSaveAction
    },
    {
        path: "/app/projects/:id",
        method: "put",
        action: projectUpdateAction
    },
    {
        path: "/app/todo",
        method: "post",
        action: todoSaveAction
    }
    ,
    {
        path: "/app/todo/:id",
        method: "put",
        action: todoUpdateAction
    }
    ,
    {
        path: "/app/projects/:id",
        method: "delete",
        action: projectDeleteAction
    }

];