const axios = require('axios').default;
axios.defaults.headers.common['Authorization'] = 'Token XlpclS_WWyXhE31hp0BvH8EUA75OWMcG';
// const URL = 'https://api.accesstrade.vn/v1/campaigns?page=3';
// const URL = 'https://api.accesstrade.vn/v1/offers_informations/merchant_list';
// const URL = 'https://api.accesstrade.vn/v1/offers_informations/coupon_hot?limit=10'; // loi
// const URL = 'https://api.accesstrade.vn/v1/offers_informations/coupon?limit=10'; //[]
// const URL = 'https://api.accesstrade.vn/v1/offers_informations/list_category_coupons'; //[]
// const URL = 'https://api.accesstrade.vn/v1/offers_informations';
const URL = 'https://api.accesstrade.vn/v1/creative/coupon?page=1&limit=30&merchant=5127139956446111602';

axios.get(URL).then(
  (res) => {
    console.log(res.data.data);
  }
)
.catch(err => console.log(err))