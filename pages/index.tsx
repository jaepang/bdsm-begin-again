import { useState, useEffect } from 'react'
import Image from '../node_modules/next/image'

import classNames from 'classnames/bind'
import styles from '../styles/Home.module.css'
const cx = classNames.bind(styles)

const questions = [
  '<b>신앙적인 고민</b>이 있을때, 보통 누구와 이야기하는 편인가요?',
  '<b>하나님과 티타임</b>을 가질 수 있다면, 무엇에 대해 함께 이야기하고 싶나요?',
  '나의 하나님은 <b><br/>1)나를 이끄시는분 <br/>2)나와 나란히 걷는분 <br/>3)내 뒤에서 지키시는분<br/></b>중에 선택하면?',
  '<b>믿음, 소망, 사랑</b> 중에 당신에게 가장 어려운 것은 무엇인가요?',
  '<b>크리스천으로 사는 가장 좋은 점</b>은 (   )인 것 같다',
  '<b>주기도문</b>에서 나에게 가장 와닿는 한 구절은 무엇인가요?',
  '<b>죽은 뒤에 하나님과 만났을 때</b>, 가장 듣고싶은 말이 있나요?',
  '당신의 머리속에 그려지는 <b>천국</b>은 어떤 모습인가요?',
  '당신의 아이가 태어났을 때, 아이에게 <b>하나님을 어떤 분이라고 소개</b>하고 싶나요?',
  '나는 <b>내 주변 사람들</b>에게 (   )을 주는 사람이 되고 싶다',
  '지금 하고 있는 일이나 공부에서 <b>사명감</b>을 느낄 때는 언제 인가요?',
  '처음 <b>교회</b>에 어떻게 나오게 되었나요?',
  '딱 한 번 <b>기적</b>을 행할 능력이 생긴다면 어떤 기적을 일으키고 싶나요?',
  '내 삶의 가장 큰 <b>축복</b>은 (    )인 것 같다.',
]

function randomChoice(idx: number): number {
  let newIndex = Math.floor(Math.random() * 14)
  while (newIndex == idx) newIndex = Math.floor(Math.random() * 14)
  return newIndex
}

export default function Home() {
  const [idx, setIdx] = useState<number>(2)

  useEffect(() => {
    setIdx(randomChoice(idx))
  }, [])

  return (
    <div className={cx('main-container')}>
      <h1>Begin Again</h1>
      <Image src="/로고.png" width={50} height={50} quality={100} />
      <div className={cx('question')} dangerouslySetInnerHTML={{ __html: questions[idx] }} />
      <button onClick={() => setIdx(randomChoice(idx))}>다시 생성</button>
    </div>
  )
}
