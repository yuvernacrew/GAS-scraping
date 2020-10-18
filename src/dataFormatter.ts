const dataFormatter: (data: [][]) => object[] = (data) => {
  const dataArray = data;
  const keys = dataArray.shift();

  return dataArray.map((items: string[]) => {
    return items.reduce(
      (acc, item, index) => ({ ...acc, [keys[index]]: item }),
      {}
    );
  });
};
