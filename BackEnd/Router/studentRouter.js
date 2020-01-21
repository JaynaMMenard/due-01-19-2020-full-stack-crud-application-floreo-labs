const express = require('express');
const router1 = express.Router();
const Campus = require('../Database/Models/Campuses');
const Student = require('../Database/Models/Students');


router1.get('/', (req,res) =>{
	Student.findAll({ include: [Campus] }) 
	.then(students => res.status(200).json(students))
	.catch(err => console.log(err))
})


router1.get('/:id', async (req,res) =>{
	await Student.findByPk(req.params.id)
	.then(student=> {
		if(student != null)
		{
			res.status(200).send(student);
		}
		else
		{
			res.status(404).send();
		}
	})
})


router1.post('/', async (req,res)=>{
	let data = req.body;
	let builtStudent =await Student.create({
		name: data.name,
        img: data.img,
        gpa: data.gpa
	});
	await builtStudent.setCampus(data.campus);
	console.log('User added');

	Student.findAll({ include: [Campus] }) 
	.then(students => res.status(201).json(students))
})


router1.put('/:id', async(req,res)=>{
	await Student.findByPk(req.params.id)
	.then(async student=> {
		if(student != null)
		{
			let data = req.body;
			let cam;
			if(data.campus != null){
				cam = await Campus.findByPk(data.campus);
			}
			else
			{
				cam = {};
			}
			await Student.update(	
				{
					name: data.name,
					img: data.img,
					gpa: data.gpa,
					campusId: data.campus,
					campus: cam
				},
				{where: { id: req.params.id}}	 	
			)
				
			console.log("entry has been upddated");
			await Student.findAll({ include: [Campus] })
			.then(students => res.status(201).json(students))
			.catch(err => console.log(err))
		}
		else
		{
			let data = req.body;
			let builtStudent = await Student.create({
				name: data.name,
				img: data.img,
				gpa: data.gpa 
			});
			await builtStudent.setCampus(data.campus);
			console.log('User added');

			Student.findAll({ include: [Campus] }) 
			.then(students => res.status(201).json(students))
		}
	})
})


router1.delete('/:id', async (req,res)=>{
	await Student.findByPk(req.params.id)
	.then(async student=> {
		if(student != null)
		{
			await Student.destroy({ where: {id : req.params.id}});
			console.log("entry DESTORYED");

			await Student.findAll({ include: [Campus] })
			.then(students => res.status(201).json(students))
			.catch(err => console.log(err))
		}
		else
		{
			res.status(404).send();
		}
	})
	
})

module.exports = router1;