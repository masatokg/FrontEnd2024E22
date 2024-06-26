// タイルの種類配列
const original_tile_pattern = ['🎋', '🌛', '🌟', '🌌', '🔭', '🍨', '🎆', '🎐'];
// タイルの種類配列を複製して、2倍の配列を作成
const tile_pattern = original_tile_pattern.concat(original_tile_pattern);
// タイルの種類配列をシャッフル
tile_pattern.sort(() => Math.random() - 0.5);
// ペアのタイルを記憶するための変数（１枚目）
let firstTile = null;
// ペアのタイルを記憶するための変数（２枚目）
let secondTile = null;
// 画面にあるタイルのリストを記憶するための変数
let tileList = null;
// チャレンジカウントを記憶するための変数
let charengeCount = 1;
// マッチしていない残りのタイルペアを記憶するための変数
let restCount = tile_pattern.length / 2;

// ゲームスタートボタンをクリックしたときに呼ばれる関数処理を用意
let onStartButtonClick = function () {
    // ゲームスタートボタンを無効化
    startButton.disabled = true;
    // リストのタイルすべてに対してループ
    for (let i = 0; i < tileList.length; i++) {
        // 「tile-data」という自前の属性にタイルの種類を記憶させる
        tileList[i].setAttribute('tile-data', tile_pattern[i]);
        // タイルをクリックしたときの処理を登録
        tileList[i].addEventListener('XXXXXXXX', XXXXXXXX);
        // タイルのテキスト表示に「taile-data」の絵文字を設定
        tileList[i].textContent = tileList[i].getAttribute('tile-data');
    }
    // 2秒後(2000ミリ秒後)に{  }内の処理を実行
    setTimeout(() => {
        // リストのタイルすべてに対してループ
        for (let i = 0; i < tileList.length; i++) {
            // タイルのテキスト表示を絵文字「❓」に設定
            tileList[i].textContent = "❓";
        }
    }, 2000);
}

// タイルをクリックしたときに呼ばれる関数処理を用意
let onTileClick = function (event) {
    // クリック選択されたタイルを取得
    const clickedTile = event.target;
    if (firstTile === null) {
        // １枚目のタイルが選択されていない場合
        // １枚目のタイルに選択されたタイルを記憶
        XXXXXXXX = clickedTile;
        // タイルのテキスト表示を「tile-data」に記憶していた絵文字に設定
        clickedTile.textContent = clickedTile.getAttribute('tile-data');
    } else if (XXXXXXXX === null) {
        // ２枚目のタイルが選択されていない場合
        // チャレンジカウントをカウントアップして表示する
        document.getElementById('XXXXXXXX').innerHTML = ++charengeCount;
        // ２枚目のタイルに選択されたタイルを記憶
        secondTile = XXXXXXXX;
        // タイルのテキスト表示を「tile-data」に記憶していた絵文字に設定
        clickedTile.XXXXXXXX = clickedTile.getAttribute('XXXXXXXX');

        // １枚目と２枚目のタイルが同じかどうかを判定
        if (firstTile.getAttribute('tile-data') === secondTile.getAttribute('tile-data')) {
            // 同じ場合
            // ２枚ともタイルのクリックイベントと処理の紐づけを削除
            firstTile.XXXXXXXX('click', onTileClick);
            secondTile.removeEventListener('XXXXXXXX', XXXXXXXX);
            // １枚目と２枚目のタイルを記憶する変数を初期化
            firstTile = null;
            secondTile = null;
            // マッチしていない残りのタイルペアをカウントダウンして表示する
            XXXXXXXX--;
            document.getElementById('restCount').innerHTML = XXXXXXXX;
            // マッチしていない残りのタイルペアが０になった場合
            if (XXXXXXXX <= 0) {
                // ゲームクリアメッセージを表示
                document.getElementById('finalmessage_area').innerHTML = 'ゲームクリア！！';
            }
        } else {
            // 違う場合
            if (charengeCount > 10) {
                // チャレンジカウントが10回を超えた場合
                document.getElementById('charengeCount').innerHTML = "Over";
                // リストのタイルすべてに対してループ
                for (let i = 0; i < tileList.length; i++) {
                    // タイルのクリックイベントと処理の紐づけを削除
                    tileList[i].XXXXXXXX('XXXXXXXX', XXXXXXXX);;
                }
                // ゲームオーバーメッセージを表示
                document.getElementById('finalmessage_area').innerHTML = 'ゲームオーバー';
            } else {
                // チャレンジカウントが10回以内の場合
                // １秒後(1000ミリ秒後)に{  }内の処理を実行
                setTimeout(() => {
                    // １枚目と２枚目のタイルのテキスト表示を「❓」に設定
                    XXXXXXXX.textContent = '❓';
                    XXXXXXXX.textContent = '❓';
                    // １枚目と２枚目のタイルを記憶する変数を初期化して、ゲームを続行
                    firstTile = null;
                    secondTile = null;
                }, 1000);
            }
        }

    }
}

// ウィンドウが読み込まれたときに呼ばれる関数処理を用意
window.onload = function () {
    // ゲームのメインエリアを操作するための変数を取得
    const gameBoard = document.getElementById('game-board');
    // スタートボタンを操作するための変数を取得
    const startButton = document.getElementById('startButton');
    // スタートボタンをクリックしたときの処理を登録
    XXXXXXXX.addEventListener('XXXXXXXX', XXXXXXXX);

    // 「tile」というクラス名を持つ要素をすべてリストの形で取得
    tileList = document.getElementsByClassName('tile');
    // チャレンジカウントを表示する
    document.getElementById('charengeCount').innerHTML = XXXXXXXX;
    // マッチしていない残りのタイルペアを表示する
    document.getElementById('restCount').innerHTML = XXXXXXXX;
}
