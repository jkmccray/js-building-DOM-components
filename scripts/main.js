// const createStudentComponent = (name, subject, info, score) => { // If a function's job is to create something and return it, it is called a "factory function". Will typically start with the word "create"
//   if (score > 60) {
//     return `
//       <div class="student">
//           <h1>${name}</h1>
//           <section>${subject}</section>
//           <aside>${info}</aside>
//           <aside>Score: ${score}</aside>
//           </div>
//           `
//   } else {
//     return `
//           <div class="student failing">
//           <h1>${name}</h1>
//           <section>${subject}</section>
//           <aside>${info}</aside>
//           <aside>Score: ${score}</aside>
//       </div>
//   `
//   }
// }

// Ternary operator - you can put this inside a template literal. Example --> score < 70 ? "failed" : "passed"
const createStudentComponent = (name, subject, info, score) => {
  return `
    <div class="student ${score < 60 ? "failing" : ""}">
        <h1>${name}</h1>
        <section>${subject}</section>
        <aside>${info}</aside>
        <aside>Score: ${score}</aside>
        </div>
        `
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


