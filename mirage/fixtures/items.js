import Mirage, { faker } from 'ember-cli-mirage';

var items = [];

for (let i = 0; i <= 15; i++){
  items.push({
    id: i,
    type: "todo-list-items",
    attributes: {
      text: `item text ${i}`,
      completed: faker.list.random(true,false)()
    },
    relationships: {
      list: {
	data: {
	  id: (i >= 8 ? i-8 : i),
	  type: "todo-lists"
	}
      }
    }
  });
}

export default items;
