import { Module, OnModuleInit } from "@nestjs/common";
import { ConfigModule } from '@nestjs/config';
import { DynamooseModule } from "nestjs-dynamoose";
import { Models } from "./db-models";

import { Services } from "./services";
import { Controllers } from "./controllers";
import { Repositories } from "./repositories";
import { OrmModule } from "./database";
import { ServiceConfig } from "./common/services/config";
import { CustomConfigModule as ServiceConfigModule } from './common/services/config/config.module'
import { DatabaseModule } from "./database";

@Module({
  imports: [
    ServiceConfigModule,
    DynamooseModule.forFeature(Models),
    OrmModule,
    ConfigModule.forRoot()

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