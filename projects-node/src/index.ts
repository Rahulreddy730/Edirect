import "reflect-metadata";
import {createConnection} from "typeorm";
import {Request, Response} from "express";
import * as express from "express";
import * as bodyParser from "body-parser";
import {AppRoutes} from "./routes";

// create connection with database
// note that it's not active database connection
// TypeORM creates connection pools and uses them for your requests
createConnection().then(async connection => {

    // create express app
    const app = express();
    app.use(bodyParser.json());
    var cors = require('cors');

    // use it before all route definitions
    app.use(cors({origin: '*'}));

    // register all application routes
    AppRoutes.forEach(route => {
        app[route.method](route.path, (request: Request, response: Response, next: Function) => {
            // response.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
            // response.setHeader('Access-Control-Allow-Credentials', "true");
            route.action(request, response)
                .then(() => next)
                .catch(err => next(err));
        });
    });

    // run app
    app.listen(4201);

    console.log("Express application is up and running on port 4201");

}).catch(error => console.log("TypeORM connection error: ", error));
