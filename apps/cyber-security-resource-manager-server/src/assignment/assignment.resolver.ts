import { Resolver, UseGuards } from "@nestjs/graphql";
import { RolesBuilder } from "nest-access-control";
import { AssignmentService } from "./assignment.service";
import { AssignmentResolverBase } from "./base/assignment.resolver.base";
import { GqlACGuard } from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import { Assignment } from "./base/Assignment";

@Resolver(() => Assignment)
@UseGuards(GqlDefaultAuthGuard, GqlACGuard)
export class AssignmentResolver extends AssignmentResolverBase {
  constructor(
    protected readonly service: AssignmentService,
    protected readonly rolesBuilder: RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
