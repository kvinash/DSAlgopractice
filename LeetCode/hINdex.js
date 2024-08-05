/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    citations = citations.sort((a,b)=>{return a -b});
    let count = 0;
    for(let i=citations.length-1; i>=0;i--){
            if(citations[i]>count){
                count++
            } else {
                return count
            }
    }

    return count;

};