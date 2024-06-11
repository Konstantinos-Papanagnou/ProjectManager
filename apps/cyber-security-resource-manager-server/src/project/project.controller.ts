import { Controller, UseGuards } from "@nestjs/common";
import { RolesBuilder } from "nest-access-control";
import { ProjectService } from "./project.service";
import { ProjectControllerBase } from "./base/project.controller.base";
import { GqlACGuard } from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";

@Controller("projects")
@UseGuards(GqlDefaultAuthGuard, GqlACGuard)
export class ProjectController extends ProjectControllerBase {
  constructor(
    protected readonly service: ProjectService,
    protected readonly rolesBuilder: RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
