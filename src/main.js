// // const csv = require('papaparse');
// const fs = require('fs');
// // const { PassThrough } = require('stream');

// const http = require('http')

// // const passThroughStream = new PassThrough({ objectMode: true });
// const fileStream = fs.createReadStream('src/data/may_4_script_to_update_leetcode1.csv')

const success = [];
// const errors = [];

// console.log(fileStream)

// csv.parse(fileStream, {
//     skipFirstNLines: 1,
//     headers: false,
//     step: function(row) {
//         passThroughStream.write(row.data[0]);
//         const codetrack_id = row.data[3]
//         const leetcode_id = row.data[4]
//         console.log(row, codetrack_id, leetcode_id)
//         // makeApiRequest(codetrack_id, leetcode_id);
//     },
//     complete: function() {
//         passThroughStream.write(null);
//         console.log('success:', success)
//         console.log('errors unable to make request to endpoint:', errors)
//     },
// });
console.log('hi')
const makeApiRequest = async (codetrackId, leetcodeId) => {
    const url = `https://codewars-tracker-be.herokuapp.com/leetcode/94/laibasajid1`
    try {
        const response = await fetch(url)
        console.log(response)
        // if(response.status)
        // success.push[response.data]

    } catch(err) {
        errors.push[err]
    }
}

const fs = require('fs'); 
const csv = require('csv-parser');

fs.createReadStream('src/data/may_4_script_to_update_leetcode1.csv')
.pipe(csv())
.on('data', function(data){
    try {
        const codetrackId = data.fellowId;
        const leetcodeId = data.leetcodeProfile;
        makeApiRequest(codetrackId, leetcodeId);
        //perform the operation
    }
    catch(err) {
        //error handler
        console.log(err)
    }
})
.on('end',function(){
    //some final operation
    console.log(success);
});  