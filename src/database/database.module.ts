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
<<<<<<< HEAD
}
=======
}
>>>>>>> 2f68a50d625d43b26ed1e2a3dff2b29b9aeae3ad
