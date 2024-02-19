const merge = (collection_1: number[], collection_2: number[], collection_3: number[]): number[] => {
  const ans: number[] = [];
  let i = 0;
  let j = 0;
  let k = collection_3.length - 1;
  let total = collection_1.length + collection_2.length + collection_3.length;

  while (total > 0) {
    // console.log(i, j, k, collection_1[i], collection_2[j], collection_3[k]);
    // console.log("c1", collection_2[j]? collection_1[i] <= collection_2[j]: true, collection_3[k]? collection_1[i] <= collection_3[k] : true, i < collection_1.length);
    // console.log("c2", collection_1[i]? collection_2[j] <= collection_1[i] : true, collection_3[k]? collection_2[j] <= collection_3[k] : true, j < collection_2.length);
    // console.log("c3", collection_1[i]? collection_3[k] <= collection_1[i] : true, collection_2[j]? collection_3[k] <= collection_2[j] : true, k >= 0);
    if ((collection_2[j]? collection_1[i] <= collection_2[j]: true) && (collection_3[k]? collection_1[i] <= collection_3[k] : true) && (i < collection_1.length)) {
      ans.push(collection_1[i]);
      i++;
    } else if ((collection_1[i]? collection_2[j] <= collection_1[i] : true) && (collection_3[k]? collection_2[j] <= collection_3[k] : true) && (j < collection_2.length)) {
      ans.push(collection_2[j]);
      j++;
    } else if ((collection_1[i]? collection_3[k] <= collection_1[i] : true) && (collection_2[j]? collection_3[k] <= collection_2[j] : true) && (k >= 0)){
      ans.push(collection_3[k]);
      k--;
    }
    total--
    //console.log(ans);
    //console.log('-----------------------------------------------------------------------');
  }
  return ans;
}

export default merge;