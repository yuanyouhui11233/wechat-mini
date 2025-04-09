/**
 * 获取店铺列表
 * method: GET
 * url: https://flow.dlcsos.com/address/business
 * @param {Object} param
 * @return {Object}
 * storeInfoVOList: Array 超市列表
 * storeGroupKey: string
 * platformStoreGroupKey: string
 */
import axios from "axios";
import { LATITUDE, LONGITUDE } from "../config/settings.js";
const url = "https://flow.dlcsos.com/address/business";

const d_track_data = {
  session_id: "CB27D1D31250000258F5143B13B0102D1744099234125",
  project: "pangdonglai_mini",
  tdc: "",
  tpc: "",
  uuid: "CB225E2487D000026CD950441D70F8301742635755685",
  env: "minip",
};
const param = {
  terminal: "devtools",
  platform: "9",
  channel: "miniprograms",
  loginId: "353694e1-b826-4466-ac30-b79f6aa90daa",
  deviceId: "CB225E2487D000026CD950441D70F8301742635755685",
  v: "v5.7.9",
  appVersion: "5.7.9",
  venderId: 70213,
  vendorId: 70213,
  source: "9",
  hideLoading: true,
  resType: 1,
  scene: "o2o",
  specifiedVenderId: "",
  checkOrderInO2OArea: 2,
  actualLocationStoreIds: [944733, 928042], // 支持商店位置的id
  longitude: LONGITUDE,
  latitude: LATITUDE,
  d_track_data: JSON.stringify(d_track_data),
};
const getAddressBusiness = () => {
  axios
    .get(url, {
      params: param,
      // headers: headers,
    })
    .then((res) => {
      console.log(res.data);
    });
};
getAddressBusiness();
