import TrendClient from './trendClient';

export default class Trend {
  constructor(private apiClient: TrendClient) {}

  getList = async () => {
    return await this.apiClient.getList();
  };
}
