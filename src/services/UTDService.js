import axios from "axios";

class UTDService {
  constructor() {
    this.baseUrl = "https://www.uptodateconnect.com/api/v1";
  }

  getSiteId(lang) {
    return siteIds[lang] ?? siteIds.NL;
  }

  async getRecipes(label = "") {
    const siteId = "fcaf2bfacb1b94755c6bfb82b32ae504";
    const url = `${this.baseUrl}/site-builder/meta-details?siteId=${siteId}&label=Recepten${label}&limit=9999&order=priority`;

    try {
      const { data } = await axios.get(url);
      const recipes = data.payload.results;
      return recipes;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  async getFilters() {
    const siteId = "fcaf2bfacb1b94755c6bfb82b32ae504";
    const url = `${this.baseUrl}/site-builder/site-data?type=global&siteHashedId=${siteId}&fields=snippet`;

    try {
      const { data } = await axios.get(url);
      const { categories, authors } = data.payload.snippet;
      return { categories, authors };
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
}

export default new UTDService();
