import { Resolver } from "@nestjs/graphql";
import { UseGuards } from "@nestjs/common";
import { RolesBuilder } from "nest-access-control";
import { ProjectService } from "./project.service";
import { ProjectResolverBase } from "./base/project.resolver.base";
import { GqlACGuard } from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import { Project } from "./base/Project";

@Resolver(() => Project)
@UseGuards(GqlDefaultAuthGuard, GqlACGuard)
export class ProjectResolver extends ProjectResolverBase {
  constructor(
    protected readonly service: ProjectService,
    protected readonly rolesBuilder: RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
