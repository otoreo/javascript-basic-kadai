// 現在の日付を取得
const today = new Date();

// 年、月、日を取得
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, '0'); // 月は0から始まるので1を加える
const day = String(today.getDate()).padStart(2, '0');

// フォーマットして表示
const formattedDate = `${year}年${month}月${day}日`;
console.log(formattedDate);