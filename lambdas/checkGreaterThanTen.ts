export const handler = async (event: any, context: any) => {
  console.log(context, event);
  const number = parseInt(event.body.result, 10);
  const isGreaterThanTen = number > 10;

  return { isGreaterThanTen };
};
