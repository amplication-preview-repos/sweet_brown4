import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FollowerService } from "./follower.service";
import { FollowerGrpcControllerBase } from "./base/follower.grpc.controller.base";

@swagger.ApiTags("followers")
@common.Controller("followers")
export class FollowerGrpcController extends FollowerGrpcControllerBase {
  constructor(protected readonly service: FollowerService) {
    super(service);
  }
}
