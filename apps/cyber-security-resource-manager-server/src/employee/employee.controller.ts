import { Controller, UseGuards } from "@nestjs/common";
import { RolesBuilder } from "nest-access-control";
import { EmployeeService } from "./employee.service";
import { EmployeeControllerBase } from "./base/employee.controller.base";
import { GqlACGuard } from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";

@Controller("employees")
@UseGuards(GqlDefaultAuthGuard, GqlACGuard)
export class EmployeeController extends EmployeeControllerBase {
  constructor(
    protected readonly service: EmployeeService,
    protected readonly rolesBuilder: RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
