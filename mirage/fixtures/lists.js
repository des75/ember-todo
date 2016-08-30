import Mirage, { faker } from 'ember-cli-mirage';

var lists = [];

for (let i = 0; i <= 7; i++){
  lists.push({
    id: i,
    type: "todo-lists",
    attributes: {
      title: `List ${i}`,
      priority: faker.list.random(0,1,2,3,4,5)(),
      style: faker.list.random(1,2,3,4,5,6,7,8,9)()
    },
    relationships: {
      entries: [{
        data: {
          id: i,
          type: "todo-list-items"
        }
      },{
        data: {
          id: i+8,
          type: "todo-list-items"
        }
      }]
    }
  });
}

export default lists;
