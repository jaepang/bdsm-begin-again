import { useState, useEffect } from 'react'
import Image from '../node_modules/next/image'

import classNames from 'classnames/bind'
import styles from '../styles/Home.module.css'
const cx = classNames.bind(styles)

const questions = [
  '신앙적인 고민이 있을때, 보통 누구와 이야기하는 편인가요?',
  '하나님과 티타임을 가질 수 있다면, 무엇에 대해 함께 이야기하고 싶나요?',
  '나의 하나님은 \n1)나를 이끄시는분 \n2)나와 나란히 걷는분 \n3)내 뒤에서 지키시는분\n중에 선택하면?',
  '믿음, 소망, 사랑 중에 당신에게 가장 어려운 것은 무엇인가요?',
  '크리스천으로 사는 가장 좋은 점은 (   )인 것 같다',
  '주기도문에서 나에게 가장 와닿는 한 구절은 무엇인가요?',
  '죽은 뒤에 하나님과 만났을 때, 가장 듣고싶은 말이 있나요?',
  '당신의 머리속에 그려지는 천국은 어떤 모습인가요?',
  '당신의 아이가 태어났을 때, 아이에게 하나님을 어떤 분이라고 소개하고 싶나요?',
  '나는 내 주변 사람들에게 (   )을 주는 사람이 되고 싶다',
  '지금 하고 있는 일이나 공부에서 사명감을 느낄 때는 언제 인가요?',
  '처음 교회에 어떻게 나오게 되었나요?',
  '딱 한 번 기적을 행할 능력이 생긴다면 어떤 기적을 일으키고 싶나요?',
  '내 삶의 가장 큰 축복은 (    )인 것 같다.',
]

function randomChoice(): string {
  return questions[Math.floor(Math.random() * 14)]
}

export default function Home() {
  const [question, setQuestion] = useState<string>()

  useEffect(() => {
    setQuestion(randomChoice())
  }, [])

  return (
    <div className={cx('main-container')}>
      <h1>Begin Again</h1>
      <Image src="/로고.png" width={50} height={50} quality={100} />
      <h2>{question}</h2>
      <button onClick={() => setQuestion(randomChoice())}>다시 생성</button>
    </div>
  )
}
