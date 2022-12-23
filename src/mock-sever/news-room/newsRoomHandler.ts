import { rest } from 'msw';
import newsRoomMockData from './newsRoomMockData';

export const getNewsRoomData = rest.get('/newsroom', (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({
      data: newsRoomMockData,
    })
  );
});
