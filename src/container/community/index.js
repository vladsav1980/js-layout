import {
  createElement,
  createHeader,
} from '../../script/layout'

const page = document.querySelector('.page')

const header = createHeader()

page.append(header)

const title = createElement('h1', 'title', 'Community')

page.append(title)

const TABBARS = [
  {
    text: 'Knowledge Base',
    active: false,
  },
  {
    text: 'Information',
    active: true,
  },
]

const createTabbars = () => {
  const tabbars = createElement('div', 'tabbar')

  TABBARS.forEach((item) => {
    const tabbar = createElement(
      'div',
      item.active ? 'tabbar__item active' : 'tabbar__item',
      item.text,
    )

    tabbars.append(tabbar)
  })
  return tabbars
}

const tabbars = createTabbars()
page.append(tabbars)

const HERO_PARAMS = {
  width: 343,
  height: 160,
  src: '/img/hero-image.png',
}

const hero = createElement('img', 'hero-image')
Object.entries(HERO_PARAMS).forEach(([key, value]) => {
  hero[key] = value
})
page.append(hero)

const INFO_BLOCKS = [
  {
    title: 'Що таке база знань?',
    text: `База знаний — база данных, содержащая правила вывода и информацию о человеческом опыте и
    знаниях в некоторой предметной области. В самообучающихся системах база знаний также содержит информацию,
    являющуюся результатом решения предыдущих задач.`,
  },
]

const createInfoBlocks = () => {
  const infoBlocks = createElement('div', 'info')

  INFO_BLOCKS.forEach((item) => {
    const infoTitle = createElement(
      'h1',
      'info__title',
      item.title,
    )

    const infoText = createElement(
      'p',
      'info__text',
      item.text,
    )

    infoBlocks.append(infoTitle)
    infoBlocks.append(infoText)
  })
  return infoBlocks
}

const info = createInfoBlocks()
page.append(info)

const button = createElement(
  'button',
  'button community-button',
  'Join our Community in Telegram',
)

page.append(button)
