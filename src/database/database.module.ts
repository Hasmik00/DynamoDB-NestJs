import { Module, OnModuleInit } from '@nestjs/common';

import { DatabaseConfig } from './database.config';

@Module({
  imports: [],
  providers: [DatabaseConfig],
  exports: [DatabaseConfig],
})
export class DatabaseModule implements OnModuleInit {
  constructor(private config: DatabaseConfig) {}

  onModuleInit(): void {

    console.log('---this ', this.config)
    this.config.print();
    if (!this.config.isValid()) {
      process.exit(1);
    }
  }
}