const arr = [
    [0,0],
    [112.5,0],
    [225,0],
    [337.5,0],
    [0,112.575],
    [112.5,112.575],
    [225,112.575],
    [337.5,112.575],
    [0,225.15],
    [112.5,225.15],
    [225,225.15],
    [337.5,225.15],
    [0,337.725],
    [112.5,337.725],
    [225,337.725],
    [337.5,337.725],
];
//er=[];
br=[];
setTimeout(()=>{
const divs=document.querySelectorAll('.puzzleDiv');
// console.log(divs)


function isSolvable(){
for(i=0;i<16;i++){
for(j=0;j<16;j++){
if(arr[j][0]==divs[i].style.left.replace('px','') && arr[j][1]==divs[i].style.top.replace('px',''))
{
  //er[i]=[j];
  br[j]=i+1;
}
}
}
// for(i=0;i<16;i++){
//   if(br[i]==undefined)
//   br[i]=1;
// }
//console.log(br);i
jr=[
  [],
  [],
  [],
  []
];
for(i=0;i<16;i++)
{
 jr[Math.floor(i/4)][i%4]=br[i];
}
//console.log(jr);

function  getInvCount(arr)
{
    N=4
     inv_count = 0;
    for (i = 0; i < (N*N - 1); i++)
    {
      if(arr[i]!=16)
        for (j = i + 1; j < (N * N); j++)
        {
            // count pairs(arr[i], arr[j]) such that
              // i < j but arr[i] > arr[j]
              if(arr[j]!=16 && arr[j]< arr[i])
                inv_count++;
        }
    }
    return inv_count;
  }
// find Position of blank from bottom
function findXPosition(puzzle)
{
    N=4;
    // start from bottom-right corner of matrix
    for (i = 0; i < N-1; i++)
        for (j = 0; j <N-1; j++)
            if (puzzle[i][j] == 16)
                return i;
}

// This function returns true if given
// instance of N*N - 1 puzzle is solvable
function  checkSolvable( puzzle)
{
    N=4;
    // Count inversions in given puzzle
    invCount = getInvCount(puzzle);
 
    // If grid is odd, return true if inversion
    // count is even.
        pos = findXPosition(puzzle);
        return((pos+invCount)%2==1)
}
if (!checkSolvable(jr))
{
  console.log("false");
  puzzle.shuffle();
  isSolvable();
}
else{
  console.log("true")
}
}
isSolvable();
},1)