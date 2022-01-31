import { Router } from "express";
import ROUTES_DEFINES from "./routes_defines";
import is_alive_router from "./Routers/is_alive_router";
import * as codable_router from "./Routers/codable_router";
import { Codable } from "../Model/Codable";

export type RoutesConfig = {
    codable: Codable
}
export function create(config: RoutesConfig): Map<string, Router> {

    const applicationRoutes: Map<string, Router> = new Map<string, Router>();

    applicationRoutes.set(ROUTES_DEFINES.IS_ALIVE_ROUTE, is_alive_router);
    applicationRoutes.set(ROUTES_DEFINES.CODABLE, codable_router.create(config));

    return applicationRoutes;
}