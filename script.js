const fortunes = [
"大吉 　新たな展開が、、、！！",
"中吉 　少し勇気を出すと良いことが起きる",
"小吉　 今日はゆっくり過ごそう",
"凶 　無理せず慎重に行動しよう",
"大凶 　今は何も行動しないでおこう"

];

//ボタンと表示エリアを取得
const button = document.getElementById("A");
const result = document.getElementById("B");

//ボタンとクリックがおされたときの処理
button.addEventListener("click", function(){
    //ランダムな数字を作る
    const randomNumber =Math.floor(Math.random() * fortunes.length);
    const resultText = fortunes[(randomNumber)]
    //結果を表示
    result.textContent = fortunes[(randomNumber)];

    if (resultText.includes("大吉"))　{
        result.style.color = "red"; 
    } else if(resultText.includes("中吉"))　{
        result.style.color = "green";
    } else {
        result.style.color = "black";
    }
});