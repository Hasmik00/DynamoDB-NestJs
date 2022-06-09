import { Schema } from "dynamoose";

export const CategorySchema = new Schema(
  {
    id: {
      type: String,
      hashKey: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  },
  {
    saveUnknown: true
  })
;

export const CategoryModel = {
  name: "Category",
  schema: CategorySchema
};