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

function Apps(name, experience, position, date, status, number, color) {
	this.name = name;
	this.experience = experience;
	this.position = position;
	this.date = date;
	this.status = status;
	this.number = number;
	this.color = color;
}
let apps = JSON.parse(localStorage.getItem("norma-workers")) || []
apps.push(
	new Apps(
		"Chris Davidson",
		2,
		"Designer",
		"2025-05-20",
		"Employeed",
		"593 00 13 12",
		"#87CEEB"
	),
	new Apps(
		"David Martinez",
		3,
		"Full stack Dev",
		"2025-05-25",
		"Available",
		"592 01 22 15",
		"#403F6F"
	),
	new Apps(
		"Max Hallwell",
		4,
		"Stage-Manager",
		"2025-05-18",
		"Available",
		"555 00 11 99",
		"#778FA8"
	),
	new Apps(
		"Anthony Padia",
		7,
		"Back-End Dev",
		"2025-05-22",
		"Employeed",
		"505 37 87 00",
		"#7DF9FF"
	),
	new Apps(
		"Jonathan Chris",
		6,
		"Interviewer",
		"2025-02-13",
		"Available",
		"555 00 11 99",
		"#574D35"
	),
	new Apps(
		"Chris Hemsworth",
		5,
		"Front-End Dev",
		"2025-02-23",
		"Employeed",
		"505 27 11 90",
		"#601EF9"
	),
	new Apps(
		"Charlse Darwin",
		1,
		"Back-End Dev",
		"2025-05-29",
		"Employeed",
		"555 01 31 99",
		"#8B0000"
	),
	new Apps(
		"Kyle Butler",
		4,
		"Stage-Interviewer",
		"2025-02-16",
		"Available",
		"598 414 914",
		"#58b0b3"
	),
	new Apps(
		"Travis Scott",
		9,
		"Front-End Dev",
		"2025-02-30",
		"Employeed",
		"590 30 15 94",
		"#d1cdff"
	),
	new Apps(
		"Chris Tyson",
		0,
		"Intern Front-End Dev",
		"2025-02-16",
		"Available",
		"594 324 113",
		"#F67280"
	),
	new Apps(
		"Jackson Lee",
		1,
		"Full Stack-Dev",
		"2025-02-16",
		"Available",
		"554 394 1  17",
		"#355C7D"
	),
	new Apps(
		"Isla Nguyen",
		8,
		"Stage-Interviewer",
		"2025-02-16",
		"Available",
		"534 424 417",
		"#6C5B7B"
	),
	new Apps(
		"Noah Patel",
		10,
		"Full-Stack Dev",
		"2025-02-16",
		"Available",
		"514 864 937",
		"#99B898"
	),
);
localStorage.setItem("norma-workers", JSON.stringify(apps))

//setting the workers
const tbody = document.getElementById("applicants-body");
for (const app of apps) {
	const tr = document.createElement("tr");
	const initials = app.name.split(" ");
	tr.innerHTML += `
		<td><span class="initials" style="background-color:${app.color};">${initials[0][0]}${initials[1][0]}</span></td>
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
			const initials = app.name.split(" ");
			tr.innerHTML = `
				<td><span class="initials" style="background-color:${app.color};">${initials[0][0]}${initials[1][0]}</span></td>
				<td>${app.position}</td>
				<td>${app.experience} years</td>
				<td class="diss">${app.date}</td>
				<td class="diss"><span class="status ${app.status}">${app.status}</span></td>
				<td class="diss">${app.number}</td>
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
