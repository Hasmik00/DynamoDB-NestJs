export interface CategoryKey {
  category_id: string;
}

export interface Category extends CategoryKey {
  title: string;
  description: string;
}