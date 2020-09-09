//QuickSort
var arr=[7,9,8,4,3,5,1];

function quickSort(arr,low,high)
{
if(low<high)
{
pi =partition(arr,low,high)
quickSort(arr,low,pi-1);
quickSort(arr,pi+1,high);
}
}
function partition(arr,low,high)
{
let i=low-1;
let j=low;
let pivot =arr[high];
for(j=low;j<high;j++)
{
if(arr[j]<pivot)
{
i++;
let temp=arr[i];
arr[i]=arr[j];
arr[j]=temp;
}
}
let temp=arr[i+1];
arr[i+1]=pivot;
arr[high]=temp;
return (i+1);
}

console.log(quickSort(arr,0,arr.length-1));
console.log(arr);



