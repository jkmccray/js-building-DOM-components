const createStudentComponent = (name, subject, info, score) => {
  if (score > 60) {
  return `
      <div class="student">
          <h1>${name}</h1>
          <section>${subject}</section>
          <aside>${info}</aside>
      </div>
  `
  } else if (score <= 60) {
    return `
      <div class="student notPassing">
          <h1>${name}</h1>
          <section>${subject}</section>
          <aside>${info}</aside>
      </div>
  `
  }
}

const studentContainer = document.querySelector("#container")

students.forEach(student => {
  let newDiv = createStudentComponent(
    student.name,
    student.subject,
    student.info,
    student.score
  )
  studentContainer.innerHTML += newDiv
})


