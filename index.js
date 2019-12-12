
const fs = require("fs");
const {Storage} = require('@google-cloud/storage');

const storage = new Storage({
  projectId: 'my-first-project-258101',
  keyFilename: './My First Project-18bb828b4e75.json'
})


storage.bucket("alex_aca_my_harddrive").upload("./bruce.jpg", {
    gzip: true,
    metadata: {
        cacheControl: 'public, max-age=31536000',
    },
}).then(()=>{
    console.log("file uploaded")
});