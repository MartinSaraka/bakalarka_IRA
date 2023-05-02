
export interface StatisticList {
  id: number;
  gameName?: string;
  nickName?: string;
  time?: number;
  clicks?: number;
  date?: Date;
}

export interface StatisticListREST {
  statisticList: StatisticList;
}
