const fs = require('fs')

//write.json

const obj = {
    course: 'nodeJS',
    sprints: 12,
    tasks: 34,
    active2: true,
    course2: 'nodeJS',
    sprints2: 12,
    tasks2: 34,
    active3: true,
    course4: 'nodeJS',
    sprints5: 12,
    task5s: 34,
    actfive: true,
    ge: {
        f: [1, 2, 4],
    },
}

const myObj = JSON.stringify(obj)

fs.writeFileSync('./j1.json', myObj, { encoding: 'utf-8', flag: 'w' })
