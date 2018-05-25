import wepy from 'wepy'
// const baseURL = "https://www.easy-mock.com/mock/5aebb71f78ca2c3eb91bb251";
// const baseURL = "https://www.tulaoban.net/wechat";
const baseURL = "http://192.168.0.200:10011";

//登录
export function toLogin(data) {
    return wepy.request({
        url: baseURL+"/login/login",
        data:{...data}
    })
    .then((res) => {
        return res.data;
    })
}

//获取数据
export function postRequest(url, data) {
    return wepy.request({
        url: baseURL+url,
        data:{...data}
    })
    .then((res) => {
        return res.data.data;
    })
}

