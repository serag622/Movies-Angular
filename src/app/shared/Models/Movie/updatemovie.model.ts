export interface UpdateMovie{
  name :string;
  image:any;
  description: string;
  category_id: number;
  _method : 'put';
}