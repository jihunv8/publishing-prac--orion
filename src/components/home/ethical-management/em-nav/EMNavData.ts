import { EMNavCardProps } from './EMNavCard';

import backgroundImage1 from '../../../../images/home/ethical-management/ethical_img01.jpg';
import backgroundImage2 from '../../../../images/home/ethical-management/ethical_img02.jpg';
import backgroundImage3 from '../../../../images/home/ethical-management/ethical_img03.jpg';
import backgroundImage4 from '../../../../images/home/ethical-management/ethical_img04.jpg';
import backgroundImage5 from '../../../../images/home/ethical-management/ethical_img05.jpg';
import backgroundImage6 from '../../../../images/home/ethical-management/ethical_img06.jpg';
import backgroundImage7 from '../../../../images/home/ethical-management/ethical_img07.jpg';

const data: EMNavCardProps[] = [
  {
    title: '개요',
    content: '윤리경영을 기반으로 한 지속성장을 추구합니다.',
    imageUrl: backgroundImage1,
    hoverColor: 'rgba(221, 130, 24, 0.85)',
  },
  {
    title: '임직원',
    content: '임직원의 행복과 발전을 중시합니다.',
    imageUrl: backgroundImage2,
    hoverColor: 'rgba(91, 133, 240, 0.85)',
  },
  {
    title: '고객',
    content: '고객의 만족을 추구합니다.',
    imageUrl: backgroundImage3,
    hoverColor: 'rgba(148, 193, 18, 0.85)',
  },
  {
    title: '협력회사',
    content: '협력회사와 동반성장을 실현합니다.',
    imageUrl: backgroundImage4,
    hoverColor: 'rgba(36, 181, 214, 0.85)',
  },
  {
    title: '주주',
    content: '주주가치를 증대합니다.',
    imageUrl: backgroundImage5,
    hoverColor: 'rgba(156, 39, 228, 0.85)',
  },
  {
    title: '사회',
    content: '사회에 대한 책임을 다합니다.',
    imageUrl: backgroundImage6,
    hoverColor: 'rgba(204, 31, 49, 0.85)',
  },
  {
    title: '보고서 및 주요성과',
    content: '윤리경영 주요활동 및 성과를 소개합니다.',
    imageUrl: backgroundImage7,
    hoverColor: 'rgba(20, 160, 76, 0.85)',
  },
];

export default data;
