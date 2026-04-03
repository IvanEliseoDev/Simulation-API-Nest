import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function main() {
  const app = await NestFactory.create(AppModule);

  //Uso de GobalPipes para que todas las Validaciones del DTO funcionen
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //Limpio los otros properties que envie en la peticion y no lo haya defino en mi DTO 
      forbidNonWhitelisted: true //Muestra cuales son las properties que no estan definidas
    })
  )

  await app.listen(process.env.PORT ?? 3000);
}
main();
