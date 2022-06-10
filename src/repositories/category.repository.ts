import { Injectable } from "@nestjs/common";
import { InjectModel, Model } from "nestjs-dynamoose";
import { v4 as uuid } from "uuid";

import { CategoryKey, ICategory } from "../types/category.interface";
import { CreateCategoryDto } from "../dtos/create-category.dto";

@Injectable()
export class CategoryRepository {
  constructor(
    @InjectModel("Category")
    private categoryModel: Model<ICategory, CategoryKey>
  ) {}

  async create(data: CreateCategoryDto): Promise<ICategory> {
    return this.categoryModel.create({ id: uuid, ...data });
  }

  // async update(id: string, data: UpdateCategoryDto ): {}

  async getCategoryById(id: string): Promise<any> {
    return await this.categoryModel.get({ id });
    // const category = await this.categoryModel.query({ id: id }).limit(1).exec();
  }

  async getAllCategories(): Promise<any> {
    return await this.categoryModel.scan().exec();
  }
}