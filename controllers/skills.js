const skills = require('../models/skills');

function index(req, res) {
    res.render('skills/index', {
      skills: skills.getAll()
    });
  }

  function newSkill (req, res){
      res.render('skills/new')
  }

  function create (req, res){
      skills.create(req.body)
      res.redirect('/skills')
  }
// router.get('/:id', todosCtrl.show);
//   function show(req, res){
//       res.render('skills/show', {
//         skill: skill.getOne(req.params.id),
//         todoNum: Todo.getAll().Index(todo => todo.id === parseInt(req.params.id))
//       })
//   }


function deleteSkill(req, res){
  skills.deleteOne(req.params.id)
  res.redirect('/skills')
}

  module.exports = {
      index,
      new: newSkill,
      create,
      delete: deleteSkill,
    //   show,

  }
