//Counting Sort Algoritham 
//non comparison sorting Algoritham
//can only sort positive numbers


function countingSort(arr)
{
    var n=arr.length;
    var max=0;
    var i=0;
    var j=0;
    for(i=0;i<n;i++)
    {
        if(arr[i]>max)
        {
            max=arr[i];
        }
    }
    var countArr=[];
    for(i=0;i<=max;i++)
    {
        countArr[i]=0;
    }

    for(i=0;i<n;i++)
    {
      countArr[arr[i]]++;
    }
   var index=0;
   for(i=0;i<countArr.length;i++)
   {
      for(j=1;j<=countArr[i];j++)
      {
          arr[index]=i;
          index++;
         
      }
   }
  
   return arr;
}
var arr=[0,0,5,7,8,2,2,3,8,9,1];

arb=countingSort(arr);
var i=0;
for(i=0;i<arb.length;i++)
{
    console.log(arb[i])
}    