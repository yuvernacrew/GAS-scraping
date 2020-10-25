const main = () => {
  const sheet = getMainSheet();
  const data = sheet.getDataRange().getValues();

  // 配列をオブジェクトに整形する
  const dataArray = gasArrayFormatter(data);

  // htmlにスクレイピングデータを格納
  const newDataArray = dataArray.map((item) => {
    return scraping(item);
  });

  //
};
