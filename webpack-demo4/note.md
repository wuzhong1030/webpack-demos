## 优化打包速度

1. DllPlugin + DllReferencePlugin
2. UglifyJsPlugin
    parallel 开启多线程（系统位数-1）
    cache
3. HappyPack
    使loader并行处理
4. babel-loader
    options.cacheDirectory 开启缓存
    include
    exclude
5. 减少reslove、去掉devtool: source-map、使用cache-loader缓存loader处理的结果、升级node、升级webpack
   