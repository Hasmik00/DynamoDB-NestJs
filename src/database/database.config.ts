import { Injectable, Logger } from "@nestjs/common";
<<<<<<< HEAD
import * as Joi from "joi";
=======
import Joi from "joi";

>>>>>>> 2f68a50d625d43b26ed1e2a3dff2b29b9aeae3ad
import { IDatabaseConfig } from "./database.contracts";
import { DatabaseSchema } from "./database-config.shema";
import { IAWSDetails } from "../types";



@Injectable()
export class DatabaseConfig implements IDatabaseConfig {
  private logger: Logger = new Logger(DatabaseConfig.name);

  public aws: IAWSDetails = {
    Key: process.env.APP_AWS_KEY,
    Secret: process.env.APP_AWS_SECRET,
    Endpoint: process.env.APP_AWS_ENDPOINT,
<<<<<<< HEAD
    Region: process.env.APP_AWS_REGION
=======
    Region: process.env.APP_AWS_RESGION
>>>>>>> 2f68a50d625d43b26ed1e2a3dff2b29b9aeae3ad
  };

  public prefix: string = `${process.env.APP_ENVIRONMENT}-`;
  public local: boolean = process.env.OFFLINE_MODE === "true";

  print() {
    this.logger.log(`REGION: ${this.aws.Region}`);
    this.logger.log(`PREFIX: ${this.prefix}`);
  }

  isValid() {
    const schema = Joi.object(DatabaseSchema);
    const { error } = schema.validate(this, { stripUnknown: true });
    if (error) {
      this.logger.error(`Joi validation error: ${JSON.stringify(error.details)}`);
    } else {
      this.logger.debug("Joi validation success");
    }
    return !error;
  }

<<<<<<< HEAD
}
=======
}
>>>>>>> 2f68a50d625d43b26ed1e2a3dff2b29b9aeae3ad
