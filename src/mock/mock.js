const Mock = require('mockjs');

const Random = Mock.Random;


Mock.mock('/mock/api/data', () => {
  let list = [];
  for (let i = 0; i < 30; i++) {
    let listObject = {
      title: Random.csentence(1, 5),
      label: Random.csentence(1, 5),
      time: Random.time(),
      company: Random.csentence(5, 10),
      attention_degree: Random.integer(100, 9999),
      photo: Random.image('30*60', '#50B347', '#FFF', 'Eating'),
      spend: Random.natural(1, 100)
    }
    list.push(listObject)
  }
  return list;
})

Mock.mock('/mock/api/icon', () => {
  let list = [];
  for (let i = 0; i < 16; i++) {
    let listObject = {
      title: Random.csentence(1,4),
      icon: Random.csentence(1,4),
    }
    list.push(listObject)
  }
  return list;
})
