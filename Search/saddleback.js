//SaddlebackSearch

function saddleback(arr,key)
{
    var m=arr.length;
    var n=arr[0].length;
    var  i=0;
    var  j=n-1;
    var x=arr[i][j];
    while(i<m&&j<n&&i>=0&&j>=0)
    {
    if(arr[i][j]==key)
    {
        break;
    }   
     //console.log(i+" "+j);   
     else if(arr[i][j]<key)
     {
        i++
     }
     else
     {
         j--;
     }
    }
    if(i<m&&j<n&&i>=0&&j>=0)
    {
        console.log(i+" "+j);
      return arr[i][j];
    }
    else
    {
        return -1;
    }

}


var arr=[[1,2,3],[4,5,6],[7,8,9]];
var key =10;
console.log(saddleback(arr,key));