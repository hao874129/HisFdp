import Mock from "mockjs";
//处理路径传参
import { parameteUrl } from "@/utils/query-param"

function ArrSet(Arr: any[], id: string): any[] {
    let obj: any = {}
    const arrays = Arr.reduce((setArr, item) => {
        obj[item[id]] ? '' : (obj[item[id]] = true && setArr.push(item))
        return setArr
    }, [])
    return arrays
}
/**
* @description: min ≤ r ≤ max  随机数
* @param {*} Min
* @param {*} Max
* @return {*}
*/
function RandomNumBoth(Min: any, Max: any) {
    var Range = Max - Min;
    var Rand = Math.random();
    var num = Min + Math.round(Rand * Range); //四舍五入
    return num;
}
//左中
export default [
    {
        url: "/bigscreen/opData",
        type: "get",
        response: () => {
            const a = Mock.mock({
                success: true,
                data: {
                    completed: '@integer(50, 100)',
                    inProgress: '@integer(20, 50)',
                    notStarted: '@integer(10, 50)',
                }
            })
            a.data.totalNum = a.data.completed + a.data.inProgress + a.data.notStarted
            return a
        },
    },
    {
        url: "/bigscreen/countDeviceNum",
        type: "get",
        response: () => {
            const a = Mock.mock({
                success: true,
                data: {
                    bedCount: '@integer(1300, 1500)',
                    hospitalizedCount: '@integer(1000, 1200)',
                    expectedHospitalizedCount: '@integer(100, 200)'
                }
            })
            a.data.bedOccupancyRate = Math.round((a.data.hospitalizedCount / a.data.bedCount)*100);
            return a
        }
    },
    //左下
    {
        url: "/bigscreen/leftBottom",
        type: "get",
        response: () => {
            const a = Mock.mock({
                success: true,
                data: {
                    "list|20": [
                        {
                            sender: "@first()",
                            message: "@title(3, 6)",
                            createTime: "@dateTime('yyyy-MM-dd HH:mm:ss')",
                            deviceId: "6c512d754bbcd6d7cd86abce0e0cac58",
                            "onlineState|1": [0, 1],
                        }
                    ]
                }
            })
            return a
        }
    },
    //右上
    {
        url: "/bigscreen/preventCare",
        type: "get",
        response: () => {
            const a = Mock.mock({
                success: true,
                data: {
                    dateList: ['2024-01', '2024-02', '2024-03', '2024-04', '2024-05', "2024-06"],
                    "numList|6": [
                        '@integer(400, 600)'
                    ],
                    "numList2|6": [
                        '@integer(200, 300)'
                    ]
                }
            })
            return a
        }
    },
    //右中
    {
        url: "/bigscreen/ranking",
        type: "get",
        response: () => {
            // let num = Mock.mock({ "list|20": [{ value: "@integer(50,1000)", name: "@city()" }] }).list
            // //   console.log("ranking",num);
            // let newNum: any = [], numObj: any = {}
            // num.map((item: any) => {
            //     if (!numObj[item.name] && newNum.length < 8) {
            //         numObj[item.name] = true
            //         newNum.push(item)
            //     }
            // })
            // let arr = newNum.sort((a: any, b: any) => {
            //     return b.value - a.value
            // })
            let arr = [
                { value: 430, name: "骨科" },
                { value: 380, name: "心血管內科" },
                { value: 362, name: "腫瘤科" },
                { value: 359, name: "普通外科" },
                { value: 287, name: "消化科" },
                { value: 232, name: "婦產科" },
                { value: 198, name: "神經外科" },
                { value: 112, name: "皮膚科" },
            ]
            let a = {
                success: true,
                data: arr
            }
            return a
        }
    },
    //右下
    {
        url: "/bigscreen/rightBottom",
        type: "get",
        response: () => {
            const a = Mock.mock({
                success: true,
                data: {
                    "list|40": [{
                        patient: "@first()",
                        "age|1-100": 100,
                        alertValue: "@float(60, 200)",
                        nsName: "XXX護理站",
                        createTime: "@dateTime('yyyy-MM-dd HH:mm:ss')",
                        alertDetail: "@title(0, 6)",
                    }],

                }
            })
            return a
        }
    },
    //門診資訊
    {
        url: "/bigscreen/opdInfo",
        type: "get",
        response: () => {

            let num = RandomNumBoth(26, 32);
            const a = Mock.mock({
                ["category|" + num]: ["@title(1,1)"],
                ["barData|" + num]: ["@integer(10, 100)"],
            })
            let lineData = [], rateData = [];
            for (let index = 0; index < num; index++) {
                let lineNum = Mock.mock('@integer(0, 100)') + a.barData[index]
                lineData.push(lineNum)
                let rate = a.barData[index] / lineNum;
                rateData.push((rate * 100).toFixed(0))
            }
            a.lineData = lineData
            a.rateData = rateData
            return {
                success: true,
                data: a
            }
        }
    },
    {
        url: "/bigscreen/centerMap",
        type: "get",
        response: (options: any) => {
            let params = parameteUrl(options.url)
            //不是中国的时候
            if (params.regionCode && !["china"].includes(params.regionCode)) {
                const a = Mock.mock({
                    success: true,
                    data: {
                        "dataList|100": [
                            {
                                name: "@city()",
                                value: '@integer(1, 1000)'
                            }
                        ],
                        regionCode: params.regionCode,//-代表中国
                    }
                })
                return a
            } else {
                const a = Mock.mock({
                    success: true,
                    data: {
                        "dataList|12": [
                            {
                                name: "@province()",
                                value: '@integer(1, 1100)'
                            }
                        ],
                        regionCode: 'china',
                    }
                })
                // 去重
                a.data.dataList = ArrSet(a.data.dataList, "name")
                return a
            }
        }
    }
];

