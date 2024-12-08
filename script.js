const projectData = {
    project1: { 
        img: '/project/assets/1.png', 
        desc: 'Button Ripple Effect', 
        link: '/project/buttonripple/index.html' 
    },
    project2: { 
        img: '/project/assets/2.png', 
        desc: 'Calender', 
        link: '/project/calender/index.html' 
    },
    project3: { 
        img: '/project/assets/3.png', 
        desc: 'Dark Mode Toggle', 
        link: '/project/DarkModeToggle/index.html' 
    },
    project4: { 
        img: '/project/assets/4.png', 
        desc: 'Heart Animation', 
        link: '/project/heart/index.html' 
    },
    project5: { 
        img: '/project/assets/5.png', 
        desc: 'Random Photos', 
        link: '/project/RandomPhotos/index.html' 
    },
    project6: { 
        img: '/project/assets/7.png', 
        desc: 'Typewriter Effect', 
        link: '/project/practise/index.html'  
    }
   
};

// Iterate over the data object and inject images, descriptions, and links
Object.keys(projectData).forEach(projectId => {
    const projectElement = document.getElementById(projectId);
    if (projectElement) {
        const imgDiv = projectElement.querySelector('.img');
        const descDiv = projectElement.querySelector('.description');

        if (imgDiv) {
            imgDiv.innerHTML = `<a href="${projectData[projectId].link}" target="_blank">
                                    <img src="${projectData[projectId].img}" alt="${projectData[projectId].desc}" />
                                </a>`;
        }

        if (descDiv) {
            descDiv.textContent = projectData[projectId].desc;
        }
    }
});
