/**
 * 参数说明：
 *
 * storeId:
 * 944733 优选超市
 *
 * venderId:
 * 70213 优选超市
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

const TOKEN = "17a70a63-7f6b-483d-8e32-be53768f61fb";

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
