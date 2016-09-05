export default function() {

  this.get("/todo-lists", function(scheme){
    return {
      data: scheme.db.lists,
      included: scheme.db.items
    };
  });
  this.get("/todo-lists/:id", function(scheme, request){
    return {
      data: scheme.db.lists.find(request.params.id),
      included: scheme.db.items
    };
  });
  
  this.post("/todo-lists", (schema, request) => {
    var params = JSON.parse(request.requestBody);
    return params;
  });  
  this.patch("/todo-lists/:id", (schema, request) => {
    var params = JSON.parse(request.requestBody);
    return params;
  });

  
  this.get("/todo-list-items", function(scheme){
    return {
      data: scheme.db.items
    };
  });
  
  this.post("/todo-list-items", (schema, request) => {
    var params = JSON.parse(request.requestBody);
    return params;
  });



  
  this.post("/auth", (schema, request) => {    
    return {
      token: "qweqweqwe"
    };
  });
  
  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
  */
}
