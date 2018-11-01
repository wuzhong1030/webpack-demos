const {
    SyncHook,
    SyncBailHook,
    SyncWaterfallHook,
    SyncLoopHook,
    AsyncParallelHook,
    AsyncParallelBailHook,
    AsyncSeriesHook,
    AsyncSeriesBailHook,
    AsyncSeriesWaterfallHook
 } = require("tapable")

class Order {
    apply(complier) {
        complier.plugin('compilation', compilation => {
            console.log('OrderPlugin apply call')
        })
    }

    constructor() {
        this.hooks = { //hooks
            goods: new SyncHook(['goodsId', 'number']),
            consumer: new AsyncParallelHook(['userId', 'orderId'])
        }
    }

    queryGoods(goodsId, number) {
        this.hooks.goods.call(goodsId, number);
    }

    consumerInfoPromise(userId, orderId) {
        this.hooks.consumer.promise(userId, orderId).then(() => {
            //TODO
        })
    }

    consumerInfoAsync(userId, orderId) {
        this.hooks.consumer.callAsync(userId, orderId, (err, data) => {
            //TODO
            console.log(err, data)
        })
    }
}

module.exports = Order