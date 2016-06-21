var express = require('express');
var bodyParser = require('body-parser');
var ToDoModel = require('./model/toDo');


var model = new ToDoModel([
    {id: 0, content: '当有待办事项存在时，我希望能看到待办事项列表', isDone: false},
    {id: 1, content: '当我输入文字并使用回车确认时，我希望新输入的待办事项项目显示在列表中', isDone: false},
    {id: 2, content: '当我点击待办事项左侧的checkbox时，待办事项应该标示为已完成', isDone: false},
    {id: 3, content: '当我点击已完成待办事项左侧的checkbox时，待办事项应该标示为未完成', isDone: false},
    {id: 4, content: '当我点击待办事项右侧的关闭按钮时，待办事项应当被删除', isDone: false}
], 5);


var app = express();

app.use(bodyParser.json());

app.get('/todo', function (req, res) {
    res.json(model.find());
});

app.post('/todo', function (req, res, next) {
    console.log(req.body);
    var newItem = req.body;
    if (!newItem || !newItem.content || !newItem.hasOwnProperty('isDone')) {
        res.status(400);
        res.json(new Error('Missing content or isDone.'));
        return;
    }
    res.json(model.insert(newItem));
    next();
});

app.put('/todo/:itemId', function (req, res) {
    var itemId = req.params.itemId;
    var newItem = req.body;
    console.log(itemId, newItem);
    if (!newItem || !newItem.content || !newItem.hasOwnProperty('isDone')) {
        res.status(400);
        res.json(new Error('Missing content or isDone.'));
        return;
    }
    res.json(model.updateById(itemId, newItem));
});

app.delete('/todo/:itemId', function (req, res) {
    var itemId = req.params.itemId;
    res.json(model.removeById(itemId));
});

app.use(express.static("../web"));

var port = 3000;
app.listen(port, function () {
    console.log('Listening on port ' + port + '... ');
});