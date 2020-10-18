const getMainSheet = () => {
  if (getMainSheet.sheet) {
    return getSheet.sheet;
  }

  getMainSheet.sheet = SpreadsheetApp.getActive().getSheetByName("main");
  return getMainSheet.sheet;
};
