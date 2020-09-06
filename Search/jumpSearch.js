var arr=[1,3,5,7,10,13,18,21,24];

var key=10;

function jumpSearch(arr,key)
{
   var n=arr.length;
   var m=Math.floor(Math.sqrt(n));
   for(i=m-1;i<n;i+=m)
   {
     if(arr[i]==key)
     {
         return i;
     }
     if(arr[i]>key)
     {
         var j=i-m+1
         while(j<i)
         {
             if(arr[j]==key)
             {
                 return j;
             }
             j++;
         }
         return -1;
     }
   }
    if(i>=n)
    {
      i=i-m+1
      while(i<n)
      {
          if(arr[i]==key)
          {
              return i;
          }
      }
      return -1;
    }
    return -1; 
 }

 console.log(jumpSearch(arr,key));
