import axios from 'axios';

class ApiClient {
  // eslint-disable-next-line class-methods-use-this
  getTrendList = async () => {
    const { data } = await axios.get(
      'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/87bdcbe0-76c9-4df3-a3b0-efb2980f66b5/wanted_FE_trend-data-set.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221105T164011Z&X-Amz-Expires=86400&X-Amz-Signature=08e15696e4cf7fc1fca07b324aa0b6bafd28e900c37d088e5d676c46849d2d0f&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22wanted_FE_trend-data-set.json%22&x-id=GetObject'
    );
    return data;
  };
}

export const trend = new ApiClient().getTrendList();
