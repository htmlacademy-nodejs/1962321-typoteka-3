'use strict';

class CategoryService {
  constructor(articles) {
    this.articles = articles;
  }

  findAll() {
    const categories = this.articles.reduce((acc, offer) => {
      offer.category.forEach((category) => acc.add(category));

      return acc;
    }, new Set());

    return [...categories];
  }
}

module.exports = CategoryService;