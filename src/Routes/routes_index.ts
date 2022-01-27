import { Router } from "express";
import ROUTES_DEFINES from "./routes_defines";
import is_alive_router from "./Routers/is_alive_router";
import codable_router from "./Routers/codable_router";

const applicationRoutes: Map<string, Router> = new Map<string, Router>();

applicationRoutes.set(ROUTES_DEFINES.IS_ALIVE_ROUTE, is_alive_router);
applicationRoutes.set(ROUTES_DEFINES.CODABLE, codable_router);

export default applicationRoutes;