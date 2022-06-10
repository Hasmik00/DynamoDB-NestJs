import { Injectable } from "@nestjs/common";
import { isEmpty } from "lodash";

import { CategoryRepository } from "../repositories";
import { CreateCategoryDto } from "../dtos/create-category.dto";
import { ICategory } from "../types/category.interface";
import to from "await-to-js";

@Injectable()
export class CategoryService {
  constructor(private readonly categoryRepository: CategoryRepository) {
  }

  async createCategory(data: CreateCategoryDto): Promise<ICategory> {
    return this.categoryRepository.create(data);
  }

  async getCategoryById(categoryId: string): Promise<ICategory> {
    const [error, category] = await to(this.categoryRepository.getCategoryById(categoryId));

    if (error || isEmpty(category)) {
      const err = error.message || "No category";
      throw new Error(err);
    }

    return category;
  }

  async getAllCategories(): Promise<ICategory> {
    const [error, category] = await to(this.categoryRepository.getAllCategories());

    if (error || isEmpty(category)) {
      const err = error.message || "No category";
      throw new Error(err);
    }

    return category;
  }
}