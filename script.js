// --- 1. DEFINISI SOAL DAN DATA KUIS ---
const quizData = [
    {
        question: "Seorang remaja putri berusia 14 tahun dengan berat badan 45 kg sedang dalam masa pertumbuhan. Berapakah kebutuhan protein hariannya untuk mendukung perkembangan sistem reproduksi yang optimal?",
        options: ["22.5-31.5 g/hari (0.5-0.7 g/kg BB)", "36-45 g/hari (0.8-1.0 g/kg BB)", "45-54 g/hari (1.0-1.2 g/kg BB)", "54-67.5 g/hari (1.2-1.5 g/kg BB)"],
        correctAnswer: "36-45 g/hari (0.8-1.0 g/kg BB)",
        feedback: "Kebutuhan protein remaja putri adalah 0.8-1.0 g/kg BB/hari. Untuk BB 45 kg, kebutuhannya 36-45 g/hari. Jumlah ini optimal untuk mendukung perkembangan organ reproduksi, produksi hormon, dan pertumbuhan jaringan."
    },
    {
        question: "Setelah melakukan pemeriksaan kesehatan, seorang remaja putri didiagnosis kekurangan vitamin D. Dari gejala berikut, manakah yang paling mungkin dialaminya terkait kesehatan reproduksi?",
        options: ["Gangguan penglihatan dan kulit kering", "Penurunan daya tahan tubuh dan mudah infeksi", "Ketidakteraturan siklus menstruasi dan ketidakseimbangan hormon", "Anemia dan kelelahan berlebihan"],
        correctAnswer: "Ketidakteraturan siklus menstruasi dan ketidakseimbangan hormon",
        feedback: "Vitamin D berperan vital dalam regulasi hormon reproduksi. Kekurangannya dapat menyebabkan ketidakteraturan siklus menstruasi karena mempengaruhi produksi dan sensitivitas reseptor hormon reproduksi. Penelitian menunjukkan hubungan kuat antara status vitamin D dengan kesehatan menstruasi."
    },
    {
        question: "Seorang siswi sering merasa lelah, pusing, dan tampak pucat terutama saat menstruasi. Hasil pemeriksaan menunjukkan kadar hemoglobin 10 g/dL (normal: 12-16 g/dL). Mineral apakah yang harus ditingkatkan dalam makanannya?",
        options: ["Kalsium untuk penguatan tulang", "Zinc untuk daya tahan tubuh", "Zat besi untuk pembentukan hemoglobin", "Magnesium untuk fungsi otot"],
        correctAnswer: "Zat besi untuk pembentukan hemoglobin",
        feedback: "Gejala dan hasil lab menunjukkan anemia defisiensi besi. Zat besi sangat penting untuk pembentukan hemoglobin dan mencegah anemia, terutama pada remaja putri yang mengalami menstruasi. Kehilangan darah saat menstruasi meningkatkan kebutuhan zat besi."
    },
    {
        question: "Dalam sebuah penelitian nutrisi remaja, ditemukan bahwa asupan lemak sehat yang cukup berkorelasi dengan perkembangan pubertas yang normal. Mengapa lemak sehat penting untuk sistem reproduksi?",
        options: ["Menyediakan energi untuk aktivitas harian", "Sebagai bahan baku pembentukan hormon steroid", "Membantu pembentukan sel darah baru", "Mengatur suhu tubuh saat pubertas"],
        correctAnswer: "Sebagai bahan baku pembentukan hormon steroid",
        feedback: "Lemak sehat, terutama asam lemak esensial, merupakan bahan baku untuk sintesis hormon steroid reproduksi (estrogen dan testosteron). Lemak juga membantu penyerapan vitamin larut lemak (A,D,E,K) yang penting untuk kesehatan reproduksi dan berperan dalam pembentukan membran sel reproduksi."
    },
    {
        question: "Dalam studi perkembangan remaja, ditemukan kaitan antara status zinc dengan pematangan seksual. Mengapa zinc penting dalam produksi hormon reproduksi?",
        options: ["Zinc diperlukan untuk sintesis dan regulasi hormon testosteron dan estrogen", "Kalsium membantu penyerapan hormon reproduksi", "Fosfor mengatur metabolisme hormon", "Natrium menjaga keseimbangan hormon"],
        correctAnswer: "Zinc diperlukan untuk sintesis dan regulasi hormon testosteron dan estrogen",
        feedback: "Zinc berperan krusial dalam sintesis dan regulasi hormon reproduksi. Penelitian menunjukkan bahwa zinc diperlukan untuk aktivitas enzim yang terlibat dalam produksi testosteron dan estrogen, serta mendukung pematangan organ reproduksi selama pubertas."
    },
    {
        question: "Seorang dokter merekomendasikan suplementasi vitamin A pada remaja dengan gangguan perkembangan organ reproduksi. Apa alasan ilmiah di balik rekomendasi ini?",
        options: ["Meningkatkan produksi hormon reproduksi", "Mendukung diferensiasi sel dan perkembangan jaringan reproduksi", "Mempercepat metabolisme karbohidrat", "Memperkuat struktur tulang"],
        correctAnswer: "Mendukung diferensiasi sel dan perkembangan jaringan reproduksi",
        feedback: "Vitamin A esensial untuk diferensiasi sel dan pembentukan jaringan epitel organ reproduksi. Vitamin ini mengatur ekspresi gen yang terlibat dalam perkembangan organ reproduksi dan memelihara integritas jaringan epitel reproduksi."
    },
    {
        question: "Bandingkan kebutuhan protein antara remaja putra dan putri: Remaja Putri: 0.8-1.0 g/kg BB/hari; Remaja Putra: 1.0-1.2 g/kg BB/hari. Mengapa terdapat perbedaan kebutuhan tersebut?",
        options: ["Remaja putra memiliki massa otot lebih besar dan sintesis protein lebih tinggi", "Aktivitas fisik remaja putra umumnya lebih tinggi", "Metabolisme remaja putra lebih cepat secara alami", "Perbedaan jenis hormon yang diproduksi"],
        correctAnswer: "Remaja putra memiliki massa otot lebih besar dan sintesis protein lebih tinggi",
        feedback: "Perbedaan kebutuhan protein terutama disebabkan oleh massa otot yang lebih besar pada remaja putra akibat pengaruh hormon testosteron. Protein diperlukan untuk pembentukan dan pemeliharaan massa otot, serta mendukung sintesis protein yang lebih tinggi untuk pertumbuhan."
    },
    {
        question: "Sebuah studi menunjukkan bahwa 40% remaja mengalami defisiensi vitamin A. Apa konsekuensi potensial dari kondisi ini terhadap sistem reproduksi?",
        options: ["Gangguan siklus menstruasi dan ketidakseimbangan hormon", "Penurunan kesuburan jangka panjang", "Gangguan perkembangan dan diferensiasi organ reproduksi", "Peningkatan risiko osteoporosis"],
        correctAnswer: "Gangguan perkembangan dan diferensiasi organ reproduksi",
        feedback: "Defisiensi vitamin A mengganggu perkembangan normal organ reproduksi karena perannya dalam diferensiasi sel dan pembentukan jaringan epitel. Vitamin A juga penting untuk integritas barrier mukosa dan fungsi imun yang melindungi sistem reproduksi."
    },
    {
        question: "Dalam penelitian terkini tentang pubertas remaja, zinc ditemukan berperan penting dalam:",
        options: ["Pembentukan sel darah dan sistem peredaran", "Pematangan organ reproduksi dan perkembangan karakteristik seksual sekunder", "Produksi insulin dan metabolisme glukosa", "Pembentukan tulang dan pertumbuhan"],
        correctAnswer: "Pematangan organ reproduksi dan perkembangan karakteristik seksual sekunder",
        feedback: "Penelitian menunjukkan bahwa zinc berperan vital dalam pematangan organ reproduksi selama pubertas. Mineral ini diperlukan untuk perkembangan karakteristik seksual sekunder, produksi hormon reproduksi, dan mendukung fungsi normal sistem reproduksi."
    },
    {
        question: "Seorang siswi mengalami menstruasi berat dengan durasi 7 hari. Mengapa zat besi sangat penting dalam kondisi ini?",
        options: ["Mendukung pembentukan sel darah merah untuk mengganti kehilangan darah", "Membantu sintesis hormon untuk mengatur siklus", "Memperkuat tulang untuk mencegah osteoporosis", "Mengatur metabolisme lemak untuk energi"],
        correctAnswer: "Mendukung pembentukan sel darah merah untuk mengganti kehilangan darah",
        feedback: "Pada kondisi menstruasi berat, kebutuhan zat besi meningkat untuk mendukung pembentukan sel darah merah baru menggantikan darah yang hilang. Zat besi merupakan komponen penting hemoglobin yang mengangkut oksigen. Kekurangan zat besi dapat menyebabkan anemia dengan gejala seperti kelelahan, pusing, dan pucat."
    }
];

// --- 2. STATE DAN VARIABEL GLOBAL ---
let currentQuestionIndex = 0;
let userAnswers = new Array(quizData.length).fill(null);
let startTime;
let timerInterval;

const TIMER_KEY = 'quizStartTime';
const ANSWERS_KEY = 'userQuizAnswers';
const USER_DATA_KEY = 'quizUserData';
const QUIZ_STATE_KEY = 'quizState';

// --- 3. FUNGSI NAVIGASI HALAMAN ---
function goToPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    const targetPage = document.getElementById(pageId);
    targetPage.classList.add('active');

    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (pageId === 'quiz-page' && !timerInterval && localStorage.getItem(USER_DATA_KEY)) {
        startTimer();
    }
}

// --- 4. FORM PESERTA & INITIATION ---
document.getElementById('peserta-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const userData = {
        nama: document.getElementById('nama').value,
        email: document.getElementById('email').value,
        sekolah: document.getElementById('sekolah').value,
        kelas: document.getElementById('kelas').value
    };

    // Simpan data peserta
    localStorage.setItem(USER_DATA_KEY, JSON.stringify(userData));

    // Reset dan inisiasi state baru
    userAnswers = new Array(quizData.length).fill(null);
    localStorage.setItem(ANSWERS_KEY, JSON.stringify(userAnswers));
    localStorage.setItem(TIMER_KEY, Date.now());

    // Pindah ke halaman kuis dan muat soal dari NO 1
    goToPage('quiz-page');
    currentQuestionIndex = 0;
    loadQuestion(currentQuestionIndex);
    renderNavigation();

    localStorage.setItem(QUIZ_STATE_KEY, JSON.stringify({ index: 0, time: 0, submitted: false }));
});

// --- 5. LOGIKA TIMER ---
function startTimer() {
    startTime = parseInt(localStorage.getItem(TIMER_KEY)) || Date.now();

    const timerElement = document.getElementById('timer');

    timerInterval = setInterval(() => {
        const elapsedTime = Date.now() - startTime;

        let totalSeconds = Math.floor(elapsedTime / 1000);
        const hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;

        const timeString = [hours, minutes, seconds]
            .map(t => String(t).padStart(2, '0'))
            .join(':');

        timerElement.innerHTML = `<i class="far fa-clock"></i> ${timeString}`;

        localStorage.setItem(QUIZ_STATE_KEY, JSON.stringify({
            index: currentQuestionIndex,
            time: elapsedTime,
            submitted: false
        }));

    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

// --- 6. MEMUAT SOAL & MENGELOLA OPSI (UPDATED: TAMPILKAN DATA USER) ---
function loadQuestion(index) {
    if (index < 0 || index >= quizData.length) return;

    currentQuestionIndex = index;
    const question = quizData[index];
    const savedAnswers = JSON.parse(localStorage.getItem(ANSWERS_KEY)) || userAnswers;
    const userData = JSON.parse(localStorage.getItem(USER_DATA_KEY));

    document.getElementById('current-q-num').textContent = index + 1;
    document.getElementById('question-text').textContent = (index + 1) + ". " + question.question;

    // NEW: Tampilkan data ringkasan peserta di halaman kuis
    document.querySelector('.user-data-quiz-summary').innerHTML = `
        <p><strong>Peserta:</strong> ${userData.nama}</p>
        <p><strong>Sekolah:</strong> ${userData.sekolah} | <strong>Kelas:</strong> ${userData.kelas}</p>
    `;

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    const savedAnswer = savedAnswers[index];

    question.options.forEach((optionText, i) => {
        const optionId = `q${index}-opt${i}`;
        const optionLetter = String.fromCharCode(65 + i);

        const radioInput = document.createElement('input');
        radioInput.type = 'radio';
        radioInput.name = `question-${index}`;
        radioInput.id = optionId;
        radioInput.value = optionText;
        radioInput.className = 'option-input';

        if (savedAnswer === optionText) {
            radioInput.checked = true;
        }

        radioInput.addEventListener('change', function () {
            saveAnswer(index, this.value);
            this.nextElementSibling.classList.add('animate-select');
            setTimeout(() => this.nextElementSibling.classList.remove('animate-select'), 100);
        });

        const label = document.createElement('label');
        label.htmlFor = optionId;
        label.className = 'option-label';
        label.innerHTML = `<span class="option-letter">${optionLetter}</span> ${optionText}`;

        optionsContainer.appendChild(radioInput);
        optionsContainer.appendChild(label);
    });

    updateNavigationButtons();
    renderNavigation();
}

// --- 7. PENYIMPANAN JAWABAN (Local Storage) ---
function saveAnswer(index, answer) {
    userAnswers[index] = answer;
    localStorage.setItem(ANSWERS_KEY, JSON.stringify(userAnswers));
    renderNavigation();
}

// --- 8. NAVIGASI SOAL & UPDATE TOMBOL ---
function updateNavigationButtons() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-btn');

    prevBtn.disabled = currentQuestionIndex === 0;

    if (currentQuestionIndex === quizData.length - 1) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'inline-block';
    } else {
        nextBtn.style.display = 'inline-block';
        submitBtn.style.display = 'none';
    }
}

// Event Listeners Navigasi
document.getElementById('prev-btn').addEventListener('click', () => {
    loadQuestion(currentQuestionIndex - 1);
});
document.getElementById('next-btn').addEventListener('click', () => {
    loadQuestion(currentQuestionIndex + 1);
});
document.getElementById('submit-btn').addEventListener('click', submitQuiz);


// --- 9. RENDER PANEL NAVIGASI ---
function renderNavigation() {
    const navGrid = document.getElementById('navigation-grid');
    navGrid.innerHTML = '';
    const savedAnswers = JSON.parse(localStorage.getItem(ANSWERS_KEY)) || userAnswers;

    quizData.forEach((answer, index) => {
        const navItem = document.createElement('div');
        navItem.className = 'nav-item';
        navItem.textContent = index + 1;
        navItem.dataset.index = index;

        if (savedAnswers[index] !== null) {
            navItem.classList.add('answered');
        } else {
            navItem.classList.add('skipped');
        }

        if (index === currentQuestionIndex) {
            navItem.classList.add('current');
            navItem.classList.remove('answered', 'skipped');
        }

        navItem.addEventListener('click', function () {
            loadQuestion(parseInt(this.dataset.index));
        });

        navGrid.appendChild(navItem);
    });
}

// --- 10. SUBMIT DAN SCORING ---
function submitQuiz() {
    stopTimer();
    const confirmSubmit = confirm("Apakah Anda yakin ingin menyelesaikan kuis ini? Jawaban tidak dapat diubah lagi.");

    if (!confirmSubmit) {
        startTimer();
        return;
    }

    let score = 0;
    let correctCount = 0;
    const finalAnswers = JSON.parse(localStorage.getItem(ANSWERS_KEY)) || userAnswers;

    quizData.forEach((q, index) => {
        if (finalAnswers[index] === q.correctAnswer) {
            correctCount++;
        }
    });

    score = Math.round((correctCount / quizData.length) * 100);
    const finalTime = document.getElementById('timer').textContent.replace('clock', '').trim();

    localStorage.setItem(QUIZ_STATE_KEY, JSON.stringify({
        ...JSON.parse(localStorage.getItem(QUIZ_STATE_KEY)),
        score: score,
        correctCount: correctCount,
        finalTime: finalTime,
        submitted: true
    }));

    displayResult(score, correctCount, finalTime);
    goToPage('result-page');
}

// --- 11. LOGIKA SARAN NUTRISI ---
function getNutritionalAdvice(score) {
    let advice = {
        message: "",
        title: "",
        foods: []
    };

    if (score === 100) {
        advice.title = "Gizi Terbaik! 🎉";
        advice.message = "Pemahaman nutrisi Anda luar biasa! Terus jaga pola makan seimbang Anda untuk kesehatan reproduksi yang optimal.";
        advice.foods = ["Ikan Salmon (Omega-3)", "Sayuran Hijau (Vitamin K)", "Buah Beri (Antioksidan)"];
    } else if (score >= 70) {
        advice.title = "Pemahaman Baik! 👍";
        advice.message = "Anda sudah menguasai materi dengan baik. Perhatikan asupan mikronutrien penting seperti **Zat Besi** dan **Vitamin D** untuk meningkatkan performa Anda.";
        advice.foods = ["Daging Merah Tanpa Lemak (Zat Besi)", "Telur dan Susu Fortifikasi (Vitamin D)", "Biji-bijian (Zinc)"];
    } else {
        advice.title = "Perlu Peningkatan Gizi! 💡";
        advice.message = "Jangan khawatir! Fokus pada asupan **Protein**, **Zat Besi**, **Vitamin A**, dan **Zinc**. Pemahaman nutrisi yang lebih baik akan mendukung pertumbuhan optimal Anda.";
        advice.foods = ["Ayam/Ikan/Tahu/Tempe (Protein)", "Sayuran Hijau Gelap (Zat Besi)", "Hati/Wortel/Ubi Jalar (Vitamin A)", "Kacang-kacangan (Zinc)"];
    }
    return advice;
}

// --- 12. TAMPILAN HASIL (UPDATED: LOGIC TOMBOL SERTIFIKAT) ---
function displayResult(score, correctCount, finalTime) {
    const userData = JSON.parse(localStorage.getItem(USER_DATA_KEY));
    document.getElementById('final-time').textContent = finalTime;
    document.getElementById('final-score').textContent = `${correctCount}/${quizData.length} (${score}%)`;

    document.querySelector('.user-data-summary').innerHTML = `
        <p><strong>Nama:</strong> ${userData.nama}</p>
        <p><strong>Sekolah:</strong> ${userData.sekolah}</p>
        <p><strong>Kelas:</strong> ${userData.kelas}</p>
    `;

    const messageElement = document.getElementById('result-message');
    const certificateBtn = document.getElementById('certificate-btn');
    const advice = getNutritionalAdvice(score);

    // Konten Saran Nutrisi
    let htmlContent = `
        <p>${advice.message}</p>
        <div class="glass-card recommendation-box">
            <h4>${advice.title}</h4>
            <p>Rekomendasi Makanan Fokus:</p>
            <ul>
                ${advice.foods.map(food => `<li><i class="fas fa-apple-alt"></i> ${food}</li>`).join('')}
            </ul>
        </div>
    `;

    messageElement.innerHTML = htmlContent;

    // Tampilkan tombol Sertifikat hanya jika skor >= 70
    if (score >= 70) {
        certificateBtn.style.display = 'inline-block';
    } else {
        certificateBtn.style.display = 'none';
    }
}

// --- 13. RENDER PEMBAHASAN LENGKAP (UPDATED: UI/UX PDF) ---
function renderReview() {
    const reviewContent = document.getElementById('review-content-pdf');
    reviewContent.innerHTML = '';

    const finalAnswers = JSON.parse(localStorage.getItem(ANSWERS_KEY)) || userAnswers;
    const userData = JSON.parse(localStorage.getItem(USER_DATA_KEY));
    const quizState = JSON.parse(localStorage.getItem(QUIZ_STATE_KEY));

    // NEW: Header untuk tampilan/PDF Pembahasan yang lebih informatif
    reviewContent.innerHTML = `
        <div class="review-summary-header">
            <h3>Ringkasan Hasil</h3>
            <p><strong>Peserta:</strong> ${userData.nama} | <strong>Sekolah:</strong> ${userData.sekolah} | <strong>Kelas:</strong> ${userData.kelas}</p>
            <p><strong>Skor Akhir:</strong> <span style="font-weight: 700; color: #3f2b96;">${quizState.score}%</span> | <strong>Waktu:</strong> ${quizState.finalTime}</p>
            <hr style="margin: 15px 0; border: 0; border-top: 1px dashed #ccc;"/>
            <h3>Detil Pembahasan Soal</h3>
        </div>
    `;

    quizData.forEach((q, index) => {
        const userAnswer = finalAnswers[index];
        const isCorrect = userAnswer === q.correctAnswer;

        const item = document.createElement('div');
        item.className = 'review-item';

        item.innerHTML = `
            <p class="review-question-text">${index + 1}. ${q.question}</p>
            <div class="review-answer">
                ${q.options.map(option => {
            let className = '';
            if (option === q.correctAnswer) {
                className = 'correct';
            } else if (option === userAnswer && !isCorrect) {
                className = 'user-wrong';
            }
            return `<p class="${className}">${option}</p>`;
        }).join('')}
            </div>
            <div class="review-feedback">
                <strong>Pembahasan:</strong> ${q.feedback}
                <p>Status Anda: ${isCorrect ? 'Benar' : 'Salah'}</p>
            </div>
        `;

        reviewContent.appendChild(item);
    });
}

// --- 14. FUNGSI UNDUH PDF (HASIL & PEMBAHASAN - UPDATED: LOGIC PDF PEMBAHASAN) ---
function downloadResultPDF() {
    const userData = JSON.parse(localStorage.getItem(USER_DATA_KEY));
    const element = document.getElementById('result-content-pdf');

    const opt = {
        margin: 1,
        filename: `${userData.nama}_Hasil_Kuis_Nutrisi.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
}

function downloadReviewPDF() {
    const userData = JSON.parse(localStorage.getItem(USER_DATA_KEY));
    // RENDER ULANG HANYA UNTUK KEPERLUAN PDF DI ELEMEN TEMPORER
    const tempElement = document.createElement('div');
    document.body.appendChild(tempElement);

    // Copy logic rendering ke elemen temporer
    const finalAnswers = JSON.parse(localStorage.getItem(ANSWERS_KEY)) || userAnswers;
    const quizState = JSON.parse(localStorage.getItem(QUIZ_STATE_KEY));

    let htmlContent = `
        <div style="padding: 20px; font-family: 'Poppins', sans-serif; background: #fff; color: #333;">
            <h2 style="color: #3f2b96; border-bottom: 2px solid #3f2b96; padding-bottom: 5px;">Pembahasan Kuis: Nutrisi Reproduksi Remaja</h2>
            <p><strong>Nama:</strong> ${userData.nama}, <strong>Sekolah:</strong> ${userData.sekolah}, <strong>Kelas:</strong> ${userData.kelas}</p>
            <p><strong>Skor Akhir:</strong> ${quizState.score}%, <strong>Waktu Pengerjaan:</strong> ${quizState.finalTime}</p>
            <hr style="margin: 15px 0;"/>
            
    `;

    quizData.forEach((q, index) => {
        const userAnswer = finalAnswers[index];
        const isCorrect = userAnswer === q.correctAnswer;

        htmlContent += `
            <div style="margin-bottom: 20px; padding: 10px; border: 1px solid #eee; border-radius: 5px;">
                <p style="font-weight: 600; color: #333;">${index + 1}. ${q.question}</p>
                <div style="margin-top: 10px;">
                    ${q.options.map(option => {
            let style = `padding: 5px 10px; margin: 3px 0; border-radius: 3px; font-size: 0.9em;`;
            if (option === q.correctAnswer) {
                style += `background-color: #d4edda; color: #155724; font-weight: 600; border-left: 3px solid #155724;`;
            } else if (option === userAnswer && !isCorrect) {
                style += `background-color: #f8d7da; color: #721c24; font-weight: 600; border-left: 3px solid #721c24;`;
            } else {
                style += `background-color: #f8f9fa; color: #333;`;
            }
            return `<p style="${style}">${option}</p>`;
        }).join('')}
                </div>
                <div style="margin-top: 10px; padding: 10px; border-left: 5px solid #ff9800; background: #fff3e0;">
                    <strong>Pembahasan:</strong> ${q.feedback}
                    <p style="margin-top: 5px;">Status Anda: ${isCorrect ? 'Benar' : 'Salah'}</p>
                </div>
            </div>
        `;
    });

    htmlContent += `</div>`;
    tempElement.innerHTML = htmlContent;

    const opt = {
        margin: 0.5,
        filename: `${userData.nama}_Pembahasan_Kuis_Nutrisi.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 1.5 },
        jsPDF: { unit: 'in', format: 'A4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(tempElement).save().then(() => {
        document.body.removeChild(tempElement);
    });
}

// --- 15. FUNGSI UNDUH SERTIFIKAT (Glassmorphism Concept) ---
function downloadCertificatePDF() {
    const userData = JSON.parse(localStorage.getItem(USER_DATA_KEY));
    const quizState = JSON.parse(localStorage.getItem(QUIZ_STATE_KEY));
    const date = new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });

    // Konten sertifikat dalam elemen temporer
    const certHTML = `
        <div style="width: 100%; height: 100%; padding: 50px; text-align: center; font-family: 'Poppins', sans-serif; background: linear-gradient(135deg, #a8c0ff 0%, #3f2b96 100%); color: #fff; border: 10px solid #fff; border-radius: 20px; box-shadow: 0 0 20px rgba(0,0,0,0.5);">
            <h1 style="font-size: 2.5em; font-weight: 900; color: #ffeb3b; text-shadow: 2px 2px #3f2b96;">SERTIFIKAT PENGHARGAAN</h1>
            <p style="font-size: 1.2em; margin-top: 10px;">Diberikan Kepada:</p>
            
            <h2 style="font-size: 3em; margin: 20px 0; padding: 10px 20px; color: #fff; background: rgba(255, 255, 255, 0.3); backdrop-filter: blur(5px); border-radius: 15px; border: 1px solid rgba(255, 255, 255, 0.5);">${userData.nama.toUpperCase()}</h2>
            
            <p style="font-size: 1.2em; margin-bottom: 30px;">Atas partisipasi dan keberhasilan menyelesaikan **EVALUASI PEMBELAJARAN: Nutrisi Reproduksi Remaja**</p>

            <div style="display: inline-block; padding: 15px 30px; background: rgba(255, 255, 255, 0.2); backdrop-filter: blur(5px); border-radius: 10px; border: 1px solid rgba(255, 255, 255, 0.5);">
                <p style="font-size: 1.1em; margin: 5px 0;">Dengan Skor Akhir: <strong style="color: #ffeb3b;">${quizState.score}%</strong></p>
                <p style="font-size: 1.1em; margin: 5px 0;">Pada Tanggal: ${date}</p>
                <p style="font-size: 1.1em; margin: 5px 0;">Dari: ${userData.sekolah}</p>
            </div>
            
            <p style="font-size: 1.2em; margin-top: 30px; font-style: italic;">"Terus tingkatkan pemahaman nutrisi Anda untuk kesehatan reproduksi optimal!"</p>

            <div style="margin-top: 50px; display: flex; justify-content: space-around;">
                <div style="width: 40%; text-align: center;">
                    <p style="border-top: 1px solid #fff; padding-top: 5px; font-size: 1em;">Penguji (Web Frond Back End)</p>
                </div>
            </div>
        </div>
    `;

    const tempElement = document.createElement('div');
    tempElement.innerHTML = certHTML;
    document.body.appendChild(tempElement);


    const opt = {
        margin: 0,
        filename: `${userData.nama}_Sertifikat_Nutrisi.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 3, useCORS: true },
        jsPDF: { unit: 'in', format: 'A4', orientation: 'landscape' }
    };

    html2pdf().set(opt).from(tempElement).save().then(() => {
        document.body.removeChild(tempElement);
    });
}


// --- 16. FUNGSI RESET & RELOAD (Mulai Ulang Kuis) ---
function resetAndReload() {
    localStorage.removeItem(TIMER_KEY);
    localStorage.removeItem(ANSWERS_KEY);
    localStorage.removeItem(USER_DATA_KEY);
    localStorage.removeItem(QUIZ_STATE_KEY);

    window.location.reload();
}

// --- 17. INISIALISASI SAAT HALAMAN DIMUAT ---
function init() {
    const savedState = JSON.parse(localStorage.getItem(QUIZ_STATE_KEY));
    const savedAnswers = JSON.parse(localStorage.getItem(ANSWERS_KEY));
    const savedUserData = localStorage.getItem(USER_DATA_KEY);

    let initialPage = 'landing-page';

    if (savedState && savedState.submitted) {
        // Kuis selesai, tampilkan hasil
        userAnswers = savedAnswers || userAnswers;
        displayResult(savedState.score, savedState.correctCount, savedState.finalTime);
        initialPage = 'result-page';
    } else if (savedUserData) {
        // Data peserta ada, lanjutkan kuis
        userAnswers = savedAnswers || userAnswers;
        currentQuestionIndex = savedState ? savedState.index : 0;
        // loadQuestion dan renderNavigation akan dipanggil di goToPage('quiz-page')
        // Ini memastikan data user di loadQuestion terisi

        // Kita tidak perlu memanggil loadQuestion di sini, cukup di goToPage
        initialPage = 'quiz-page';
    }

    goToPage(initialPage);
}

// Jalankan inisialisasi
document.addEventListener('DOMContentLoaded', init);

// Event listener untuk tombol pembahasan (dipanggil di init)
document.getElementById('review-btn').addEventListener('click', renderReview);
