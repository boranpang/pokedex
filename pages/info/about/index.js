//index.js
let interstitialAd = null
Page({
  data: {
    updateList: [{
      version: '2.7',
      date: '2019.11.22',
      updateItems: [
        '更正了第八世代宝可梦的部分信息错误；',
        '优化了一些UI细节；',
        '新增特性查询功能；',
        '支持按中文名搜索特性；',
        '新增甲贺忍蛙、无极汰那的特殊形态。'
      ]
    },
    {
      version: '2.6',
      date: '2019.11.19',
      updateItems: [
        '新增口袋老黄历功能；',
        '小程序更名为“可乐图鉴Pokedex”。'
      ]
    },
    {
      version: '2.5',
      date: '2019.11.18',
      updateItems: [
        '新增第八世代的宝可梦数据(不含招式)；',
        '新增宝可梦倒序排列功能。'
      ]
    },
    {
      version: '2.4',
      date: '2019.11.02',
      updateItems: [
        '优化了一些UI细节；',
        '帮一位手速很快的朋友打个广告。'
      ]
    },
    {
      version: '2.3',
      date: '2019.03.06',
      updateItems: [
        '优化了一些UI细节；',
        '性格修正表新增日文、英文信息；',
        '新增属性克制表；',
        '新增第三、四、五、六世代宝可梦的招式数据；',
        '宝可梦、招式详情页增加分享按钮。'
      ]
    },
    {
      version: '2.2',
      date: '2018.08.20',
      updateItems: [
        '优化了一些UI细节；',
        '新增第一、二世代宝可梦的招式数据。'
      ]
    },
    {
      version: '2.1',
      date: '2018.06.02',
      updateItems: [
        '更正了颠倒、输电、怪异电波的属性信息错误；',
        '新增第七世代宝可梦的招式数据。'
      ]
    },
    {
      version: '2.0',
      date: '2018.04.14',
      updateItems: [
        '新增招式图鉴(不含Z招式)；',
        '支持按中文名搜索招式；',
        '支持按属性、类型筛选招式；',
        '新增意见反馈入口。'
      ]
    }, {
      version: '1.4',
      date: '2018.03.06',
      updateItems: [
        '更新了鬃岩狼人的进化信息；',
        '更正了光电伞蜥的种族值数据错误；',
        '删除了我们自己公众号的广告；',
        '新增性格修正表；',
        '小程序更名为“宝可梦图鉴Pokedex”。'
      ]
    }, {
      version: '1.3',
      date: '2017.12.25',
      updateItems: [
        '更正了迷唇姐、无畏小子的蛋组信息错误；',
        '更新了奈克洛兹玛三种形态的像素图。'
      ]
    }, {
      version: '1.2',
      date: '2017.12.12',
      updateItems: [
        '补充《究极日月》新增宝可梦数据；',
        '统一属性名称，与官方翻译一致。'
      ]
    }, {
      version: '1.1',
      date: '2017.09.10',
      updateItems: [
        '优化了一些UI细节；',
        '更正了部分错误数据。'
      ]
    }, {
      version: '1.0',
      date: '2017.09.01',
      updateItems: [
        '简单好用的宝可梦图鉴；',
        '收录了从第一世代到第七世代的全部802只宝可梦；',
        '支持按中文名、编号搜索宝可梦；',
        '支持按属性、世代、蛋组筛选宝可梦；',
        '清晰直观的种族值、进化信息、弱点与抗性查询。'
      ]
    }
    ]
  },
  onLoad: function () {
    if (wx.createInterstitialAd) {
      interstitialAd = wx.createInterstitialAd({
        adUnitId: 'adunit-b35d91cb29a860c3'
      })
      interstitialAd.onLoad(() => { })
      interstitialAd.onError((err) => { })
      interstitialAd.onClose(() => { })
      if (interstitialAd) {
        interstitialAd.show().catch((err) => {
          console.error(err)
        })
      }
    }
  },
  onShareAppMessage: function (e) { }
})