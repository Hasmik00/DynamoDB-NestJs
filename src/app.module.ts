import { Module, OnModuleInit } from "@nestjs/common";
import { DynamooseModule } from "nestjs-dynamoose";
import { Models } from "./db-models";

import { Services } from "./services";
import { Controllers } from "./controllers";
import { Repositories } from "./repositories";
import { OrmModule } from "./database";
import { ConfigModule } from "./common/services/config/config.module";
import { ServiceConfig } from "./common/services/config";
import { DatabaseModule } from "./database";

@Module({
  imports: [
    ConfigModule,
    DynamooseModule.forFeature(Models),
    OrmModule,

    // LoggerModule.forRootAsync({
    //   useFactory: ( config: LoggerConfig) =>{
    //     return config.options()
    //   },
    //   inject: [LoggerConfig],
    //   providers: [ LoggerConfig]
    // })
  ],
  controllers: [...Controllers],
  providers: [...Services, ...Repositories]
})
export class AppModule implements OnModuleInit {
  onModuleInit(): any {
  }

}
