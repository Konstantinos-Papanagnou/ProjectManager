import { Resolver } from "@nestjs/graphql";
import { UseGuards } from "@nestjs/common";
import { RolesBuilder } from "nest-access-control";
import { EmployeeService } from "./employee.service";
import { EmployeeResolverBase } from "./base/employee.resolver.base";
import { GqlACGuard } from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import { Employee } from "./base/Employee";

@Resolver(() => Employee)
@UseGuards(GqlDefaultAuthGuard, GqlACGuard)
export class EmployeeResolver extends EmployeeResolverBase {
  constructor(
    protected readonly service: EmployeeService,
    protected readonly rolesBuilder: RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
