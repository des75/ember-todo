import { moduleFor, test } from 'ember-qunit';

moduleFor('route:todo-lists/index', 'Unit | Route | todo lists/index', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
