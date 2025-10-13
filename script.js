// ===================================================================================
// CONFIGURACIÓN - ¡AQUÍ ES DONDE PONÉS TUS DATOS!
// ===================================================================================
const JEFES = [
    {   
        id: 'horrax',
        nombre: "Horrax, el Vástago de la Escoria", 
        imagenUrl: 'img/horrax1.png',
        fondoUrl: 'img/horraxBg.png',
        lore: "Horrax no fue derrotado por un enemigo, sino por su propio martillo. En su obsesión por la rutina inquebrantable, trató su espíritu como hierro y su voluntad como fuego, golpeándose a sí mismo hasta quebrarse. Representa el burnout y la disciplina tóxica, el recordatorio de que la verdadera fuerza no reside en la resistencia infinita, sino en el equilibrio entre el esfuerzo y el descanso."
    },
    { 
        id: 'alberic',
        nombre: "Alberic, el Escriba sin Rostro", 
        imagenUrl: 'img/alberic.png',        
        fondoUrl: 'img/albericBg.png',
        lore:'Alberic fue un erudito que buscó el conocimiento absoluto, pero en su afán olvidó que el saber no es un tesoro para ser acumulado, sino una herramienta para ser usada. Ahora es una prisión de su propia biblioteca, un eco de la procrastinación que nace de la sobrecarga de información. Cada golpe contra él es un acto de decisión, una página leída en lugar de apilada, una idea ejecutada en lugar de solo pensada.'
    },
    { 
        id: 'morwenna',
        nombre: "Morwenna, Madre de los Brotes Marchitos", 
        imagenUrl: 'img/morwenna.png',        
        fondoUrl: 'img/morwennaBg.png',
        lore:'Morwenna fue una vez la guardiana de las pasiones y los sueños incipientes. Pero por cada talento no cultivado, por cada idea abandonada, una de sus flores se marchitó. Ahora es un monumento al potencial perdido y a la apatía que crece sobre los jardines descuidados del alma. Derrotarla es un acto de reencuentro: regar las semillas de la vieja inspiración o arrancar las malas hierbas del arrepentimiento para plantar algo nuevo.'
    },
    { 
        id: 'lysandra',
        nombre: "Lysandra, la Vidente Estancada", 
        imagenUrl: 'img/lysandra.png',        
        fondoUrl: 'img/lysandraBg.png',
        lore:'Condenada a ver todos los hilos del tiempo, Lysandra se ahogó en ellos. Obsesionada con los errores del pasado y aterrorizada por las infinitas posibilidades del futuro, perdió la capacidad de existir en el único momento que importa: el ahora. Luchar contra ella es un ejercicio de presencia, un juramento para anclar la mente en el presente y actuar, sin el peso de lo que fue ni la ansiedad de lo que será.'
    },
    { 
        id: 'aurelian',
        nombre: "Aurelian, El Juez Saliente", 
        imagenUrl: 'img/aurelian.png',        
        fondoUrl: 'img/aurelianBg.png',
        lore:'Aurelian es la manifestación del Síndrome del Impostor y el miedo paralizante al juicio ajeno. No te ataca directamente, sino que te aplasta con el peso de tu propia autocrítica. Es el miedo a no ser suficiente, a ser "descubierto" como un fraude. Se sienta en silencio, observando, y su arma principal es un gran espejo que no refleja tu imagen, sino una versión grotesca y fallida de tus mayores inseguridades. La batalla contra él es una prueba de confianza en tu propio trabajo y en tu propio valor, a pesar de las imperfecciones.'
    },
    { 
        id: 'maro',
        nombre: "Maro, el Bufón Dorado", 
        imagenUrl: 'img/maro.png',        
        fondoUrl: 'img/maroBg.png',
        lore:'Maro es la encarnación de la distracción y la gratificación instantánea. No es un monstruo de fuerza bruta, sino un ladrón sutil que roba tu recurso más preciado: el tiempo y el foco. Se presenta como una figura juguetona y brillante, ofreciendo baratijas luminosas (el equivalente a notificaciones, videos cortos y el scroll infinito) que son placenteras en el momento pero te dejan vacío y con el día perdido. Su batalla no es un combate directo, sino una lucha por mantener la atención en tu objetivo mientras él llena la arena con señuelos irresistibles.'
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
    const bestiaryBtn = document.getElementById('bestiary-btn');
    const bestiaryModal = document.getElementById('bestiary-modal');
    const closeBestiaryBtn = document.getElementById('close-bestiary-btn');
    const bestiaryStats = document.getElementById('bestiary-stats');
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
    let minuteSaveCounter = 0;
    let currentBossId = null; // Guardará el ID del jefe actual


    // --- LOCAL STORAGE FUNCTIONS ---
    function getStats() {
        const statsString = localStorage.getItem('focusSoulStats');
        let parsedStats;

        try {
            parsedStats = statsString ? JSON.parse(statsString) : {};
        } catch (e) {
            console.error("Error al parsear focusSoulStats del localStorage:", e);
            parsedStats = {}; // Si hay error, inicializa vacío
        }

        // Garantiza que totalMinutos siempre es un número, por defecto 0
        parsedStats.totalMinutos = typeof parsedStats.totalMinutos === 'number' ? parsedStats.totalMinutos : 0;
        
        // Garantiza que bestiasMatadas siempre es un objeto
        parsedStats.bestiasMatadas = typeof parsedStats.bestiasMatadas === 'object' && parsedStats.bestiasMatadas !== null ? parsedStats.bestiasMatadas : {};

        return parsedStats;
    }

    function saveStats(stats) {
        localStorage.setItem('focusSoulStats', JSON.stringify(stats));
    }

function getRank(totalMinutos) {
        const safeTotalMinutos = typeof totalMinutos === 'number' ? totalMinutos : 0;
        const totalHours = safeTotalMinutos / 60;

        // El orden de los IF es crucial, de mayor a menor.
        // El caso base (menos de 1 hora) DEBE ser el último `return` o el primer `if` con `totalHours < 1`
        if (totalHours >= 1000) return { rango: "Entidad Cósmica", lore: "Has trascendido las barreras del tiempo y la mente, fundiéndote con la esencia del foco eterno.", icon: "✨" };
        if (totalHours >= 750) return { rango: "Mente Ancestral", lore: "Tu voluntad es tan antigua como el primer pensamiento. Nada escapa a tu concentración.", icon: "🧠" };
        if (totalHours >= 500) return { rango: "Heraldo del Abismo", lore: "Has dominado los vacíos de la distracción. El abismo te obedece.", icon: "🌌" };
        if (totalHours >= 400) return { rango: "Alma Trascendida", lore: "Tu espíritu se ha elevado más allá de las limitaciones mundanas. La concentración es tu estado natural.", icon: "🌀" };
        if (totalHours >= 300) return { rango: "Iluminado", lore: "La luz de tu enfoque es una guía para otros. Has encontrado la claridad perfecta.", icon: "🌟" };
        if (totalHours >= 200) return { rango: "Arconte del Silencio", lore: "Gobiernas los dominios de la calma. El ruido del mundo se disipa ante tu presencia.", icon: "🦉" };
        if (totalHours >= 150) return { rango: "Señor del Pacto", lore: "Los rituales del foco son tu dominio. Comandas la voluntad con maestría absoluta.", icon: "👑" };
        if (totalHours >= 100) return { rango: "Maestro del Ritual", lore: "Tu disciplina es un arma legendaria. Has convertido el tiempo en tu mayor aliado.", icon: "⚖️" };
        if (totalHours >= 75) return { rango: "Cazador de Ecos", lore: "Dominas el arte de rastrear y someter las distracciones más escurridizas.", icon: "🗡️" };
        if (totalHours >= 50) return { rango: "Veterano de la Forja", lore: "Has resistido innumerables batallas. La Forja es tu segundo hogar.", icon: "🔥" };
        if (totalHours >= 25) return { rango: "Guardián del Conocimiento", lore: "Proteges las verdades con tu atención inquebrantable. Tu foco es un escudo.", icon: "🛡️" };
        if (totalHours >= 10) return { rango: "Erudito", lore: "Has comenzado a desentrañar los misterios del saber. Tu curiosidad es insaciable.", icon: "📖" };
        if (totalHours >= 5) return { rango: "Acólito", lore: "Los primeros ritos han sido aprendidos. La disciplina comienza a tomar forma.", icon: "📜" };
        if (totalHours >= 1) return { rango: "Iniciado", lore: "Has sellado tu primer pacto. La aventura apenas comienza.", icon: "🕯️" };
        
        // ESTE ES EL CASO BASE CORREGIDO que faltaba para 0 minutos
        return { rango: "Neófito", lore: "Un alma nueva en la senda del foco. El camino se abre ante ti.", icon: "🌑" };
    }
    // --- INITIALIZATION ---
    function initialize() {
            // Pantalla de bienvenida inteligente
    const splashScreen = document.getElementById('splash-screen');
    const firstVisit = !sessionStorage.getItem('focusSoulSplashSeen');
    
    if (firstVisit) {
        splashScreen.classList.remove('hidden');
        
        const hideSplash = () => {
            playSound(clickSound);
            splashScreen.classList.add('hidden');
            sessionStorage.setItem('focusSoulSplashSeen', 'true');
            // Remover listeners
            document.removeEventListener('click', hideSplash);
            document.removeEventListener('keydown', hideSplash);
            splashScreen.removeEventListener('click', hideSplash);
        };
        
        document.addEventListener('click', hideSplash);
        document.addEventListener('keydown', hideSplash);
        splashScreen.addEventListener('click', hideSplash);
    } else {
        splashScreen.classList.add('hidden');
    }
    
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
        bossImage.addEventListener('click', showLore); // ← AGREGAR ESTA LÍNEA
        closeLoreBtn.addEventListener('click', hideLore);
        // Event listeners para pausa
        pauseBtn.addEventListener('click', togglePause);
        bestiaryBtn.addEventListener('click', showBestiary);
        closeBestiaryBtn.addEventListener('click', () => {
            bestiaryModal.classList.add('hidden');
        });
    }
    // --- LOCAL STORAGE & BESTIARY FUNCTIONS ---


    function findFavoriteVictim(bestiasMatadas) {
        if (!bestiasMatadas || Object.keys(bestiasMatadas).length === 0) return null;
        
        let favoriteId = null;
        let maxKills = 0;

        for (const bossId in bestiasMatadas) {
            if (bestiasMatadas[bossId] > maxKills) {
                maxKills = bestiasMatadas[bossId];
                favoriteId = bossId;
            }
        }
        
        // Buscar el nombre completo del jefe usando su ID
        const favoriteBoss = JEFES.find(jefe => jefe.id === favoriteId);
        if (favoriteBoss) {
            return { id: favoriteId, nombre: favoriteBoss.nombre, kills: maxKills };
        }
        return null;
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
        pauseBtn.textContent = "▶";
        pauseBtn.classList.add('paused');
        pauseBtn.title = "Reanudar ritual";
    } else {
        pauseBtn.textContent = "❚❚";
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
        currentBossId = currentBoss.id; 
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
        pauseBtn.textContent = "❚❚";
        pauseBtn.classList.remove('paused');
        battleScreen.classList.add('timer-running');
        updateTabTitle(duration, 'battle');
        updateFavicon('battle');
        battleScreen.classList.add('timer-running');
        document.querySelectorAll('.load-time-controls button, #launch-attack-btn').forEach(b => b.disabled = true);
        const add10MinBtn = document.querySelector('.load-time-btn[data-time="10"]');
        add10MinBtn.disabled = false;
        
        targetTime = Date.now() + duration * 1000;
        minuteSaveCounter = 0; // Reiniciamos el contador
        
        clearInterval(timerInterval);
        timerInterval = setInterval(() => {
            if (isPaused) {
                targetTime += 1000;
                return;
            }
            const timeRemaining = Math.round((targetTime - Date.now()) / 1000);
            
            // --- LÓGICA DE GUARDADO CADA MINUTO (AÑADIR ESTO) ---
            minuteSaveCounter++;
            if (minuteSaveCounter >= 60) {
                const stats = getStats();
                stats.totalMinutos = (stats.totalMinutos || 0) + 1;
                saveStats(stats);
                minuteSaveCounter = 0;
            }
            // --- FIN DEL BLOQUE AÑADIDO ---

            updateTimerDisplay(timeRemaining);
            updateTabTitle(timeRemaining, 'battle');
            
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

        // LÓGICA DEL BESTIARIO AÑADIDA AQUÍ
        const stats = getStats();
        // stats.totalAtaques += 1;
        saveStats(stats);

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

        if (currentBoss) { // Nos aseguramos de que haya un jefe actual
        const stats = getStats();
        // Si el jefe no existe en el bestiario, lo inicializa. Si existe, le suma 1.

        // LÓGICA DEL BESTIARIO: Usar currentBossId
        if (currentBossId) { // Nos aseguramos de que haya un jefe actual
            const stats = getStats();
            stats.bestiasMatadas[currentBossId] = (stats.bestiasMatadas[currentBossId] || 0) + 1;
            saveStats(stats);
        }
        stats.bestiasMatadas[currentBoss.nombre] = (stats.bestiasMatadas[currentBoss.nombre] || 0) + 1;
        saveStats(stats);
    }
        showMessage("PACTO CUMPLIDO", 0, () => setTimeout(() => location.reload(), 3000));
    }

    // --- AÑADIR ESTA NUEVA FUNCIÓN ---
    function showBestiary() {
        const stats = getStats();
        const favorite = findFavoriteVictim(stats.bestiasMatadas);
        const rank = getRank(stats.totalMinutos);
        const totalHours = (stats.totalMinutos / 60).toFixed(1);

        let content = `
            <div class="bestiary-header">
                <span class="rank-icon">${rank.icon}</span>
                <div class="rank-info">
                    <h3 class="rank-title">${rank.rango}</h3>
                    <p class="rank-lore"><i>"${rank.lore}"</i></p>
                </div>
            </div>
            <hr class="bestiary-divider">
            <div class="bestiary-stats-grid">
                <div>
                    <h4>Tiempo Bajo Tensión</h4>
                    <p>${totalHours} horas</p>
                </div>
                <div>
                    <h4>Bestias Cazadas Totales</h4>
                    <p>${Object.values(stats.bestiasMatadas).reduce((sum, current) => sum + current, 0)}</p>
                </div>
            </div>
            <hr class="bestiary-divider">
        `;
        
        if (favorite && favorite.kills > 0) {
            content += `
                <div class="favorite-victim">
                    <h4>Tu Víctima Favorita:</h4>
                    <p>${favorite.nombre} (${favorite.kills} ${favorite.kills > 1 ? 'veces' : 'vez'})</p>
                    </div>
                <hr class="bestiary-divider">
            `;
        }

        content += `
            <h4 id="boss-kill-title">Conteo de Caza Detallado:</h4>
            <ul class="boss-kill-list">
        `;
        
        if (Object.keys(stats.bestiasMatadas).length === 0) {
            content += "<li>Aún no has cazado ninguna bestia.</li>";
        } else {
            // Aseguramos que se muestren todos los jefes, incluso si tienen 0 kills
            JEFES.forEach(jefe => {
                const count = stats.bestiasMatadas[jefe.id] || 0;
                if (count > 0) {
                    content += `<li>${jefe.nombre}: ${count} ${count === 1 ? 'vez' : 'veces'}</li>`;
                } else {
                    content += `<li class="unhunted-boss">${jefe.nombre}: (No cazado aún)</li>`;
                }
            });
        }
        content += `</ul>
        <hr class="bestiary-divider">
        `;
        
        bestiaryStats.innerHTML = content;
        bestiaryModal.classList.remove('hidden');
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