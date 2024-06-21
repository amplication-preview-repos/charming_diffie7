import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { NoteTagServiceBase } from "./base/noteTag.service.base";

@Injectable()
export class NoteTagService extends NoteTagServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
