//Binary seacrch

var arr=[1,2,3,4,5,6,7,8];
var key=4;

var low=0;
var high=arr.length;

while(low<=high)
{
    let mid=Math.floor((low+high)/2);
    console.log(mid+"   "+arr[mid]);
    if(key==arr[mid])
    {
        console.log(key+"found at "+mid+" position");
        break;
    }
    else if(key<arr[mid])
    {
    high=mid-1;
    }
    else
    {
        low=mid+1;
    }
}
if(low>high)
{
    console.log("We did not found key");
}

