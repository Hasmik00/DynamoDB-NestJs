import { Module, OnModuleInit } from "@nestjs/common";
import { ConfigModule } from '@nestjs/config';
import { DynamooseModule } from "nestjs-dynamoose";
import { Models } from "./db-models";

import { Services } from "./services";
import { Controllers } from "./controllers";
import { Repositories } from "./repositories";
import { OrmModule } from "./database";
import { ServiceConfig } from "./common/services/config";
<<<<<<< HEAD
import { CustomConfigModule as ServiceConfigModule } from './common/services/config/config.module'
=======
import { ConfigModule as ServiceConfigModule } from './common/services/config/config.module'
>>>>>>> 2f68a50d625d43b26ed1e2a3dff2b29b9aeae3ad
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