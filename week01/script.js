//關注點分離
var todoInput = document.querySelector('#newTodo');
var todoBtn = document.querySelector('#addTodo');
// 清單列表
var todoList = document.querySelector('#todoList');
var taskCount = document.querySelector('#taskCount');
var clearAllTaskBtn = document.querySelector('#clearTask');

// 監聽事件
todoBtn.addEventListener('click',addTodo);
clearAllTaskBtn.addEventListener('click',clearAllTask);
todoList.addEventListener('click',doSomething);

var todoData = [];

function addTodo(){
  //input 為空值
  if(todoInput.value!==''){
      todoData.push({
        //id 確認資料的唯一性，刪除後新增的索引值會重複，但使用時間戳就不會了!
        id: Math.floor(Date.now()),
        text: todoInput.value,
        completed: false,//
      });//把資料 push 進去
  };
  //console.log(todoData);
  render(todoData);
  todoInput.value = '';  
};

//移除項目
function removeList(id){
  //console.log(e.target.parentNode.dataset.id);
  //todoData.splice(e.target.parentNode,1);
  var newIndex = 0;
  todoData.forEach(function(item,index){
    //button id == 所選 button id
    console.log(id == item.id);
    if(id == item.id){
      newIndex = index;//賦予索引值
    }
  });
  todoData.splice(newIndex,1)
  render(todoData);
}

//清空項目
function clearAllTask(e){
  //console.log(e.target.parentNode);
  todoData = [];//清空陣列
  render(todoData);
};

//完成項目
function completeList(id){
  todoData.forEach(function(item){
    if(id == item.id){
      if (item.completed) {
        // item.completed = item.completed ? false : true; 助教解法
				item.completed = false;
			} else {
				item.completed = true;
			}
    }
  });
  render(todoData);
}

//取id、狀態
function doSomething(e){
  //e.target -><span>
  var id = e.target.parentNode.dataset.id;//取得 button 的 data-id
  var action = e.target.parentNode.dataset.action;//取得 action 狀態為何
  //console.log(e.target.parentNode.dataset.action);
  if(action == 'remove'){
    removeList(id);
  }else if(action == 'complete'){
    completeList(id)
  }
}

//畫面渲染
function render(data){
    var str = '';
    //console.log(data);
    data.forEach(function(item,index){
      //console.log(item);
      //todoList.innerHTML = `<li class="list-group-item"> ${ item.text }</li>` 這邊只會重複覆蓋
      str += `<li class="list-group-item">
        <div class="d-flex">
          <div class="form-check" data-action="complete" data-id="${item.id}">
            <input type="checkbox" class="form-check-input" ${item.completed ? 'checked' : ''}>
              <label class="form-check-label ${item.completed ? 'completed' : ''}"> ${item.text} </label>
          </div>
          <button type="button" class="btns close ml-auto" aria-label="Close" data-id="${item.id}" data-action="remove">
            <span aria-hidden="true" data-action="remove">&times;</span>
          </button>
        </div>
      </li>`;
      //&times; 是 x 
      //input 跟 button 都要有 item.id，才能判斷刪除
    });
     todoList.innerHTML = str;
     taskCount.textContent = data.length;//有幾筆資料
    // var btns = document.querySelectorAll('.btns');
    // var id = e.target.dataset.id;
    // console.log(id);
    // btns.forEach(function(btn){
    //   btn.addEventListener('click',removeList);
    // })
}