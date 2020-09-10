

function mergesort(arr,low,high)
{
    if(low<high)
    {
    let mid=Math.floor((low+high)/2);
    mergesort(arr,low,mid);
    mergesort(arr,mid+1,high);
    merge(arr,low,mid,high);
    }
}

function merge(arr,low,mid,high)
{
    var ar2=[];
    var ar3=[];
    var i,j;
    for(i=low;i<=mid;i++)
    {
     ar2.push(arr[i]);   
    }
    for(j=mid+1;j<=high;j++)
    {
        ar3.push(arr[j]);
    }
    var k=low;
    i=0;
    j=0;
     while(i<ar2.length&&j<ar3.length)
     {
         if(ar2[i]<ar3[j])
         {
             arr[k]=ar2[i];
             i++;
             k++;
         }
         else
         {
             arr[k]=ar3[j];
             k++;
             j++;
         }
     }
     while(i<ar2.length)
     {
         arr[k]=ar2[i];
         k++;
         i++;
     }
     while(j<ar3.length)
     {
         arr[k]=ar3[j];
         j++;
         k++;     
     }
     k=low;
    
  //   console.log("Hello from merge");
}


var arr=[10,9,8,7,6];

let i=0;
for(i in arr)
{
//    console.log(arr[i]);
}

//console.log("Hello from main");
mergesort(arr,0,arr.length-1);
console.log(arr);
