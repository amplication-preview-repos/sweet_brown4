import { Module } from "@nestjs/common";
import { TweetModuleBase } from "./base/tweet.module.base";
import { TweetService } from "./tweet.service";
import { TweetController } from "./tweet.controller";
import { TweetGrpcController } from "./tweet.grpc.controller";
import { TweetResolver } from "./tweet.resolver";

@Module({
  imports: [TweetModuleBase],
  controllers: [TweetController, TweetGrpcController],
  providers: [TweetService, TweetResolver],
  exports: [TweetService],
})
export class TweetModule {}
