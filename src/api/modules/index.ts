import {GET,POST,FILE,FILEPOST,PUT,GETNOBASE} from "../api";
const indexUrl=  {
    'leftTop':'/bigscreen/countDeviceNum',//左上
    'leftCenter':'/bigscreen/opData',//左中
    "centerMap":"/bigscreen/centerMap",
    "centerBottom":"/bigscreen/opdInfo",

    'leftBottom':"/bigscreen/leftBottom", //左下
    'rightTop':"/bigscreen/preventCare", // 預防醫療
    'rightBottom':'/bigscreen/rightBottom',//右下 
    'rightCenter':'/bigscreen/ranking',// 門診排名
}

export default indexUrl

/**左上--設備內總覽 */
export const countDeviceNum=(param:any={})=>{
    return GET(indexUrl.leftTop,param)
}

/**左中--手術服務 */
export const opData=(param:any={})=>{
    return GET(indexUrl.leftCenter,param)
}

/**左下--院內即時推播 */
export const leftBottom=(param:any={})=>{
    return GET(indexUrl.leftBottom,param)
}

/**中上--地圖 */
export const centerMap=(param:any={})=>{
    return GET(indexUrl.centerMap,param)
}

/**中下--安裝計畫 */
export const opdInfo=(param:any={})=>{
    return GET(indexUrl.centerBottom,param)
}

/**右上--預防醫療 */
export const preventCare=(param:any={})=>{
    return GET(indexUrl.rightTop,param)
}

/**右中--門診排名 */
export const ranking=(param:any={})=>{
    return GET(indexUrl.rightCenter,param)
}

/**右下--設備狀態 */
export const rightBottom=(param:any={})=>{
    return GET(indexUrl.rightBottom,param)
}