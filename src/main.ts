const main = () => {
  const sheet = getMainSheet();
  const data = sheet.getDataRange().getValues();

  // 配列をオブジェクトに整形する
  const dataObject: {}[] = dataFormatter(data);

  const scrapingData = async () => {
    for (let item of dataObject) await scraping(item);
  };
};
