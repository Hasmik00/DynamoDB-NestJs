import { Injectable } from "@nestjs/common";
import { InjectModel, Model } from "nestjs-dynamoose";
import { v4 as uuid } from "uuid";

import { Category, CategoryKey } from "../types/category.interface";
import { CreateCategoryDto } from "../dtos/create-category.dto";

@Injectable()
export class CategoryRepository {
  constructor(
    @InjectModel("Category")
    private categoryModel: Model<Category, CategoryKey>
  ) {
  }

  async create(data: CreateCategoryDto): Promise<Category> {
    return this.categoryModel.create({ category_id: uuid, ...data });
  }
}