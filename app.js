
const inputElemet = document.getElementById('title')
const createBtn = document.getElementById('create')
const listElemet = document.getElementById('list')
const now = new Date()
const t = now.toLocaleDateString()

const notes = []

function render() {
  listElemet.innerHTML = ''
  if (notes.length === 0){
    listElemet.innerHTML = '<p>Нету заметок :)</p.'
  }
  for (let i = 0; i < notes.length; i++) {
    listElemet.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i], i))
    }

}
render()

createBtn.onclick = function () {
  if (inputElemet.value === '') {
    return
  }
  const newNote = {
    title: t + '         ' + inputElemet.value,
    complited: false,
  }
  notes.push(newNote)
  render()
  inputElemet.value = ''
}

listElemet.onclick = function (event) {
  if (event.target.dataset.index){
      const index = parseInt (event.target.dataset.index)
      const type = event.target.dataset.type
      
      if (type === 'toggle') {
        notes[index].completed = !notes[index].completed
      } else if (type ==='remove') {
        notes.splice(index, 1)
      }
      render()
  }
}

//data-style = #00FA9A' 
//  return
//  if 
//}
//function change(getElementById) {
 // identifier.style.background =  #00FA9A;
 //}


function getNoteTemplate(note, index) {
  return `
      <li
        class="list-group-item d-flex justify-content-between 
        align-items-center"
       >
        <span class ="${note.completed ? 'text-decoration-line-through text-green' : ' ' }">${note.title} </span>
        <span>
          <span class="btn btn-small btn-${
            note.completed ? 'warning' : 'success'
          }" data-index="${index}" data-type="toggle">&check;</span>
          <span class="btn btn-small btn-danger"-${
            note.completed ? 'warning' : 'success'
          }" data-index="${index}" data-type="remove">&times;</span>
        </span>
      </li>
    `
}



 