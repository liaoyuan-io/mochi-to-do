function ToDoModel(items, nextId) {
    this.items = items;
    this.nextId = nextId;
}

ToDoModel.prototype.find = function () {
    return this.items;
};

ToDoModel.prototype.findIndexById = function (id) {
    for (var i in this.items) {
        if (this.items.hasOwnProperty(i) && this.items[i].id == id) {
            return i;
        }
    }
    throw new Error('Todo item not found.');
};

ToDoModel.prototype.findById = function (id) {
    return this.items[this.findIndexById(id)];
};

ToDoModel.prototype.insert = function (newItem) {
    newItem = Object.assign({id: this.nextId++}, newItem);
    this.items.push(newItem);
    return newItem;
};

ToDoModel.prototype.updateById = function (id, newItem) {
    var index = this.findIndexById(id);
    newItem.id = id;
    this.items[index] = newItem;
    return newItem;
};

ToDoModel.prototype.removeById = function (id) {
    var index = this.findIndexById(id);
    return this.items.splice(index, 1);
};

module.exports = ToDoModel;