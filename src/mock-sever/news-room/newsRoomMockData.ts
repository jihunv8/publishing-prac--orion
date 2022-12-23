import tempImage1 from './images/temp-image1.jpg';
import tempImage2 from './images/temp-image2.png';
import tempImage3 from './images/temp-image3.jpg';
import tempImage4 from './images/temp-image4.jpg';
import tempImage5 from './images/temp-image5.png';
import tempImage6 from './images/temp-image6.jpg';
import tempImage7 from './images/temp-image7.jpg';
import tempImage8 from './images/temp-image8.jpg';

type NewsRoomItem = {
  category: 'instagram' | 'youtube' | 'news';
  imageUrl: string;
  content: string;
};

const newsRoomMockData: NewsRoomItem[] = [
  {
    category: 'news',
    imageUrl: tempImage1,
    content: "오리온 토핑 초콜릿 '톡핑', 와인 전문숍 '와인앤모어'와 컬래버레이션 이벤트 진행",
  },
  { category: 'instagram', imageUrl: tempImage2, content: '연말 파티엔 톡핑 초콜릿과 함께♥' },
  { category: 'instagram', imageUrl: tempImage3, content: '초코파이情 해핍리쇼콜라와 함께하는 따뜻한 情나눔 이벤트' },
  { category: 'instagram', imageUrl: tempImage4, content: '꼬물탱X케피 네이버 쇼핑 라이브 소문내기 이벤트' },
  {
    category: 'instagram',
    imageUrl: tempImage5,
    content: '<꼬북칩 크런치즈> 전국 편의점, 대형마트, 체인스토어 판매시작!',
  },
  { category: 'news', imageUrl: tempImage6, content: "오리온, 겨울 한정판 '초코파이情 해피베리쇼콜라' 재출시" },
  { category: 'instagram', imageUrl: tempImage7, content: '마이구미 알맹이젤리 3종 매력탐구' },
  {
    category: 'youtube',
    imageUrl: tempImage8,
    content:
      '★특별한 체험이 있는 제주여행지 추천★ 닥터유 제주용암수 홍보관 | 제주도 브이로그 | 함덕해수욕장 | 월정리해수욕장 | 댓글 이벤트',
  },
];

export default newsRoomMockData;
