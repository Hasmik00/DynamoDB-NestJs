import { Body, Controller, Post } from "@nestjs/common";

import { CategoryService } from "../services/category.service";
import { CreateCategoryDto } from "../dtos/create-category.dto";
import { Category } from "../types/category.interface";

@Controller("category")
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {
  }

  @Post()
  async createCategory(@Body() body: CreateCategoryDto): Promise<Category> {
    return this.categoryService.createCategory(body);
  }
}
