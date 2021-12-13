type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<Item>(
  items: Item[],
  key: keyof Item,
): GroupsMap<Item> {
  const res: GroupsMap<Item> = {};

  items.forEach((item) => {
    const value = item[key].toString();

    if (!(value in res)) {
      res[value] = [];
    }
    res[value].push(item);
  });

  return res;
}
