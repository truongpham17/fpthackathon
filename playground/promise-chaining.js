require('../src/db/mongoose')
const Task = require('../src/models/task')
const User = require('../src/models/user')

// Task.findByIdAndDelete('5d46b9949874312cb8b3b787').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then(result => {
//     console.log(result)
// }).catch(e => {
//     console.log(e)
// })

// const updateAgeAndCount = async (id, age) => {
//     const user = await User.findByIdAndUpdate(id, { age })
//     const count = await User.countDocuments({ age })
//     return count
// }

// updateAgeAndCount("5d46c0367d6a690384d3a9c4", 2)
//     .then(count => console.log(count))
//     .catch(e => console.log(e))

const deleteTaskAndCount = async (id) => {
    const task = Task.findByIdAndDelete(id)
    const count = Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('5d46b9949874312cb8b3b787')
    .then(count => console.log(count))
    .catch(e => console.log(e))