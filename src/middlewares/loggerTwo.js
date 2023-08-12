const loggerOne = (req,res,next) =>{
   console.log('log 1');
   next()
}