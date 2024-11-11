import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksEntity } from '../entity/books.entity';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Post()
  async create(@Body() book: BooksEntity): Promise<BooksEntity> {
    return await this.booksService.create(book);
  }

  @Get()
  async findAll(): Promise<BooksEntity[]> {
    return this.booksService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<BooksEntity> {
    return this.booksService.findOne(+id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() book: BooksEntity,
  ): Promise<number> {
    return this.booksService.update(+id, book);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<number> {
    return this.booksService.remove(+id);
  }
}
