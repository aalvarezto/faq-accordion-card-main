"use strict"

const questions = document.querySelectorAll(".question")

questions[1].classList.toggle("toggle")

questions.forEach(question => {
	const [, answer] = question.children

	question.addEventListener("click", () => {
		closeAll(questions).except(answer)
		question.classList.toggle("toggle")
	})
})

function closeAll(x) {
	return {
		except: y =>
			Array.from(x)
				.filter(el => el.children[1].innerText !== y.innerText)
				.forEach(question => question.classList.remove("toggle")),
	}
}
