import { Body, Controller, Get, Param, Post } from "@nestjs/common";

import { CategoryService } from "../services/category.service";
import { CreateCategoryDto } from "../dtos/create-category.dto";
import { ICategory } from "../types/category.interface";

@Controller("category")
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {
  }

  @Post()
  async createCategory(@Body() body: CreateCategoryDto): Promise<ICategory> {
    return this.categoryService.createCategory(body);
  }

  @Get(":categoryId")
  async getCategoryById(@Param("categoryId") categoryId: string): Promise<ICategory> {
    return await this.categoryService.getCategoryById(categoryId);
  };

  @Get("categories")
  async getAllCategories(): Promise<ICategory> {
    return await this.categoryService.getAllCategories();
  };
}
