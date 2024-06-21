import { Module } from "@nestjs/common";
import { NoteTagModuleBase } from "./base/noteTag.module.base";
import { NoteTagService } from "./noteTag.service";
import { NoteTagController } from "./noteTag.controller";
import { NoteTagResolver } from "./noteTag.resolver";

@Module({
  imports: [NoteTagModuleBase],
  controllers: [NoteTagController],
  providers: [NoteTagService, NoteTagResolver],
  exports: [NoteTagService],
})
export class NoteTagModule {}
