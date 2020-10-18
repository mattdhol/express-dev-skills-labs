

const skills = [
    {id: 125223, skill: 'JavaScript', done: false},
    {id: 127904, skill: 'CSS', done: true},
    {id: 139608, skill: 'HTML', done: true}
  ];
  
  function getAll() {
    return skills;
  }


  function create(skill) {
    skill.id = Date.now() % 100000
    skill.done = false;
    skills.push(skill)
    console.log(skill)
  }

  function getOne(id){
    //use the array.prototype.find iterator method
    return skills.find(skill => skill.id === parseInt(id))
  }
  
function deleteOne(id){
  const idx = skills.findIndex(skill => skill.id === parseInt(id))
  skills.splice(idx, 1)
}

  module.exports = {
    getAll,
    create,
    getOne,
    deleteOne,
  };
  