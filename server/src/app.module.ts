import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import * as Joi from '@hapi/joi';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './modules/auth/auth.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { GroupesModule } from './modules/groupes/groupes.module';
import { PostesModule } from './modules/postes/postes.module';
import { SouscriptionsModule } from './modules/souscriptions/souscriptions.module';
import { TarifsModule } from './modules/tarifs/tarifs.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        POSTGRES_HOST: Joi.string().required(),
        POSTGRES_PORT: Joi.number().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_DB: Joi.string().required(),
        PORT: Joi.number(),
        JWT_SECRET: Joi.string().required(),
        JWT_EXPIRATION_TIME: Joi.string().required(),
      }),
    }),
    DatabaseModule,
    AuthModule,
    CategoriesModule,
    GroupesModule,
    PostesModule,
    SouscriptionsModule,
    TarifsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
