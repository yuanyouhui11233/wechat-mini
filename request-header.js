/**
 * 请求头
 * ticketName 参数会变化
 *
 */
import {
  STORE_ID,
  LATITUDE,
  LONGITUDE,
  DELIVERY_LAT,
  DELIVERY_LNG,
} from "./config/settings.js";
export const requestHeader = {
  // Host: "searchgw.dlcsos.com",
  Connection: "keep-alive",
  "Content-Length": 3084,
  grayVenderId: 70213,
  scene: "o2o",
  ticketName:
    "575D9C1349FB7821D9AE54C9A46D08FED6FEBEFA23E73CF6112B31068823D7FB5EF1694E772AD510D20BFC0F61563579EA0ED2CAB29F5138EDDFA30B9C1F8376AFEC6F6CB40B9D9929A41FF6B321B837D5B0177E255B978DF1007CD738D7F945A695D8339D692BB4D805B828BE7AC365FE7E7284487DDC9A0953915E875E507F",
  clientType: 1,
  dmTenantId: 42,
  channel: "miniprograms",
  appVersion: "5.7.9",
  appletType: 62,
  latitude: LATITUDE,
  areaId: 410311,
  v: "v5.7.9",
  storeId: STORE_ID,
  grayStoreId: STORE_ID,
  platform: 9,
  token: "17a70a63-7f6b-483d-8e32-be53768f61fb",
  businessCode: 1,
  networkType: 0,
  mixFlag: 1,
  uniqueCode: "pdl_wx",
  originBusinessFormat: 1,
  storeGroupKey: "3cf657cf25c0dba609043ac2d1df4577@MS05NDQ3MzMtNzAyMTM",
  venderId: 70213,
  deliveryLng: DELIVERY_LNG,
  longitude: LONGITUDE,
  "content-type": "application/x-www-form-urlencoded",
  areaCode: 410311,
  deliveryLat: DELIVERY_LAT,
  userId: 1535688324,
  "Accept-Encoding": "gzip,compress,br,deflate",
  "User-Agent":
    "Mozilla/5.0 (iPhone; CPU iPhone OS 16_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.57(0x1800392f) NetType/WIFI Language/zh_CN",
  Referer: "https://servicewechat.com/wx9572d0552dfc7579/77/page-frame.html",
};
