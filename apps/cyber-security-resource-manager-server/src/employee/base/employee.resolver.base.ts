/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Employee } from "./Employee";
import { EmployeeCountArgs } from "./EmployeeCountArgs";
import { EmployeeFindManyArgs } from "./EmployeeFindManyArgs";
import { EmployeeFindUniqueArgs } from "./EmployeeFindUniqueArgs";
import { CreateEmployeeArgs } from "./CreateEmployeeArgs";
import { UpdateEmployeeArgs } from "./UpdateEmployeeArgs";
import { DeleteEmployeeArgs } from "./DeleteEmployeeArgs";
import { AssignmentFindManyArgs } from "../../assignment/base/AssignmentFindManyArgs";
import { Assignment } from "../../assignment/base/Assignment";
import { EmployeeService } from "../employee.service";
@graphql.Resolver(() => Employee)
export class EmployeeResolverBase {
  constructor(protected readonly service: EmployeeService) {}

  async _employeesMeta(
    @graphql.Args() args: EmployeeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Employee])
  async employees(
    @graphql.Args() args: EmployeeFindManyArgs
  ): Promise<Employee[]> {
    return this.service.employees(args);
  }

  @graphql.Query(() => Employee, { nullable: true })
  async employee(
    @graphql.Args() args: EmployeeFindUniqueArgs
  ): Promise<Employee | null> {
    const result = await this.service.employee(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Employee)
  async createEmployee(
    @graphql.Args() args: CreateEmployeeArgs
  ): Promise<Employee> {
    return await this.service.createEmployee({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Employee)
  async updateEmployee(
    @graphql.Args() args: UpdateEmployeeArgs
  ): Promise<Employee | null> {
    try {
      return await this.service.updateEmployee({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Employee)
  async deleteEmployee(
    @graphql.Args() args: DeleteEmployeeArgs
  ): Promise<Employee | null> {
    try {
      return await this.service.deleteEmployee(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Assignment], { name: "assignments" })
  async findAssignments(
    @graphql.Parent() parent: Employee,
    @graphql.Args() args: AssignmentFindManyArgs
  ): Promise<Assignment[]> {
    const results = await this.service.findAssignments(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
