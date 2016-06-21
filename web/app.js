(function () {
    'use strict';
    const ENTER_KEY = 13;
    angular.module('mochiToDo', []).controller('TodoCtrl', function TodoCtrl($scope, $http) {
        $http.get("/todo").then(function (res) {
            $scope.items = res.data;
        }).catch(function () {
            $scope.items = [
                {id: 100, content: '检测网络连接', isDone: false},
                {id: 200, content: '当有待办事项存在时，我希望能看到待办事项列表', isDone: false},
                {id: 300, content: '当我输入文字并使用回车确认时，我希望新输入的待办事项项目显示在列表中', isDone: false},
                {id: 400, content: '当我点击待办事项左侧的checkbox时，待办事项应该标示为已完成', isDone: false},
                {id: 500, content: '当我点击已完成待办事项左侧的checkbox时，待办事项应该标示为未完成', isDone: false},
                {id: 600, content: '当我点击待办事项右侧的关闭按钮时，待办事项应当被删除', isDone: false}
            ];
        });
        $scope.newItem = '';

        $scope.checkItem = function (item) {
            item.updating = true;
            $http.put("/todo/" + item.id, item).then(function () {
                item.updating = false;
            }).catch(function () {
                item.updating = false;
                item.isDone = !item.isDone;
                console.log('更新待办事项失败。');
            });
        };

        $scope.submitItem = function (keyCode) {
            if (keyCode == ENTER_KEY) {
                const addedItem = $scope.newItem;

                const data = {
                    content: addedItem,
                    isDone: false
                };

                $scope.posting = true;
                $scope.newItem = '';
                $http.post("/todo", data).then(function (res) {
                    $scope.posting = false;
                    $scope.items.push(res.data);
                }).catch(function () {
                    $scope.posting = false;
                    $scope.newItem = addedItem;
                    console.log('提交新待办事项失败。');
                });
            }
        };

        $scope.removeItem = function (id, index) {
            $http.delete("/todo/" + id).then(function () {
                $scope.items.splice(index, 1);
            }).catch(function () {
                console.log('删除待办事项失败。');
            })
        }
    });
})();