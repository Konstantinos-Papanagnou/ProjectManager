import { Controller, UseGuards } from "@nestjs/common";
import { RolesBuilder } from "nest-access-control";
import { AssignmentService } from "./assignment.service";
import { AssignmentControllerBase } from "./base/assignment.controller.base";
import { ACGuard, UseRoles } from "nest-access-control";
import { GqlACGuard } from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";

@Controller("assignments")
@UseGuards(GqlDefaultAuthGuard, GqlACGuard)
export class AssignmentController extends AssignmentControllerBase {
  constructor(
    protected readonly service: AssignmentService,
    protected readonly rolesBuilder: RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
