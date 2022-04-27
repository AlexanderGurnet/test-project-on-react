export const propComparator = (...props) => {
  return (a, b) => {
    let foundA = a;
    let foundB = b;
    
    for (let prop of props) {
      let keyA = prop;
      let keyB = prop;
      foundA = foundA[keyA]
      foundB = foundB[keyB]
    }

    return foundA.localeCompare(foundB);
  }
}