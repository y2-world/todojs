let todos = [];

//初期化 : localStorageから読み込み
window.onload = function() {
    const stored = localStorage.getItem('todos'); // localStorageから取得
    // localStorageにデータがある場合は、JSON.parseでオブジェクトに変換
    if (stored) {
        todos = JSON.parse(stored); 
        renderTodos(); // todosを表示
    }
};

function addTodo() {
    const input = document.getElementById('todoInput'); // input要素を取得
    const text = input.value.trim(); // trim()で前後の空白を削除
    if(text) {
        todos.push(text); // todos配列に追加
        input.value = ''; // 入力欄を空にする
        saveAndRender(); // 保存して表示を更新
    }
}

function deleteTodo(index) {
    todos.splice(index, 1); // 指定したインデックスの要素を削除
    saveAndRender(); // 保存して表示を更新
}

function saveAndRender() { 
    localStorage.setItem('todos', JSON.stringify(todos)); // todos配列をJSON文字列に変換してlocalStorageに保存
    renderTodos(); // 表示を更新
}

function renderTodos() {
    const list = document.getElementById('todoList'); // ul要素を取得
    list.innerHTML = ''; // ul要素の中身を空にする
    // todos配列の要素を1つずつ取り出してli要素を作成
    // forEachメソッドを使って、todos配列の各要素に対して処理を実行
    // todos配列の各要素に対して、indexを取得
    // indexは配列のインデックス番号
    // todos配列の各要素をli要素に追加
    todos.forEach((todo, index) => {
        const li = document.createElement('li'); // li要素を作成
        li.textContent = todo;  // li要素にテキストを追加
        const delBtn = document.createElement('button'); // 削除ボタンを作成
        delBtn.textContent = '削除'; // 削除ボタンにテキストを追加
        delBtn.onclick = () => deleteTodo(index); // 削除ボタンをクリックしたらdeleteTodo関数を呼び出す
        li.onclick = () => li.classList.toggle('completed'); // li要素をクリックしたら.completedクラスをトグル
        li.appendChild(delBtn); // li要素に削除ボタンを追加
        list.appendChild(li);   // ul要素にli要素を追加
    });
}