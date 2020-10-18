const dataFormatter = (data) => {
	const dataArray = data;
  const keys = dataArray.shift();
  
  return dataArray.map((items) => {
    return items.reduce((acc, item, index) => ( {...acc, [keys[index]]: item }), {});
  });
}