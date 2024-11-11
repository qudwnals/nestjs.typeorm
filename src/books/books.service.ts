import { Injectable } from '@nestjs/common';
import { BooksEntity } from '../entity/books.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(BooksEntity)
    private booksRepository: Repository<BooksEntity>,
  ) {}

  async create(book: BooksEntity): Promise<BooksEntity> {
    const newBook = this.booksRepository.create(book);
    return await this.booksRepository.save(newBook);
  }

  async findAll(): Promise<BooksEntity[]> {
    return this.booksRepository.find();
  }

  async findOne(id: number): Promise<BooksEntity> {
    return await this.booksRepository.findOne({
      where: {
        id,
      },
    });
  }

  async update(id: number, book: BooksEntity): Promise<number> {
    await this.booksRepository.update(id, book);
    return id;
  }

  async remove(id: number): Promise<number> {
    await this.booksRepository.delete(id);
    return id;
  }
}
