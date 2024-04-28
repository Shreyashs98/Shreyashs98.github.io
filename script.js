const experience = [
    { title: 'Summer Internship', company: 'Dreamsoft Innovations', duration: 'Oct 2023 - Nov 2023', description: 'Worked on a E-commerce site with chatbot' },
    { title: 'Mentor', company: 'technical career education', duration: 'Mar 2023', description: 'Guided a group of Curious students along with my team about the React' }


];

function renderExperience() {
    const experienceList = document.getElementById('experience-list');
    experience.forEach(exp => {
        const item = document.createElement('li');
        item.innerHTML = `<h3>${exp.title}</h3><p>${exp.company} (${exp.duration})</p><p>${exp.description}</p>`;
        experienceList.appendChild(item);
    });
}

renderExperience();


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function downloadResume() {
    const resumeUrl = './assets/resume1.png';
    const fileName = 'resume.png';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = fileName;
    link.click();
}