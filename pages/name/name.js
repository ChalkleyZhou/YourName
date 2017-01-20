
var {boys_name, girls_name} = require('../../utils/names.js');
var app = getApp()
Page({
    data: {
        focus: false,
        firstName: '',
        sex: 0,
        num: 0,
    },

    getName: function () {
        var xing = this.data.firstName;

        var lastname;
        var lastname2;
        if (this.data.sex == 0) {
            lastname = boys_name[Math.ceil(Math.random() * boys_name.length)];
            lastname2 = this.data.num == 0 ? '' : boys_name[Math.ceil(Math.random() * boys_name.length)];
        } else {
            lastname = girls_name[Math.ceil(Math.random() * girls_name.length)];
            lastname2 = this.data.num == 0 ? '' : girls_name[Math.ceil(Math.random() * boys_name.length)];
        }


        var firstname = this.data.firstName;
        wx.showModal({
            title: '你的名字',
            content: firstname + lastname + lastname2,
            showCancel: false,
            success: function (res) {
                if (res.confirm) {
                    console.log('用户点击确定')
                }
            }
        })
    },

    changeFirstName: function (e) {
        console.log(e.detail.value);
        this.setData({
            firstName: e.detail.value
        })
    },

    sexChange: function (e) {
        console.log('sex：', e.detail.value);
        this.setData({
            sex: e.detail.value
        })
    },

    numChange: function (e) {
        console.log('num：', e.detail.value);
        this.setData({
            num: e.detail.value
        })
    }
})