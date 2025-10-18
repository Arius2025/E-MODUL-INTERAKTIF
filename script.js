// script.js

document.addEventListener('DOMContentLoaded', () => {

    // ====================================================
    // 1. JS untuk HERO SECTION: Pengganti Teks Otomatis
    // ====================================================
    const headerH2 = document.querySelector('#hero-module h2');
    const keyphrases = ["KESEHATAN REPRODUKSI", "LITERASI KESEHATAN", "ILMU PENGETAHUAN ALAM"];
    let phraseIndex = 0;

    function animateTextChange() {
        // Teks fade-out
        headerH2.style.opacity = '0'; 

        setTimeout(() => {
            // Ganti teks
            headerH2.textContent = `E-MODUL IPA & ${keyphrases[phraseIndex]}`;
            // Teks fade-in
            headerH2.style.opacity = '1';
            
            phraseIndex = (phraseIndex + 1) % keyphrases.length; // Loop index
        }, 500); // Tunggu 0.5 detik saat fade-out

        // Ulangi setiap 3 detik
        setTimeout(animateTextChange, 3000); 
    }
    
    // Mulai animasi
    animateTextChange();

    // ====================================================
    // 2. JS untuk PETA KONSEP SECTION: Scroll Fade-in & Live Highlight
    // ====================================================
    const konsepItems = document.querySelectorAll('.konsep-item, .konsep-tengah');
    const petaKonsepSection = document.getElementById('peta-konsep');

    // A. Scroll Reveal (Fade-in-up)
    const observerOptions = { root: null, threshold: 0.1 };
    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    konsepItems.forEach((item, index) => {
        // Tambahkan delay pada style untuk efek staggered (berurutan)
        item.style.transitionDelay = `${index * 0.15}s`;
        item.style.transform = 'translateY(20px)';
        scrollObserver.observe(item);
    });

    // B. Live Background Highlight on Hover
    konsepItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.classList.add('highlight-konsep');
            // Ubah background section secara keseluruhan saat hover
            petaKonsepSection.style.backgroundColor = '#E9F5F9'; 
        });

        item.addEventListener('mouseleave', () => {
            item.classList.remove('highlight-konsep');
            petaKonsepSection.style.backgroundColor = '#F8F8F8';
        });
    });


    // ====================================================
    // 3. JS untuk KEGIATAN BELAJAR CTA SECTION: Button Pulsing Effect
    // ====================================================
    const ctaButton = document.getElementById('btn-mulai-belajar');

    // Fungsi untuk membuat efek pulsing (berdenyut)
    function pulse() {
        ctaButton.animate([
            { transform: 'scale(1)' },
            { transform: 'scale(1.05)', offset: 0.5 },
            { transform: 'scale(1)' }
        ], {
            duration: 1500, // Durasi 1.5 detik
            iterations: Infinity, // Berulang tak terbatas
            easing: 'ease-in-out'
        });
    }

    // Mulai efek pulsing
    pulse();

});
