'use strict';

const express = require(`express`);
const request = require(`supertest`);
const statusCodes = require(`http-status`);
const search = require(`./search`);
const SearchService = require(`../data-service/search`);

const mockArticles = [
  {
    "id": `oHNLn2`,
    "title": `Сейчас всё чаще звучит детский заливистый смех`,
    "announce": `Собрать камни бесконечности легко, если вы прирожденный герой.С другой стороны, базовый вектор развития играет определяющее значение для системы обучения кадров, соответствующей насущным потребностям.Как уже неоднократно упомянуто, сделанные на базе интернет-аналитики выводы, инициированные исключительно синтетически, рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок.`,
    "fullText": `Программировать не настолько сложно, как об этом говорят.Простые ежедневные упражнения помогут достичь успеха.Игры и программирование разные вещи. Не стоит идти в программисты, если вам нравятся только игры.Из под его пера вышло 8 платиновых альбомов.Предварительные выводы неутешительны: постоянный количественный рост и сфера нашей активности предоставляет широкие возможности для существующих финансовых и административных условий.Он написал больше 30 хитов.Собрать камни бесконечности легко, если вы прирожденный герой.Как уже неоднократно упомянуто, некоторые особенности внутренней политики превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.Для современного мира семантический разбор внешних противодействий не оставляет шанса для переосмысления внешнеэкономических политик.Ёлки — это не просто красивое дерево. Это прочная древесина.Программировать не настолько сложно, как об этом говорят.Он написал больше 30 хитов.Это один из лучших рок-музыкантов.С другой стороны, базовый вектор развития играет определяющее значение для системы обучения кадров, соответствующей насущным потребностям.`,
    "createDate": `2022-01-20 02:52:22`,
    "category": [
      `Без рамки`,
      `Кино`,
      `Реки`,
      `Разное`,
      `Спорт`
    ],
    "comments": [
      {
        "id": `ljapTY`,
        "text": `Совсем немного... Планируете записать видосик на эту тему Плюсую, но слишком много буквы!`
      },
      {
        "id": `MmhzYy`,
        "text": `Мне не нравится ваш стиль. Ощущение, что вы меня поучаете.`
      }
    ]
  },
  {
    "id": `ddqqMc`,
    "title": `Внезапно, был сорван доклад председателя совхоза`,
    "announce": `Принимая во внимание показатели успешности, высокотехнологичная концепция общественного уклада создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса первоочередных требований.Для современного мира семантический разбор внешних противодействий не оставляет шанса для переосмысления внешнеэкономических политик.Программировать не настолько сложно, как об этом говорят.Этот смартфон — настоящая находка. Большой и яркий экран, мощнейший процессор — всё это в небольшом гаджете.Ёлки — это не просто красивое дерево. Это прочная древесина.`,
    "fullText": `Но некоторые особенности внутренней политики формируют глобальную экономическую сеть и при этом - призваны к ответу.Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: начало повседневной работы по формированию позиции играет определяющее значение для стандартных подходов.Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: начало повседневной работы по формированию позиции играет определяющее значение для стандартных подходов.Освоить вёрстку несложно. Возьмите книгу новую книгу и закрепите все упражнения на практике.Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: начало повседневной работы по формированию позиции играет определяющее значение для стандартных подходов.Первая большая ёлка была установлена только в 1938 году.Освоить вёрстку несложно. Возьмите книгу новую книгу и закрепите все упражнения на практике.Золотое сечение — соотношение двух величин, гармоническая пропорция.Вы можете достичь всего. Стоит только немного постараться и запастись книгами.Простые ежедневные упражнения помогут достичь успеха.Помните, небольшое количество ежедневных упражнений лучше, чем один раз, но много.Из под его пера вышло 8 платиновых альбомов.Собрать камни бесконечности легко, если вы прирожденный герой.Собрать камни бесконечности легко, если вы прирожденный герой.Но некоторые особенности внутренней политики формируют глобальную экономическую сеть и при этом - призваны к ответу.Для современного мира семантический разбор внешних противодействий не оставляет шанса для переосмысления внешнеэкономических политик.Бороться с прокрастинацией несложно. Просто действуйте. Маленькими шагами.Процессор заслуживает особого внимания. Он обязательно понравится геймерам со стажем.Простые ежедневные упражнения помогут достичь успеха.`,
    "createDate": `2022-02-16 08:54:20`,
    "category": [
      `Озера`,
      `Без рамки`,
      `Железо`,
      `IT`,
      `Спорт`
    ],
    "comments": [
      {
        "id": `aXsUQf`,
        "text": `Давно не пользуюсь стационарными компьютерами. Ноутбуки победили.`
      },
      {
        "id": `9GC6A8`,
        "text": `Плюсую, но слишком много буквы! Мне кажется или я уже читал это где-то? Планируете записать видосик на эту тему`
      },
      {
        "id": `eGiwXD`,
        "text": `Это где ж такие красоты? Планируете записать видосик на эту тему Давно не пользуюсь стационарными компьютерами. Ноутбуки победили.`
      }
    ]
  },
  {
    "id": `KVI97d`,
    "title": `Как достигнуть успеха не вставая с кресла`,
    "announce": `Помните, небольшое количество ежедневных упражнений лучше, чем один раз, но много.Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: начало повседневной работы по формированию позиции играет определяющее значение для стандартных подходов.Как начать действовать? Для начала просто соберитесь.Освоить вёрстку несложно. Возьмите книгу новую книгу и закрепите все упражнения на практике.Этот смартфон — настоящая находка. Большой и яркий экран, мощнейший процессор — всё это в небольшом гаджете.`,
    "fullText": `Помните, небольшое количество ежедневных упражнений лучше, чем один раз, но много.Первая большая ёлка была установлена только в 1938 году.Предварительные выводы неутешительны: постоянный количественный рост и сфера нашей активности предоставляет широкие возможности для существующих финансовых и административных условий.Вы можете достичь всего. Стоит только немного постараться и запастись книгами.Предварительные выводы неутешительны: постоянный количественный рост и сфера нашей активности предоставляет широкие возможности для существующих финансовых и административных условий.Рок-музыка всегда ассоциировалась с протестами. Так ли это на самом деле?Но некоторые особенности внутренней политики формируют глобальную экономическую сеть и при этом - призваны к ответу.Рок-музыка всегда ассоциировалась с протестами. Так ли это на самом деле?Как уже неоднократно упомянуто, сделанные на базе интернет-аналитики выводы, инициированные исключительно синтетически, рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок.Вы можете достичь всего. Стоит только немного постараться и запастись книгами.Но некоторые особенности внутренней политики формируют глобальную экономическую сеть и при этом - призваны к ответу.Простые ежедневные упражнения помогут достичь успеха.Первая большая ёлка была установлена только в 1938 году.С другой стороны, базовый вектор развития играет определяющее значение для системы обучения кадров, соответствующей насущным потребностям.Для современного мира семантический разбор внешних противодействий не оставляет шанса для переосмысления внешнеэкономических политик.Игры и программирование разные вещи. Не стоит идти в программисты, если вам нравятся только игры.`,
    "createDate": `2022-01-11 00:33:03`,
    "category": [
      `Реки`,
      `Разное`
    ],
    "comments": [
      {
        "id": `lfTn6i`,
        "text": `Мне кажется или я уже читал это где-то? Давно не пользуюсь стационарными компьютерами. Ноутбуки победили. Это где ж такие красоты?`
      },
      {
        "id": `W0_8Mb`,
        "text": `Мне не нравится ваш стиль. Ощущение, что вы меня поучаете. Согласен с автором! Совсем немного...`
      }
    ]
  }
];

const app = express();

app.use(express.json());
search(app, new SearchService(mockArticles));

describe(`API returns articles based on search query`, () => {
  let response;

  const foundArticlesNumber = 1;
  const foundArticleId = `ddqqMc`;

  beforeAll(async () => {
    response = await request(app)
      .get(`/search`)
      .query({
        query: `Внезапно`
      });
  });

  test(`Status code 200`, () => expect(response.statusCode).toBe(statusCodes.OK));

  test(`One article found`, () => expect(response.body.length).toBe(foundArticlesNumber));

  test(`Article has correct id`, () => expect(response.body[0].id).toBe(foundArticleId));

});

test(`API returns code 404 if nothing is found`,
    () => request(app)
    .get(`/search`)
    .query({
      query: `Что-то чего нет`
    })
    .expect(statusCodes.NOT_FOUND)
);

test(`API returns 400 when query string is absent`,
    () => request(app)
    .get(`/search`)
    .expect(statusCodes.BAD_REQUEST)
);
