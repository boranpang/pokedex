// index.js
//获取应用实例
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    sprite: null,
    tabs: [],
    currentId: 0
  },
  onShareAppMessage: function (e) {
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var tabs = [];
    var item = app.globalObject.getItemById(options.id);
    var levelMoves = item.levelMoves;
    var levelMovesVal = item.levelMovesVal || [];
    var tmMoves = item.tmMoves || [];
    var tmMovesVal = item.tmMovesVal || [];
    var inheritMoves = item.inheritMoves || [];
    var otherMoves = item.otherMoves || [];
    var leveltab = {
      id: 'level',
      name: '升级',
      items: [],
      isActive: true
    };
    for (let i = 0; i < levelMoves.length; i++) {
      var move = app.globalObject.getMoveById(levelMoves[i]);
      var txt = parseInt(levelMovesVal[i]) ? 'Lv.' + levelMovesVal[i] : levelMovesVal[i];
      if (move.type)
        leveltab.items.push({
          className: (item.type.indexOf(move.type) > -1) && move.movetype != 'status' ? 'dark' : '',
          move: move,
          txt: txt
        })
    }
    levelMoves.length ? tabs.push(leveltab) : '';
    var tmtab = {
      id: 'tm',
      name: '技能机器',
      items: []
    };
    for (let i = 0; i < tmMoves.length; i++) {
      var move = app.globalObject.getMoveById(tmMoves[i]);
      var txt = 'TM.' + tmMovesVal[i];
      tmtab.items.push({
        className: (item.type.indexOf(move.type) > -1) && move.movetype != 'status' ? 'dark' : '',
        move: move,
        txt: txt
      })
    }
    tmMoves.length ? tabs.push(tmtab) : '';
    var inherittab = {
      id: 'inherit',
      name: '遗传',
      items: []
    };
    for (let i = 0; i < inheritMoves.length; i++) {
      var move = app.globalObject.getMoveById(inheritMoves[i]);
      inherittab.items.push({
        className: (item.type.indexOf(move.type) > -1) && move.movetype != 'status' ? 'dark' : '',
        move: move
      })
    }
    inheritMoves.length ? tabs.push(inherittab) : '';
    var othertab = {
      id: 'other',
      name: '教授',
      items: []
    };
    for (let i = 0; i < otherMoves.length; i++) {
      var move = app.globalObject.getMoveById(otherMoves[i]);
      othertab.items.push({
        className: (item.type.indexOf(move.type) > -1) && move.movetype != 'status' ? 'dark' : '',
        move: move
      })
    }
    otherMoves.length ? tabs.push(othertab) : '';
    var currentId = 0;
    this.setData({
      sprite: item,
      tabs: tabs,
      currentId: currentId
    });
  },
  tapTabs: function (event) {
    var index = event.target.dataset.id;
    var currentId = this.data.currentId;
    if (currentId === index) {
      return;
    } else {
      var tabs = this.data.tabs;
      tabs[currentId].isActive = false;
      tabs[index].isActive = true;
      this.setData({
        tabs: tabs,
        currentId: index
      });
    }
  },
  tapMove: function (event) {
    // console.log(event);
    var id = event.currentTarget.dataset.id;
    if (id) {
      wx.navigateTo({
        url: '/pages/movement/detail/index?id=' + id
      });
    }
  }
})