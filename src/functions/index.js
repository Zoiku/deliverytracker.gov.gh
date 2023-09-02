export const filteringPromises = (promises, filter) => {
  const { category, status } = filter;

  return promises.filter((promise) => {
    const statusMatch = status === null || promise.status === status;
    const categoryMatch =
      category.length === 0 ||
      category.some((selectedCat) => promise.categories.includes(selectedCat));

    return statusMatch && categoryMatch;
  });
};

export const sortMostRecent = (a, b) => {
  return b["updatedOn"] - a["updatedOn"];
};

export const sortOldest = (a, b) => {
  return a["updatedOn"] - b["updatedOn"];
};

export const sortHighPriority = (a, b) => {
  return b["relevance"] - a["relevance"];
};

export const sortPromisedDeadline = (a, b) => {
  return b["deadline"] - a["deadline"];
};
