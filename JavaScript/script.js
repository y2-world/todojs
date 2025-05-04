const form = document.getElementById('todo-form'); // form要素を取得
// console.log(form);
const input = document.getElementById('todo-input'); // input要素を取得
// console.log(input);
const todoList = document.getElementById('todo-list'); // ul要素を取得
// console.log(todoList);

form.addEventListener('submit', function(e) {
    e.preventDefault(); //送信をクリックしてもページ遷移しないようにする

    const text = input.value.trim(); // trim()で前後の空白を削除
    if (text === '') {
        return; // 何もしない
    } // 入力が空の場合は何もしない
    const li = document.createElement('li'); // li要素を作成
    li.textContent = text; // li要素にテキストを追加

    li.addEventListener('click', function() {
        li.classList.toggle('completed'); // li要素をクリックしたら.completedクラスをトグル
    })

    const deleteBtn = document.createElement('button'); // 削除ボタンを作成
    deleteBtn.textContent = '削除'; // 削除ボタンにテキストを追加
    deleteBtn.addEventListener('click', function() {
        li.remove(); // li要素を削除
     }); // 削除ボタンをクリックしたら

     li.appendChild(deleteBtn); // li要素に削除ボタンを追加
     todoList.appendChild(li); // ul要素にli要素を追加
     input.value = ''; // 入力欄を空にする
});