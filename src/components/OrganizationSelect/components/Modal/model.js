import { cloneDeep } from "lodash-es";
import { useImmer } from "use-immer";
export const initState = {
  /**数级数据*/
  listTree: [
    {
      "id": "200273691161321472",
      "name": "门店中心",
      "type": "department",
      "avatar": "",
      "user_count": 24,
      "position": "",
      "have_children": true,
      "children": []
    },
    {
      "id": "213000172840775680",
      "name": "技术中心",
      "type": "department",
      "avatar": "",
      "user_count": 103,
      "position": "",
      "have_children": true,
      "children": []
    },
    {
      "id": "213000172840775681",
      "name": "运营中心",
      "type": "department",
      "avatar": "",
      "user_count": 9,
      "position": "",
      "have_children": true,
      "children": []
    },
    {
      "id": "213000172840775682",
      "name": "销售中心",
      "type": "department",
      "avatar": "",
      "user_count": 5,
      "position": "",
      "have_children": true,
      "children": []
    },
    {
      "id": "213000172840775683",
      "name": "发展中心",
      "type": "department",
      "avatar": "",
      "user_count": 4,
      "position": "",
      "have_children": true,
      "children": []
    },
    {
      "id": "213000172840775684",
      "name": "总裁办",
      "type": "department",
      "avatar": "",
      "user_count": 0,
      "position": "",
      "have_children": false,
      "children": []
    },
    {
      "id": "374917954309435392",
      "name": "财务中心",
      "type": "department",
      "avatar": "",
      "user_count": 1,
      "position": "",
      "have_children": true,
      "children": []
    },
    {
      "id": "411363091475611654",
      "name": "供应链中心",
      "type": "department",
      "avatar": "",
      "user_count": 3,
      "position": "",
      "have_children": true,
      "children": []
    },
    {
      "id": "411363091475611655",
      "name": "物料中心",
      "type": "department",
      "avatar": "",
      "user_count": 3,
      "position": "",
      "have_children": true,
      "children": []
    },
    {
      "id": "415467378015801344",
      "name": "测试部门2",
      "type": "department",
      "avatar": "",
      "user_count": 7,
      "position": "",
      "have_children": true,
      "children": []
    },
    {
      "id": "415899574069800960",
      "name": "test部门7",
      "type": "department",
      "avatar": "",
      "user_count": 1,
      "position": "",
      "have_children": true,
      "children": []
    },
    {
      "id": "416255942673133568",
      "name": "研发中心",
      "type": "department",
      "avatar": "",
      "user_count": 2,
      "position": "",
      "have_children": true,
      "children": []
    },
    {
      "id": "417647068757274624",
      "name": "第三号部门",
      "type": "department",
      "avatar": "",
      "user_count": 0,
      "position": "",
      "have_children": true,
      "children": []
    },
    {
      "id": "417647116610088960",
      "name": "7",
      "type": "department",
      "avatar": "",
      "user_count": 14,
      "position": "",
      "have_children": true,
      "children": []
    },
    {
      "id": "417647130291908608",
      "name": "8",
      "type": "department",
      "avatar": "",
      "user_count": 0,
      "position": "",
      "have_children": false,
      "children": []
    },
    {
      "id": "417647140937052160",
      "name": "9",
      "type": "department",
      "avatar": "",
      "user_count": 0,
      "position": "",
      "have_children": false,
      "children": []
    },
    {
      "id": "417647162625798144",
      "name": "10",
      "type": "department",
      "avatar": "",
      "user_count": 1,
      "position": "",
      "have_children": true,
      "children": []
    },
    {
      "id": "417647173690372096",
      "name": "11",
      "type": "department",
      "avatar": "",
      "user_count": 0,
      "position": "",
      "have_children": true,
      "children": []
    },
    {
      "id": "417647188630482944",
      "name": "12",
      "type": "department",
      "avatar": "",
      "user_count": 0,
      "position": "",
      "have_children": false,
      "children": []
    },
    {
      "id": "417647201628631040",
      "name": "13",
      "type": "department",
      "avatar": "",
      "user_count": 0,
      "position": "",
      "have_children": false,
      "children": []
    },
    {
      "id": "417647214744219648",
      "name": "14",
      "type": "department",
      "avatar": "",
      "user_count": 1,
      "position": "",
      "have_children": true,
      "children": []
    },
    {
      "id": "417650483734392832",
      "name": "123测试",
      "type": "department",
      "avatar": "",
      "user_count": 2,
      "position": "",
      "have_children": true,
      "children": []
    },
    {
      "id": "417650492932521984",
      "name": "123",
      "type": "department",
      "avatar": "",
      "user_count": 0,
      "position": "",
      "have_children": false,
      "children": []
    },
    {
      "id": "417650536393879552",
      "name": "2",
      "type": "department",
      "avatar": "",
      "user_count": 1,
      "position": "",
      "have_children": true,
      "children": []
    },
    {
      "id": "417650600445116416",
      "name": "3333",
      "type": "department",
      "avatar": "",
      "user_count": 3,
      "position": "",
      "have_children": true,
      "children": []
    },
    {
      "id": "418437819079155712",
      "name": "拯救熊猫项目",
      "type": "department",
      "avatar": "",
      "user_count": 0,
      "position": "",
      "have_children": true,
      "children": []
    },
    {
      "id": "418451822715199488",
      "name": "test部门13",
      "type": "department",
      "avatar": "",
      "user_count": 3,
      "position": "",
      "have_children": true,
      "children": []
    },
    {
      "id": "418473542520143872",
      "name": "测试",
      "type": "department",
      "avatar": "",
      "user_count": 1,
      "position": "",
      "have_children": true,
      "children": []
    },
    {
      "id": "418570583942692864",
      "name": "CESH",
      "type": "department",
      "avatar": "",
      "user_count": 0,
      "position": "",
      "have_children": false,
      "children": []
    },
    {
      "id": "419093706065469440",
      "name": "qiwang",
      "type": "department",
      "avatar": "",
      "user_count": 0,
      "position": "",
      "have_children": false,
      "children": []
    },
    {
      "id": "422810353051762688",
      "name": "test部门14",
      "type": "department",
      "avatar": "",
      "user_count": 0,
      "position": "",
      "have_children": false,
      "children": []
    },
    {
      "id": "428702960380813312",
      "name": "15",
      "type": "department",
      "avatar": "",
      "user_count": 0,
      "position": "",
      "have_children": true,
      "children": []
    },
    {
      "id": "453239205834665984",
      "name": "table",
      "type": "department",
      "avatar": "",
      "user_count": 0,
      "position": "",
      "have_children": false,
      "children": []
    },
    {
      "id": "468778919188475904",
      "name": "商品中心",
      "type": "department",
      "avatar": "",
      "user_count": 1,
      "position": "",
      "have_children": true,
      "children": []
    },
    {
      "id": "471254907153604608",
      "name": "zjh测试test",
      "type": "department",
      "avatar": "",
      "user_count": 1,
      "position": "",
      "have_children": true,
      "children": []
    },
    {
      "id": "494206466709577728",
      "name": "测试数据1",
      "type": "department",
      "avatar": "",
      "user_count": 3,
      "position": "",
      "have_children": true,
      "children": []
    },
    {
      "id": "499697786674413568",
      "name": "新增测试部门",
      "type": "department",
      "avatar": "",
      "user_count": 1,
      "position": "",
      "have_children": true,
      "children": []
    },
    {
      "id": "538011279678656514",
      "name": "测试添加吗部门",
      "type": "department",
      "avatar": "",
      "user_count": 0,
      "position": "",
      "have_children": false,
      "children": []
    },
    {
      "id": "538048857656111105",
      "name": "测试不满额额额额",
      "type": "department",
      "avatar": "",
      "user_count": 0,
      "position": "",
      "have_children": false,
      "children": []
    },
    {
      "id": "557956535128084480",
      "name": "TEST002",
      "type": "department",
      "avatar": "",
      "user_count": 1,
      "position": "",
      "have_children": true,
      "children": []
    },
    {
      "id": "562645833048346624",
      "name": "4",
      "type": "department",
      "avatar": "",
      "user_count": 0,
      "position": "",
      "have_children": false,
      "children": []
    },
    {
      "id": "569568467578134528",
      "name": "演示部门",
      "type": "department",
      "avatar": "",
      "user_count": 1,
      "position": "",
      "have_children": true,
      "children": []
    },
    {
      "id": "573931299289432069",
      "name": "年终总结测试中心",
      "type": "department",
      "avatar": "",
      "user_count": 1,
      "position": "",
      "have_children": true,
      "children": []
    },
    {
      "id": "584459405300150272",
      "name": "添加部门回调1",
      "type": "department",
      "avatar": "",
      "user_count": 5,
      "position": "",
      "have_children": true,
      "children": []
    },
    {
      "id": "586520111216852992",
      "name": "予发布回调部门创建",
      "type": "department",
      "avatar": "",
      "user_count": 0,
      "position": "",
      "have_children": true,
      "children": []
    },
    {
      "id": "586527039905083392",
      "name": "予发布回调部门创建",
      "type": "department",
      "avatar": "",
      "user_count": 5,
      "position": "",
      "have_children": true,
      "children": []
    },
    {
      "id": "606171602633834498",
      "name": "技术1部",
      "type": "department",
      "avatar": "",
      "user_count": 4,
      "position": "",
      "have_children": true,
      "children": []
    },
    {
      "id": "612673032874029056",
      "name": "印尼公司",
      "type": "department",
      "avatar": "",
      "user_count": 5,
      "position": "",
      "have_children": true,
      "children": []
    },
    {
      "id": "613036320753459200",
      "name": "KKV INTERNATIONAL COMPANY HOLDINGS PTE. LTD.",
      "type": "department",
      "avatar": "",
      "user_count": 32,
      "position": "",
      "have_children": true,
      "children": []
    },
    {
      "id": "617767580021723137",
      "name": "单测部门（勿动）",
      "type": "department",
      "avatar": "",
      "user_count": 5,
      "position": "",
      "have_children": true,
      "children": []
    },
    {
      "id": "626548585543901184",
      "name": "凡尔赛装饰装修有限公司_Test",
      "type": "department",
      "avatar": "",
      "user_count": 6,
      "position": "",
      "have_children": true,
      "children": []
    },
    {
      "id": "5024443850709975041",
      "name": "department_wt_test_new",
      "type": "department",
      "avatar": "",
      "user_count": 5,
      "position": "",
      "have_children": true,
      "children": []
    },
    {
      "id": "526762500610265088",
      "name": "谭伟东",
      "type": "user",
      "avatar": "https://static-legacy.dingtalk.com/media/lQLPM5vwLpw9SerNAyDNAyCwanEDcwMtLVUEZjcCdQDOAA_800_800.png",
      "user_count": 0,
      "position": "",
      "have_children": false,
      "children": []
    },
    {
      "id": "526762501486874624",
      "name": "曾麟淇  Gloria",
      "type": "user",
      "avatar": "https://static-legacy.dingtalk.com/media/lADPD2sQ4vP94UjNBajNBao_1450_1448.jpg",
      "user_count": 0,
      "position": "",
      "have_children": false,
      "children": []
    },
    {
      "id": "526762503286231040",
      "name": "周峻升",
      "type": "user",
      "avatar": "https://static-legacy.dingtalk.com/media/lADPDgtY3a5u_83NCfbNCfY_2550_2550.jpg",
      "user_count": 0,
      "position": "",
      "have_children": false,
      "children": []
    },
    {
      "id": "532571205720698880",
      "name": "彭翔",
      "type": "user",
      "avatar": "https://static-legacy.dingtalk.com/media/lQLPM5XwC6AHS3fNAmvNAmuwof0SHYKsFZEFoUlFmr2hAA_619_619.png",
      "user_count": 0,
      "position": "",
      "have_children": false,
      "children": []
    },
    {
      "id": "545543518688178176",
      "name": "赖云强",
      "type": "user",
      "avatar": "https://static-legacy.dingtalk.com/media/lQLPM4ELTpts1jzNAo7NAo6wTn6ufjM20TMEx9DH3MDpAA_654_654.png",
      "user_count": 0,
      "position": "",
      "have_children": false,
      "children": []
    },
    {
      "id": "555097845356552192",
      "name": "陈世欣（Simon）",
      "type": "user",
      "avatar": "https://static-legacy.dingtalk.com/media/lADPBbCc1VVUQXjNBLnNBNc_1239_1209.jpg",
      "user_count": 0,
      "position": "",
      "have_children": false,
      "children": []
    },
    {
      "id": "559696613915267072",
      "name": "林佳敏",
      "type": "user",
      "avatar": "https://static-legacy.dingtalk.com/media/lADPM4OslgN7LAjNBNrNBNo_1242_1242.jpg",
      "user_count": 0,
      "position": "",
      "have_children": false,
      "children": []
    },
    {
      "id": "564750024847347712",
      "name": "刘开灿",
      "type": "user",
      "avatar": "https://static-legacy.dingtalk.com/media/lADPD2eDaKDjLT7NBIDNA2A_864_1152.jpg",
      "user_count": 0,
      "position": "",
      "have_children": false,
      "children": []
    },
    {
      "id": "565144407245549568",
      "name": "张宇",
      "type": "user",
      "avatar": "https://static-legacy.dingtalk.com/media/lADPD4PvXXpiJefNBQTNBQQ_1284_1284.jpg",
      "user_count": 0,
      "position": "",
      "have_children": false,
      "children": []
    },
    {
      "id": "565593973833826304",
      "name": "高永凤 Wendy",
      "type": "user",
      "avatar": "https://static-legacy.dingtalk.com/media/lADPM3yRnUW5rCjNB9DNB9A_2000_2000.jpg",
      "user_count": 0,
      "position": "",
      "have_children": false,
      "children": []
    },
    {
      "id": "571300756672659456",
      "name": "李玉婷",
      "type": "user",
      "avatar": "https://static-legacy.dingtalk.com/media/lQLPM4YEmamErLDMs8yzsMEKkTtXzvV4BPIqyaWATwA_179_179.png",
      "user_count": 0,
      "position": "",
      "have_children": false,
      "children": []
    },
    {
      "id": "573207230742278144",
      "name": "王春光",
      "type": "user",
      "avatar": "https://static-legacy.dingtalk.com/media/lQDPM4JAiSWSexzNAunNAd6wE7qibCU5jBcFPCmmDNA7AA_478_745.jpg",
      "user_count": 0,
      "position": "",
      "have_children": false,
      "children": []
    },
    {
      "id": "370899385294376972",
      "name": "林宇澄",
      "type": "user",
      "avatar": "https://static-legacy.dingtalk.com/media/lADPBFRyaf-qqnDNCRDNCQw_2316_2320.jpg",
      "user_count": 0,
      "position": "",
      "have_children": false,
      "children": []
    },
    {
      "id": "582569916015452160",
      "name": "李彩桦",
      "type": "user",
      "avatar": "https://static-legacy.dingtalk.com/media/lADPBbCc1swW10fNA6LNBNc_1239_930.jpg",
      "user_count": 0,
      "position": "",
      "have_children": false,
      "children": []
    },
    {
      "id": "582581468722458624",
      "name": "吴雪梅",
      "type": "user",
      "avatar": "https://static-legacy.dingtalk.com/media/lADPDg7mUBYirQTNB93NB90_2013_2013.jpg",
      "user_count": 0,
      "position": "",
      "have_children": false,
      "children": []
    },
    {
      "id": "583685640350961664",
      "name": "袁文钦",
      "type": "user",
      "avatar": "https://static-legacy.dingtalk.com/media/lADPD3Ir5S6TQAjNAz_NArA_688_831.jpg",
      "user_count": 0,
      "position": "",
      "have_children": false,
      "children": []
    },
    {
      "id": "590193245135900672",
      "name": "吴若敏",
      "type": "user",
      "avatar": "https://static-legacy.dingtalk.com/media/lQLPM4wzHv6KaTTMkMyQsACem0ohDbk7BSDXXwPAtwA_144_144.png",
      "user_count": 0,
      "position": "",
      "have_children": false,
      "children": []
    },
    {
      "id": "593406748793458689",
      "name": "陈博",
      "type": "user",
      "avatar": "https://static-legacy.dingtalk.com/media/lADPDgQ9qolf-EvNAbDNAbA_432_432.jpg",
      "user_count": 0,
      "position": "",
      "have_children": false,
      "children": []
    },
    {
      "id": "539470841699295232",
      "name": "王港",
      "type": "user",
      "avatar": "https://static-legacy.dingtalk.com/media/lADPD26eY7VHrVjNBEXNA1c_855_1093.jpg",
      "user_count": 0,
      "position": "",
      "have_children": false,
      "children": []
    },
    {
      "id": "621725210701557761",
      "name": "蔡思妍",
      "type": "user",
      "avatar": "https://static-legacy.dingtalk.com/media/lADPD3lG3Xcve8vNA2rNA2o_874_874.jpg",
      "user_count": 0,
      "position": "",
      "have_children": false,
      "children": []
    },
    {
      "id": "622085894127767552",
      "name": "谢莉婷",
      "type": "user",
      "avatar": "https://static-legacy.dingtalk.com/media/lQDPM5j0NOl_EGrNAjbNAYawbimv5UsQw8UEkcbUfoAbAA_390_566.jpg",
      "user_count": 0,
      "position": "",
      "have_children": false,
      "children": []
    },
    {
      "id": "155043269317951488",
      "name": "林明陞",
      "type": "user",
      "avatar": "https://static-legacy.dingtalk.com/media/lADPBFuNZMVp3vPNAwPNAwI_770_771.jpg",
      "user_count": 0,
      "position": "",
      "have_children": false,
      "children": []
    },
    {
      "id": "638347297914802176",
      "name": "贺天娇",
      "type": "user",
      "avatar": "https://static-legacy.dingtalk.com/media/lQDPD4F7hqj34aHNAu7NA-iw1ShZSwMg2DIGAH2qDtCQAA_1000_750.jpg",
      "user_count": 0,
      "position": "",
      "have_children": false,
      "children": []
    },
    {
      "id": "233158221799202816",
      "name": "王鑫滨",
      "type": "user",
      "avatar": "https://static-legacy.dingtalk.com/media/lADPBGY17Oq7HqvNCHPNCHA_2160_2163.jpg",
      "user_count": 0,
      "position": "",
      "have_children": false,
      "children": []
    },
    {
      "id": "639834181714354177",
      "name": "黄梓洋",
      "type": "user",
      "avatar": "https://static-legacy.dingtalk.com/media/lQDPD3krTvcXJiXNAujNAgewOR-symHDrtwGCYRru0zCAA_519_744.jpg",
      "user_count": 0,
      "position": "",
      "have_children": false,
      "children": []
    },
    {
      "id": "641686992808730624",
      "name": "秋秋国际号",
      "type": "user",
      "avatar": "",
      "user_count": 0,
      "position": "",
      "have_children": false,
      "children": []
    },
    {
      "id": "646025229166272512",
      "name": "陈梓聪",
      "type": "user",
      "avatar": "https://static-legacy.dingtalk.com/media/lQDPD371yMad_8nNAsrNAmWw3OV9lvp3MW4GJKjebONkAA_613_714.jpg",
      "user_count": 0,
      "position": "",
      "have_children": false,
      "children": []
    },
    {
      "id": "526762502338318336",
      "name": "蔡丹霞",
      "type": "user",
      "avatar": "https://static-legacy.dingtalk.com/media/lADPD4PvWW8RNHbNBJDNBJA_1168_1168.jpg",
      "user_count": 0,
      "position": "",
      "have_children": false,
      "children": []
    },
    {
      "id": "156354740786774021",
      "name": "王淑华",
      "type": "user",
      "avatar": "https://static-legacy.dingtalk.com/media/lADPDh0cRNTNLJvNAgjNAgg_520_520.jpg",
      "user_count": 0,
      "position": "",
      "have_children": false,
      "children": []
    },
    {
      "id": "484458949359263744",
      "name": "test6",
      "type": "user",
      "avatar": "",
      "user_count": 0,
      "position": "",
      "have_children": false,
      "children": []
    }
  ],

  /**当前勾选的keys */
  checkedKeys: [],

  /**当前选择的用户 */
  selectData: null,

  /**listTree loading */
  loading: false,

  /**搜索的用户数据 */
  searchUserData: null,

  /**查询用户的loading */

  searchLoading: false,
};
export const useModel = () => {
  const [state, setState] = useImmer(cloneDeep(initState));

  return [state, setState];
};
