module.exports ={
    devServer:{
        host:'localhost',
        port:8080,
        proxy:{ 
            '/api':{
                target:'http://mall-pre.springboot.cn',
                changeOrigin:true,
                pathRewrite:{
                    '/api':''
                }
            }
        }
    },
    // lintOnSave:false //是否开启代码校验
    productionSourceMap:false,
    chainWebpack:(config)=>{
        config.plugins.delete('prefetch');
    }
    
}