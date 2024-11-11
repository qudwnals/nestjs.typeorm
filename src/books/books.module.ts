import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { BooksEntity } from '../entity/books.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([BooksEntity])],
  providers: [BooksService],
  controllers: [BooksController],
})
export class BooksModule {}
