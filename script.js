const fortunes = [
"大吉💖素敵な出会いがあるかも！",
"中吉😊少し勇気を出すと良いことが起きる",
"小吉😐今日はゆっくり過ごそう",
"凶😢無理せず慎重に行動しよう"
];

//ボタンと表示エリアを取得
const button = document.getElementById("A");
const result = document.getElementById("B");

//ボタンとクリックがおされたときの処理
button.addEventListener("click", function(){
    //ランダムな数字を作る
    const randomNumber =Math.floor(Math.random() * fortunes.length);

    //結果を表示
    result.textContent = fortunes[(randomNumber)];
});