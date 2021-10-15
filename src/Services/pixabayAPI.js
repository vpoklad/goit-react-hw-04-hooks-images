import axios from 'axios';
export default class pixabayAPI {
  constructor() {
    this.api_key = '23050146-8315646a187241c7ace27efa4';
    this._searchQuery = '';
    this._page = 1;
  }
  get searchQuery() {
    return this._searchQuery;
  }
  set searchQuery(value) {
    return (this._searchQuery = value);
  }
  get page() {
    return this._page;
  }
  set page(value) {
    return (this._page += value);
  }
  resetPage() {
    return (this._page = 1);
  }

  async search() {
    let url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this._page}&per_page=15&key=${this.api_key}
`;

    try {
      const result = await axios.get(url);
      const data = result.data;
      return data;
    } catch (err) {
      return err.message;
    }
  }
}
