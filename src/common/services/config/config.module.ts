import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { ServiceConfig } from "./service.config";

@Module({
  imports: [ConfigModule.forRoot()],
  exports: [ServiceConfig],
  providers: [ServiceConfig]
})
export class CustomConfigModule {
}
