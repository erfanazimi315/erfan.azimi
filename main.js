// منوی کناری
const menuBtn = document.querySelector('.menu-btn');
const sidebar = document.querySelector('.sidebar');
const mainContent = document.querySelector('.main-content');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    sidebar.classList.toggle('active');
    mainContent.classList.toggle('shifted');
});

// بستن منو با کلیک روی محتوا
mainContent.addEventListener('click', () => {
    if (sidebar.classList.contains('active')) {
        menuBtn.classList.remove('active');
        sidebar.classList.remove('active');
        mainContent.classList.remove('shifted');
    }
});

// انیمیشن نوار مهارت‌ها
const skillProgress = document.querySelectorAll('.skill-progress');

function animateSkills() {
    skillProgress.forEach(progress => {
        const width = progress.getAttribute('data-width');
        progress.style.width = width + '%';
    });
}

// فعال کردن انیمیشن هنگام اسکرول
window.addEventListener('scroll', () => {
    const skillsSection = document.querySelector('.skills');
    const sectionPosition = skillsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (sectionPosition < screenPosition) {
        animateSkills();
    }
});

// اسکرول نرم برای لینک‌های منو
document.querySelectorAll('.menu a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        menuBtn.classList.remove('active');
        sidebar.classList.remove('active');
        mainContent.classList.remove('shifted');

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});
window.addEventListener('load', function () {
    if (!navigator.onLine) {
        alert("این سایت فقط با اینترنت اجرا می‌شود. لطفاً اتصال خود را بررسی کنید 💙✨️.");
        window.close(); // این فقط در پنجره‌هایی که با JS باز شدن کار می‌کنه
        // یا به صفحه دیگه هدایت کن:
        // window.location.href = "no-internet.html";
    }
});

// اگر اینترنت در حین استفاده قطع شد:
window.addEventListener('offline', function () {
    alert("سایت به دلیل قطع شدن اینترنت بسته می‌شود 💙✨️ ");
    window.close();
});

document.addEventListener('DOMContentLoaded', function () {
    // برای هر slideshow-container یک اسلایدشو مستقل ایجاد می‌کنیم
    document.querySelectorAll('.slideshow-container').forEach(container => {
        const slides = container.querySelectorAll('.slide');
        let currentSlide = 0;

        // نمایش اولین اسلاید
        showSlide(currentSlide);

        // دکمه‌های کنترل
        const prevBtn = container.querySelector('.prev-btn');
        const nextBtn = container.querySelector('.next-btn');

        prevBtn.addEventListener('click', () => {
            showSlide(currentSlide - 1);
        });

        nextBtn.addEventListener('click', () => {
            showSlide(currentSlide + 1);
        });

        function showSlide(n) {
            // مخفی کردن همه اسلایدها
            slides.forEach(slide => slide.classList.remove('active'));

            // محاسبه اسلاید جاری با در نظر گرفتن حلقه
            currentSlide = (n + slides.length) % slides.length;

            // نمایش اسلاید جاری
            slides[currentSlide].classList.add('active');
        }
    });
});

