//合計スコア用の変数
let score = 0;
let comment = '';

function showScore(){
    //スコア表示の処理をここに記述
    document.getElementById('score-message').innerHTML= score + '点: ' + comment;
    if (score === 3){
        comment = '素晴らしい!';
    } else if (score === 2){
        comment = '惜しい!';
    } else if (score === 1){
        comment = 'まぁまぁ';
    } else {
        comment = '残念';
    }
    window.addEventListener('onclick', showScore);
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
        //選択したボタンの判定
        console.log('1問目の' + quiz_1.answer.value + 'を選択しました');
        //回答結果
        console.log('不正解です');
        //現在のスコアを表示
        console.log('現在のトータルスコア：' + score);
    } else if (quiz_1.answer.value === 'b') {
        score++;
        //選択したボタンの判定
        console.log('1問目の' + quiz_1.answer.value + 'を選択しました');
        //回答結果
        console.log('正解です');
        //現在のスコアを表示
        console.log('現在のトータルスコア：' + score);
    } else if (quiz_1.answer.value === 'c') {
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
    const quiz_2 = document.getElementById('quiz-2');
    if (quiz_2.answer.value === 'a') {
        //回答aだったら返す反応
        score++;
        //選択したボタンの判定
        console.log('2問目の' + quiz_2.answer.value + 'を選択しました');
        //回答結果
        console.log('正解です');
        //現在のスコアを表示
        console.log('現在のトータルスコア：' + score);
    } else if (quiz_2.answer.value === 'b') {
        //選択したボタンの判定
        console.log('2問目の' + quiz_2.answer.value + 'を選択しました');
        //回答結果
        console.log('不正解です');
        //現在のスコアを表示
        console.log('現在のトータルスコア：' + score);
    } else if (quiz_2.answer.value === 'c') {
        //選択したボタンの判定
        console.log('2問目の' + quiz_2.answer.value + 'を選択しました');
        //回答結果
        console.log('不正解です');
        //現在のスコアを表示
        console.log('現在のトータルスコア：' + score);
    } else {
        //アラートで問2の回答をしてください
        alert('問2の回答をしてください');
    }
}

function answerQuiz3(){
//問題3の処理をここに記述
    const quiz_3 = document.getElementById('quiz-3');
    if (quiz_3.answer.value === 'a') {
        //選択したボタンの判定
        console.log('3問目の' + quiz_3.answer.value + 'を選択しました');
        //回答結果
        console.log('不正解です');
        //現在のスコアを表示
        console.log('現在のトータルスコア：' + score);
    } else if (quiz_3.answer.value === 'b') {
        //選択したボタンの判定
        console.log('3問目の' + quiz_3.answer.value + 'を選択しました');
        //回答結果
        console.log('不正解です');
        //現在のスコアを表示
        console.log('現在のトータルスコア：' + score);
    } else if (quiz_3.answer.value === 'c') {
        score++;
        //選択したボタンの判定
        console.log('3問目の' + quiz_3.answer.value + 'を選択しました');
        //回答結果
        console.log('正解です');
        //現在のスコアを表示
        console.log('現在のトータルスコア：' + score);
    } else {
        //アラートで問3の回答をしてください
        alert('問3の回答をしてください');
    }
}
