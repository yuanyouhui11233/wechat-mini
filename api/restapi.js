/**
 *
 */
import { LONGITUDE, LATITUDE } from "../config/settings";
const url = "https://trading.dlcsos.com/amap/restapi";
const headers = {
  Host: "trading.dlcsos.com",
};

// '住宿服务|商务住宅|政府机构及社会团体|商场|家居建材市场|综合市场|运动场馆|影剧院|综合医院|会展中心|美术馆|科技馆|文化宫|标志性建筑物|学校|超市|博物馆|展览馆|村庄级地名|村组级地名|门牌信息|楼栋号'
const types =
  "%E4%BD%8F%E5%AE%BF%E6%9C%8D%E5%8A%A1%7C%E5%95%86%E5%8A%A1%E4%BD%8F%E5%AE%85%7C%E6%94%BF%E5%BA%9C%E6%9C%BA%E6%9E%84%E5%8F%8A%E7%A4%BE%E4%BC%9A%E5%9B%A2%E4%BD%93%7C%E5%95%86%E5%9C%BA%7C%E5%AE%B6%E5%B1%85%E5%BB%BA%E6%9D%90%E5%B8%82%E5%9C%BA%7C%E7%BB%BC%E5%90%88%E5%B8%82%E5%9C%BA%7C%E8%BF%90%E5%8A%A8%E5%9C%BA%E9%A6%86%7C%E5%BD%B1%E5%89%A7%E9%99%A2%7C%E7%BB%BC%E5%90%88%E5%8C%BB%E9%99%A2%7C%E4%BC%9A%E5%B1%95%E4%B8%AD%E5%BF%83%7C%E7%BE%8E%E6%9C%AF%E9%A6%86%7C%E7%A7%91%E6%8A%80%E9%A6%86%7C%E6%96%87%E5%8C%96%E5%AE%AB%7C%E6%A0%87%E5%BF%97%E6%80%A7%E5%BB%BA%E7%AD%91%E7%89%A9%7C%E5%AD%A6%E6%A0%A1%7C%E8%B6%85%E5%B8%82%7C%E5%8D%9A%E7%89%A9%E9%A6%86%7C%E5%B1%95%E8%A7%88%E9%A6%86%7C%E6%9D%91%E5%BA%84%E7%BA%A7%E5%9C%B0%E5%90%8D%7C%E6%9D%91%E7%BB%84%E7%BA%A7%E5%9C%B0%E5%90%8D%7C%E9%97%A8%E7%89%8C%E4%BF%A1%E6%81%AF%7C%E6%A5%BC%E6%A0%8B%E5%8F%B7";
// 112.46745524088541 34.619521484375
const param = {
  appVersion: "5.7.9",
  channel: "miniprograms",
  deviceId: "CB225E2487D000026CD950441D70F8301742635755685",
  hideLoader: true,
  loginId: "353694e1-b826-4466-ac30-b79f6aa90daa",
  parameters: `extensions=all&radius=200&types=${types}&location=${LONGITUDE},${LATITUDE}`,
  path: "/v3/geocode/regeo",
  platform: "9",
  source: "9",
  terminal: "devtools",
  v: "v5.7.9",
  venderId: 70213,
  vendorId: 70213,
};
