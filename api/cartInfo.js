/**
 * 获取购物车信息
 * POST
 * 34.619521484375 latitude
 * 112.46745524088541 longitude
 */
import { requestHeader } from "../request-header.js";
import { LATITUDE, LONGITUDE, STORE_ID } from "../config/index.js";
const url = "https://trading.dlcsos.com/cartOnline/info";
const headers = {
  ...requestHeader,
  Host: "trading.dlcsos.com",
};
const d_track_data = {
  session_id: "CB27D1D31250000258F5143B13B0102D1744099234125",
  project: "pangdonglai_mini",
  tdc: "",
  tpc: "",
  uuid: "CB225E2487D000026CD950441D70F8301742635755685",
  env: "minip",
};
const data = {
  terminal: "devtools",
  platform: "9",
  channel: "miniprograms",
  loginId: "353694e1-b826-4466-ac30-b79f6aa90daa",
  deviceId: "CB225E2487D000026CD950441D70F8301742635755685",
  v: "v5.7.9",
  appVersion: "5.7.9",
  vendorId: 70213,
  source: "9",
  cartConfig: {
    closeUnMainFlag: 1,
  },
  all: 1,
  skeletonType: 1,
  longitude: LONGITUDE,
  latitude: LATITUDE,
  isMerge: true,
  traceId: 1744099246782,
  cartBiz: {},
  simple: 0,
  hideLoader: true,
  action: "getcart",
  sourceType: "itemDetail",
  freeVersion: "1.9.2",
  autoAddBuy: true,
  commonAutoAddBuy: true,
  storeGroupList: ["70213-944733", "69522-928042"],
  d_track_data: JSON.stringify(d_track_data),
};
