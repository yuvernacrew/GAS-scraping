const scraping = (item) => {
  const data = UrlFetchApp.fetch(item.url).getContentText("UTF-8");
  return { ...item, html: data };
};
