/**
 * 获取店铺支持
 * get
 * @Object param
 *
 * 请求头
 * Host：gwmini.dlcsos.com
 */
import axios from "axios";
import { requestHeader } from "../request-header.js";
const url = "https://gwmini.dlcsos.com/store/business/support";

const headers = {
  ...requestHeader,
  Host: "gwmini.dlcsos.com",
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
  storeId: 944733,
};
const d_track_data = {
  session_id: "CB27D1D31250000258F5143B13B0102D1744099234125",
  project: "pangdonglai_mini",
  tdc: "",
  tpc: "",
  uuid: "CB225E2487D000026CD950441D70F8301742635755685",
  env: "minip",
};
const getStoreSupport = () => {
  axios
    .get(
      url +
        "?param=" +
        JSON.stringify(param) +
        "&d_track_data=" +
        JSON.stringify(d_track_data),
      {
        headers,
        timeout: 10000,
      }
    )
    .then((res) => {
      console.log(res.data);
    });
};
getStoreSupport();
