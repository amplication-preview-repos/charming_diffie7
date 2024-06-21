import * as graphql from "@nestjs/graphql";
import { NoteTagResolverBase } from "./base/noteTag.resolver.base";
import { NoteTag } from "./base/NoteTag";
import { NoteTagService } from "./noteTag.service";

@graphql.Resolver(() => NoteTag)
export class NoteTagResolver extends NoteTagResolverBase {
  constructor(protected readonly service: NoteTagService) {
    super(service);
  }
}
