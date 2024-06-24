/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { GrpcMethod } from "@nestjs/microservices";
import { TweetService } from "../tweet.service";
import { TweetCreateInput } from "./TweetCreateInput";
import { TweetWhereInput } from "./TweetWhereInput";
import { TweetWhereUniqueInput } from "./TweetWhereUniqueInput";
import { TweetFindManyArgs } from "./TweetFindManyArgs";
import { TweetUpdateInput } from "./TweetUpdateInput";
import { Tweet } from "./Tweet";
import { LikeFindManyArgs } from "../../like/base/LikeFindManyArgs";
import { Like } from "../../like/base/Like";
import { LikeWhereUniqueInput } from "../../like/base/LikeWhereUniqueInput";

export class TweetGrpcControllerBase {
  constructor(protected readonly service: TweetService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Tweet })
  @GrpcMethod("TweetService", "createTweet")
  async createTweet(@common.Body() data: TweetCreateInput): Promise<Tweet> {
    return await this.service.createTweet({
      data: data,
      select: {
        author: true,
        content: true,
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Tweet] })
  @ApiNestedQuery(TweetFindManyArgs)
  @GrpcMethod("TweetService", "tweets")
  async tweets(@common.Req() request: Request): Promise<Tweet[]> {
    const args = plainToClass(TweetFindManyArgs, request.query);
    return this.service.tweets({
      ...args,
      select: {
        author: true,
        content: true,
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Tweet })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("TweetService", "tweet")
  async tweet(
    @common.Param() params: TweetWhereUniqueInput
  ): Promise<Tweet | null> {
    const result = await this.service.tweet({
      where: params,
      select: {
        author: true,
        content: true,
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Tweet })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("TweetService", "updateTweet")
  async updateTweet(
    @common.Param() params: TweetWhereUniqueInput,
    @common.Body() data: TweetUpdateInput
  ): Promise<Tweet | null> {
    try {
      return await this.service.updateTweet({
        where: params,
        data: data,
        select: {
          author: true,
          content: true,
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Tweet })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("TweetService", "deleteTweet")
  async deleteTweet(
    @common.Param() params: TweetWhereUniqueInput
  ): Promise<Tweet | null> {
    try {
      return await this.service.deleteTweet({
        where: params,
        select: {
          author: true,
          content: true,
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/likes")
  @ApiNestedQuery(LikeFindManyArgs)
  @GrpcMethod("TweetService", "findManyLikes")
  async findManyLikes(
    @common.Req() request: Request,
    @common.Param() params: TweetWhereUniqueInput
  ): Promise<Like[]> {
    const query = plainToClass(LikeFindManyArgs, request.query);
    const results = await this.service.findLikes(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,

        tweet: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/likes")
  @GrpcMethod("TweetService", "connectLikes")
  async connectLikes(
    @common.Param() params: TweetWhereUniqueInput,
    @common.Body() body: LikeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      likes: {
        connect: body,
      },
    };
    await this.service.updateTweet({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/likes")
  @GrpcMethod("TweetService", "updateLikes")
  async updateLikes(
    @common.Param() params: TweetWhereUniqueInput,
    @common.Body() body: LikeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      likes: {
        set: body,
      },
    };
    await this.service.updateTweet({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/likes")
  @GrpcMethod("TweetService", "disconnectLikes")
  async disconnectLikes(
    @common.Param() params: TweetWhereUniqueInput,
    @common.Body() body: LikeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      likes: {
        disconnect: body,
      },
    };
    await this.service.updateTweet({
      where: params,
      data,
      select: { id: true },
    });
  }
}