//insertion Sort 
let arr=[9,8,7,6,5,4,3,2];
function insertionSort(arr)
{
let i=0;
let j=0;
for(j=1;j<arr.length;j++)
{
let key=arr[j];
i=j-1;
while(key<arr[i]&&i!=-1)
{
arr[i+1]=arr[i];
i--;
}
arr[i+1]=key;
}
return arr;
}
arr=insertionSort(arr);
console.log(arr);