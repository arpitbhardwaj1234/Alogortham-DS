//Trinary Search
var arr=[2,3,4,5,6,7,8,9,10]
var key=5;

function trinarySearch(arr,key)
{  var low=0;
    var high=arr.length-1;
    while(low<=high)
    {
      var mid1=Math.floor(low+(high-low)/3);
      var mid2=Math.floor(low+2*(high-low)/3);
      if(arr[mid1]==key)
      {
          return mid1;
      }
      if(arr[mid2]==key)
      {
          return mid2;
      }
      if(arr[mid1]>key)
      {
       high=mid1-1;
      }
      else if(arr[mid2]>key)
      {
          low=mid1+1;
          high=mid2-1;
      }
      else
      {
          low=mid2+1;
      }
    }
    return -1;
}

let index=trinarySearch(arr,key);
if(index==-1)
{
    console.log("the key is not present in array")
}
else{
    console.log("Key is available at "+index+" position");
}