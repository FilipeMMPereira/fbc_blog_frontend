import {Injectable} from'@angular/core'

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private category: { id: number, name: string, slug: string } | null = null;
  setCategory(category: { id: number, name: string, slug: string }) {
    this.category = category;
  }
  getCategory() {
    return this.category;
  }
  clearCategory() {
    this.category = null;
  }

}
