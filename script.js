//合計スコア用の変数
let score = 0;

function showScore(){
//スコア表示の処理をここに記述
}

/**************
1問目の正解はBのラバト
2問目の正解はAのバイカル湖
3問目の正解はCのレンブラント
**************/

function answerQuiz1(){
    //問題1の処理をここに記述
    //問１の正解か不正解かを判断する機能＋もし正解だったらスコアを1点ずつプラスする機能
    const quiz_1 = document.getElementById('quiz-1');
    if (quiz_1.answer.value === 'a') {
        //回答aだったら返す反応
        score = score + 0;
        //選択したボタンの判定
        console.log('1問目の' + quiz_1.answer.value + 'を選択しました');
        //回答結果
        console.log('不正解です');
        //現在のスコアを表示
        console.log('現在のトータルスコア：' + score);
    } else if (quiz_1.answer.value === 'b') {
        score = score + 1;
        //選択したボタンの判定
        console.log('1問目の' + quiz_1.answer.value + 'を選択しました');
        //回答結果
        console.log('正解です');
        //現在のスコアを表示
        console.log('現在のトータルスコア：' + score);
    } else if (quiz_1.answer.value === 'c') {
        score= score + 0;
        //選択したボタンの判定
        console.log('1問目の' + quiz_1.answer.value + 'を選択しました');
        //回答結果
        console.log('不正解です');
        //現在のスコアを表示
        console.log('現在のトータルスコア：' + score);
    } else {
        //アラートで問１の回答をしてください
        alert('問1の回答をしてください');
    }
}

function answerQuiz2(){
//問題2の処理をここに記述
}

function answerQuiz3(){
//問題3の処理をここに記述
}
