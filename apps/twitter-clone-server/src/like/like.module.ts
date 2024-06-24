import { Module } from "@nestjs/common";
import { LikeModuleBase } from "./base/like.module.base";
import { LikeService } from "./like.service";
import { LikeController } from "./like.controller";
import { LikeGrpcController } from "./like.grpc.controller";
import { LikeResolver } from "./like.resolver";

@Module({
  imports: [LikeModuleBase],
  controllers: [LikeController, LikeGrpcController],
  providers: [LikeService, LikeResolver],
  exports: [LikeService],
})
export class LikeModule {}
