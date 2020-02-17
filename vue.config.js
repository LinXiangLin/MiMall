module.exports ={

    devServer:{
     host:'localhost',
     port:9090,
 
     proxy:{
 
         '/activity':{
             target:'https://www.imooc.com',
             changeOrigin:true,
             pathRewrite:{
                '/activity': '/activity'
            }
             
         }
 
     }
    }
 }