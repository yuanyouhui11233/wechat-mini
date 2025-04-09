import axios from "axios";
import { requestHeader } from "../request-header.js";
import { CHANNEL, DEVICE_ID, PLATFORM, VERSION } from "../config/settings.js";

/**
 * 搜索
 *
 * 请求头
 * Host：searchgw.dlcsos.com
 */

const url = "https://searchgw.dlcsos.com/app/new/search/wareSearch";

const d_track_data = {
  session_id: "CB27CB872E700002A019DBE01E5158201744092631823",
  project: "pangdonglai_mini",
  tdc: "",
  tpc: "",
  uuid: "CB225E2487D000026CD950441D70F8301742635755685",
  env: "minip",
};
const data = {
  terminal: "devtools",
  platform: PLATFORM,
  channel: CHANNEL,
  loginId: "353694e1-b826-4466-ac30-b79f6aa90daa",
  deviceId: DEVICE_ID,
  v: `v${VERSION}`,
  appVersion: VERSION,
  venderId: 70213,
  vendorId: 70213,
  source: "9",
  src: 4,
  pageSize: 20,
  keyword: "啤酒", // 搜索关键词
  queryType: 0,
  sort: 0,
  isOffline: false,
  categoryLevel: 0,
  fromType: 2,
  sortRule: 0,
  sortKey: 0,
  noResultSearch: 0,
  businessCode: 99,
  pos: 1,
  pageNum: 1,
  from: 2,
  categoryType: 0,
  storeInfo: {
    venderId: 70213,
    defaultChosed: false,
    storeId: 944733,
    name: "",
    businessCode: "99",
  },
  requestSource: "9",
  requestVersion: "v5.7.9",
  showPresale: false,
  freeVersion: "1.9.2",
  d_track_data: JSON.stringify(d_track_data),
};
try {
  const searchResult = async (data) => {
    const res = await axios.post(url, data, {
      headers: requestHeader,
      timeout: 10000,
    });
    console.log(res.data.data);
    // return res;
  };
  searchResult(data);
} catch (error) {
  console.log("error", error);
}
