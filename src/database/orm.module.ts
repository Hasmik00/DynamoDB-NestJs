import { Module } from '@nestjs/common';
import { DynamooseModule } from 'nestjs-dynamoose';

import { DatabaseModule } from './database.module';
import { DatabaseConfig } from './database.config';

@Module({
  imports: [
    DynamooseModule.forRootAsync({
      useFactory: (config: DatabaseConfig) => ({
        local: config.local,
        aws: {
          accessKeyId: config.aws.Key,
          secretAccessKey: config.aws.Secret,
          region: config.aws.Region,
        },
        model: {
          create: true,
          prefix: config.prefix,
        },
      }),
      imports: [DatabaseModule],
      inject: [DatabaseConfig],
    }),
  ],
})
export class OrmModule {}
