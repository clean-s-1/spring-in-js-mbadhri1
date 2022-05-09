module.exports=function getStatistics(numbers){
    let EmailAlert;
    const min = Math.min( ...numbers );
    const max = Math.max( ...numbers );
    const average = numbers => numbers.reduce( ( p, c ) => p + c, 0 ) / numbers.length;
    //implement the computation of statistics here
    return {min,max,average}
}

