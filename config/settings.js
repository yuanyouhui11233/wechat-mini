/**
 * 参数说明：
 *
 * storeId:
 * 944733 优选超市
 * 943773 金汇
 * 942013 生活广场
 * 928042 优选茶叶
 * 862962 时代广场珠宝测试
 * 945613 S001电商仓
 * 943453 普通B2C售卖门店（非电商仓）
 * 943733 云鼎
 * 943573 时代广场超市
 * 943613 魏源广场超市
 * 943533 生活广场超市
 * 943813 金三角超市
 * 943693 北海店超市
 *
 * venderId:
 * 70213 优选超市
 * 70213 金汇
 * 70173 生活广场
 * 69522 优选茶叶
 * 67522 时代广场珠宝测试
 * 70173 S001电商仓
 * 70173 普通B2C售卖门店（非电商仓）
 * 70213 云鼎
 * 70213 时代广场超市
 * 70213 魏源广场超市
 * 70213 生活广场超市
 * 70213 金三角超市
 * 70213 北海店超市
 *
 * userId: 购物车id
 * 1535688324
 *
 * d_track_data
 * data
 *   rangeBusinessGroup []
 *    storeGroup []
 *      wareGroup [] 购物车数据
 *        wares []
 *          customTag: {}
 *            d_track_data
 *
 *
 */
const VERSION = "5.7.9";
const LATITUDE = 34.024801894257806; // 纬度
const LONGITUDE = 113.85376816612302; // 经度
const AREA_CODE = 411002; // 许昌市魏都区区域代码
const PLATFORM = 9; // 平台类型
// 配送地址
const DELIVERY_LAT = 34.024801; // 纬度
const DELIVERY_LNG = 113.853768; // 经度

const CHANNEL = "miniprograms"; // 渠道
const UNIQUE_CODE = "pdl_wx"; // 唯一标识

const DEVICE_ID = "CB225E2487D000026CD950441D70F8301742635755685";

const TOKEN = "0d901c13-4fc9-45b8-abfe-8979ecbb5c67";

// storeId
const STORE_ID = 944733; // 商店ID

export {
  VERSION,
  LATITUDE,
  LONGITUDE,
  AREA_CODE,
  PLATFORM,
  DELIVERY_LAT,
  DELIVERY_LNG,
  CHANNEL,
  UNIQUE_CODE,
  DEVICE_ID,
  TOKEN,
  STORE_ID,
};
