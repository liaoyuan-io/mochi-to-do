(function () {
    'use strict';
    const ENTER_KEY = 13;
    angular.module('mochiToDo', []).controller('TodoCtrl', function TodoCtrl($scope) {
        $scope.items = [
            {content: '当有待办事项存在时，我希望能看到待办事项列表', isDone: false},
            {content: '当我输入文字并使用回车确认时，我希望新输入的待办事项项目显示在列表中', isDone: false},
            {content: '当我点击待办事项左侧的checkbox时，待办事项应该标示为已完成', isDone: false},
            {content: '当我点击已完成待办事项左侧的checkbox时，待办事项应该标示为未完成', isDone: false},
            {content: '当我点击待办事项右侧的关闭按钮时，待办事项应当被删除', isDone: false}
        ];
        $scope.newItem = '';
        $scope.submitItem = function (keyCode) {
            if(keyCode == ENTER_KEY) {
                const addedItem = $scope.newItem;
                $scope.newItem = '';
                $scope.items.push({content:addedItem, isDone:false})
            }
        }
    })
})();