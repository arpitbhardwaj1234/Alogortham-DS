let arr=[1,2,3,4,5,13,7];
function heapSort(arr)
{
let i=1;
let arb=[]
let j=1;
let k=0;
arb[0]=arr[0];
while(arr[i])
{
arb[j]=arr[i];
k=j
//console.log(arb[k]);
while(arb[k]>arb[Math.floor((k-1)/2)]&&k>=0)
{
let temp=arb[k];
arb[k]=arb[Math.floor((k-1)/2)];
arb[Math.floor((k-1)/2)]=temp;
k=Math.floor((k-1)/2);
//console.log(k+"  "+arb[k]);
}
i++;
j++;
}
//console.log(arb);
i=0;
j=0;
k=0;
while(arb[0])
{
i=0;
arr[k]=arb[0];
//console.log(k+"  "+arr[k]);
arb[i]=Number.MIN_VALUE;
let max=0;
//console.log(max);
let prev=0;
//console.log(arb);
//console.log(arb.length);
max=arb[(2*i)+1]>arb[(2*i)+2]?2*i+1:2*i+2;
while(max<arb.length)
{
//console.log("i = "+i+"   "+max);
let temp=arb[i];
arb[i]=arb[max];
arb[max]=temp;
i=max;
if(arb[(2*i)+2])
{
max=arb[(2*i)+1]>arb[(2*i)+2]?2*i+1:2*i+2;
}
else
{
max=2*i+1;
}
//console.log(arb);
}
for(j=i;j<arb.length;j++)
{
arb[j]=arb[j+1];
}
//console.log("-------------------ARB-------------------");
//console.log(arb)
arb.pop();
//console.log(arb)
k++;
}
//console.log(arb);
return arr;
}
//console.log("-----------------------------------------");
console.log(heapSort(arr));