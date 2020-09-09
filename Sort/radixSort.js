//radix sort

var arr=[12,11,21,31,21,33,13,17,77,66,44,81];

function radixSort(arr)
{
let max=0;
let i=0;
let j=0;
let lt=10;
let length=0;
for(i=0;i<arr.length;i++)
{
if(arr[i]>max)
{
max=arr[i];
}
}
while(max!=0)
{
max=Math.floor(max/10);
length++;
lt=lt*10;
}
lt=lt/10;
//console.log(length);
lt=10;
for(i=0;i<length;i++)
{
let arb=[];
for(j=0;j<10;j++)
{
arb.push([]);
}
//console.log(arb);
for(j=0;j<arr.length;j++)
{
let x=arr[j]%lt;

let ut=lt/10;
let y=Math.floor(x/ut);
//console.log(y+" "+arb[y]);
arb[y].push(arr[j]);
}
let l=0;
for(j=0;j<arb.length;j++)
{
let k=0;
while(arb[j][k])
{
arr[l]=arb[j][k];
l++;
k++;
}
}

//console.log(arr);
lt=lt*10;
}
console.log(arr);
}

radixSort(arr);