import { CryptoType } from '../models/crypto';

export const sortArr = (toDraw: CryptoType[], sortBy: string, sortDirection: string) => {
  return [...toDraw].sort((a: any, b: any) => {

    if (isNaN(Number(a[sortBy]))) {

      const x = a[sortBy] !== null ? a[sortBy].toLowerCase() : '';
      const y = b[sortBy] !== null ? b[sortBy].toLowerCase() : '';
    
      if (sortDirection === 'asc') {
        if (x < y) {
          return -1;
        }
        if (x > y) {
          return 1;
        }
        return 0;
      } else {
        if (x > y) {
          return -1;
        }
        if (x < y) {
          return 1;
        }
        return 0;
      }
    } else {
      if (sortDirection === 'asc') {
        return a[sortBy] - b[sortBy];
      }
      return b[sortBy] - a[sortBy];
    }
  });
};
