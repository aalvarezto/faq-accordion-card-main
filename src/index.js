"use strict"

const questions = document.querySelectorAll(".question")

questions.forEach(question => {
	const [button, answer] = question.children

	question.addEventListener("click", () => {
		closeAll(questions).except(answer)
		answer.className = answer.className !== "visible" ? "visible" : "hidden"
	})
})

function closeAll(x) {
	return {
		except: y =>
			Array.from(x)
				.map(question => question.children[1])
				.filter(answer => answer.innerText !== y.innerText)
				.forEach(answer => (answer.className = "hidden")),
	}
}
