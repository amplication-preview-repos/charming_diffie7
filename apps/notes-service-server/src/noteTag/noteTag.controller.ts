import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { NoteTagService } from "./noteTag.service";
import { NoteTagControllerBase } from "./base/noteTag.controller.base";

@swagger.ApiTags("noteTags")
@common.Controller("noteTags")
export class NoteTagController extends NoteTagControllerBase {
  constructor(protected readonly service: NoteTagService) {
    super(service);
  }
}
