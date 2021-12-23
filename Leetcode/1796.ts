// function secondHighest(s: string): number {
//     let arr:string[] = s.match(/\d/g);
//       if (!arr) return -1;
//       let unique = Array.from(new Set(arr))
//         .map((item) => parseInt(item))
//         .sort((a, b) => b - a);
//       return unique.length === 1 ? -1 : unique[1];
//     };
