import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TweetService } from "./tweet.service";
import { TweetGrpcControllerBase } from "./base/tweet.grpc.controller.base";

@swagger.ApiTags("tweets")
@common.Controller("tweets")
export class TweetGrpcController extends TweetGrpcControllerBase {
  constructor(protected readonly service: TweetService) {
    super(service);
  }
}
