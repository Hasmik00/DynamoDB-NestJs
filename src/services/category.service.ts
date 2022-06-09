import { Injectable } from "@nestjs/common";

import { CategoryRepository } from "../repositories";
import { CreateCategoryDto } from "../dtos/create-category.dto";
import { Category } from "../types/category.interface";

@Injectable()
export class CategoryService {
  constructor(private readonly categoryRepository: CategoryRepository) {
  }

  async createCategory(data: CreateCategoryDto): Promise<Category> {
    return this.categoryRepository.create(data);
  }
}