const example = {
  data: "a",
  next: {
    data: "b",
    next: {
      data: "c",
      next: {
        data: "d",
        next: {
          data: "e",
          next: {
            data: "f",
            next: {
              data: "g",
              next: {
                data: "h",
                next: null,
              },
            },
          },
        },
      },
    },
  },
};

//* Function to get last "n" elements in linked list
const getLastNElements = (obj: any, n: number) => {
  let length = 0;
  let current: any = obj;

  while (current) {
    current = current.next;
    length++;
  }
  console.log("Length:", length);
  if (n < 0 || n > length)
    throw new Error(`n must be greater than 0 or less than ${length}`);

  current = obj;
  for (let i = 0; i < length - n; ++i) {
    current = current.next;
  }

  const result: any = [];
  while (current) {
    result.push(current.data);
    current = current.next;
  }
  console.log(result);
};

getLastNElements(example, 9);
