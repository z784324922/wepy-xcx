
import wepy from 'wepy'

const baseUrl = "http://www.tulaoban.net/wechat/";

export default {
    showTotal(total) {
        console.log(total)
    },
    postRequest(url, data) {
        wepy.request({
            url: baseUrl + url,
            data: {
                ...data
            }
        })
        .then((res) => {
            return res.data;
        })
    }
}