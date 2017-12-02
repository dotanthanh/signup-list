
export function sortByName(item1, item2) {
  if (item1.name < item2.name) {
    return -1;
  }
  else if (item1.name > item2.name) {
    return 1;
  }
  else {
    return 0;
  }
}

export function sortByEmail(item1, item2) {
  if (item1.email < item2.email) {
    return -1;
  }
  else if (item1.email > item2.email) {
    return 1;
  }
  else {
    return 0;
  }
}

export function sortByPhone(item1, item2) {
  if (item1.phone < item2.phone) {
    return -1;
  }
  else if (item1.phone > item2.phone) {
    return 1;
  }
  else {
    return 0;
  }
}
