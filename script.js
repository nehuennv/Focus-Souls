// ===================================================================================
// CONFIGURACIÓN - ¡AQUÍ ES DONDE PONÉS TUS DATOS!
// ===================================================================================
const JEFES = [
    { 
        nombre: "Horrax, el Vástago de la Escoria", 
        imagenUrl: 'img/horrax1.png',
        fondoUrl: 'img/horraxBg.png',
        lore: "Horrax no fue derrotado por un enemigo, sino por su propio martillo. En su obsesión por la rutina inquebrantable, trató su espíritu como hierro y su voluntad como fuego, golpeándose a sí mismo hasta quebrarse. Representa el burnout y la disciplina tóxica, el recordatorio de que la verdadera fuerza no reside en la resistencia infinita, sino en el equilibrio entre el esfuerzo y el descanso."
    },
    { 
        nombre: "Alberic, el Escriba sin Rostro", 
        imagenUrl: 'img/alberic.png',        
        fondoUrl: 'img/albericBg.png',
        lore:'Alberic fue un erudito que buscó el conocimiento absoluto, pero en su afán olvidó que el saber no es un tesoro para ser acumulado, sino una herramienta para ser usada. Ahora es una prisión de su propia biblioteca, un eco de la procrastinación que nace de la sobrecarga de información. Cada golpe contra él es un acto de decisión, una página leída en lugar de apilada, una idea ejecutada en lugar de solo pensada.'
    },
    { 
        nombre: "Morwenna, Madre de los Brotes Marchitos", 
        imagenUrl: 'img/morwenna.png',        
        fondoUrl: 'img/morwennaBg.png',
        lore:'Morwenna fue una vez la guardiana de las pasiones y los sueños incipientes. Pero por cada talento no cultivado, por cada idea abandonada, una de sus flores se marchitó. Ahora es un monumento al potencial perdido y a la apatía que crece sobre los jardines descuidados del alma. Derrotarla es un acto de reencuentro: regar las semillas de la vieja inspiración o arrancar las malas hierbas del arrepentimiento para plantar algo nuevo.'
    },
    { 
        nombre: "Lysandra, la Vidente Estancada", 
        imagenUrl: 'img/lysandra.png',        
        fondoUrl: 'img/lysandraBg.png',
        lore:'Condenada a ver todos los hilos del tiempo, Lysandra se ahogó en ellos. Obsesionada con los errores del pasado y aterrorizada por las infinitas posibilidades del futuro, perdió la capacidad de existir en el único momento que importa: el ahora. Luchar contra ella es un ejercicio de presencia, un juramento para anclar la mente en el presente y actuar, sin el peso de lo que fue ni la ansiedad de lo que será.'
    },
];

// Configuración de sonidos (agregá tus archivos en la carpeta sounds/)
const SOUNDS = {
    hover: 'sounds/hover.mp3',
    click: 'sounds/click.mp3', 
    impact: 'sounds/impact.mp3',
    break: 'sounds/break.mp3',
    victory: 'sounds/victory.mp3'
};
// ===================================================================================

document.addEventListener('DOMContentLoaded', () => {
    // --- DOM ELEMENTS ---
    const lobbyScreen = document.getElementById('lobby-screen');
    const battleScreen = document.getElementById('battle-screen');
    const messageScreen = document.getElementById('message-screen');
    const messageTitle = document.getElementById('message-title');
    const confirmationButtons = document.getElementById('confirmation-buttons');
    const confirmYesBtn = document.getElementById('confirm-yes-btn');
    const confirmNoBtn = document.getElementById('confirm-no-btn');
    const hoursContainer = document.querySelector('.hours-container');
    const startBattleBtn = document.getElementById('start-battle-btn');
    const showInstructionsBtn = document.getElementById('show-instructions-btn');
    const instructionsScreen = document.getElementById('instructions-screen');
    const closeInstructionsBtn = document.getElementById('close-instructions-btn');
    const timerMinutes = document.querySelector('.timer-minutes');
    const timerSeconds = document.querySelector('.timer-seconds');
    const healthBarInner = document.getElementById('health-bar-inner');
    const bossName = document.getElementById('boss-name');
    const launchAttackBtn = document.getElementById('launch-attack-btn');
    const loadTimeBtns = document.querySelectorAll('.load-time-btn');
    const backToMenuBtn = document.getElementById('back-to-menu-btn');
    const backgroundContainer = document.getElementById('background-container');
    const bossImage = document.getElementById('boss-image');
    const sparksContainer = document.getElementById('sparks-container');
    const pauseBtn = document.getElementById('pause-btn');
    // --- NUEVAS VARIABLES PARA PARTÍCULAS DEL TIMER ---
    const timerParticlesContainer = document.getElementById('timer-particles-container');
    let timerParticlesInterval = null;

    // --- NUEVOS ELEMENTOS PARA LORE ---
const bossInfoBtn = document.getElementById('boss-info-btn');
const loreScreen = document.getElementById('lore-screen');
const loreTitle = document.getElementById('lore-title');
const loreImage = document.getElementById('lore-image');
const loreText = document.getElementById('lore-text');
const closeLoreBtn = document.getElementById('close-lore-btn');

let currentBoss = null; // Para guardar el jefe actual
    
    // Elementos de audio
    const hoverSound = document.getElementById('hover-sound');
    const clickSound = document.getElementById('click-sound');
    const impactSound = document.getElementById('impact-sound');
    const breakSound = document.getElementById('break-sound');

    // --- GAME STATE ---
    let pactInitialSeconds = 0;
    let unallocatedSeconds = 0;
    let loadedSeconds = 0;
    let dealtSeconds = 0;
    let targetTime = 0;
    let timerInterval = null;
    let breakInterval = null;
    let isTimerRunning = false;
    let isPaused = false;
    let breakExtended = false;
    let selectedHours = 0;
    let sparksInterval = null;
    const BREAK_DURATION = 5 * 60;

    // --- INITIALIZATION ---
    function initialize() {
            // Inicializar opciones de horas en el SELECT
        const hoursSelect = document.getElementById('hours-offering');
        for (let i = 1; i <= 8; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = `${i} HORA${i > 1 ? 'S' : ''}`;
        hoursSelect.appendChild(option);
    }
    createSparks();
        // Event listeners
        startBattleBtn.addEventListener('click', startBattle);
        showInstructionsBtn.addEventListener('click', showInstructions);
        closeInstructionsBtn.addEventListener('click', hideInstructions);
        loadTimeBtns.forEach(btn => {
            btn.addEventListener('click', () => modifyLoadedTime(parseInt(btn.dataset.time) * 60, btn));
            btn.addEventListener('mouseenter', () => playSound(hoverSound));
        });
        launchAttackBtn.addEventListener('click', launchAttack);
        backToMenuBtn.addEventListener('click', confirmAbandon);
        
        // Efectos de sonido para botones principales
        [startBattleBtn, showInstructionsBtn, launchAttackBtn, backToMenuBtn].forEach(btn => {
            btn.addEventListener('mouseenter', () => playSound(hoverSound));
            btn.addEventListener('click', () => playSound(clickSound));
        });
        updateTabTitle(0, 'lobby');
        updateFavicon('lobby');
        bossInfoBtn.addEventListener('click', showLore);
        bossImage.addEventListener('click', showLore); // ← AGREGAR ESTA LÍNEA
        closeLoreBtn.addEventListener('click', hideLore);
        // Event listeners para pausa
        pauseBtn.addEventListener('click', togglePause);
    }

    // Función para actualizar el título de la pestaña
    function updateTabTitle(seconds, state = 'battle') {
        if (state === 'break') {
            const mins = Math.floor(seconds / 60);
            const secs = seconds % 60;
            document.title = `🔄 ${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')} DESCANSO - Focus Soul`;
        } else if (state === 'victory') {
        document.title = "PACTO CUMPLIDO - Focus Soul";
    } else if (state === 'lobby') {
        document.title = "FOCUS SOUL";
    } else {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        document.title = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')} - Focus Soul`;
    }
}

// --- SISTEMA DE PAUSA ---
function togglePause() {
    if (!isTimerRunning) return;
    
    isPaused = !isPaused;
    playSound(clickSound);
    
    if (isPaused) {
        pauseBtn.textContent = "▶️";
        pauseBtn.classList.add('paused');
        pauseBtn.title = "Reanudar ritual";
    } else {
        pauseBtn.textContent = "⏸️";
        pauseBtn.classList.remove('paused');
        pauseBtn.title = "Pausar ritual";
    }
}

// --- VOLVER AL MENÚ MEJORADO ---
function returnToMenu() {
    messageScreen.classList.add('hidden');

    stopTimerParticles();
    clearInterval(timerInterval);
    clearInterval(breakInterval);
    
    battleScreen.classList.add('hidden');
    lobbyScreen.classList.remove('hidden');
    
    // RESETEAR ESTADOS
    isTimerRunning = false;
    isPaused = false;
    loadedSeconds = 0;
    unallocatedSeconds = 0;
    dealtSeconds = 0;
    pactInitialSeconds = 0;
    
    updateTimerDisplay(0);
    updateTabTitle(0, 'lobby');
    updateFavicon('lobby');
}
// Función para actualizar favicon dinámicamente
function updateFavicon(state) {
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    
    if (state === 'break') {
        link.href = 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🔄</text></svg>';
    } else if (state === 'victory') {
        link.href = 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎉</text></svg>';
    } else {
        link.href = 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>⚔️</text></svg>';
    }
    
    document.head.appendChild(link);
}

    // --- SISTEMA DE PARTÍCULAS DEL TIMER ---
function startTimerParticles() {
    // Limpiar partículas existentes
    timerParticlesContainer.innerHTML = '';
    
    // Crear partículas iniciales
    for (let i = 0; i < 15; i++) {
        createTimerSpark();
    }
    
    // Intervalo para crear nuevas partículas
    timerParticlesInterval = setInterval(() => {
        if (!battleScreen.classList.contains('hidden')) {
            createTimerSpark();
        }
    }, 300); // Partícula nueva cada 300ms
}

function stopTimerParticles() {
    clearInterval(timerParticlesInterval);
    timerParticlesContainer.innerHTML = '';
}

function createTimerSpark() {
    const spark = document.createElement('div');
    const types = ['type1', 'type2', 'type3'];
    const type = types[Math.floor(Math.random() * types.length)];
    spark.className = `timer-spark ${type}`;
    
    // Posición aleatoria dentro del área del timer (más concentradas en el centro)
    const centerX = 50; // 50% del ancho
    const centerY = 50; // 50% del alto
    const spread = 30; // Radio de dispersión alrededor del centro
    
    const posX = centerX + (Math.random() - 0.5) * spread;
    const posY = centerY + (Math.random() - 0.5) * spread;
    
    spark.style.left = `${posX}%`;
    spark.style.top = `${posY}%`;
    
    // Movimiento aleatorio
    const moveX = (Math.random() - 0.5) * 100; // -50px a +50px
    const moveY = (Math.random() - 0.5) * 100;
    
    spark.style.setProperty('--move-x', `${moveX}px`);
    spark.style.setProperty('--move-y', `${moveY}px`);
    
    // Tamaño y opacidad variables
    const sizeVariation = Math.random() * 0.5 + 0.5;
    spark.style.transform = `scale(${sizeVariation})`;
    
    // Duración de animación variable
    const duration = Math.random() * 2 + 3; // 3-5 segundos
    spark.style.animationDuration = `${duration}s`;
    
    // Delay inicial
    const delay = Math.random() * 2;
    spark.style.animationDelay = `${delay}s`;
    
    timerParticlesContainer.appendChild(spark);
    
    // Remover después de la animación
    setTimeout(() => {
        if (spark.parentNode) {
            spark.parentNode.removeChild(spark);
        }
    }, (duration + delay) * 1000);
}
    function createSparks() {
        sparksInterval = setInterval(() => {
            if (!lobbyScreen.classList.contains('hidden')) {
                createSpark();
            }
        }, 100);
    }

    function createSpark() {
        const spark = document.createElement('div');
        spark.className = 'spark';
        
        // Posición aleatoria en el ancho
        const left = Math.random() * 100;
        spark.style.left = `${left}vw`;
        
        // Tamaño aleatorio
        const size = Math.random() * 3 + 1;
        spark.style.width = `${size}px`;
        spark.style.height = `${size}px`;
        
        // Opacidad aleatoria
        spark.style.opacity = Math.random() * 0.7 + 0.3;
        
        // Duración aleatoria
        const duration = Math.random() * 2 + 2;
        spark.style.animationDuration = `${duration}s`;
        
        sparksContainer.appendChild(spark);
        
        // Remover después de la animación
        setTimeout(() => {
            if (spark.parentNode) {
                spark.parentNode.removeChild(spark);
            }
        }, duration * 1000);
    }

    function showInstructions() {
        playSound(clickSound);
        instructionsScreen.classList.remove('hidden');
    }

    function hideInstructions() {
        playSound(clickSound);
        instructionsScreen.classList.add('hidden');
    }

    function startBattle() {
        const hoursSelect = document.getElementById('hours-offering');
        const selectedValue = parseInt(hoursSelect.value);
        
        if (isNaN(selectedValue) || selectedValue === 0) {
            alert('Por favor, selecciona una duración para tu pacto.');
            return;
        }
        
        playSound(clickSound);
        pactInitialSeconds = selectedValue * 3600;
        unallocatedSeconds = pactInitialSeconds;
        loadedSeconds = 0;
        dealtSeconds = 0;
        
        // Elegir un jefe aleatorio y guardarlo
        currentBoss = JEFES[Math.floor(Math.random() * JEFES.length)];
        backgroundContainer.style.backgroundImage = `url('${currentBoss.fondoUrl}')`;
        bossImage.src = currentBoss.imagenUrl;
        bossName.textContent = currentBoss.nombre;
    
        lobbyScreen.classList.add('hidden');
        battleScreen.classList.remove('hidden');
        
        // INICIAR PARTÍCULAS DEL TIMER
        startTimerParticles();
        
        resetForNextRound();
    }

        // --- FUNCIONES PARA EL SISTEMA DE LORE ---
    function showLore() {
        if (!currentBoss) return;
        
        playSound(clickSound);
        
        loreTitle.textContent = currentBoss.nombre;
        loreText.textContent = currentBoss.lore;
        
        loreScreen.classList.remove('hidden');
    }

    function hideLore() {
        playSound(clickSound);
        loreScreen.classList.add('hidden');
    }

    function modifyLoadedTime(seconds, buttonElement = null) {
        playSound(clickSound);
        if (unallocatedSeconds >= seconds) {
            unallocatedSeconds -= seconds;
            loadedSeconds += seconds;
            if (isTimerRunning) {
                targetTime += seconds * 1000;
            }
            updateUI();
        } else {
            if (buttonElement) {
                buttonElement.classList.add('shake-error');
                setTimeout(() => buttonElement.classList.remove('shake-error'), 300);
            }
        }
    }

    function launchAttack() {
        playSound(clickSound);
        if (loadedSeconds > 0) {
            isTimerRunning = true;
            startTimer(loadedSeconds);
        }
    }

    function startTimer(duration) {
        isTimerRunning = true;
        isPaused = false;
        battleScreen.classList.add('timer-running');
        
        // MOSTRAR BOTÓN DE PAUSA
        pauseBtn.classList.remove('hidden');
        pauseBtn.textContent = "⏸️";
        pauseBtn.classList.remove('paused');
        battleScreen.classList.add('timer-running');
        updateTabTitle(duration, 'battle');
        updateFavicon('battle');
        battleScreen.classList.add('timer-running');
        document.querySelectorAll('.load-time-controls button, #launch-attack-btn').forEach(b => b.disabled = true);
        const add10MinBtn = document.querySelector('.load-time-btn[data-time="10"]');
        add10MinBtn.disabled = false;
        
        targetTime = Date.now() + duration * 1000;
        
        clearInterval(timerInterval);
        timerInterval = setInterval(() => {
            if (isPaused) {
                targetTime += 1000;
                return;
            }
            const timeRemaining = Math.round((targetTime - Date.now()) / 1000);
            updateTimerDisplay(timeRemaining);
            updateTabTitle(timeRemaining, 'battle'); // ← AGREGAR ESTA LÍNEA
            
            if (timeRemaining <= 0) {
                clearInterval(timerInterval);
                handleImpact();
            }
        }, 1000);
    }
    
    function handleImpact() {
        isTimerRunning = false;
        // OCULTAR BOTÓN DE PAUSA
        pauseBtn.classList.add('hidden');
        playSound(impactSound);
        isTimerRunning = false;
        battleScreen.classList.remove('timer-running');
        dealtSeconds += loadedSeconds;
        
        // EFECTO DE IMPACTO VISUAL ÉPICO
        bossImage.style.filter = 'brightness(2) sepia(1)';
        healthBarInner.style.background = '#FF0000';
        healthBarInner.style.boxShadow = '0 0 20px #FF0000';
        
        setTimeout(() => {
            bossImage.style.filter = 'brightness(1) sepia(0)';
            healthBarInner.style.background = 'var(--color-health-red)';
            healthBarInner.style.boxShadow = '0 0 10px rgba(184, 0, 0, 0.5)';
            loadedSeconds = 0;
            updateHealthBarImpact();
            showBreakScreen();
        }, 500);
    }
    function showBreakScreen() {
        updateTabTitle(0, 'break');
        updateFavicon('break');
        
        playSound(breakSound);
        let breakRemaining = BREAK_DURATION;
        breakExtended = false;
        
        // OCULTAR TIMER PRINCIPAL Y MOSTRAR FOGATA
        battleScreen.classList.add('break-active');
        document.getElementById('bonfire-container').classList.remove('hidden');
        
        // USAR TIMER DE DESCANSO EN VEZ DEL PRINCIPAL
        updateBreakTimerDisplay(breakRemaining);
        
        showMessage("", 0, null, {  // Título vacío porque lo movimos al timer
            yesText: "Extender Descanso (+5min)",
            noText: "Saltar Descanso",
            onYes: extendBreak,
            onNo: skipBreak
        });
        
        clearInterval(breakInterval);
        breakInterval = setInterval(() => {
            breakRemaining--;
            updateBreakTimerDisplay(breakRemaining);
            
            if (breakRemaining <= 0) {
                clearInterval(breakInterval);
                endBreak();
            }
        }, 1000);
    }
    function updateBreakTimerDisplay(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        document.getElementById('break-timer').textContent = 
            `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
        
        // Actualizar también el título de la pestaña
        updateTabTitle(seconds, 'break');
    }

    function extendBreak() {
        playSound(clickSound);
        if (!breakExtended) {
            breakExtended = true;
            // Extender el descanso usando el break timer
            const currentBreakTime = parseInt(document.getElementById('break-timer').textContent.split(':')[0]) * 60 + 
                                    parseInt(document.getElementById('break-timer').textContent.split(':')[1]);
            const newBreakTime = currentBreakTime + (5 * 60);
            updateBreakTimerDisplay(newBreakTime);
            confirmYesBtn.disabled = true;
            confirmYesBtn.textContent = "Descanso Extendido";
        }
    }

    function skipBreak() {
        playSound(clickSound);
        clearInterval(breakInterval);
        endBreak();
    }

    function endBreak() {
        // OCULTAR FOGATA Y RESTAURAR TIMER PRINCIPAL
        document.getElementById('bonfire-container').classList.add('hidden');
        battleScreen.classList.remove('break-active');
        messageScreen.classList.add('hidden');
        
        // RESETEAR COMPLETAMENTE PARA NUEVO ATAQUE
        loadedSeconds = 0;
        resetForNextRound();
    }

    function resetForNextRound() {
        isTimerRunning = false;
        // OCULTAR BOTÓN DE PAUSA
        pauseBtn.classList.add('hidden');
        battleScreen.classList.remove('timer-running');
        document.querySelectorAll('.action-navbar button').forEach(b => {
            b.classList.remove('hidden');
            b.disabled = false;
        });
        launchAttackBtn.disabled = true;
        updateUI();
        // Asegurarse que el timer muestre 00:00
        updateTimerDisplay(0);
        updateTabTitle(0, 'battle');
        updateFavicon('battle');
    }
    function confirmAbandon() {
        playSound(clickSound);
        
        // SI EL TIMER NO ESTÁ CORRIENDO, VOLVER DIRECTAMENTE
        if (!isTimerRunning) {
            returnToMenu();
            return;
        }
        
        // SI ESTÁ CORRIENDO, PREGUNTAR CONFIRMACIÓN
        isPaused = true;
        showMessage("¿ROMPER EL PACTO SAGRADO?", 0, null, {
            yesText: "RENDIRME AL TEMOR",
            noText: "SEGUIR EN BATALLA",
            onYes: returnToMenu,
            onNo: () => {
                isPaused = false;
                messageScreen.classList.add('hidden');
            }
        });
    }
    
    function showFinalVictory() {
        // DETENER PARTÍCULAS DEL TIMER
        stopTimerParticles();
        battleScreen.classList.add('hidden');
        showMessage("PACTO CUMPLIDO", 0, () => setTimeout(() => location.reload(), 3000));
    }

    function updateUI() {
        launchAttackBtn.disabled = loadedSeconds === 0;
        updateHealthBarPreview();
        const displaySeconds = isTimerRunning ? Math.round((targetTime - Date.now())/1000) : loadedSeconds;
        updateTimerDisplay(displaySeconds);
    }

    function updateHealthBarPreview() {
        if (pactInitialSeconds === 0) return;
        
        const healthPercent = (unallocatedSeconds / pactInitialSeconds) * 100;
        healthBarInner.style.width = `${healthPercent}%`;
    }

    function updateHealthBarImpact() {
        updateHealthBarPreview();
    }

    function updateTimerDisplay(seconds, prefix = "") {
        const mins = Math.max(0, Math.floor(seconds / 60));
        const secs = Math.max(0, seconds % 60);
        
        // Actualizar minutos y segundos por separado
        timerMinutes.textContent = String(mins).padStart(2, '0');
        timerSeconds.textContent = String(secs).padStart(2, '0');
    }

    function showMessage(title, duration = 0, callback = null, confirmation = null) {
        messageTitle.textContent = title;
        
        if (confirmation) {
            confirmationButtons.classList.remove('hidden');
            confirmYesBtn.textContent = confirmation.yesText;
            confirmNoBtn.textContent = confirmation.noText;
            confirmYesBtn.onclick = confirmation.onYes;
            confirmNoBtn.onclick = confirmation.onNo;
            confirmYesBtn.disabled = false;
        } else {
            confirmationButtons.classList.add('hidden');
        }
        
        messageScreen.classList.remove('hidden');

        if (duration > 0) {
            setTimeout(() => {
                messageScreen.classList.add('hidden');
                if (callback) callback();
            }, duration);
        }
    }

    function playSound(audioElement) {
        // Solo reproducir si el usuario ya ha interactuado con la página
        if (document.querySelector('button:focus')) {
            audioElement.currentTime = 0;
            audioElement.play().catch(e => console.log("Audio no pudo reproducirse:", e));
        }
    }

    initialize();
});