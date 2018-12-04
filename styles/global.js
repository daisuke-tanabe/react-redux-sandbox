import { createGlobalStyle } from "styled-components"

const reset = `
html,
body,
div,
span,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
abbr,
address,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
samp,
small,
strong,
sub,
sup,
var,
b,
i,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
figcaption,
figure,
footer,
header,
menu,
nav,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  vertical-align: baseline;
  background: transparent;
}

/* デフォルトを10pxにする */
html {
  font-size: 62.5%;
}

body {
  font-family: '-apple-system, BlinkMacSystemFont, "Helvetica Neue", YuGothic, "ヒラギノ角ゴ ProN W3", Hiragino Kaku Gothic ProN, Arial, "メイリオ", Meiryo, sans-serif';
  line-height: 1;
}

/* 新規追加要素のデフォルトはすべてインライン要素になっているので、section要素などをブロック要素へ変更しています */
article,
aside,
details,
figcaption,
figure,
footer,
header,
menu,
nav,
section {
  display: block;
}

ol,
ul {
  list-style: none;
}

/* 引用符の表示が出ないようにしています */
blockquote,
q {
  quotes: none;
}

/* blockquote要素、q要素の前後にコンテンツを追加しないように指定しています */
blockquote::before,
blockquote::after,
q::before,
q::after {
  content: '';
  content: none;
}

/* a要素のフォントサイズなどをリセットしフォントの縦方向の揃え位置を親要素のベースラインに揃えるようにしています */
a {
  margin: 0;
  padding: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
}

/*  ins要素のデフォルトをセットし、色を変える場合はここで変更できるようにしています  */
ins {
  color: #000000;
  text-decoration: none;
}

/*  mark要素のデフォルトをセットし、色やフォントスタイルを変える場合はここで変更できるようにしています
また、mark要素とは、文書内の検索結果で該当するフレーズをハイライトして、目立たせる際に使用するようです。 */
mark {
  color: #000000;
  font-style: italic;
  font-weight: bold;
}

/* テキストに打ち消し線が付くようにしています */
del {
  text-decoration: line-through;
}

/* IEではデフォルトで点線を下線表示する設定ではないので、下線がつくようにしています
また、マウスオーバー時にヘルプカーソルの表示が出るようにしています */
abbr[title],
dfn[title] {
  border-bottom: 1px dotted;
  cursor: help;
}

/* 隣接するセルのボーダーを重ねて表示し、間隔を0に指定しています */
table {
  border-collapse: collapse;
  border-spacing: 0;
}

/* 水平罫線のデフォルトである立体的な罫線を見えなくしています */
hr {
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #000000;
  margin: 1em 0;
  padding: 0;
}

/* 縦方向の揃え位置を中央揃えに指定しています */
input,
select {
  vertical-align: middle;
}

/* outlineの消去 */
input {
  outline: none;
}

/* borderの消去 */
button {
  appearance: none;
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
}

/* 画像を縦に並べた時に余白が出ないように */
img {
  vertical-align: top;
}

/* box-sizingを全ブラウザに対応 */
*,
*::before,
*::after {
  box-sizing: border-box;
}
`;

export default createGlobalStyle`
  ${reset}
`;