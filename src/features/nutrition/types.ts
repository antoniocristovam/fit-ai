export type MealType = 'breakfast' | 'lunch' | 'dinner' | 'snack';

export interface Macros {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

export interface FoodItem {
  id: string;
  name: string;
  quantity: number;
  unit: string;
  macros: Macros;
}

export interface Meal {
  id: string;
  type: MealType;
  items: FoodItem[];
  totalMacros: Macros;
  loggedAt: string;
}
