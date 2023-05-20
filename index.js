const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/mongo-exercises')
	.then(() => console.log('Connected to MongoDB'))
	.catch(err => console.log('Error Connecting',err))

const courseSchema = new mongoose.Schema({
	tags: [String],
	date: {type: Date, default: Date.now},
	name: String ,
	author: String ,
	isPublished: Boolean,
	price: Number,

})

const Courses = mongoose.model("Course", courseSchema);

async function getCourses(){
const courses = await Courses
.find({ isPublished: true, tags: 'backend' })
.sort({name: 1}) // name -name alternatives
.select({name: 1, author: 1}) // ( 'name author')

console.log(courses);
}

/*
Exercise 2 solution
async function getCourses(){
const courses = await Courses
.find({ isPublished: true, tags:{ $in: [ 'frontend' , 'backend']} })
// .or([{tags: 'frontend'},{tags: 'backend'}])
.sort({price: -1}) // name -name alternatives
.select({name: 1, author: 1, price: 1}) // ( 'name author')

console.log(courses);
} */

/*
Exercise 3 solution

async function getCourses(){
const courses = await Courses
.find({ isPublished: true })
*/
//.or([{ price: {$gte: 15} },	{ name: /.*by.*/i }])
/*
.sort({name: 1}) // name -name alternatives
.select({name: 1, author: 1, price: 1}) // ( 'name author')

console.log(courses);
}
*/

getCourses();

// async function run(){ const courses = await getCourses; console.log(courses) }