import fetch from '../config/fetch'
import {getStore} from '../config/mUtils'

//demo
// export const msiteFoodTypes = geohash => fetch('/v2/index_entry', {
//   geohash,
//   group_type: '1',
//   'flags[]': 'F'
// });

// 获取推荐员工数据
// export const getHotPerson=(pram)=>{
//   if(pram){
//     fetch('./static/data/hotPersonlist.json')
//   }
// };
export const getHotPerson=()=>fetch('/static/data/hotPersonlist.json');
export const getAllPerson=()=>fetch('/static/data/personList.json');
export const getAllMsg=()=>fetch('/static/data/msgList.json');
export const getCollect=()=>fetch('/static/data/collectList.json');

//test douban  不支持跨域
export const getTest=()=>fetch('https://api.douban.com/v2/book/1220562',{},'POST');

