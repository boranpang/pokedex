// index.js
import type from '../../../data/type.js';
import movetype from '../../../data/movetype.js';
Page({
  data: {
    tabs: [],
    currentId: 0
  },
  onLoad: function (options) {
    var tabs = [];
    var currentId = 0;
    if (options.isFilter && options.filter) {
      var filterObject = JSON.parse(options.filter);
      tabs.push(type.getType(filterObject.type));
      tabs.push(movetype.getMoveType(filterObject.movetype));
    } else {
      tabs.push(type.getType());
      tabs.push(movetype.getMoveType());
    }
    tabs[currentId].isActive = true;
    this.setData({
      tabs: tabs,
      currentId: currentId
    });
  },
  tapTabs: function (event) {
    var index = event.target.dataset.id;
    if (index == undefined) return 
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
  tapItem: function (event) {
    var id1 = event.currentTarget.dataset.id;
    var id2 = event.target.dataset.id;
    var tabs = this.data.tabs;
    for (var i = 0, length = tabs.length; i < length; i++) {
      var tab = tabs[i];
      if (tab.id == id1) {
        var items = tab.items;
        for (var j = 0, length2 = items.length; j < length2; j++) {
          var item = tab.items[j];
          if (item.id == id2) {
            if (item.checked) {
              item.checked = false;
            } else {
              item.checked = true;
            }

          } else {
            item.checked = false;
          }
        }
      }
    }
    this.setData({
      tabs: tabs
    });
  },
  clear: function () {
    var tabs = this.data.tabs;
    for (var i = 0, length = tabs.length; i < length; i++) {
      var tab = tabs[i];
      var items = tab.items;
      for (var j = 0, length2 = items.length; j < length2; j++) {
        var item = tab.items[j];
        item.checked = false;
      }
    }
    this.setData({
      tabs: tabs
    });
  },
  confirm: function () {
    var query = {};
    var tabs = this.data.tabs;
    var isFilter = '';
    for (var i = 0, length = tabs.length; i < length; i++) {
      var tab = tabs[i];
      var key = tab.id;
      query[key] = [];
      var items = tab.items;
      for (var j = 0, length2 = items.length; j < length2; j++) {
        var item = tab.items[j];
        if (item.checked) {
          query[key].push(item.id);
          isFilter = '1';
        }
      }
    }
    if (isFilter) {
      wx.navigateTo({
        url: '/pages/movement/filterout/index?isFilter=' + isFilter + '&filter=' + JSON.stringify(query)
      });
    } else {
      wx.navigateBack({})
    }

  }
})