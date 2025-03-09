function toggleInfo() {
	var facts = document.getElementById('facts')
	if (facts.classList.contains('hidden')) {
		facts.classList.remove('hidden')
	} else {
		facts.classList.add('hidden')
	}
}
