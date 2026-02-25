import axios from "axios";

class UTDService {
  constructor() {
    this.baseUrl = "https://www.uptodateconnect.com/api/v1";
    this.siteId = "fcaf2bfacb1b94755c6bfb82b32ae504";
  }

  getSiteId(lang) {
    return siteIds[lang] ?? siteIds.NL;
  }

  async getRecipes(label = "") {
    const url = `${this.baseUrl}/site-builder/meta-details?siteId=${this.siteId}&label=Recepten${label}&limit=9999&order=priority`;

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

  async openRecipePreview(pageId) {
    try {
      const response = await fetch(
        `https://www.uptodateconnect.com/api/v1/site-builder/sites-page-html-export?siteId=${this.siteId}&pageId=${pageId}`,
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return response.text();
    } catch (error) {
      console.error("Error fetching preview HTML:", error);
      throw new Error(error);
    }
  }
}

export default new UTDService();
