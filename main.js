const main = () => {
  const sheet = getMainSheet();
  const data = sheet.getDataRange().getValues();
  
  // フォーマッター
  const obj = dataFormatter(data)
  
  
}

