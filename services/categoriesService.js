const {faker} = require('@faker-js/faker');

class CategoryService{
  constructor(){
    this.categories = [];
    this.generate();

  }
  generate(){
    const limit = 50;
    for (let index = 0; index < limit; index++) {
      this.categories.push({
        id: faker.string.uuid(),
        name: faker.commerce.department(),
        description: faker.commerce.productDescription()

      })
    }
  }
  find(){
    return this.categories;
  }
  findOne(id){
    return this.categories.find(item => item.id === id);
  }

}

module.exports = CategoryService;
