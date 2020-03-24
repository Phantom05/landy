function indexInfo(api) {
  if (api === '/dp/api/main') {
    return {
      "result": 1,
      "project": {
          "waiting": 1,
          "inprogress": 0,
          "completed": 2
      },
      "designer": {
          "star": [
              {
                  "designerType": "s",
                  "userIdCode": 2,
                  "imgaePath": null,
                  "name": "testD",
                  "language": [
                      "EN"
                  ],
                  "rating": null,
                  "review": 0,
                  "wating": 1,
                  "inprogress": 0,
                  "completed": 1
              },
              {
                  "designerType": "s",
                  "userIdCode": 3,
                  "imgaePath": null,
                  "name": "testD2",
                  "language": null,
                  "rating": null,
                  "review": 0,
                  "wating": 0,
                  "inprogress": 0,
                  "completed": 0
              },
              {
                  "designerType": "s",
                  "userIdCode": 4,
                  "imgaePath": null,
                  "name": "testD3",
                  "language": null,
                  "rating": null,
                  "review": 0,
                  "wating": 0,
                  "inprogress": 0,
                  "completed": 0
              },
              {
                  "designerType": "s",
                  "userIdCode": 5,
                  "imgaePath": null,
                  "name": "testD4",
                  "language": null,
                  "rating": null,
                  "review": 0,
                  "wating": 0,
                  "inprogress": 0,
                  "completed": 0
              },
              {
                  "designerType": "s",
                  "userIdCode": 6,
                  "imgaePath": null,
                  "name": "testD5",
                  "language": null,
                  "rating": null,
                  "review": 0,
                  "wating": 0,
                  "inprogress": 0,
                  "completed": 0
              }
          ],
          "recommend": [
              {
                  "designerType": "r",
                  "userIdCode": 5,
                  "imgaePath": null,
                  "name": "testD4",
                  "language": null,
                  "rating": null,
                  "review": 0,
                  "wating": 0,
                  "inprogress": 0,
                  "completed": 0
              },
              {
                  "designerType": "r",
                  "userIdCode": 11,
                  "imgaePath": null,
                  "name": "testD10",
                  "language": null,
                  "rating": null,
                  "review": 0,
                  "wating": 0,
                  "inprogress": 0,
                  "completed": 0
              },
              {
                  "designerType": "r",
                  "userIdCode": 9,
                  "imgaePath": null,
                  "name": "testD8",
                  "language": null,
                  "rating": null,
                  "review": 0,
                  "wating": 0,
                  "inprogress": 0,
                  "completed": 0
              },
              {
                  "designerType": "r",
                  "userIdCode": 7,
                  "imgaePath": null,
                  "name": "testD6",
                  "language": null,
                  "rating": null,
                  "review": 0,
                  "wating": 0,
                  "inprogress": 0,
                  "completed": 0
              },
              {
                  "designerType": "r",
                  "userIdCode": 6,
                  "imgaePath": null,
                  "name": "testD5",
                  "language": null,
                  "rating": null,
                  "review": 0,
                  "wating": 0,
                  "inprogress": 0,
                  "completed": 0
              }
          ]
      }
  }
  } else if(api === ''){

  }
}


/**
 * userList page dummy
 * @param {*} n 
 */
function userListInfo(type){
  if(type === 'designer'){
    return {
      "jsonType": "desinger.list.res.json",
      "result": 1,
      "type": 2,
      "designerList": [
          {
              "userIdCode": 2,
              "imgaePath": null,
              "name": "testD",
              "language": [
                  "EN"
              ],
              "rating": null,
              "review": 0,
              "wating": 1,
              "inprogress": 0,
              "completed": 1
          },
          {
              "userIdCode": 3,
              "imgaePath": null,
              "name": "testD2",
              "language": null,
              "rating": null,
              "review": 0,
              "wating": 0,
              "inprogress": 0,
              "completed": 0
          },
          {
              "userIdCode": 4,
              "imgaePath": null,
              "name": "testD3",
              "language": null,
              "rating": null,
              "review": 0,
              "wating": 0,
              "inprogress": 0,
              "completed": 0
          },
          {
              "userIdCode": 5,
              "imgaePath": null,
              "name": "testD4",
              "language": null,
              "rating": null,
              "review": 0,
              "wating": 0,
              "inprogress": 0,
              "completed": 0
          },
          {
              "userIdCode": 6,
              "imgaePath": null,
              "name": "testD5",
              "language": null,
              "rating": null,
              "review": 0,
              "wating": 0,
              "inprogress": 0,
              "completed": 0
          },
          {
              "userIdCode": 7,
              "imgaePath": null,
              "name": "testD6",
              "language": null,
              "rating": null,
              "review": 0,
              "wating": 0,
              "inprogress": 0,
              "completed": 0
          },
          {
              "userIdCode": 8,
              "imgaePath": null,
              "name": "testD7",
              "language": null,
              "rating": null,
              "review": 0,
              "wating": 0,
              "inprogress": 0,
              "completed": 0
          },
          {
              "userIdCode": 9,
              "imgaePath": null,
              "name": "testD8",
              "language": null,
              "rating": null,
              "review": 0,
              "wating": 0,
              "inprogress": 0,
              "completed": 0
          },
          {
              "userIdCode": 10,
              "imgaePath": null,
              "name": "testD9",
              "language": null,
              "rating": null,
              "review": 0,
              "wating": 0,
              "inprogress": 0,
              "completed": 0
          },
          {
              "userIdCode": 11,
              "imgaePath": null,
              "name": "testD10",
              "language": null,
              "rating": null,
              "review": 0,
              "wating": 0,
              "inprogress": 0,
              "completed": 0
          },
          {
              "userIdCode": 12,
              "imgaePath": null,
              "name": "testD11",
              "language": null,
              "rating": null,
              "review": 0,
              "wating": 0,
              "inprogress": 0,
              "completed": 0
          },
          {
              "userIdCode": 13,
              "imgaePath": null,
              "name": "testD12",
              "language": null,
              "rating": null,
              "review": 0,
              "wating": 0,
              "inprogress": 0,
              "completed": 0
          }
      ],
      "pagingData": {
          "page": 1,
          "startPage": 1,
          "endPage": 10,
          "totalPage": 20,
          "prevPage": 1,
          "nextPage": 11
      },
      "search": {
          "name": "",
          "sortType": "1",
          "language": "",
          "start": 0,
          "end": 12
      },
      "authCheck": 4
  }
  }else if(type === 'client'){
    return {
      "jsonType": "client.list.res.json",
      "result": 1,
      "type": 1,
      "search": {
          "name": "",
          "sortType": "0",
          "language": "",
          "start": 0,
          "end": 12
      },
      "clientList": [
          {
              "userIdCode": 1,
              "imgaePath": null,
              "name": "test",
              "language": [
                  "DE",
                  "EN",
                  "KO"
              ],
              "rating": 4.2,
              "review": 1,
              "wating": 0,
              "inprogress": 0,
              "completed": 1
          }
      ],
      "pagingData": {
          "page": 1,
          "startPage": 1,
          "endPage": 1,
          "totalPage": 1,
          "prevPage": 1,
          "nextPage": 1
      },
      "authCheck": 4
  }
  }
}

/**
 * Project List page 
 * @param {*} type 
 */
function projectListInfo(type){
  if(type === 'project'){
    return {
      "jsonType": "project.list.res.json",
      "result": 1,
      "type": 1,
      "search": {
          "name": "project",
          "software": [
              "exocad"
          ],
          "project": [
              0,
              1
          ],
          "sortType": 0,
          "language": "EN",
          "start": null,
          "s": "exocad",
          "p": 1
      },
      "prjList": [
          {
              "prjCode": 4,
              "prjId": "DOF-Bridge111-1564386905100-test-3",
              "name": "First project",
              "clientCode": 1,
              "clientName": "test.test.com",
              "expected": 12343,
              "language": [
                  "en"
              ],
              "bridge": [
                  {
                      "bridge": "B1"
                  },
                  {
                      "bridge": "B2"
                  }
              ],
              "program": null,
              "participants": 2,
              "dueDate": 1564384850,
              "endDate": 1564384850,
              "teeth": [
                  {
                      "teethNumber": "12",
                      "painting": "#0095ff"
                  },
                  {
                      "teethNumber": "13"
                  }
              ],
              "client": {
                  "code": 1,
                  "name": "test.test.com"
              }
          }
      ],
      "pagingData": {
          "page": 1,
          "startPage": 1,
          "endPage": 10,
          "totalPage": 2,
          "prevPage": 1,
          "nextPage": 11
      },
      "authCheck": 4
  }
  }
}

function mypageMessage(){
  return {
    "pagingData": {
      "page": 1,
      "startPage": 1,
      "endPage": 10,
      "totalPage": 20,
      "prevPage": 1,
      "nextPage": 11
  },
  }
}


function userInfoDetailProject(type,tabName){
  
}


function mathRandom(n){
  return Math.floor(Math.random() * n);
}
 
// index 

function indexPlayer(type){
  if(type === 'star'){
    let arr = [];
    for(let i = 0 ; i < 5; i ++){
      arr.push(
        {
          name: `John Haliy${i}`,
          country: 'Korea',
          watchingProject: mathRandom(10),
          dealProject: mathRandom(10),
          completedProject: mathRandom(10),
          reviewCount:mathRandom(30),
          language: ['de','cn','ko', 'en'],
          rating: (Math.random() * 5).toFixed(1),
          imgSrc: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Y2wsfZsxGvVcQiCDdrfyt2nRkmGbLqb2ENww0FsgkimABSoE`,
          accessKey: `j3k46kj6kj34kj57k4j5746`
        }
      )
    }
    return arr

  }else if (type === 'recommend'){
    let arr = [];
    for(let i = 0 ; i < 5; i ++){
      arr.push(
        {
          name: `Chris Brown${i}`,
          country: 'Korea',
          watchingProject: mathRandom(10),
          dealProject: mathRandom(10),
          completedProject: mathRandom(10),
          reviewCount:mathRandom(30),
          language: ['de','cn','ko', 'en'],
          rating: (Math.random() * 5).toFixed(1),
          imgSrc: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Y2wsfZsxGvVcQiCDdrfyt2nRkmGbLqb2ENww0FsgkimABSoE`,
          accessKey: `j3k46kj6kj34kj57k4j5746`
        }
      )
    }
    return arr
  }
  
}
// sign up
exports.signup = {
  countryInfo: [{
      country: 'Korea',
      telCode: '+82',
      id: 1,
    },
    {
      country: 'Unite State',
      telCode: '+1',
      id: 2,

    },
    {
      country: 'Japan',
      telCode: '+2',
      id: 3,

    },
    {
      country: 'China',
      telCode: '+3',
      id: 4,
    },
  ],
  state: [{
      id: 1,
      name: "",
      country_id: 1
    },
    {
      name: ['서울특별시'],
      id: 25,
      country_id: 2
    },
    {
      name: ['부산광역시'],
      id: 25,
      country_id: 3
    },
    {
      name: ['대구광역시'],
      id: 25,
      country_id: 4
    },
    {
      name: ['광주광역시'],
      id: 25,
      country_id: 5
    },
    {
      name: ['울산광역시'],
      id: 25,
      country_id: 6
    },
    {
      name: ['인천광역시'],
      id: 25,
      country_id: 7
    },
  ]
}
// sign up

// Users list


function usersList(){
  return usersList = [{
    type: "designer",
    name: "Designer",
    list: [{
        name: 'john1',
        country: 'Korea',
        watchingProject: mathRandom(10),
        dealProject: mathRandom(10),
        completedProject: mathRandom(10),
        reviewCount:mathRandom(30),
        language: ['de','cn','ko', 'en'],
        rating: (Math.random() * 5).toFixed(1),
        imgSrc: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Y2wsfZsxGvVcQiCDdrfyt2nRkmGbLqb2ENww0FsgkimABSoE`,
        accessKey: `j3k46kj6kj34kj57k4j5746`
      },
      {
        name: 'john2',
        country: 'Korea',
        watchingProject: mathRandom(10),
        dealProject: mathRandom(10),
        completedProject: mathRandom(10),
        reviewCount:mathRandom(30),
        language: ['ko', 'de'],
        rating: (Math.random() * 5).toFixed(1),
        imgSrc: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Y2wsfZsxGvVcQiCDdrfyt2nRkmGbLqb2ENww0FsgkimABSoE`,
        accessKey: `j3k46kj6kj34kj57k4j5746`
      }, {
        name: 'john3',
        country: 'Korea',
        watchingProject: mathRandom(10),
        dealProject: mathRandom(10),
        completedProject: mathRandom(10),
        reviewCount:mathRandom(30),
        language: ['ko', 'en'],
        rating: (Math.random() * 5).toFixed(1),
        imgSrc: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Y2wsfZsxGvVcQiCDdrfyt2nRkmGbLqb2ENww0FsgkimABSoE`,
        accessKey: `j3k46kj6kj34kj57k4j5746`
      }, {
        name: 'john4',
        country: 'Korea',
        watchingProject: mathRandom(10),
        dealProject: mathRandom(10),
        completedProject: mathRandom(10),
        reviewCount:mathRandom(30),
        language: ['ko', 'en'],
        rating: (Math.random() * 5).toFixed(1),
        imgSrc: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Y2wsfZsxGvVcQiCDdrfyt2nRkmGbLqb2ENww0FsgkimABSoE`,
        accessKey: `j3k46kj6kj34kj57k4j5746`
      }, {
        name: 'john5',
        country: 'Korea',
        watchingProject: mathRandom(10),
        dealProject: mathRandom(10),
        completedProject: mathRandom(10),
        reviewCount:mathRandom(30),
        language: ['ko', 'en'],
        rating: (Math.random() * 5).toFixed(1),
        imgSrc: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Y2wsfZsxGvVcQiCDdrfyt2nRkmGbLqb2ENww0FsgkimABSoE`,
        accessKey: `j3k46kj6kj34kj57k4j5746`
      }, {
        name: 'john6',
        country: 'Korea',
        watchingProject: mathRandom(10),
        dealProject: mathRandom(10),
        completedProject: mathRandom(10),
        reviewCount:mathRandom(30),
        language: ['ko', 'en'],
        rating: (Math.random() * 5).toFixed(1),
        imgSrc: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Y2wsfZsxGvVcQiCDdrfyt2nRkmGbLqb2ENww0FsgkimABSoE`,
        accessKey: `j3k46kj6kj34kj57k4j5746`
      }, {
        name: 'john7',
        country: 'Korea',
        watchingProject: mathRandom(10),
        dealProject: mathRandom(10),
        completedProject: mathRandom(10),
        reviewCount:mathRandom(30),
        language: ['ko', 'en'],
        rating: (Math.random() * 5).toFixed(1),
        imgSrc: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Y2wsfZsxGvVcQiCDdrfyt2nRkmGbLqb2ENww0FsgkimABSoE`,
        accessKey: `j3k46kj6kj34kj57k4j5746`
      }, {
        name: 'john8',
        country: 'Korea',
        watchingProject: mathRandom(10),
        dealProject: mathRandom(10),
        completedProject: mathRandom(10),
        reviewCount:mathRandom(30),
        language: ['ko', 'en'],
        rating: (Math.random() * 5).toFixed(1),
        imgSrc: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Y2wsfZsxGvVcQiCDdrfyt2nRkmGbLqb2ENww0FsgkimABSoE`,
        accessKey: `j3k46kj6kj34kj57k4j5746`
      }, {
        name: 'john8',
        country: 'Korea',
        watchingProject: mathRandom(10),
        dealProject: mathRandom(10),
        completedProject: mathRandom(10),
        reviewCount:mathRandom(30),
        language: ['ko', 'en'],
        rating: (Math.random() * 5).toFixed(1),
        imgSrc: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Y2wsfZsxGvVcQiCDdrfyt2nRkmGbLqb2ENww0FsgkimABSoE`,
        accessKey: `j3k46kj6kj34kj57k4j5746`
      }, {
        name: 'john8',
        country: 'Korea',
        watchingProject: mathRandom(10),
        dealProject: mathRandom(10),
        completedProject: mathRandom(10),
        reviewCount:mathRandom(30),
        language: ['ko', 'en'],
        rating: (Math.random() * 5).toFixed(1),
        imgSrc: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Y2wsfZsxGvVcQiCDdrfyt2nRkmGbLqb2ENww0FsgkimABSoE`,
        accessKey: `j3k46kj6kj34kj57k4j5746`
      }, {
        name: 'john8',
        country: 'Korea',
        watchingProject: mathRandom(10),
        dealProject: mathRandom(10),
        completedProject: mathRandom(10),
        reviewCount:mathRandom(30),
        language: ['ko', 'en'],
        rating: (Math.random() * 5).toFixed(1),
        imgSrc: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Y2wsfZsxGvVcQiCDdrfyt2nRkmGbLqb2ENww0FsgkimABSoE`,
        accessKey: `j3k46kj6kj34kj57k4j5746`
      }, {
        name: 'john8',
        country: 'Korea',
        watchingProject: mathRandom(10),
        dealProject: mathRandom(10),
        completedProject: mathRandom(10),
        reviewCount:mathRandom(30),
        language: ['ko', 'en'],
        rating: (Math.random() * 5).toFixed(1),
        imgSrc: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Y2wsfZsxGvVcQiCDdrfyt2nRkmGbLqb2ENww0FsgkimABSoE`,
        accessKey: `j3k46kj6kj34kj57k4j5746`
      },
    ]
  }, {
    type: "client",
    name: "Client",
    list: [{
        name: 'john1',
        country: 'Korea',
        watchingProject: mathRandom(10),
        dealProject: mathRandom(10),
        completedProject: mathRandom(10),
        reviewCount:mathRandom(30),
        language: ['ko', 'en','de','uk'],
        rating: (Math.random() * 5).toFixed(1),
        imgSrc: `https://t1.daumcdn.net/cfile/tistory/2424AD4054A8425E0B`,
        accessKey: `j3k46kj6kj34kj57k4j5746`
      },
      {
        name: 'john2',
        country: 'Korea',
        watchingProject: mathRandom(10),
        dealProject: mathRandom(10),
        completedProject: mathRandom(10),
        reviewCount:mathRandom(30),
        language: ['ko', 'en','cn'],
        rating: (Math.random() * 5).toFixed(1),
        imgSrc: `https://t1.daumcdn.net/cfile/tistory/2424AD4054A8425E0B`,
        accessKey: `j3k46kj6kj34kj57k4j5746`
      }, {
        name: 'john3',
        country: 'Korea',
        watchingProject: mathRandom(10),
        dealProject: mathRandom(10),
        completedProject: mathRandom(10),
        reviewCount:mathRandom(30),
        language: ['uk','ko', 'en','de'],
        rating: (Math.random() * 5).toFixed(1),
        imgSrc: `https://t1.daumcdn.net/cfile/tistory/2424AD4054A8425E0B`,
        accessKey: `j3k46kj6kj34kj57k4j5746`
      }, {
        name: 'john4',
        country: 'Korea',
        watchingProject: mathRandom(10),
        dealProject: mathRandom(10),
        completedProject: mathRandom(10),
        reviewCount:mathRandom(30),
        language: ['ko', 'en'],
        rating: (Math.random() * 5).toFixed(1),
        imgSrc: `https://t1.daumcdn.net/cfile/tistory/2424AD4054A8425E0B`,
        accessKey: `j3k46kj6kj34kj57k4j5746`
      }, {
        name: 'john5',
        country: 'Korea',
        watchingProject: mathRandom(10),
        dealProject: mathRandom(10),
        completedProject: mathRandom(10),
        reviewCount:mathRandom(30),
        language: ['ko', 'en'],
        rating: (Math.random() * 5).toFixed(1),
        imgSrc: `https://t1.daumcdn.net/cfile/tistory/2424AD4054A8425E0B`,
        accessKey: `j3k46kj6kj34kj57k4j5746`
      }, {
        name: 'john6',
        country: 'Korea',
        watchingProject: mathRandom(10),
        dealProject: mathRandom(10),
        completedProject: mathRandom(10),
        reviewCount:mathRandom(30),
        language: ['ko', 'en'],
        rating: (Math.random() * 5).toFixed(1),
        imgSrc: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Y2wsfZsxGvVcQiCDdrfyt2nRkmGbLqb2ENww0FsgkimABSoE`,
        accessKey: `j3k46kj6kj34kj57k4j5746`
      }, {
        name: 'john7',
        country: 'Korea',
        watchingProject: mathRandom(10),
        dealProject: mathRandom(10),
        completedProject: mathRandom(10),
        reviewCount:mathRandom(30),
        language: ['ko', 'en'],
        rating: (Math.random() * 5).toFixed(1),
        imgSrc: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Y2wsfZsxGvVcQiCDdrfyt2nRkmGbLqb2ENww0FsgkimABSoE`,
        accessKey: `j3k46kj6kj34kj57k4j5746`
      }, {
        name: 'john8',
        country: 'Korea',
        watchingProject: mathRandom(10),
        dealProject: mathRandom(10),
        completedProject: mathRandom(10),
        reviewCount:mathRandom(30),
        language: ['ko', 'en'],
        rating: (Math.random() * 5).toFixed(1),
        imgSrc: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Y2wsfZsxGvVcQiCDdrfyt2nRkmGbLqb2ENww0FsgkimABSoE`,
        accessKey: `j3k46kj6kj34kj57k4j5746`
      }, {
        name: 'john8',
        country: 'Korea',
        watchingProject: mathRandom(10),
        dealProject: mathRandom(10),
        completedProject: mathRandom(10),
        reviewCount:mathRandom(30),
        language: ['ko', 'en'],
        rating: (Math.random() * 5).toFixed(1),
        imgSrc: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Y2wsfZsxGvVcQiCDdrfyt2nRkmGbLqb2ENww0FsgkimABSoE`,
        accessKey: `j3k46kj6kj34kj57k4j5746`
      }, {
        name: 'john8',
        country: 'Korea',
        watchingProject: mathRandom(10),
        dealProject: mathRandom(10),
        completedProject: mathRandom(10),
        reviewCount:mathRandom(30),
        language: ['ko', 'en'],
        rating: (Math.random() * 5).toFixed(1),
        imgSrc: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Y2wsfZsxGvVcQiCDdrfyt2nRkmGbLqb2ENww0FsgkimABSoE`,
        accessKey: `j3k46kj6kj34kj57k4j5746`
      }, {
        name: 'john8',
        country: 'Korea',
        watchingProject: mathRandom(10),
        dealProject: mathRandom(10),
        completedProject: mathRandom(10),
        reviewCount:mathRandom(30),
        language: ['ko', 'en'],
        rating: (Math.random() * 5).toFixed(1),
        imgSrc: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Y2wsfZsxGvVcQiCDdrfyt2nRkmGbLqb2ENww0FsgkimABSoE`,
        accessKey: `j3k46kj6kj34kj57k4j5746`
      }, {
        name: 'john8',
        country: 'Korea',
        watchingProject: mathRandom(10),
        dealProject: mathRandom(10),
        completedProject: mathRandom(10),
        reviewCount:mathRandom(30),
        language: ['ko', 'en'],
        rating: (Math.random() * 5).toFixed(1),
        imgSrc: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Y2wsfZsxGvVcQiCDdrfyt2nRkmGbLqb2ENww0FsgkimABSoE`,
        accessKey: `j3k46kj6kj34kj57k4j5746`
      },
    ]
  },{
    type: "project",
    name: "Project",
    list: [{
        name: 'john1',
        country: 'Korea',
        watchingProject: mathRandom(10),
        dealProject: mathRandom(10),
        completedProject: mathRandom(10),
        reviewCount:mathRandom(30),
        language: ['de','cn','ko', 'en'],
        rating: (Math.random() * 5).toFixed(1),
        imgSrc: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Y2wsfZsxGvVcQiCDdrfyt2nRkmGbLqb2ENww0FsgkimABSoE`,
        accessKey: `j3k46kj6kj34kj57k4j5746`
      },
      {
        name: 'john2',
        country: 'Korea',
        watchingProject: mathRandom(10),
        dealProject: mathRandom(10),
        completedProject: mathRandom(10),
        reviewCount:mathRandom(30),
        language: ['ko', 'de'],
        rating: (Math.random() * 5).toFixed(1),
        imgSrc: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Y2wsfZsxGvVcQiCDdrfyt2nRkmGbLqb2ENww0FsgkimABSoE`,
        accessKey: `j3k46kj6kj34kj57k4j5746`
      }, {
        name: 'john3',
        country: 'Korea',
        watchingProject: mathRandom(10),
        dealProject: mathRandom(10),
        completedProject: mathRandom(10),
        reviewCount:mathRandom(30),
        language: ['ko', 'en'],
        rating: (Math.random() * 5).toFixed(1),
        imgSrc: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Y2wsfZsxGvVcQiCDdrfyt2nRkmGbLqb2ENww0FsgkimABSoE`,
        accessKey: `j3k46kj6kj34kj57k4j5746`
      }, {
        name: 'john4',
        country: 'Korea',
        watchingProject: mathRandom(10),
        dealProject: mathRandom(10),
        completedProject: mathRandom(10),
        reviewCount:mathRandom(30),
        language: ['ko', 'en'],
        rating: (Math.random() * 5).toFixed(1),
        imgSrc: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Y2wsfZsxGvVcQiCDdrfyt2nRkmGbLqb2ENww0FsgkimABSoE`,
        accessKey: `j3k46kj6kj34kj57k4j5746`
      }, {
        name: 'john5',
        country: 'Korea',
        watchingProject: mathRandom(10),
        dealProject: mathRandom(10),
        completedProject: mathRandom(10),
        reviewCount:mathRandom(30),
        language: ['ko', 'en'],
        rating: (Math.random() * 5).toFixed(1),
        imgSrc: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Y2wsfZsxGvVcQiCDdrfyt2nRkmGbLqb2ENww0FsgkimABSoE`,
        accessKey: `j3k46kj6kj34kj57k4j5746`
      }, {
        name: 'john6',
        country: 'Korea',
        watchingProject: mathRandom(10),
        dealProject: mathRandom(10),
        completedProject: mathRandom(10),
        reviewCount:mathRandom(30),
        language: ['ko', 'en'],
        rating: (Math.random() * 5).toFixed(1),
        imgSrc: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Y2wsfZsxGvVcQiCDdrfyt2nRkmGbLqb2ENww0FsgkimABSoE`,
        accessKey: `j3k46kj6kj34kj57k4j5746`
      }, {
        name: 'john7',
        country: 'Korea',
        watchingProject: mathRandom(10),
        dealProject: mathRandom(10),
        completedProject: mathRandom(10),
        reviewCount:mathRandom(30),
        language: ['ko', 'en'],
        rating: (Math.random() * 5).toFixed(1),
        imgSrc: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Y2wsfZsxGvVcQiCDdrfyt2nRkmGbLqb2ENww0FsgkimABSoE`,
        accessKey: `j3k46kj6kj34kj57k4j5746`
      }, {
        name: 'john8',
        country: 'Korea',
        watchingProject: mathRandom(10),
        dealProject: mathRandom(10),
        completedProject: mathRandom(10),
        reviewCount:mathRandom(30),
        language: ['ko', 'en'],
        rating: (Math.random() * 5).toFixed(1),
        imgSrc: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Y2wsfZsxGvVcQiCDdrfyt2nRkmGbLqb2ENww0FsgkimABSoE`,
        accessKey: `j3k46kj6kj34kj57k4j5746`
      }, {
        name: 'john8',
        country: 'Korea',
        watchingProject: mathRandom(10),
        dealProject: mathRandom(10),
        completedProject: mathRandom(10),
        reviewCount:mathRandom(30),
        language: ['ko', 'en'],
        rating: (Math.random() * 5).toFixed(1),
        imgSrc: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Y2wsfZsxGvVcQiCDdrfyt2nRkmGbLqb2ENww0FsgkimABSoE`,
        accessKey: `j3k46kj6kj34kj57k4j5746`
      }, {
        name: 'john8',
        country: 'Korea',
        watchingProject: mathRandom(10),
        dealProject: mathRandom(10),
        completedProject: mathRandom(10),
        reviewCount:mathRandom(30),
        language: ['ko', 'en'],
        rating: (Math.random() * 5).toFixed(1),
        imgSrc: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Y2wsfZsxGvVcQiCDdrfyt2nRkmGbLqb2ENww0FsgkimABSoE`,
        accessKey: `j3k46kj6kj34kj57k4j5746`
      }, {
        name: 'john8',
        country: 'Korea',
        watchingProject: mathRandom(10),
        dealProject: mathRandom(10),
        completedProject: mathRandom(10),
        reviewCount:mathRandom(30),
        language: ['ko', 'en'],
        rating: (Math.random() * 5).toFixed(1),
        imgSrc: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Y2wsfZsxGvVcQiCDdrfyt2nRkmGbLqb2ENww0FsgkimABSoE`,
        accessKey: `j3k46kj6kj34kj57k4j5746`
      }, {
        name: 'john8',
        country: 'Korea',
        watchingProject: mathRandom(10),
        dealProject: mathRandom(10),
        completedProject: mathRandom(10),
        reviewCount:mathRandom(30),
        language: ['ko', 'en'],
        rating: (Math.random() * 5).toFixed(1),
        imgSrc: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Y2wsfZsxGvVcQiCDdrfyt2nRkmGbLqb2ENww0FsgkimABSoE`,
        accessKey: `j3k46kj6kj34kj57k4j5746`
      },
    ]
  }]
}

exports.usersList = [{
  type: "designer",
  name: "Designer",
  list: [{
      name: 'john1',
      country: 'Korea',
      watchingProject: mathRandom(10),
      dealProject: mathRandom(10),
      completedProject: mathRandom(10),
      reviewCount:mathRandom(30),
      language: ['de','cn','ko', 'en'],
      rating: (Math.random() * 5).toFixed(1),
      imgSrc: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Y2wsfZsxGvVcQiCDdrfyt2nRkmGbLqb2ENww0FsgkimABSoE`,
      accessKey: `j3k46kj6kj34kj57k4j5746`
    },
    {
      name: 'john2',
      country: 'Korea',
      watchingProject: mathRandom(10),
      dealProject: mathRandom(10),
      completedProject: mathRandom(10),
      reviewCount:mathRandom(30),
      language: ['ko', 'de'],
      rating: (Math.random() * 5).toFixed(1),
      imgSrc: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Y2wsfZsxGvVcQiCDdrfyt2nRkmGbLqb2ENww0FsgkimABSoE`,
      accessKey: `j3k46kj6kj34kj57k4j5746`
    }, {
      name: 'john3',
      country: 'Korea',
      watchingProject: mathRandom(10),
      dealProject: mathRandom(10),
      completedProject: mathRandom(10),
      reviewCount:mathRandom(30),
      language: ['ko', 'en'],
      rating: (Math.random() * 5).toFixed(1),
      imgSrc: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Y2wsfZsxGvVcQiCDdrfyt2nRkmGbLqb2ENww0FsgkimABSoE`,
      accessKey: `j3k46kj6kj34kj57k4j5746`
    }, {
      name: 'john4',
      country: 'Korea',
      watchingProject: mathRandom(10),
      dealProject: mathRandom(10),
      completedProject: mathRandom(10),
      reviewCount:mathRandom(30),
      language: ['ko', 'en'],
      rating: (Math.random() * 5).toFixed(1),
      imgSrc: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Y2wsfZsxGvVcQiCDdrfyt2nRkmGbLqb2ENww0FsgkimABSoE`,
      accessKey: `j3k46kj6kj34kj57k4j5746`
    }, {
      name: 'john5',
      country: 'Korea',
      watchingProject: mathRandom(10),
      dealProject: mathRandom(10),
      completedProject: mathRandom(10),
      reviewCount:mathRandom(30),
      language: ['ko', 'en'],
      rating: (Math.random() * 5).toFixed(1),
      imgSrc: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Y2wsfZsxGvVcQiCDdrfyt2nRkmGbLqb2ENww0FsgkimABSoE`,
      accessKey: `j3k46kj6kj34kj57k4j5746`
    }, {
      name: 'john6',
      country: 'Korea',
      watchingProject: mathRandom(10),
      dealProject: mathRandom(10),
      completedProject: mathRandom(10),
      reviewCount:mathRandom(30),
      language: ['ko', 'en'],
      rating: (Math.random() * 5).toFixed(1),
      imgSrc: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Y2wsfZsxGvVcQiCDdrfyt2nRkmGbLqb2ENww0FsgkimABSoE`,
      accessKey: `j3k46kj6kj34kj57k4j5746`
    }, {
      name: 'john7',
      country: 'Korea',
      watchingProject: mathRandom(10),
      dealProject: mathRandom(10),
      completedProject: mathRandom(10),
      reviewCount:mathRandom(30),
      language: ['ko', 'en'],
      rating: (Math.random() * 5).toFixed(1),
      imgSrc: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Y2wsfZsxGvVcQiCDdrfyt2nRkmGbLqb2ENww0FsgkimABSoE`,
      accessKey: `j3k46kj6kj34kj57k4j5746`
    }, {
      name: 'john8',
      country: 'Korea',
      watchingProject: mathRandom(10),
      dealProject: mathRandom(10),
      completedProject: mathRandom(10),
      reviewCount:mathRandom(30),
      language: ['ko', 'en'],
      rating: (Math.random() * 5).toFixed(1),
      imgSrc: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Y2wsfZsxGvVcQiCDdrfyt2nRkmGbLqb2ENww0FsgkimABSoE`,
      accessKey: `j3k46kj6kj34kj57k4j5746`
    }, {
      name: 'john8',
      country: 'Korea',
      watchingProject: mathRandom(10),
      dealProject: mathRandom(10),
      completedProject: mathRandom(10),
      reviewCount:mathRandom(30),
      language: ['ko', 'en'],
      rating: (Math.random() * 5).toFixed(1),
      imgSrc: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Y2wsfZsxGvVcQiCDdrfyt2nRkmGbLqb2ENww0FsgkimABSoE`,
      accessKey: `j3k46kj6kj34kj57k4j5746`
    }, {
      name: 'john8',
      country: 'Korea',
      watchingProject: mathRandom(10),
      dealProject: mathRandom(10),
      completedProject: mathRandom(10),
      reviewCount:mathRandom(30),
      language: ['ko', 'en'],
      rating: (Math.random() * 5).toFixed(1),
      imgSrc: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Y2wsfZsxGvVcQiCDdrfyt2nRkmGbLqb2ENww0FsgkimABSoE`,
      accessKey: `j3k46kj6kj34kj57k4j5746`
    }, {
      name: 'john8',
      country: 'Korea',
      watchingProject: mathRandom(10),
      dealProject: mathRandom(10),
      completedProject: mathRandom(10),
      reviewCount:mathRandom(30),
      language: ['ko', 'en'],
      rating: (Math.random() * 5).toFixed(1),
      imgSrc: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Y2wsfZsxGvVcQiCDdrfyt2nRkmGbLqb2ENww0FsgkimABSoE`,
      accessKey: `j3k46kj6kj34kj57k4j5746`
    }, {
      name: 'john8',
      country: 'Korea',
      watchingProject: mathRandom(10),
      dealProject: mathRandom(10),
      completedProject: mathRandom(10),
      reviewCount:mathRandom(30),
      language: ['ko', 'en'],
      rating: (Math.random() * 5).toFixed(1),
      imgSrc: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Y2wsfZsxGvVcQiCDdrfyt2nRkmGbLqb2ENww0FsgkimABSoE`,
      accessKey: `j3k46kj6kj34kj57k4j5746`
    },
  ]
}, {
  type: "client",
  name: "Client",
  list: [{
      name: 'john1',
      country: 'Korea',
      watchingProject: mathRandom(10),
      dealProject: mathRandom(10),
      completedProject: mathRandom(10),
      reviewCount:mathRandom(30),
      language: ['ko', 'en','de','uk'],
      rating: (Math.random() * 5).toFixed(1),
      imgSrc: `https://t1.daumcdn.net/cfile/tistory/2424AD4054A8425E0B`,
      accessKey: `j3k46kj6kj34kj57k4j5746`
    },
    {
      name: 'john2',
      country: 'Korea',
      watchingProject: mathRandom(10),
      dealProject: mathRandom(10),
      completedProject: mathRandom(10),
      reviewCount:mathRandom(30),
      language: ['ko', 'en','cn'],
      rating: (Math.random() * 5).toFixed(1),
      imgSrc: `https://t1.daumcdn.net/cfile/tistory/2424AD4054A8425E0B`,
      accessKey: `j3k46kj6kj34kj57k4j5746`
    }, {
      name: 'john3',
      country: 'Korea',
      watchingProject: mathRandom(10),
      dealProject: mathRandom(10),
      completedProject: mathRandom(10),
      reviewCount:mathRandom(30),
      language: ['uk','ko', 'en','de'],
      rating: (Math.random() * 5).toFixed(1),
      imgSrc: `https://t1.daumcdn.net/cfile/tistory/2424AD4054A8425E0B`,
      accessKey: `j3k46kj6kj34kj57k4j5746`
    }, {
      name: 'john4',
      country: 'Korea',
      watchingProject: mathRandom(10),
      dealProject: mathRandom(10),
      completedProject: mathRandom(10),
      reviewCount:mathRandom(30),
      language: ['ko', 'en'],
      rating: (Math.random() * 5).toFixed(1),
      imgSrc: `https://t1.daumcdn.net/cfile/tistory/2424AD4054A8425E0B`,
      accessKey: `j3k46kj6kj34kj57k4j5746`
    }, {
      name: 'john5',
      country: 'Korea',
      watchingProject: mathRandom(10),
      dealProject: mathRandom(10),
      completedProject: mathRandom(10),
      reviewCount:mathRandom(30),
      language: ['ko', 'en'],
      rating: (Math.random() * 5).toFixed(1),
      imgSrc: `https://t1.daumcdn.net/cfile/tistory/2424AD4054A8425E0B`,
      accessKey: `j3k46kj6kj34kj57k4j5746`
    }, {
      name: 'john6',
      country: 'Korea',
      watchingProject: mathRandom(10),
      dealProject: mathRandom(10),
      completedProject: mathRandom(10),
      reviewCount:mathRandom(30),
      language: ['ko', 'en'],
      rating: (Math.random() * 5).toFixed(1),
      imgSrc: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Y2wsfZsxGvVcQiCDdrfyt2nRkmGbLqb2ENww0FsgkimABSoE`,
      accessKey: `j3k46kj6kj34kj57k4j5746`
    }, {
      name: 'john7',
      country: 'Korea',
      watchingProject: mathRandom(10),
      dealProject: mathRandom(10),
      completedProject: mathRandom(10),
      reviewCount:mathRandom(30),
      language: ['ko', 'en'],
      rating: (Math.random() * 5).toFixed(1),
      imgSrc: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Y2wsfZsxGvVcQiCDdrfyt2nRkmGbLqb2ENww0FsgkimABSoE`,
      accessKey: `j3k46kj6kj34kj57k4j5746`
    }, {
      name: 'john8',
      country: 'Korea',
      watchingProject: mathRandom(10),
      dealProject: mathRandom(10),
      completedProject: mathRandom(10),
      reviewCount:mathRandom(30),
      language: ['ko', 'en'],
      rating: (Math.random() * 5).toFixed(1),
      imgSrc: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Y2wsfZsxGvVcQiCDdrfyt2nRkmGbLqb2ENww0FsgkimABSoE`,
      accessKey: `j3k46kj6kj34kj57k4j5746`
    }, {
      name: 'john8',
      country: 'Korea',
      watchingProject: mathRandom(10),
      dealProject: mathRandom(10),
      completedProject: mathRandom(10),
      reviewCount:mathRandom(30),
      language: ['ko', 'en'],
      rating: (Math.random() * 5).toFixed(1),
      imgSrc: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Y2wsfZsxGvVcQiCDdrfyt2nRkmGbLqb2ENww0FsgkimABSoE`,
      accessKey: `j3k46kj6kj34kj57k4j5746`
    }, {
      name: 'john8',
      country: 'Korea',
      watchingProject: mathRandom(10),
      dealProject: mathRandom(10),
      completedProject: mathRandom(10),
      reviewCount:mathRandom(30),
      language: ['ko', 'en'],
      rating: (Math.random() * 5).toFixed(1),
      imgSrc: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Y2wsfZsxGvVcQiCDdrfyt2nRkmGbLqb2ENww0FsgkimABSoE`,
      accessKey: `j3k46kj6kj34kj57k4j5746`
    }, {
      name: 'john8',
      country: 'Korea',
      watchingProject: mathRandom(10),
      dealProject: mathRandom(10),
      completedProject: mathRandom(10),
      reviewCount:mathRandom(30),
      language: ['ko', 'en'],
      rating: (Math.random() * 5).toFixed(1),
      imgSrc: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Y2wsfZsxGvVcQiCDdrfyt2nRkmGbLqb2ENww0FsgkimABSoE`,
      accessKey: `j3k46kj6kj34kj57k4j5746`
    }, {
      name: 'john8',
      country: 'Korea',
      watchingProject: mathRandom(10),
      dealProject: mathRandom(10),
      completedProject: mathRandom(10),
      reviewCount:mathRandom(30),
      language: ['ko', 'en'],
      rating: (Math.random() * 5).toFixed(1),
      imgSrc: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Y2wsfZsxGvVcQiCDdrfyt2nRkmGbLqb2ENww0FsgkimABSoE`,
      accessKey: `j3k46kj6kj34kj57k4j5746`
    },
  ]
},{
  type: "project",
  name: "Project",
  list: [{
      name: 'john1',
      country: 'Korea',
      watchingProject: mathRandom(10),
      dealProject: mathRandom(10),
      completedProject: mathRandom(10),
      reviewCount:mathRandom(30),
      language: ['de','cn','ko', 'en'],
      rating: (Math.random() * 5).toFixed(1),
      imgSrc: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Y2wsfZsxGvVcQiCDdrfyt2nRkmGbLqb2ENww0FsgkimABSoE`,
      accessKey: `j3k46kj6kj34kj57k4j5746`
    },
    {
      name: 'john2',
      country: 'Korea',
      watchingProject: mathRandom(10),
      dealProject: mathRandom(10),
      completedProject: mathRandom(10),
      reviewCount:mathRandom(30),
      language: ['ko', 'de'],
      rating: (Math.random() * 5).toFixed(1),
      imgSrc: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Y2wsfZsxGvVcQiCDdrfyt2nRkmGbLqb2ENww0FsgkimABSoE`,
      accessKey: `j3k46kj6kj34kj57k4j5746`
    }, {
      name: 'john3',
      country: 'Korea',
      watchingProject: mathRandom(10),
      dealProject: mathRandom(10),
      completedProject: mathRandom(10),
      reviewCount:mathRandom(30),
      language: ['ko', 'en'],
      rating: (Math.random() * 5).toFixed(1),
      imgSrc: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Y2wsfZsxGvVcQiCDdrfyt2nRkmGbLqb2ENww0FsgkimABSoE`,
      accessKey: `j3k46kj6kj34kj57k4j5746`
    }, {
      name: 'john4',
      country: 'Korea',
      watchingProject: mathRandom(10),
      dealProject: mathRandom(10),
      completedProject: mathRandom(10),
      reviewCount:mathRandom(30),
      language: ['ko', 'en'],
      rating: (Math.random() * 5).toFixed(1),
      imgSrc: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Y2wsfZsxGvVcQiCDdrfyt2nRkmGbLqb2ENww0FsgkimABSoE`,
      accessKey: `j3k46kj6kj34kj57k4j5746`
    }, {
      name: 'john5',
      country: 'Korea',
      watchingProject: mathRandom(10),
      dealProject: mathRandom(10),
      completedProject: mathRandom(10),
      reviewCount:mathRandom(30),
      language: ['ko', 'en'],
      rating: (Math.random() * 5).toFixed(1),
      imgSrc: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Y2wsfZsxGvVcQiCDdrfyt2nRkmGbLqb2ENww0FsgkimABSoE`,
      accessKey: `j3k46kj6kj34kj57k4j5746`
    }, {
      name: 'john6',
      country: 'Korea',
      watchingProject: mathRandom(10),
      dealProject: mathRandom(10),
      completedProject: mathRandom(10),
      reviewCount:mathRandom(30),
      language: ['ko', 'en'],
      rating: (Math.random() * 5).toFixed(1),
      imgSrc: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Y2wsfZsxGvVcQiCDdrfyt2nRkmGbLqb2ENww0FsgkimABSoE`,
      accessKey: `j3k46kj6kj34kj57k4j5746`
    }, {
      name: 'john7',
      country: 'Korea',
      watchingProject: mathRandom(10),
      dealProject: mathRandom(10),
      completedProject: mathRandom(10),
      reviewCount:mathRandom(30),
      language: ['ko', 'en'],
      rating: (Math.random() * 5).toFixed(1),
      imgSrc: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Y2wsfZsxGvVcQiCDdrfyt2nRkmGbLqb2ENww0FsgkimABSoE`,
      accessKey: `j3k46kj6kj34kj57k4j5746`
    }, {
      name: 'john8',
      country: 'Korea',
      watchingProject: mathRandom(10),
      dealProject: mathRandom(10),
      completedProject: mathRandom(10),
      reviewCount:mathRandom(30),
      language: ['ko', 'en'],
      rating: (Math.random() * 5).toFixed(1),
      imgSrc: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Y2wsfZsxGvVcQiCDdrfyt2nRkmGbLqb2ENww0FsgkimABSoE`,
      accessKey: `j3k46kj6kj34kj57k4j5746`
    }, {
      name: 'john8',
      country: 'Korea',
      watchingProject: mathRandom(10),
      dealProject: mathRandom(10),
      completedProject: mathRandom(10),
      reviewCount:mathRandom(30),
      language: ['ko', 'en'],
      rating: (Math.random() * 5).toFixed(1),
      imgSrc: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Y2wsfZsxGvVcQiCDdrfyt2nRkmGbLqb2ENww0FsgkimABSoE`,
      accessKey: `j3k46kj6kj34kj57k4j5746`
    }, {
      name: 'john8',
      country: 'Korea',
      watchingProject: mathRandom(10),
      dealProject: mathRandom(10),
      completedProject: mathRandom(10),
      reviewCount:mathRandom(30),
      language: ['ko', 'en'],
      rating: (Math.random() * 5).toFixed(1),
      imgSrc: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Y2wsfZsxGvVcQiCDdrfyt2nRkmGbLqb2ENww0FsgkimABSoE`,
      accessKey: `j3k46kj6kj34kj57k4j5746`
    }, {
      name: 'john8',
      country: 'Korea',
      watchingProject: mathRandom(10),
      dealProject: mathRandom(10),
      completedProject: mathRandom(10),
      reviewCount:mathRandom(30),
      language: ['ko', 'en'],
      rating: (Math.random() * 5).toFixed(1),
      imgSrc: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Y2wsfZsxGvVcQiCDdrfyt2nRkmGbLqb2ENww0FsgkimABSoE`,
      accessKey: `j3k46kj6kj34kj57k4j5746`
    }, {
      name: 'john8',
      country: 'Korea',
      watchingProject: mathRandom(10),
      dealProject: mathRandom(10),
      completedProject: mathRandom(10),
      reviewCount:mathRandom(30),
      language: ['ko', 'en'],
      rating: (Math.random() * 5).toFixed(1),
      imgSrc: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Y2wsfZsxGvVcQiCDdrfyt2nRkmGbLqb2ENww0FsgkimABSoE`,
      accessKey: `j3k46kj6kj34kj57k4j5746`
    },
  ]
}]

// about page
exports.about = [

]
// about page

// price page
exports.membership = [{
    level: 'Permium',
    image: "/img/price/premium_icon.png",
    description: `description111`,
    subDescription: `description111-11`,
    dollarPrice: 40,
    ahref: "/test",
    feature: [
      ['description1', 'description2'],
      ['description1', 'description2'],
      ['description1', 'description2'],
    ]
  },
  {
    level: 'Gold',
    image: "/img/price/gold_icon.png",
    description: `description222`,
    subDescription: `description111-11`,
    dollarPrice: 30,
    ahref: "/test",
    feature: [
      ['description1', 'description2'],
      ['description1', 'description2'],
      ['description1', 'description2'],
    ]
  },
  {
    level: 'Silver',
    image: "/img/price/silver_icon.png",
    description: `description333`,
    subDescription: `description111-11`,
    dollarPrice: 20,
    ahref: "/test",
    feature: [
      ['description1', 'description2'],
      ['description1', 'description2'],
      ['description1', 'description2'],
    ]
  },
  {
    level: 'Bronze',
    image: "/img/price/bronze_icon.png",
    description: `description444`,
    subDescription: `description111-11`,
    dollarPrice: 10,
    ahref: "/test",
    feature: [
      ['description1', 'descr235235iption2'],
      ['description1', 'description2'],
      ['description1', 'description2'],
    ]
  },
  {
    level: 'Indivisual',
    image: "/img/price/indivisual_icon.png",
    description: `description555`,
    subDescription: `description111-11`,
    dollarPrice: "Free",
    ahref: "/test",
    feature: [
      ['description1', 'description2'],
      ['description1', 'description2'],
      ['description1', 'description2'],
    ]
  }
]

exports.faqList = [{
    qustion: `Can I try dofBridge Service for free ?`,
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing
    incididunt ut labore et dolore magna aliqua.
    Quis ipsum suspendisse ultrices gravida.Lorem ipsum dolor sit amet, consectetur adipiscing
    incididunt ut labore et dolore magna aliqua.
    Quis ipsum suspendisse ultrices gravida`,
  },
  {
    qustion: `What is a dofBridge user ? `,
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing
    incididunt ut labore et dolore magna aliqua.
    Quis ipsum suspendisse ultrices gravidaLorem ipsum dolor sit amet, consectetur adipiscing
    incididunt ut labore et dolore magna aliqua.
    Quis ipsum suspendisse ultrices gravida`,
  },
  {
    qustion: `Can I try dofBridge Service for free ? `,
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing
    incididunt ut labore et dolore magna aliqua.
    Quis ipsum suspendisse ultrices gravidaLorem ipsum dolor sit amet, consectetur adipiscing
    incididunt ut labore et dolore magna aliqua.
    Quis ipsum suspendisse ultrices gravida`,
  },
  {
    qustion: `Can I try dofBridge Service for free ? `,
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing
    incididunt ut labore et dolore magna aliqua.
    Quis ipsum suspendisse ultrices gravidaLorem ipsum dolor sit amet, consectetur adipiscing
    incididunt ut labore et dolore magna aliqua.
    Quis ipsum suspendisse ultrices gravida`,
  },
  {
    qustion: `Can I try dofBridge Service for free ? `,
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing
    incididunt ut labore et dolore magna aliqua.
    Quis ipsum suspendisse ultrices gravidaLorem ipsum dolor sit amet, consectetur adipiscing
    incididunt ut labore et dolore magna aliqua.
    Quis ipsum suspendisse ultrices gravida`,
  },
];
// price page



// detail page
exports.infoDetail = [
  {
    type:"client",
    token:"1241efhfh25RGWRWG@#$G#$G",
    username:"Chris Evans",
    profileImg:"/dist/assets/img/common/default_profile_img.png",
    country:"ko",
    lang:["ko",'en'],
    rating:3.4,
    seq:245,
    certifications:[
      {
        image:"https://t1.daumcdn.net/cfile/tistory/257F443B57689AAB2D",
        title:"s01",
        href:"www.naver.com",
        id:1,
        text:"Portpolio 1 Contents Text"
      },{
        image:"http://cfile228.uf.daum.net/image/230E464F528D77082794C5",
        title:"s02",
        href:"www.naver.com",
        id:2,
        text:"Portpolio 2 Contents Text"
      },{
        image:"https://t1.daumcdn.net/cfile/tistory/257F443B57689AAB2D",
        title:"s03",
        href:"www.naver.com",
        id:3,
        text:"Portpolio 3 Contents Text"
      },{
        image:"http://cfile230.uf.daum.net/image/160853414FB1ADF5075FDD",
        title:"s04",
        href:"www.naver.com",
        id:4,
        text:"Portpolio 4 Contents Text"
      },{
        image:"https://t1.daumcdn.net/cfile/tistory/1157771449B8D7D8B9",
        title:"s05",
        href:"www.naver.com",
        id:5,
        text:"Portpolio 5 Contents Text"
      },{
        image:"https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F175031174CCE98C606",
        title:"s06",
        href:"www.naver.com",
        id:6,
        text:"Portpolio 6\n Contents Text Hello testing \n World"
      },
    ],
    review:[
      {
        name:"John",
        profileImg:"https://cdn.icon-icons.com/icons2/884/PNG/512/person_3_icon-icons.com_68899.png",
        rating:4.5,
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ",
        date:"2019-06-05"
      },
      {
        name:"Nicky",
        rating:3.6,
        profileImg:"http://www.urbanbrush.net/web/wp-content/uploads/edd/2019/03/urbanbrush-20190321094050701108.png",
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.  ",
        date:"2019-06-06"
      },
      {
        name:"Jackson",
        rating:4.2,
        profileImg:"https://cdn.icon-icons.com/icons2/884/PNG/512/person_3_icon-icons.com_68899.png",
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ",
        date:"2019-06-14"
      },
      {
        name:"Elie",
        rating:4.2,
        profileImg:"http://cdnweb01.wikitree.co.kr/webdata/editor/201802/28/img_20180228103322_57c8f72f.jpg",
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ",
        date:"2019-06-14"
      }
    ]

  },
  {
    type:"designer",
    token:"1241efhfh25RGWRWG@#$G#$G",
    username:"Chris Evans",
    profileImg:"/dist/assets/img/common/default_profile_img.png",
    country:"ko",
    lang:["ko",'en'],
    rating:3.4,
    seq:245,
    certifications:[
      {
        image:"https://t1.daumcdn.net/cfile/tistory/257F443B57689AAB2D",
        title:"s01",
        href:"www.naver.com",
        id:1,
        text:"Portpolio 1 Contents Text"
      },{
        image:"http://cfile228.uf.daum.net/image/230E464F528D77082794C5",
        title:"s02",
        href:"www.naver.com",
        id:2,
        text:"Portpolio 2 Contents Text"
      },{
        image:"https://t1.daumcdn.net/cfile/tistory/257F443B57689AAB2D",
        title:"s03",
        href:"www.naver.com",
        id:3,
        text:"Portpolio 3 Contents Text"
      },{
        image:"http://cfile230.uf.daum.net/image/160853414FB1ADF5075FDD",
        title:"s04",
        href:"www.naver.com",
        id:4,
        text:"Portpolio 4 Contents Text"
      },{
        image:"https://t1.daumcdn.net/cfile/tistory/1157771449B8D7D8B9",
        title:"s05",
        href:"www.naver.com",
        id:5,
        text:"Portpolio 5 Contents Text"
      },{
        image:"https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F175031174CCE98C606",
        title:"s06",
        href:"www.naver.com",
        id:6,
        text:"Portpolio 6\n Contents Text Hello testing \n World"
      },
    ],
    review:[
      {
        name:"John",
        profileImg:"http://www.urbanbrush.net/web/wp-content/uploads/edd/2019/03/urbanbrush-20190321094050701108.png",
        rating:4.5,
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ",
        date:"2019-06-05"
      },
      {
        name:"Nicky",
        rating:3.6,
        profileImg:"http://www.urbanbrush.net/web/wp-content/uploads/edd/2019/03/urbanbrush-20190321094050701108.png",
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.  ",
        date:"2019-06-06"
      },
      {
        name:"Jackson",
        rating:4.2,
        profileImg:"http://www.urbanbrush.net/web/wp-content/uploads/edd/2019/03/urbanbrush-20190321094050701108.png",
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ",
        date:"2019-06-14"
      },
      {
        name:"Elie",
        rating:4.2,
        profileImg:"http://cdnweb01.wikitree.co.kr/webdata/editor/201802/28/img_20180228103322_57c8f72f.jpg",
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ",
        date:"2019-06-14"
      }
    ]

  },
]


// detail page

exports.pageInfo = function(req,data,type){
  let body  = {},usersList,projectList;
  if(type =="user"){
    usersList= (req.params.kind === 'client')?data[1]:data[0];
    body.usersList = usersList;
  }else{
    projectList = data[2];
    body.projectList = projectList;
  }
  // var pageNation = {
  //   starPageNum:1,
  //   endPageNum:10,
  //   curPage:1,
  //   pageListSize:5,
  //   firstPage:0,
  //   lastPage:105,
  //   curPageSet:1,
  //   prevPageSet:0,
  //   nextPageSet:2,
  //   totalPageSet:20,
  //   totalPageCount:100,
  // }

  var pageNation = {
    startPage: 1,
    endPage: 10,
    page: 1,
    pageSet: 1,
    totalPageSet: 2,
    totalPage: 201,
}


  body.pageNation = pageNation;
  body.pageNation.curPage = req.params.page;
  return body;
}


exports.mypage = [
  
]



exports.indexPlayer = indexPlayer;
exports.usersList = usersList;



// real
exports.indexInfo             = indexInfo;
exports.userListInfo          = userListInfo;
exports.projectListInfo       = projectListInfo;
exports.userInfoDetailProject = userInfoDetailProject;
exports.mypageMessage         = mypageMessage;
