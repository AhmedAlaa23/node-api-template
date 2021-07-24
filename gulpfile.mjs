import gulp from 'gulp';
import dotenv from 'dotenv'
dotenv.config();

const testTask = async()=>{
  console.log('task 1 finished!!');
}

export {testTask}