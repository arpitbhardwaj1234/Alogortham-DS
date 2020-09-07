//FCFS Scheduling Algoritham 
//asumend that the 
//find the average waiting time

var arr=[{at:0,bt:2},{at:3,bt:1},{at:3,bt:3},{at:4,bt:5},{at:4,bt:4}] //at- arival time
                                                                      //bt-burst time

function findTurnAround(arr)
{
var wt=[];
wt[0]=0;
var u=arr[0].at;
var v=0;
var i=0;
for(i=1;i<arr.length;i++)
{
u=u+arr[i-1].bt;
v=arr[i].at;
if(u<v)
{
wt[i]=0;
u=v;
}
else
{
wt[i]=u-arr[i].at;
}
}
var avg=0;
for(i=0;i<wt.length;i++)
{
avg=avg+wt[i];
}
avg=avg/wt.length;
return avg;
}

console.log(findTurnAround(arr));
