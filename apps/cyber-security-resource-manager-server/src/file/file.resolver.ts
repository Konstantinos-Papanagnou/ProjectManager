import { Resolver } from "@nestjs/graphql";
import { UseGuards } from "@nestjs/common";
import { RolesBuilder } from "nest-access-control";
import { FileService } from "./file.service";
import { FileResolverBase } from "./base/file.resolver.base";
import { GqlACGuard } from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import { File } from "./base/File";

@Resolver(() => File)
@UseGuards(GqlDefaultAuthGuard, GqlACGuard)
export class FileResolver extends FileResolverBase {
  constructor(
    protected readonly service: FileService,
    protected readonly rolesBuilder: RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
