import { Controller, UseGuards } from "@nestjs/common";
import { RolesBuilder } from "nest-access-control";
import { FileService } from "./file.service";
import { FileControllerBase } from "./base/file.controller.base";
import { GqlACGuard } from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";

@Controller("files")
@UseGuards(GqlDefaultAuthGuard, GqlACGuard)
export class FileController extends FileControllerBase {
  constructor(
    protected readonly service: FileService,
    protected readonly rolesBuilder: RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
