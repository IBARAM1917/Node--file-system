import express from 'express';
import fs from fs;
import { format } from 'date-fns';
import path from 'path';
import { fileURLToPath } from 'url';



const app =express();
const PORT =4000;

const filename=fileURLToPath(import.meta,url);
const dirname=path.dirname(filename);


app.use(express.json());

app.get('/',(req,res)=>{
    res.status(200).send('Welcome to Nodejs File System,If you want to create Timestamp give/create or If you want to read the created Timestamp give /read along with the Render url')
    
})
app.get('/create',(req,res)=>{
    let toDay =format(new Date(),'dd-MM-yyyy-HH-mm-ss')

    const filePath =`Timestamp/${toDay}.txt`
    fs.writeFilesync(filePath,`${toDay}`,'utf8')
    res.status(200).send(`Tmestamp are created successfull ${toDay}`)
})
app.get('/read',(req,res)=>{
    const directoryPath=path.join(dirname,'./Timestamp');
    let fileData=[];
    fs.readdirsync(directoryPath).forEach(file=>{
        const filePath=path.join(directoryPath,file);
        const data=fs.readdirsync(filePath,'utf8');
        fileData.push({file,data});
    });
    res.status(200).send(fileData);
});

app.listen(PORT,()=>{
    console.log("Server is running");
})