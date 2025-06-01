let logIn = document.querySelector(".account i")
let logOut = document.querySelector(".log-out")
const checker = () => {
	let logged = localStorage.getItem("norma-logged") || "false"
	if (logged == "true") {
		logOut.style.display = "block"
		logIn.style.display = "none"
	} else {
		logOut.style.display = "none"
		logIn.style.display = "flex"
	}
}
checker()

function Apps(name, experience, position, date, status) {
	this.name = name;
	this.experience = experience;
	this.position = position;
	this.date = date;
	this.status = status;
}

let apps = JSON.parse(localStorage.getItem("norma-company")) || [];

function Apps(name, experience, position, date, status, color) {
	this.name = name;
	this.experience = experience;
	this.position = position;
	this.date = date;
	this.status = status;
	this.color = color;
}

function getRandomHexColor() {
	let hex = Math.floor(Math.random() * 0xffffff).toString(16);
	return `#${hex.padStart(6, "0")}`;
}

function isDuplicate(newApp) {
	return apps.some(app =>
		app.name === newApp.name &&
		app.experience === newApp.experience &&
		app.position === newApp.position &&
		app.date === newApp.date &&
		app.status === newApp.status
	);
}

function addUniqueApp(newApp) {
	if (!isDuplicate(newApp)) {
		apps.push(newApp);
	}
}

// Add apps safely with random color
addUniqueApp(new Apps("Nexora Labs", 2, "Designer", "2025-05-20", "Taken", getRandomHexColor()));
addUniqueApp(new Apps("Veltrix Systems", 3, "Full stack Dev", "2025-05-25", "Available", getRandomHexColor()));
addUniqueApp(new Apps("Quantivex", 4, "Stage-Manager", "2025-04-18", "Available", getRandomHexColor()));
addUniqueApp(new Apps("Zynaptic", 7, "Back-End Dev", "2025-03-11", "Taken", getRandomHexColor()));
addUniqueApp(new Apps("Bluegrid Technologies", 6, "Interviewer", "2025-06-01", "Available", getRandomHexColor()));
addUniqueApp(new Apps("Corevia Solutions", 6, "Full-Stack Dev", "2025-01-20", "Available", getRandomHexColor()));
addUniqueApp(new Apps("Synexium Tech", 6, "Intern Front-End Dev", "2025-03-01", "Available", getRandomHexColor()));
addUniqueApp(new Apps("Infinitra AI", 5, "Front-End Dev", "2025-02-14", "Taken", getRandomHexColor()));
addUniqueApp(new Apps("Cyverra Dynamics", 4, "UI/UX Designer", "2025-05-10", "Available", getRandomHexColor()));
addUniqueApp(new Apps("Optironix", 3, "Product Manager", "2025-04-02", "Available", getRandomHexColor()));
addUniqueApp(new Apps("Aerolyte Systems", 2, "QA Engineer", "2025-06-01", "Taken", getRandomHexColor()));
addUniqueApp(new Apps("Trinexus Cloud", 7, "DevOps Engineer", "2025-05-28", "Available", getRandomHexColor()));
addUniqueApp(new Apps("Nexora Labs", 2, "Designer", "2025-05-20", "Taken", getRandomHexColor()));
addUniqueApp(new Apps("Veltrix Systems", 3, "Full stack Dev", "2025-05-25", "Available", getRandomHexColor()));
addUniqueApp(new Apps("Quantivex", 4, "Stage-Manager", "2025-04-18", "Available", getRandomHexColor()));
addUniqueApp(new Apps("Zynaptic", 7, "Back-End Dev", "2025-03-11", "Taken", getRandomHexColor()));
addUniqueApp(new Apps("Bluegrid Technologies", 6, "Interviewer", "2025-06-01", "Available", getRandomHexColor()));
addUniqueApp(new Apps("Corevia Solutions", 6, "Full-Stack Dev", "2025-01-20", "Available", getRandomHexColor()));
addUniqueApp(new Apps("Synexium Tech", 6, "Intern Front-End Dev", "2025-03-01", "Available", getRandomHexColor()));
addUniqueApp(new Apps("Infinitra AI", 5, "Front-End Dev", "2025-02-14", "Taken", getRandomHexColor()));
addUniqueApp(new Apps("Cyverra Dynamics", 4, "UI/UX Designer", "2025-05-10", "Available", getRandomHexColor()));
addUniqueApp(new Apps("Optironix", 3, "Product Manager", "2025-04-02", "Available", getRandomHexColor()));
addUniqueApp(new Apps("Aerolyte Systems", 2, "QA Engineer", "2025-06-01", "Taken", getRandomHexColor()));
addUniqueApp(new Apps("Trinexus Cloud", 7, "DevOps Engineer", "2025-05-28", "Available", getRandomHexColor()));
addUniqueApp(new Apps("Lumenoid Technologies", 1, "Intern Data Analyst", "2025-03-15", "Available", getRandomHexColor()));
addUniqueApp(new Apps("Neurolynx Innovations", 5, "AI Research Assistant", "2025-02-27", "Taken", getRandomHexColor()));

localStorage.setItem("norma-company", JSON.stringify(apps));

//setting the workers
const tbody = document.getElementById("applicants-body");
for (const app of apps) {
	const tr = document.createElement("tr");
	tr.innerHTML += `
		<td>${app.name}</td>
		<td>${app.position}</td>
		<td>${app.experience} years565</td>
		<td class="diss">${app.date}</td>
		<td class="diss"><span class="status ${app.status}">${app.status}</span></td>
		<td class="diss">${app.number}</td>
	`;
	tbody.appendChild(tr);

	//adding the user into the list
	// let accs = JSON.parse(localStorage.getItem("norma-acc")) || []
	// for (let i of accs) {
	// 	if (i.logged == true) {
	// 		tr.innerHTML += `
	// 			<td><span class="initials" style="background-color:${i.color};">${initials[0][0]}${initials[1][0]}</span></td>
	// 			<td>${i.position}</td>
	// 			<td>${i.experience} yrs</td>
	// 			<td class="diss">${i.date}</td>
	// 			<td class="diss"><span class="status ${i.status}">${i.status}</span></td>
	// 			<td class="diss">${i.number}</td>
	// 		`
	// 	}
	// }
}


// Sidebar toggle
const sidebar = document.querySelector(".sidebar");
const burger = document.querySelector(".burger");
const closeBtn = document.getElementById("close");

burger.addEventListener("click", () => {
	sidebar.classList.add("active");
});

closeBtn.addEventListener("click", () => {
	sidebar.classList.remove("active");
});


// Filtering Logic
let selectedFilters = {
	position: "All",
	experience: "All",
	status: "All",
};

function applyFilters() {
	tbody.innerHTML = "";
	for (const app of apps) {
		const matchesPosition =
			selectedFilters.position === "All" ||
			app.position
				.toLowerCase()
				.includes(selectedFilters.position.toLowerCase());

		const exp = app.experience;
		let matchesExperience = false;
		if (selectedFilters.experience === "All") matchesExperience = true;
		else if (selectedFilters.experience === "None" && exp === 0)
			matchesExperience = true;
		else if (selectedFilters.experience === "1-3 Years" && exp >= 1 && exp <= 3)
			matchesExperience = true;
		else if (selectedFilters.experience === "3-5 Years" && exp > 3 && exp <= 5)
			matchesExperience = true;
		else if (
			selectedFilters.experience === "5-10 Years" &&
			exp > 5 &&
			exp <= 10
		)
			matchesExperience = true;
		else if (selectedFilters.experience === "10 Years+" && exp > 10)
			matchesExperience = true;

		const matchesStatus =
			selectedFilters.status === "All" ||
			app.status.toLowerCase() === selectedFilters.status.toLowerCase();

		if (matchesPosition && matchesExperience && matchesStatus) {
			const tr = document.createElement("tr");
			tr.innerHTML = `
				<td>${app.name}</td>
				<td>${app.position}</td>
				<td>${app.experience} years</td>
				<td class="diss">${app.date}</td>
				<td class="diss"><span class="status ${app.status}">${app.status}</span></td>
			`;
			tbody.appendChild(tr);
		}
	}
}

// give li eventlistener
document.querySelectorAll(".pos .semi-drop li").forEach((li) => {
	li.addEventListener("click", () => {
		selectedFilters.position = li.textContent.trim();
		applyFilters();
	});
});

document.querySelectorAll(".exper .semi-drop li").forEach((li) => {
	li.addEventListener("click", () => {
		selectedFilters.experience = li.textContent.trim();
		applyFilters();
	});
});

document.querySelectorAll(".statu .semi-drop li").forEach((li) => {
	li.addEventListener("click", () => {
		selectedFilters.status = li.textContent.trim();
		applyFilters();
	});
});

// Initial render
applyFilters();

const modalOverlay = document.getElementById("modalOverlay");
const modalContent = document.getElementById("modalContent");

function openModal(applicant) {
	const initials = applicant.name
		.split(" ")
		.map((name) => name[0].toUpperCase())
		.join("");

	modalContent.innerHTML = `
		<div class="modal-close-btn" id="modalCloseBtn">&times;</div>
		<div class="modal-header">
			<div class="initials-large" style="background-color: ${applicant.color};">${initials}</div>
			<h2>${applicant.name}</h2>
		</div>
		<div class="modal-body">
			<p><strong>Profession:</strong> ${applicant.profesion}</p>
			<p><strong>Experience:</strong> ${applicant.experience} years</p>
			<p><strong>Status:</strong> <span class="status ${applicant.status}">${applicant.status}</span></p>
			<p><strong>Contact:</strong> ${applicant.number}</p>
			<p><strong>Applied On:</strong> ${applicant.date}</p>
		</div>
	`;

	modalOverlay.style.display = "flex";
	document.body.classList.add("modal-open");

	// Close button listener
	const modalCloseBtn = document.getElementById("modalCloseBtn");
	modalCloseBtn.addEventListener("click", closeModal);
}

function closeModal() {
	modalOverlay.style.display = "none";
	document.body.classList.remove("modal-open");
}

// Close modal when clicking outside the modal content
modalOverlay.addEventListener("click", (e) => {
	if (e.target === modalOverlay) {
		closeModal();
	}
});

// Attach event listener to each table row
const rows = tbody.querySelectorAll("tr");
for (let i = 0; i < rows.length; i++) {
	rows[i].addEventListener("click", () => {
		openModal(apps[i]);
	});
}
