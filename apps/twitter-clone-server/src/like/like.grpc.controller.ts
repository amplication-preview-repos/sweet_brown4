import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LikeService } from "./like.service";
import { LikeGrpcControllerBase } from "./base/like.grpc.controller.base";

@swagger.ApiTags("likes")
@common.Controller("likes")
export class LikeGrpcController extends LikeGrpcControllerBase {
  constructor(protected readonly service: LikeService) {
    super(service);
  }
}
