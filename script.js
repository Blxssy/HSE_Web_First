function toggleInfo() {
	var facts = document.getElementById('facts')
	var button = document.getElementById('toggleButton')
	if (facts.classList.contains('hidden')) {
		facts.classList.remove('hidden')
		button.textContent = 'Скрыть'
	} else {
		facts.classList.add('hidden')
		button.textContent = 'Показать интересные факты'
	}
}
