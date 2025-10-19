const JEFES = [
    {   
        id: 'horrax',
        nombre: "Horrax, el Vástago de la Escoria",
        imagenUrl: 'img/horrax.png',
        fondoUrl: 'img/horraxBg.png',
        imagenSelect: 'img/horraxSl.webp',
        lore: `Horrax no fue derrotado por un enemigo, sino por el yunque de su propia obsesión. Forjó su voluntad en una disciplina de hierro, martillando sin pausa hasta que solo quedó la escoria de lo que pudo ser un hombre.
        <br>
        Es la encarnación de la autoexplotación, la crítica feroz a una cultura que venera el esfuerzo infinito hasta consumir el alma. Su martillo no forja, solo pulveriza. Su yunque no templa, solo aplasta.
        <br>
        Las primeras cadenas de <strong>Nyr</strong> salieron de su fragua, un acto de ceguera donde creó las prisiones que luego lo estrangularían a él.`,
        color: '#432716'
    },
    {
        id: 'alberic',
        nombre: "Alberic, el Escriba sin Rostro", 
        imagenUrl: 'img/alberic.png',        
        fondoUrl: 'img/albericBg.png',
        imagenSelect: 'img/albericSl.webp',  
        lore: `Alberic creyó que el conocimiento era un fin en sí mismo. Devoró bibliotecas enteras, acumulando sabiduría como un avaro acumula oro, hasta que el peso de lo inútil le arrancó el rostro y la identidad.
        <br>
        Es el monumento a la procrastinación intelectual, al que prefiere el mapa antes que el territorio. Su castillo de pergaminos es una tumba con vista al cielo del saber que nunca usó.
        <br>
        Sus textos contienen las máscaras que <strong>Theron</strong> ansía y los futuros que <strong>Lysandra</strong> no pudo evitar; ecos de un saber que nunca trascendió el papel.`,
        color: '#432716'
    },
    {
        id: 'morwenna',
        nombre: "Morwenna, Madre de los Brotes Marchitos",
        imagenUrl: 'img/morwenna.png',        
        fondoUrl: 'img/morwennaBg.png',
        imagenSelect: 'img/morwennaSl.webp',        
        lore: `Morwenna es el jardín de los comienzos abortados. Cada sueño postergado, cada talento abandonado por miedo o pereza, hizo que una de sus flores se pudriera en el tallo.
        <br>
        No es la muerte, es algo peor: la lenta necrosis del potencial. Su agonía es un recordatorio de que la peor prisión es la de lo que pudo ser y nunca fue.
        <br>
        El jardín que <strong>Kaelen</strong> no regó y las semillas que <strong>Maro</strong> pisoteó en su baile, son los hijos que ella llora.`,
        color: '#C5A230'
    },
    {
        id: 'lysandra',
        nombre: "Lysandra, la Vidente Estancada",
        imagenUrl: 'img/lysandra.png',        
        fondoUrl: 'img/lysandraBg.png',
        imagenSelect: 'img/lysandraSl.webp',        
        lore: `Lysandra no vive en el tiempo, es el tiempo quien vive en ella. Un río de ayeres y mañanas que la ahoga, impidiéndole habitar el único instante que es real: el ahora.
        <br>
        Es la parálisis de la hiperconsciencia, la maldición de ver demasiados caminos y no poder pisar ninguno. Su lucha no es contra un enemigo, sino contra la tiranía de la propia mente atrapada en el eterno tráfico del tiempo.
        <br>
        En su calvario, atestiguó la forja de <strong>Horrax</strong> y el encadenamiento de <strong>Nyr</strong>, visiones que la clavaron en una cruz de pasado y futuro.`,
        color: '#337B96'
    },
    {
        id: 'aurelian',
        nombre: "Aurelian, El Juez Saliente",
        imagenUrl: 'img/aurelian.png',        
        fondoUrl: 'img/aurelianBg.png',
        imagenSelect: 'img/aurelianSl.webp',        
        lore: `Aurelian es el eco internalizado de cada "no eres suficiente". No juzga con una espada, sino con el silencio ensordecedor de la autocrítica convertida en verdugo.
        <br>
        Su espejo no miente, pero solo muestra la herida, nunca la cura. Es el miedo a ser descubierto como un fraude, hecho carne y sentado en un trono de dudas propias.
        <br>
        En su reflejo distorsionado, <strong>Theron</strong> busca una máscara y <strong>Kaelen</strong> ve los caminos que no tomó; todos son acusados por el mismo tribunal interior.`,
        color: '#1D2522'
    },
    {
        id: 'maro',
        nombre: "Maro, el Bufón Dorado",
        imagenUrl: 'img/maro.png',        
        fondoUrl: 'img/maroBg.png',
        imagenSelect: 'img/maroSl.webp',        
        lore: `Maro es el susurro seductor de la distracción. No roba la vida con un cuchillo, sino con una promesa vacía de diversión eterna. Su oro es falso, su risa un cascabel que anestesia el alma.
        <br>
        Es la crítica a la gratificación instantánea, al desplazamiento infinito que nos aleja de nuestro propósito. Su reino es un carnaval de nada, donde se intercambia el foco por fuegos artificiales para la mente.
        <br>
        Es la pesadilla dorada en la que <strong>Vesper</strong> quiere creer, y la niebla que asfixia el jardín de <strong>Morwenna</strong>.`,
        color: '#362C0C'
    },
    {
        id: 'vesper',
        nombre: "Vesper, el Festín Vacío", 
        imagenUrl: 'img/vesper.png',        
        fondoUrl: 'img/vesperBg.png',
        imagenSelect: 'img/vesperSl.webp', 
        lore: `Vesper es el hambre que persiste después del banquete. Gobernó la noche, creyendo que la validación externa podría llenar el vacío interno. Cada brindis fue un clavo en su ataúd de ébano, cada elogio, un sorbo de hiel.
        <br>
        Es el cadáver de la fiesta, el espectro del "qué dirán" que sacrifica la autenticidad en el altar de la aprobación. Su trono es una copa vacía, su cetro, un suspiro.
        <br>
        En su espiral, compitió con <strong>Maro</strong> por las migajas de atención, sin ver que ambos servían al mismo dios de la nada.`,
        color: '#283F52'
    },
    {
        id: 'kaelen',
        nombre: "Kaelen, el Indeciso", 
        imagenUrl: 'img/kaelen.png',        
        fondoUrl: 'img/kaelenBg.png',
        imagenSelect: 'img/kaelenSl.webp', 
        lore: `Kaelen es el cementerio de las posibilidades. Su tragedia no es la falta de potencial, sino la maldición de verlo todo y atreverse con nada. Cada camino no tomado le creció un brazo fantasma, un miembro inútil de un cuerpo paralizado.
        <br>
        Es la parálisis por análisis, el miedo a elegir y equivocarse, hecho un hombre-spectro. Sus incontables brazos no son un símbolo de poder, sino de un peso insoportable. Se dice que sus brazos son un eco de los incontables "yo" que nunca pudo ser, reflejados y fragmentados en la forma de <strong>Albedo</strong>.
        <br>
        Podría haber sido el discípulo de <strong>Alberic</strong> o el heredero de <strong>Horrax</strong>, pero en su hesitación, solo logró ser el epítome de la potencialidad desperdiciada.`,
        color: '#f3f3f3'
    },
    {
        id: 'nyr',
        nombre: "Nyr, el Santo Encadenado",
        imagenUrl: `img/nyr.png`,        
        fondoUrl: `img/nyrBg.png`,
        imagenSelect: 'img/nyrSl.webp', 
        lore: `Nyr es la bondad convertida en patología. Se entregó tanto a las causas ajenas que olvidó cómo tener una propia. Sus cadenas no son de metal, son de expectativas y deudas emocionales, cada una un hilo de oro que le roba un pedazo de voluntad.
        <br>
        Es la crítica a la abnegación sin límites, al santo que salva a todos menos a sí mismo. Su martirio no es sagrado, es un recordatorio mudo de que el servicio debe nacer de la plenitud, no del vacío.
        <br>
        Las cadenas que <strong>Horrax</strong> forjó con ciega disciplina, son el mismo dogma que <strong>Lysandra</strong> previó; él es el mártir final de una cadena de errores nobles.`,
        color: '#362C0C'
    },
    {
        id: 'theron',
        nombre: "Theron, el Eco de la Perfección",
        imagenUrl: `img/thereon.png`,        
        fondoUrl: `img/thereonBg.png`,
        imagenSelect: 'img/theronSl.webp', 
        lore: `Theron es el vacío que queda tras perseguir un espejismo. Nació de la comparación y se alimenta de la insatisfacción. Sus máscaras no son para esconderse, son desesperados intentos de encontrar un rostro que no le pertenece.
        <br>
        Es la personificación del "síndrome del impostor", la criatura que el mercado de las ideales inalcanzables crea y luego desecha. Su baile grotesco es el de quien busca en el exterior la validación que solo puede nacer dentro.
        <br>
        Las máscaras que sostiene son la respuesta enferma al espejo de <strong>Aurelian</strong> y la antítesis de la parálisis de <strong>Kaelen</strong>: un activismo frenético hacia la nada.`,
        color: '#475C55'
    },
    {
        id: 'albedo',
        nombre: "Albedo, la Musa Fragmentada",
        imagenUrl: 'img/albedo.png',
        fondoUrl: 'img/albedoBg.png',
        imagenSelect: 'img/albedoSl.webp', 
        lore: `Albedo es el naufragio de la identidad. Fue el espejo donde otros se vieron reflejados, hasta que se pulverizó bajo el peso de las expectativas ajenas. No tiene forma porque se la dieron toda, y en el proceso, no le dejaron nada.
        <br>
        Su silueta es un torbellino de rostros prestados, un coro de voces que ahogan la propia. Luchar contra ella es buscar la autenticidad en un mundo de ruido.
        <br>
        En su fragmentación, absorbió el ansia de máscaras de <strong>Theron</strong>, la acumulación de datos de <strong>Alberic</strong> y la indecisión de <strong>Kaelen</strong>. Es el collage definitivo de un alma despedazada por el mundo. Se dice que sus múltiples semblantes son un reflejo grotesco de los incontables "yo" que <strong>Kaelen</strong> jamás pudo elegir, un espejo distorsionado de cada vocación que él abandonó antes de ser asumida.`,
        color: '#362C0C'
    },
];
function precargarTodasLasImagenes() {
    console.log('🔄 Precargando todas las imágenes...');
    
    JEFES.forEach(jefe => {
        // Precargar imagen del jefe
        const imgJefe = new Image();
        imgJefe.src = jefe.imagenUrl;
        
        // Precargar fondo del jefe  
        const imgFondo = new Image();
        imgFondo.src = jefe.fondoUrl;
        
        console.log(`✅ Precargado: ${jefe.nombre}`);
    });
    
    console.log('🎯 TODAS las imágenes precargadas en caché');
}

// Ejecutar la precarga INMEDIATAMENTE
precargarTodasLasImagenes();

// Configuración de sonidos (agregá tus archivos en la carpeta sounds/)

// ===================================================================================
// FUNCIÓN GETRANK - MOVER AL INICIO (ANTES DE LOGROS)
// ===================================================================================
function getRank(totalMinutos) {
    const safeTotalMinutos = typeof totalMinutos === 'number' ? totalMinutos : 0;
    const totalHours = safeTotalMinutos / 60;

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
    
    return { rango: "Neófito", lore: "Un alma nueva en la senda del foco. El camino se abre ante ti.", icon: "🌑" };
}
// ===================================================================================
// SISTEMA DE LOGROS / TROFEOS
// ===================================================================================
// ===================================================================================
// SISTEMA DE 30 LOGROS / TROFEOS
// ===================================================================================
const LOGROS = [
    // === PROGRESO GENERAL (8) ===
    {
        id: 'primer_minuto',
        titulo: 'Primer Minuto',
        descripcion: 'Completa tu primer minuto de enfoque',
        icono: '⚡',
        condicion: (stats) => stats.totalMinutos >= 1
    },
    {
        id: 'primera_hora',
        titulo: 'Primera Hora',
        descripcion: 'Completa una hora total de enfoque',
        icono: '🕐',
        condicion: (stats) => stats.totalMinutos >= 60
    },
    {
        id: 'maraton_focus',
        titulo: 'Maratón de Foco',
        descripcion: 'Alcanza 10 horas de enfoque total',
        icono: '🏁',
        condicion: (stats) => stats.totalMinutos >= 600
    },
    {
        id: 'veterano_tiempo',
        titulo: 'Veterano del Tiempo',
        descripcion: 'Alcanza 25 horas de enfoque total',
        icono: '⏳',
        condicion: (stats) => stats.totalMinutos >= 1500
    },
    {
        id: 'leyenda_focus',
        titulo: 'Leyenda del Foco',
        descripcion: 'Alcanza 100 horas de enfoque total',
        icono: '🌟',
        condicion: (stats) => stats.totalMinutos >= 6000
    },
    {
        id: 'maestro_eterno',
        titulo: 'Maestro Eterno',
        descripcion: 'Alcanza 250 horas de enfoque total',
        icono: '🔮',
        condicion: (stats) => stats.totalMinutos >= 15000
    },
    {
        id: 'inmortal_focus',
        titulo: 'Inmortal del Foco',
        descripcion: 'Alcanza 500 horas de enfoque total',
        icono: '💀',
        condicion: (stats) => stats.totalMinutos >= 30000
    },
    {
        id: 'dios_tiempo',
        titulo: 'Dios del Tiempo',
        descripcion: 'Alcanza 1000 horas de enfoque total',
        icono: '👑',
        condicion: (stats) => stats.totalMinutos >= 60000
    },

    // === BESTIAS GENERAL (8) ===
    {
        id: 'primera_bestia',
        titulo: 'Primera Sangre',
        descripcion: 'Derrota a tu primera bestia',
        icono: '🩸',
        condicion: (stats) => Object.values(stats.bestiasMatadas).reduce((a, b) => a + b, 0) >= 1
    },
    {
        id: 'cazador_novato',
        titulo: 'Cazador Novato',
        descripcion: 'Derrota 5 bestias en total',
        icono: '🗡️',
        condicion: (stats) => Object.values(stats.bestiasMatadas).reduce((a, b) => a + b, 0) >= 5
    },
    {
        id: 'cazador_experto',
        titulo: 'Cazador Experto',
        descripcion: 'Derrota 25 bestias en total',
        icono: '⚔️',
        condicion: (stats) => Object.values(stats.bestiasMatadas).reduce((a, b) => a + b, 0) >= 25
    },
    {
        id: 'cazador_maestro',
        titulo: 'Cazador Maestro',
        descripcion: 'Derrota 100 bestias en total',
        icono: '🏹',
        condicion: (stats) => Object.values(stats.bestiasMatadas).reduce((a, b) => a + b, 0) >= 100
    },
    {
        id: 'depredador',
        titulo: 'Depredador Incansable',
        descripcion: 'Derrota 250 bestias en total',
        icono: '🐺',
        condicion: (stats) => Object.values(stats.bestiasMatadas).reduce((a, b) => a + b, 0) >= 250
    },
    {
        id: 'exterminador',
        titulo: 'Exterminador',
        descripcion: 'Derrota 500 bestias en total',
        icono: '☠️',
        condicion: (stats) => Object.values(stats.bestiasMatadas).reduce((a, b) => a + b, 0) >= 500
    },
    {
        id: 'genocida',
        titulo: 'Genocida de Bestias',
        descripcion: 'Derrota 1000 bestias en total',
        icono: '💥',
        condicion: (stats) => Object.values(stats.bestiasMatadas).reduce((a, b) => a + b, 0) >= 1000
    },
    {
        id: 'apocalipsis',
        titulo: 'Apocalipsis Bestial',
        descripcion: 'Derrota 2500 bestias en total',
        icono: '🌋',
        condicion: (stats) => Object.values(stats.bestiasMatadas).reduce((a, b) => a + b, 0) >= 2500
    },

    {
        id: 'domador_horrax',
        titulo: 'Domador de Horrax',
        descripcion: 'Derrota a Horrax 3 veces',
        icono: '🔥',
        condicion: (stats) => (stats.bestiasMatadas['horrax'] || 0) >= 3
    },
    {
        id: 'vencedor_alberic',
        titulo: 'Vencedor de Alberic',
        descripcion: 'Derrota a Alberic 3 veces',
        icono: '📚',
        condicion: (stats) => (stats.bestiasMatadas['alberic'] || 0) >= 3
    },
    {
        id: 'jardinero_morwenna',
        titulo: 'Jardinero de Morwenna',
        descripcion: 'Derrota a Morwenna 3 veces',
        icono: '🌸',
        condicion: (stats) => (stats.bestiasMatadas['morwenna'] || 0) >= 3
    },
    {
        id: 'vidente_lysandra',
        titulo: 'Vidente de Lysandra',
        descripcion: 'Derrota a Lysandra 3 veces',
        icono: '🔮', // O un reloj de arena ⏳ o un ojo 👁️ para el tiempo
        condicion: (stats) => (stats.bestiasMatadas['lysandra'] || 0) >= 3
    },
    {
        id: 'juez_aurelian',
        titulo: 'Juez de Aurelian',
        descripcion: 'Derrota a Aurelian 3 veces',
        icono: '⚖️',
        condicion: (stats) => (stats.bestiasMatadas['aurelian'] || 0) >= 3
    },
    {
        id: 'bufon_maro',
        titulo: 'Bufón de Maro',
        descripcion: 'Derrota a Maro 3 veces',
        icono: '🎭',
        condicion: (stats) => (stats.bestiasMatadas['maro'] || 0) >= 3
    },
    {
        id: 'anfitrion_vesper',
        titulo: 'Anfitrión de Vesper',
        descripcion: 'Derrota a Vesper 3 veces',
        icono: '🥂', // Copa de vino
        condicion: (stats) => (stats.bestiasMatadas['vesper'] || 0) >= 3
    },
    {
        id: 'explorador_kaelen',
        titulo: 'Explorador de Kaelen',
        descripcion: 'Derrota a Kaelen 3 veces',
        icono: '🧭', // Brújula para la indecisión/caminos
        condicion: (stats) => (stats.bestiasMatadas['kaelen'] || 0) >= 3
    },
    {
        id: 'devoto_nyr',
        titulo: 'Devoto de Nyr',
        descripcion: 'Derrota a Nyr 3 veces',
        icono: '🔗', // Cadena para las ataduras
        condicion: (stats) => (stats.bestiasMatadas['nyr'] || 0) >= 3
    },
    {
        id: 'perfeccionista_theron',
        titulo: 'Perfeccionista de Theron',
        descripcion: 'Derrota a Theron 3 veces',
        icono: '🎭', // Máscara (como Maro, pero su lore es diferente) o un trofeo 🏆
        condicion: (stats) => (stats.bestiasMatadas['theron'] || 0) >= 3
    },
    {
        id: 'reflejo_albedo',
        titulo: 'Reflejo de Albedo',
        descripcion: 'Derrota a Albedo 3 veces',
        icono: '🌀', // Remolino/espiral para fragmentación/confusión de identidad
        condicion: (stats) => (stats.bestiasMatadas['albedo'] || 0) >= 3
    },

    // Versiones épicas (10 derrotas cada uno)
    {
        id: 'rey_horrax',
        titulo: 'Rey de Horrax',
        descripcion: 'Derrota a Horrax 10 veces',
        icono: '👑',
        condicion: (stats) => (stats.bestiasMatadas['horrax'] || 0) >= 10
    },
    {
        id: 'archivista_alberic',
        titulo: 'Archivista de Alberic',
        descripcion: 'Derrota a Alberic 10 veces',
        icono: '📖',
        condicion: (stats) => (stats.bestiasMatadas['alberic'] || 0) >= 10
    },
    {
        id: 'florista_morwenna',
        titulo: 'Florista de Morwenna',
        descripcion: 'Derrota a Morwenna 10 veces',
        icono: '💐',
        condicion: (stats) => (stats.bestiasMatadas['morwenna'] || 0) >= 10
    },
    {
        id: 'oraculo_lysandra',
        titulo: 'Oráculo de Lysandra',
        descripcion: 'Derrota a Lysandra 10 veces',
        icono: '🔭', // Telescopio para la visión de tiempo
        condicion: (stats) => (stats.bestiasMatadas['lysandra'] || 0) >= 10
    },
    {
        id: 'tribunal_aurelian',
        titulo: 'Tribunal de Aurelian',
        descripcion: 'Derrota a Aurelian 10 veces',
        icono: '🏛️',
        condicion: (stats) => (stats.bestiasMatadas['aurelian'] || 0) >= 10
    },
    {
        id: 'corte_maro',
        titulo: 'Corte de Maro',
        descripcion: 'Derrota a Maro 10 veces',
        icono: '🎪',
        condicion: (stats) => (stats.bestiasMatadas['maro'] || 0) >= 10
    },
    {
        id: 'maestro_vesper',
        titulo: 'Maestro de Vesper',
        descripcion: 'Derrota a Vesper 10 veces',
        icono: '🌌', // Noche estrellada/vacío cósmico
        condicion: (stats) => (stats.bestiasMatadas['vesper'] || 0) >= 10
    },
    {
        id: 'guia_kaelen',
        titulo: 'Guía de Kaelen',
        descripcion: 'Derrota a Kaelen 10 veces',
        icono: '🗺️', // Mapa/camino
        condicion: (stats) => (stats.bestiasMatadas['kaelen'] || 0) >= 10
    },
    {
        id: 'redentor_nyr',
        titulo: 'Redentor de Nyr',
        descripcion: 'Derrota a Nyr 10 veces',
        icono: '🕊️', // Paloma/Liberación para las cadenas rotas
        condicion: (stats) => (stats.bestiasMatadas['nyr'] || 0) >= 10
    },
    {
        id: 'arquitecto_theron',
        titulo: 'Arquitecto de Theron',
        descripcion: 'Derrota a Theron 10 veces',
        icono: '🗿', // Estatua/Perfección alcanzada
        condicion: (stats) => (stats.bestiasMatadas['theron'] || 0) >= 10
    },
    {
        id: 'espejo_albedo',
        titulo: 'Espejo de Albedo',
        descripcion: 'Derrota a Albedo 10 veces',
        icono: '✨', // Brillo/espejo/identidad clara
        condicion: (stats) => (stats.bestiasMatadas['albedo'] || 0) >= 10
    },

    // === RANGOS (15) ===
    {
        id: 'rango_neofito',
        titulo: 'Neófito',
        descripcion: 'Comienza tu camino en la senda del foco',
        icono: '🌑',
        condicion: (stats) => getRank(stats.totalMinutos).rango === "Neófito"
    },
    {
        id: 'rango_iniciado',
        titulo: 'Iniciado',
        descripcion: 'Has sellado tu primer pacto de concentración',
        icono: '🕯️',
        condicion: (stats) => getRank(stats.totalMinutos).rango === "Iniciado"
    },
    {
        id: 'rango_acolito', 
        titulo: 'Acólito',
        descripcion: 'Los primeros ritos han sido aprendidos',
        icono: '📜',
        condicion: (stats) => getRank(stats.totalMinutos).rango === "Acólito"
    },
    {
        id: 'rango_erudito',
        titulo: 'Erudito',
        descripcion: 'Has comenzado a desentrañar los misterios del saber',
        icono: '📖',
        condicion: (stats) => getRank(stats.totalMinutos).rango === "Erudito"
    },
    {
        id: 'rango_guardian',
        titulo: 'Guardián del Conocimiento',
        descripcion: 'Proteges las verdades con tu atención inquebrantable',
        icono: '🛡️',
        condicion: (stats) => getRank(stats.totalMinutos).rango === "Guardián del Conocimiento"
    },
    {
        id: 'rango_veterano',
        titulo: 'Veterano de la Forja',
        descripcion: 'Has resistido innumerables batallas en la forja',
        icono: '🔥',
        condicion: (stats) => getRank(stats.totalMinutos).rango === "Veterano de la Forja"
    },
    {
        id: 'rango_cazador',
        titulo: 'Cazador de Ecos',
        descripcion: 'Dominas el arte de rastrear distracciones',
        icono: '🗡️',
        condicion: (stats) => getRank(stats.totalMinutos).rango === "Cazador de Ecos"
    },
    {
        id: 'rango_maestro',
        titulo: 'Maestro del Ritual', 
        descripcion: 'Tu disciplina es un arma legendaria',
        icono: '⚖️',
        condicion: (stats) => getRank(stats.totalMinutos).rango === "Maestro del Ritual"
    },
    {
        id: 'rango_señor',
        titulo: 'Señor del Pacto',
        descripcion: 'Los rituales del foco son tu dominio absoluto',
        icono: '👑',
        condicion: (stats) => getRank(stats.totalMinutos).rango === "Señor del Pacto"
    },
    {
        id: 'rango_arconte',
        titulo: 'Arconte del Silencio',
        descripcion: 'Gobiernas los dominios de la calma absoluta',
        icono: '🦉',
        condicion: (stats) => getRank(stats.totalMinutos).rango === "Arconte del Silencio"
    },
    {
        id: 'rango_iluminado',
        titulo: 'Iluminado',
        descripcion: 'Has encontrado la claridad perfecta',
        icono: '💡', 
        condicion: (stats) => getRank(stats.totalMinutos).rango === "Iluminado"
    },
    {
        id: 'rango_alma',
        titulo: 'Alma Trascendida',
        descripcion: 'Tu espíritu se ha elevado más allá de lo mundano',
        icono: '🌀',
        condicion: (stats) => getRank(stats.totalMinutos).rango === "Alma Trascendida"
    },
    {
        id: 'rango_heraldo',
        titulo: 'Heraldo del Abismo',
        descripcion: 'Has dominado los vacíos de la distracción',
        icono: '🌌',
        condicion: (stats) => getRank(stats.totalMinutos).rango === "Heraldo del Abismo"
    },
    {
        id: 'rango_mente',
        titulo: 'Mente Ancestral', 
        descripcion: 'Tu voluntad es tan antigua como el primer pensamiento',
        icono: '🧠',
        condicion: (stats) => getRank(stats.totalMinutos).rango === "Mente Ancestral"
    },
    {
        id: 'rango_entidad',
        titulo: 'Entidad Cósmica',
        descripcion: 'Has trascendido las barreras del tiempo y la mente',
        icono: '✨',
        condicion: (stats) => getRank(stats.totalMinutos).rango === "Entidad Cósmica"
    },

    // === MATERIAS/DOMINIOS (8) ===
    {
        id: 'primer_dominio',
        titulo: 'Primer Dominio',
        descripcion: 'Crea tu primera materia',
        icono: '📝',
        condicion: (stats) => stats.clases.length >= 1
    },
    {
        id: 'estudiante_multiple',
        titulo: 'Estudiante Múltiple',
        descripcion: 'Crea 5 materias diferentes',
        icono: '📚',
        condicion: (stats) => stats.clases.length >= 5
    },
    {
        id: 'academico',
        titulo: 'Académico',
        descripcion: 'Crea 10 materias diferentes',
        icono: '🎓',
        condicion: (stats) => stats.clases.length >= 10
    },
    {
        id: 'maestro_dominios',
        titulo: 'Maestro de Dominios',
        descripcion: 'Crea 12 materias diferentes',
        icono: '🏛️',
        condicion: (stats) => stats.clases.length >= 12
    },
    {
        id: 'archivista',
        titulo: 'Archivista',
        descripcion: 'Crea 15 materias diferentes',
        icono: '📊',
        condicion: (stats) => stats.clases.length >= 15
    },
    {
        id: 'bibliotecario',
        titulo: 'Bibliotecario Supremo',
        descripcion: 'Crea 20 materias diferentes',
        icono: '📚',
        condicion: (stats) => stats.clases.length >= 20
    },
    {
        id: 'especialista',
        titulo: 'Especialista',
        descripcion: 'Completa 5 horas en una sola materia',
        icono: '⭐',
        condicion: (stats) => stats.clases.some(c => c.minutos >= 300)
    },
    {
        id: 'gran_maestro',
        titulo: 'Gran Maestro',
        descripcion: 'Completa 25 horas en una sola materia',
        icono: '🎯',
        condicion: (stats) => stats.clases.some(c => c.minutos >= 1500)
    },

    // === LOGROS ESPECIALES (6) ===
    {
        id: 'coleccionista',
        titulo: 'Coleccionista de Bestias',
        descripcion: 'Derrota al menos una vez a cada bestia',
        icono: '🎯',
        condicion: (stats) => {
            const bestiasUnicas = Object.keys(stats.bestiasMatadas).length;
            return bestiasUnicas >= 6;
        }
    },
    {
        id: 'sin_miedo',
        titulo: 'Sin Miedo al Éxito',
        descripcion: 'Completa un pacto de 4 horas o más',
        icono: '💪',
        condicion: (stats) => stats.pactoMaximo >= 240
    },
    {
        id: 'titán',
        titulo: 'Titán del Tiempo',
        descripcion: 'Completa un pacto de 8 horas o más',
        icono: '⏰',
        condicion: (stats) => stats.pactoMaximo >= 480
    },
    {
        id: 'consistencia',
        titulo: 'Estudiante Consistente',
        descripcion: 'Completa 7 días diferentes de estudio',
        icono: '📅',
        condicion: (stats) => stats.diasEstudiados >= 7
    },
    {
        id: 'disciplina',
        titulo: 'Disciplina de Hierro',
        descripcion: 'Completa 30 días diferentes de estudio',
        icono: '🔨',
        condicion: (stats) => stats.diasEstudiados >= 30
    },
    {
        id: 'leyenda_viva',
        titulo: 'Leyenda Viva',
        descripcion: 'Alcanza el rango máximo (Entidad Cósmica)',
        icono: '✨',
        condicion: (stats) => getRank(stats.totalMinutos).rango === "Entidad Cósmica"
    }
];

const healthLowPulseCSS = `
@keyframes healthLowPulse {
    0%, 100% {
        opacity: 1;
        box-shadow: 0 0 5px rgba(184, 0, 0, 0.3);
    }
    50% {
        opacity: 0.9;
        box-shadow: 0 0 15px rgba(184, 0, 0, 0.6);
    }
}

`;
const style = document.createElement('style');
style.textContent = healthLowPulseCSS;
document.head.appendChild(style);
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
    const launchAttackBtnMobile = document.getElementById('launch-attack-btn-mobile');
    const backToMenuBtnMobile = document.getElementById('back-to-menu-btn-mobile');
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
    const timerParticlesContainer = document.getElementById('timer-particles-container');
    let timerParticlesInterval = null;
    const classModal = document.getElementById('class-modal');
    const manageClassesBtn = document.getElementById('manage-classes-btn');
    const closeClassModalBtn = document.getElementById('close-class-modal-btn');
    const classSelect = document.getElementById('class-offering');
    const classList = document.getElementById('class-list');
    const newClassNameInput = document.getElementById('new-class-name');
    const addClassBtn = document.getElementById('add-class-btn');
    const MAX_HISTORY = 6; 



    // --- NUEVOS ELEMENTOS PARA LORE ---
    const bossInfoBtn = document.getElementById('boss-info-btn');
    const loreScreen = document.getElementById('lore-screen');
    const loreTitle = document.getElementById('lore-title');
    const loreImage = document.getElementById('lore-image');
    const loreText = document.getElementById('lore-text');
    const closeLoreBtn = document.getElementById('close-lore-btn');


    //SONIDOS
    const bellSound = document.getElementById('bell-sound');
    const bonfireSound = document.getElementById('bonfire-sound');
    const clickSound = document.getElementById('click-sound');
    const toastSound = document.getElementById('toast-sound');
    const hoverSound = document.getElementById('hover-sound');
    const startGameSound = document.getElementById('start-game-sound');
    const startBattleSound = document.getElementById('start-battle-sound');
    const goToMenu = document.getElementById('go-to-menu-sound');

    
    
    // --- GAME STATE ---
    let jefeHistory = [];
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
    let breakRemaining = 0;
    let currentClassId = null; // Materia seleccionada para el pacto actual
    let currentBoss = null; // Para guardar el jefe actual
    let selectedBossId = 'random'; // Por defecto, aleatorio



    // HOVER PARA TODOS LOS BOTONES Y SELECTS
    document.addEventListener('mouseover', function(e) {
        if (e.target.matches('button, select, .menu-option, .gold-button, .ghost-button, .load-time-btn')) {
            playSound(hoverSound);
        }
    });

    // --- LOCAL STORAGE FUNCTIONS ---
    function getStats() {
        const statsString = localStorage.getItem('focusSoulStats');
        let parsedStats;
    
        try {
            parsedStats = statsString ? JSON.parse(statsString) : {};
        } catch (e) {
            console.error("Error al parsear focusSoulStats del localStorage:", e);
            parsedStats = {};
        }
    
        // Propiedades existentes
        parsedStats.totalMinutos = typeof parsedStats.totalMinutos === 'number' ? parsedStats.totalMinutos : 0;
        parsedStats.bestiasMatadas = typeof parsedStats.bestiasMatadas === 'object' && parsedStats.bestiasMatadas !== null ? parsedStats.bestiasMatadas : {};
        parsedStats.clases = Array.isArray(parsedStats.clases) ? parsedStats.clases : [];
        
        // ✅ NUEVAS PROPIEDADES PARA LOGROS AVANZADOS
        parsedStats.logrosDesbloqueados = Array.isArray(parsedStats.logrosDesbloqueados) ? parsedStats.logrosDesbloqueados : [];
        parsedStats.pactoMaximo = typeof parsedStats.pactoMaximo === 'number' ? parsedStats.pactoMaximo : 0;
        parsedStats.diasEstudiados = typeof parsedStats.diasEstudiados === 'number' ? parsedStats.diasEstudiados : 0;
        parsedStats.ultimoDia = parsedStats.ultimoDia || null;
        
        return parsedStats;
    }

    function saveStats(stats) {
        // Guardar el rango anterior ANTES de actualizar
        const rangoAnterior = getRank(stats.totalMinutos).rango;
        
        // ✅ ACTUALIZAR DATOS PARA LOGROS ANTES DE GUARDAR
        const hoy = new Date().toDateString();
        
        if (stats.ultimoDia !== hoy) {
            stats.diasEstudiados = (stats.diasEstudiados || 0) + 1;
            stats.ultimoDia = hoy;
        }
        
        localStorage.setItem('focusSoulStats', JSON.stringify(stats));
        
        // ✅ VERIFICAR SI SUBIÓ DE RANGO
        const nuevoRango = getRank(stats.totalMinutos).rango;
        
        if (rangoAnterior !== nuevoRango) {
            // ¡SUBISTE DE RANGO! - Mostrar toast especial
            setTimeout(() => {
                const rankInfo = getRank(stats.totalMinutos);
                showToast(`🎉 ${rankInfo.rango}`, `Has alcanzado el rango ${rankInfo.rango}`, { 
                    type: 'gold',
                    duration: 5000,
                    showProgress: true 
                });
            }, 1000);
        }
        
        // ✅ Verificar logros después de cada guardado
        setTimeout(() => verificarLogros(stats), 100);
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
        // ============================================
        // PANTALLA DE BIENVENIDA MEJORADA CON ANIMACIONES
        // ============================================
        const splashScreen = document.getElementById('splash-screen');
        const firstVisit = !sessionStorage.getItem('focusSoulSplashSeen');
        
        if (firstVisit) {
            splashScreen.classList.remove('hidden');
            
            const hideSplash = () => {
                playSound(startBattleSound);
                playSound(clickSound);
                
                // Animación de salida del splash
                splashScreen.style.transition = 'opacity 0.8s ease-in-out';
                splashScreen.classList.add('hidden');
                
                sessionStorage.setItem('focusSoulSplashSeen', 'true');
                
                // Mostrar lobby con animación después del splash
                setTimeout(() => {
                    lobbyScreen.style.transition = 'opacity 1s ease-in-out';
                    lobbyScreen.classList.remove('hidden');
                }, 500);
                
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
            lobbyScreen.classList.remove('hidden');
        }
        
        createSparks();
        
        // ============================================
        // NUEVO SISTEMA DE MENÚ MINIMALISTA
        // ============================================
        
        // 1. Inicializar elementos del nuevo sistema
        const menuOptions = document.querySelectorAll('.menu-option');
        const pactModal = document.getElementById('pact-modal');
        const confirmPactBtn = document.getElementById('confirm-pact-btn');
        const cancelPactBtn = document.getElementById('cancel-pact-btn');
        const hoursSelect = document.getElementById('hours-offering');
        
        // 2. Cargar opciones de horas en el modal (no en el menú principal)
        hoursSelect.innerHTML = '<option value="" disabled selected>SELECCIONA TU OFRENDA</option>';
        for (let i = 1; i <= 8; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = `${i} HORA${i > 1 ? 'S' : ''}`;
            hoursSelect.appendChild(option);
        }
        
        // 3. Manejar clic en opciones del menú principal
        menuOptions.forEach(option => {
            option.addEventListener('mouseenter', () => playSound(hoverSound));
            option.addEventListener('click', handleMenuSelection);
        });
        
        function handleMenuSelection(e) {
            playSound(clickSound);
            const action = e.target.dataset.action;
            
            switch(action) {
                case 'start':
                    showPactModal();
                    break;
                case 'instructions':
                    showInstructions();
                    break;
                case 'bestiary':
                    showBestiary();
                    break;
            }
        }
        
        function showPactModal() {
            playSound(clickSound);
            
            // ✅ CORRECCIÓN: Asegurar que la imagen de aleatorio esté cargada
            const previewImg = document.getElementById('selected-boss-preview-img');
            const previewName = document.getElementById('selected-boss-preview-name');
            
            if (previewImg && !previewImg.src.includes('random-icon.png') && selectedBossId === 'random') {
                previewImg.src = 'img/random-icon.png';
                previewName.textContent = 'ALEATORIO';
            }
            
            pactModal.style.transition = 'opacity 0.5s ease-in-out';
            pactModal.classList.remove('hidden');
        }
        
        function hidePactModal() {
            pactModal.style.transition = 'opacity 0.5s ease-in-out';
            pactModal.classList.add('hidden');
        }
        
        // 4. Configurar botones del modal de pacto
        confirmPactBtn.addEventListener('click', () => {
            const selectedHours = parseInt(hoursSelect.value);
            const selectedClassId = parseInt(classSelect.value);
            
            // Validación completa
            let errorMessage = "";
            if (isNaN(selectedHours) || selectedHours === 0) {
                errorMessage = "Selecciona una duración para tu pacto";
            } else if (isNaN(selectedClassId)) {
                errorMessage = "Selecciona un dominio del conocimiento";
            }
            
            if (errorMessage) {
                showToast("PACTO INCOMPLETO", errorMessage, { 
                    type: 'error', 
                    duration: 4000
                });
                return;
            }
            
            // ✅ TODO VÁLIDO - Iniciar batalla directamente
            playSound(clickSound);
            playSound(startGameSound);
            hidePactModal();
            
            // Inicializar batalla
            currentClassId = selectedClassId;
            pactInitialSeconds = selectedHours * 3600;
            unallocatedSeconds = pactInitialSeconds;
            loadedSeconds = 0;
            dealtSeconds = 0;
            
            // ✅ CORRECCIÓN: Usar el jefe seleccionado en lugar de aleatorio
            if (selectedBossId === 'random') {
                currentBoss = getRandomBoss();
            } else {
                currentBoss = JEFES.find(jefe => jefe.id === selectedBossId);
            }
            currentBossId = currentBoss.id; 
            
            backgroundContainer.style.backgroundImage = `url('${currentBoss.fondoUrl}')`;
            bossImage.src = currentBoss.imagenUrl;
            bossImage.classList.remove('boss-appear');
            setTimeout(() => {
                bossImage.classList.add('boss-appear');
            }, 10);
            bossName.textContent = currentBoss.nombre;
            applyBossAura(currentBoss.color);
        
            // Transición a batalla
            lobbyScreen.style.transition = 'opacity 0.8s ease-in-out';
            battleScreen.style.transition = 'opacity 0.8s ease-in-out';
            lobbyScreen.classList.add('hidden');
            battleScreen.classList.remove('hidden');
            
            startTimerParticles();
            resetForNextRound();
            
            // Toast de confirmación
            showToast("PACTO SELLADO", `Has jurado ${selectedHours} hora${selectedHours > 1 ? 's' : ''} de concentración`, { 
                type: 'gold',
                duration: 3000
            });
            
            console.log(`🎓 Pacto iniciado para materia ID: ${currentClassId}`);
            console.log(`🗡️ Jefe seleccionado: ${currentBoss.nombre}`);
        });

        cancelPactBtn.addEventListener('click', () => {
            playSound(clickSound);
            hidePactModal();
        });
        
        

        loadTimeBtns.forEach(btn => {
            btn.addEventListener('click', () => modifyLoadedTime(parseInt(btn.dataset.time) * 60, btn));
            btn.addEventListener('mouseenter', () => playSound(hoverSound));
        });
        // ============================================
        // SISTEMA EXISTENTE (MANTENER IGUAL)
        // ============================================
        
        closeInstructionsBtn.addEventListener('click', hideInstructions);
        
        
        launchAttackBtn.addEventListener('click', launchAttack);
        backToMenuBtn.addEventListener('click', confirmAbandon);
        
        // Efectos de sonido para botones de batalla
        [launchAttackBtn, backToMenuBtn].forEach(btn => {
            btn.addEventListener('mouseenter', () => playSound(hoverSound));
            btn.addEventListener('click', () => playSound(clickSound));
        });
        
        updateTabTitle(0, 'lobby');
        updateFavicon('lobby');
        bossImage.addEventListener('click', showLore);
        closeLoreBtn.addEventListener('click', hideLore);
        
        // Event listeners para pausa
        pauseBtn.addEventListener('click', togglePause);
        // bestiaryBtn.addEventListener('click', showBestiary);
        closeBestiaryBtn.addEventListener('click', () => {
            bestiaryModal.classList.add('hidden');
        });
    
        // ============================================
        // NUEVA FUNCIÓN returnToMenu MEJORADA
        // ============================================
        window.returnToMenu = function() {
            // Primero detener todas las animaciones y partículas
            stopTimerParticles();
            clearInterval(timerInterval);
            clearInterval(breakInterval);
            
            // Agregar transición suave
            battleScreen.style.transition = 'opacity 0.8s ease-in-out';
            messageScreen.style.transition = 'opacity 0.8s ease-in-out';
            
            // Ocultar pantallas con animación
            battleScreen.classList.add('hidden');
            messageScreen.classList.add('hidden');
            
            // Mostrar lobby con delay para la animación
            setTimeout(() => {
                lobbyScreen.style.transition = 'opacity 0.8s ease-in-out';
                lobbyScreen.classList.remove('hidden');
                
                // RESETEAR ESTADOS (incluyendo materia actual)
                isTimerRunning = false;
                isPaused = false;
                loadedSeconds = 0;
                unallocatedSeconds = 0;
                dealtSeconds = 0;
                pactInitialSeconds = 0;
                currentClassId = null; // ← NUEVO: Resetear materia actual
                
                updateTimerDisplay(0);
                updateTabTitle(0, 'lobby');
                updateFavicon('lobby');
                
                console.log("🏠 Volviendo al menú - Materia actual reseteada");
            }, 400);
            // ✅ NUEVO: Mostrar notificaciones pendientes al volver al menú
    setTimeout(() => {
        if (window.pendingNotifications && window.pendingNotifications.length > 0) {
            window.pendingNotifications.forEach(notif => {
                showToast(notif.titulo, notif.mensaje, { 
                    type: 'gold', 
                    duration: 5000,
                    showProgress: true 
                });
            });
            window.pendingNotifications = [];
        }
    }, 1000);
        };
         // ✅ NUEVO: Manejar el botón de logros
    document.addEventListener('click', function(e) {
        if (e.target.dataset.action === 'logros') {
            showLogros();
        }
    });
    
    // ✅ NUEVO: Botón de cerrar logros
    document.getElementById('close-logros-btn').addEventListener('click', function() {
        document.getElementById('logros-modal').classList.add('hidden');
    });
}

// ✅ NUEVO: Función para mostrar logros
function showLogros() {
    const stats = getStats();
    const logrosList = document.getElementById('logros-list');
    
    let html = '';
    LOGROS.forEach(logro => {
        const estaDesbloqueado = stats.logrosDesbloqueados.includes(logro.id);
        
        html += `
            <div class="logro-item ${estaDesbloqueado ? 'desbloqueado' : 'bloqueado'}">
                <div class="logro-icon">${estaDesbloqueado ? logro.icono : '<img src="img/candado1.png" alt="Logro bloqueado" class="locked-icon">'}</div>
                <div class="logro-info">
                    <h4>${estaDesbloqueado ? logro.titulo : '???'}</h4>
                    <p>${estaDesbloqueado ? logro.descripcion : 'Logro bloqueado'}</p>
                </div>

            </div>
        `;
    });
    
    logrosList.innerHTML = html;
    document.getElementById('logros-modal').classList.remove('hidden');
    }

    //Logros
    function verificarLogros(stats) {
        const nuevosLogros = [];
        
        LOGROS.forEach(logro => {
            // Si ya estaba desbloqueado, skip
            if (stats.logrosDesbloqueados && stats.logrosDesbloqueados.includes(logro.id)) return;
            
            // Verificar condición
            if (logro.condicion(stats)) {
                nuevosLogros.push(logro.id);
                
                // Añadir a notificaciones pendientes
                if (!window.pendingNotifications) window.pendingNotifications = [];
                window.pendingNotifications.push({
                    tipo: 'logro',
                    titulo: `🎉 ${logro.titulo}`,
                    mensaje: logro.descripcion,
                    icono: logro.icono
                });
                
                console.log(`🏆 Logro desbloqueado: ${logro.titulo}`);
            }
        });
        
        // Actualizar stats solo si hay nuevos logros
        if (nuevosLogros.length > 0) {
            stats.logrosDesbloqueados = [...(stats.logrosDesbloqueados || []), ...nuevosLogros];
            saveStats(stats);
            
            // Mostrar toast inmediato del primer logro
            const primerLogro = LOGROS.find(l => l.id === nuevosLogros[0]);
            if (primerLogro) {
                showToast(`🏆 ${primerLogro.titulo}`, primerLogro.descripcion, { 
                    type: 'gold', 
                    duration: 6000,
                    showProgress: true 
                });
            }
        }
        
        return nuevosLogros.length > 0;
    }

    // Cargar materias en el select del pacto
    function loadClassSelect() {
        const stats = getStats();
        classSelect.innerHTML = '<option value="" disabled selected>SELECCIONA TU MATERIA</option>';
        
        stats.clases.forEach(clase => {
            const option = document.createElement('option');
            option.value = clase.id;
            option.textContent = clase.nombre;
            classSelect.appendChild(option);
        });
}
function addClass() {
    const className = newClassNameInput.value.trim();
    if (!className) return;
    
    const stats = getStats();
    
    // NUEVO LÍMITE: 50 materias
    if (stats.clases.length >= 50) {
        alert('Máximo 50 dominios permitidos. Elimina algunos para crear nuevos.');
        return;
    }
    
    const newId = stats.clases.length > 0 ? Math.max(...stats.clases.map(c => c.id)) + 1 : 1;
    
    stats.clases.push({
        id: newId,
        nombre: className,
        minutos: 0,
        createdAt: new Date().toISOString()
    });
    
    saveStats(stats);
    newClassNameInput.value = '';
    loadClassSelect();
    loadClassList();
    
    // Feedback visual
    showToast('DOMINIO FORJADO', `"${className}" ha sido añadido al Códice`, { 
        type: 'gold', 
        duration: 3000 
    });
    playSound(toastSound);
}
function initializeBossPreview() {
    const previewImg = document.getElementById('selected-boss-preview-img');
    const previewName = document.getElementById('selected-boss-preview-name');
    
    if (previewImg && previewName) {
        if (selectedBossId === 'random') {
            previewImg.src = 'img/random-icon.png';
            previewName.textContent = 'ALEATORIO';
        } else {
            const jefe = JEFES.find(j => j.id === selectedBossId);
            if (jefe) {
                previewImg.src = jefe.imagenSelect;
                previewName.textContent = jefe.id.toUpperCase();
            }
        }
    }
}
// Eliminar materia

function deleteClass(id) {
    if (!confirm('¿Estás seguro de eliminar esta materia? Se perderán sus estadísticas.')) return;
    
    const stats = getStats();
    stats.clases = stats.clases.filter(c => c.id !== id);
    saveStats(stats);
    loadClassSelect();
    loadClassList(); // ← Agregar esta línea
}

// Cargar lista de materias en el modal de gestión
function loadClassList() {
    const stats = getStats();
    const dashboardGrid = document.querySelector('.dashboard-grid');
    const noClassesMessage = document.getElementById('no-classes-message');
    const classCount = document.getElementById('class-count');
    const totalClassTime = document.getElementById('total-class-time');

    // Actualizar contadores
    classCount.textContent = stats.clases.length;
    
    const totalMinutes = stats.clases.reduce((sum, clase) => sum + (clase.minutos || 0), 0);
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    totalClassTime.textContent = `${hours}h ${minutes}m`;

    // Limpiar dashboard
    dashboardGrid.innerHTML = '';

    if (stats.clases.length === 0) {
        noClassesMessage.style.display = 'flex';
        dashboardGrid.style.display = 'none';
    } else {
        noClassesMessage.style.display = 'none';
        dashboardGrid.style.display = 'grid';

        // Ordenar por tiempo (mayor a menor)
        const sortedClasses = [...stats.clases].sort((a, b) => (b.minutos || 0) - (a.minutos || 0));
        
        sortedClasses.forEach(clase => {
            const horas = Math.floor(clase.minutos / 60);
            const minutos = clase.minutos % 60;
            const esMaestria = clase.minutos >= 300; // 5 horas o más

            const classCard = document.createElement('div');
            classCard.className = `class-card ${esMaestria ? 'mastered' : ''}`;
            
// En lugar del código actual de classCard.innerHTML, usá esto:
classCard.innerHTML = `
    <div class="class-card-header">
        <h4 class="class-card-title" title="${clase.nombre}">${clase.nombre}</h4>
        <div class="class-card-actions">
            <button class="class-card-edit" data-id="${clase.id}" title="Editar dominio"><img src="img/pencilIcon.png" alt="Editar dominio"></button>
            <button class="class-card-delete" data-id="${clase.id}" title="Eliminar dominio">✕</button>
        </div>
    </div>
    
    <div class="class-card-stats">
        <div class="class-stat">
            <span class="class-stat-value">${clase.minutos}</span>
            <span class="class-stat-label">Minutos</span>
        </div>
        <div class="class-stat">
            <span class="class-stat-value">${horas}h ${minutos}m</span>
            <span class="class-stat-label">Total</span>
        </div>
    </div>
    
    <div class="class-card-progress">
        <div class="progress-bar">
            <div class="progress-fill" style="width: ${Math.min((clase.minutos / 1500) * 100, 100)}%"></div>
        </div>
        <small style="color: var(--color-parchment); opacity: 0.7; font-size: .7rem; display: block; margin-top: 0.2rem; font-family:var(--font-title)">
            ${esMaestria ? '⭐ Maestría' : 'Progreso'}
        </small>
    </div>
`;

            dashboardGrid.appendChild(classCard);
        });

        // Event listeners para botones eliminar
        document.querySelectorAll('.class-card-delete').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = parseInt(e.target.dataset.id);
                deleteClass(id);
            });
        });
        document.querySelectorAll('.class-card-edit').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = parseInt(e.target.dataset.id);
                editClass(id);
            });
        });
    }
}
function editClass(id) {
    const stats = getStats();
    const clase = stats.clases.find(c => c.id === id);
    
    if (!clase) return;
    
    const nuevoNombre = prompt('Nuevo nombre del dominio:', clase.nombre);
    
    if (nuevoNombre && nuevoNombre.trim() !== '' && nuevoNombre !== clase.nombre) {
        clase.nombre = nuevoNombre.trim();
        saveStats(stats);
        loadClassSelect();
        loadClassList();
        
        showToast('DOMINIO ACTUALIZADO', `"${clase.nombre}" ha sido modificado`, { 
            type: 'gold', 
            duration: 3000 
        });
    }
}
// --- FUNCIONES PARA EL SELECTOR DE JEFES ESTILO STREET FIGHTER ---
function initializeBossSelectionModal() {
    const openBossSelectorBtn = document.getElementById('open-boss-selector');
    const bossSelectionModal = document.getElementById('boss-selection-modal');
    const confirmBossSelectionBtn = document.getElementById('confirm-boss-selection');
    const closeBossSelectionBtn = document.getElementById('close-boss-selection');
    const bossSelectionGrid = document.getElementById('boss-selection-grid');

    // Cargar opciones de jefes
    loadBossSelectionGrid();

    // Establecer "Aleatorio" como selección inicial
    selectBossInModal('random');

    // Abrir modal de selección
    openBossSelectorBtn.addEventListener('click', () => {
        playSound(clickSound);
        bossSelectionModal.classList.remove('hidden');
        updateBossSelectionDisplay();
    });

    // Confirmar selección
    confirmBossSelectionBtn.addEventListener('click', () => {
        playSound(clickSound);
        saveBossSelection();
        bossSelectionModal.classList.add('hidden');
    });

    // Cerrar modal sin confirmar
    closeBossSelectionBtn.addEventListener('click', () => {
        playSound(clickSound);
        bossSelectionModal.classList.add('hidden');
        // Restaurar selección anterior si no se confirmó
        updateBossSelectionDisplay();
    });

    // Cerrar modal al hacer clic fuera del contenido
    bossSelectionModal.addEventListener('click', (e) => {
        if (e.target === bossSelectionModal) {
            playSound(clickSound);
            bossSelectionModal.classList.add('hidden');
            updateBossSelectionDisplay();
        }
    });
}

function loadBossSelectionGrid() {
    const bossSelectionGrid = document.getElementById('boss-selection-grid');

    // Limpiar opciones (excepto la opción "Aleatorio")
    const existingOptions = bossSelectionGrid.querySelectorAll('.boss-selection-option:not([data-boss-id="random"])');
    existingOptions.forEach(option => option.remove());

    // Agregar opciones para cada jefe
    JEFES.forEach(jefe => {
        const bossOption = document.createElement('div');
        bossOption.className = 'boss-selection-option';
        bossOption.dataset.bossId = jefe.id;

        bossOption.innerHTML = `
            <div class="boss-portrait">
                <img src="${jefe.imagenSelect}" alt="${jefe.nombre}">
                <div class="boss-selection-overlay">
                    <span>${jefe.nombre.split(',')[0]}</span>
                </div>
            </div>
        `;

        bossOption.addEventListener('click', () => selectBossInModal(jefe.id));
        bossSelectionGrid.appendChild(bossOption);
    });
}

function selectBossInModal(bossId) {
    // Remover clase active de todas las opciones
    document.querySelectorAll('.boss-selection-option').forEach(option => {
        option.classList.remove('active');
    });

    // Agregar clase active a la opción seleccionada
    const selectedOption = document.querySelector(`[data-boss-id="${bossId}"]`);
    if (selectedOption) {
        selectedOption.classList.add('active');
    }

    // Actualizar display de selección
    const modalSelectedBossImg = document.getElementById('modal-selected-boss-img');
    const modalSelectedBossName = document.getElementById('modal-selected-boss-name');
    const modalSelectedBossDesc = document.getElementById('modal-selected-boss-desc');

    if (bossId === 'random') {
        modalSelectedBossImg.src = 'img/random-icon.png';
        modalSelectedBossName.textContent = 'ALEATORIO';
        modalSelectedBossDesc.textContent = 'El destino elegirá tu oponente';
    } else {
        const jefe = JEFES.find(j => j.id === bossId);
        modalSelectedBossImg.src = jefe.imagenSelect;
        modalSelectedBossName.textContent = jefe.nombre;
        // Tomar solo la primera línea del lore para la descripción
        modalSelectedBossDesc.textContent = jefe.lore.split('<br>')[0].replace(/<strong>|<\/strong>/g, '');
    }

    // Efecto de sonido
    playSound(clickSound);
}

function updateBossSelectionDisplay() {
    // Remover clase active de todas las opciones
    document.querySelectorAll('.boss-selection-option').forEach(option => {
        option.classList.remove('active');
    });

    // Agregar clase active a la opción seleccionada
    const selectedOption = document.querySelector(`[data-boss-id="${selectedBossId}"]`);
    if (selectedOption) {
        selectedOption.classList.add('active');
    }

    // Actualizar display de selección
    const modalSelectedBossImg = document.getElementById('modal-selected-boss-img');
    const modalSelectedBossName = document.getElementById('modal-selected-boss-name');
    const modalSelectedBossDesc = document.getElementById('modal-selected-boss-desc');

    if (selectedBossId === 'random') {
        modalSelectedBossImg.src = 'img/random-icon.png';
        modalSelectedBossName.textContent = 'ALEATORIO';
        modalSelectedBossDesc.textContent = 'El destino elegirá tu oponente';
    } else {
        const jefe = JEFES.find(j => j.id === selectedBossId);
        modalSelectedBossImg.src = jefe.imagenSelect;
        modalSelectedBossName.textContent = jefe.nombre;
        // Tomar solo la primera línea del lore para la descripción
        modalSelectedBossDesc.textContent = jefe.lore.split('<br>')[0].replace(/<strong>|<\/strong>/g, '');
    }

    // Efecto de sonido
    playSound(clickSound);
}

function saveBossSelection() {
    const activeOption = document.querySelector('.boss-selection-option.active');
    if (activeOption) {
        selectedBossId = activeOption.dataset.bossId;
        
        // ACTUALIZAR VISTA PREVIA EN MODAL PRINCIPAL
        const previewImg = document.getElementById('selected-boss-preview-img');
        const previewName = document.getElementById('selected-boss-preview-name');
        
        if (selectedBossId === 'random') {
            previewImg.src = 'img/random-icon.png';
            previewName.textContent = 'ALEATORIO';
        } else {
            const jefe = JEFES.find(j => j.id === selectedBossId);
            previewImg.src = jefe.imagenSelect;
            previewName.textContent = jefe.id.toUpperCase();
        }
        
        // Mostrar toast de confirmación
        if (selectedBossId === 'random') {
            showToast('SELECCIÓN CONFIRMADA', 'Tu oponente será elegido por el destino', {
                type: 'gold',
                duration: 3000
            });
        } else {
            const jefe = JEFES.find(j => j.id === selectedBossId);
            showToast('SELECCIÓN CONFIRMADA', `Te enfrentarás a ${jefe.nombre}`, {
                type: 'gold',
                duration: 3000
            });
        }
    }
}

//Algoritmo Nuevo Jefe
function getRandomBoss() {
    // Si no hay historial, elegir completamente aleatorio
    if (jefeHistory.length === 0) {
        const randomBoss = JEFES[Math.floor(Math.random() * JEFES.length)];
        jefeHistory.push(randomBoss.id);
        return randomBoss;
    }

    // Filtrar jefes que NO estén en el historial reciente
    const availableJefes = JEFES.filter(jefe => !jefeHistory.includes(jefe.id));
    
    // Si hay jefes disponibles que no se usaron recientemente
    if (availableJefes.length > 0) {
        const randomBoss = availableJefes[Math.floor(Math.random() * availableJefes.length)];
        
        // Actualizar historial
        jefeHistory.push(randomBoss.id);
        if (jefeHistory.length > MAX_HISTORY) {
            jefeHistory.shift(); // Remover el más antiguo
        }
        
        return randomBoss;
    } 
    // Si todos los jefes ya fueron usados recientemente, reiniciar historial
    else {
        jefeHistory = [];
        const randomBoss = JEFES[Math.floor(Math.random() * JEFES.length)];
        jefeHistory.push(randomBoss.id);
        return randomBoss;
    }
}


// Event Listeners
// Agrega event listeners para los nuevos botones móviles:
if (launchAttackBtnMobile) {
    launchAttackBtnMobile.addEventListener('click', launchAttack);
    launchAttackBtnMobile.addEventListener('mouseenter', () => playSound(hoverSound));
}

if (backToMenuBtnMobile) {
    backToMenuBtnMobile.addEventListener('click', confirmAbandon);
    backToMenuBtnMobile.addEventListener('mouseenter', () => playSound(hoverSound));
}

// Agrega un event listener para redimensionamiento:
window.addEventListener('resize', updateUI);

manageClassesBtn.addEventListener('click', () => {
    playSound(clickSound);
    loadClassList();
    classModal.classList.remove('hidden');
});

closeClassModalBtn.addEventListener('click', () => {
    playSound(clickSound);
    classModal.classList.add('hidden');
});

addClassBtn.addEventListener('click', () => {
    playSound(clickSound);
    addClass();
});

// Permitir crear con Enter
newClassNameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addClass();
});

// Cargar materias al inicializar
loadClassSelect();
initializeBossSelectionModal();
initializeBossPreview();



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

    // ===================================================================================
// LISTENER PARA BARRA ESPACIADORA - PAUSA/PLAY
// ===================================================================================
document.addEventListener('keydown', (e) => {
    // Solo responder a barra espaciadora (código 32)
    if (e.code === 'Space') {
        if (e.target.matches('input, textarea, [contenteditable="true"]')) {
            return; 
        }
        e.preventDefault();
        
        if (!battleScreen.classList.contains('hidden') && 
            isTimerRunning && 
            !battleScreen.classList.contains('break-active') &&
            loreScreen.classList.contains('hidden') &&
            instructionsScreen.classList.contains('hidden') &&
            messageScreen.classList.contains('hidden')) {
            
            togglePause();
        }
    }
});
    // Función para actualizar el título de la pestaña
    function updateTabTitle(seconds, state = 'battle') {
        if (state === 'break') {
            const mins = Math.floor(seconds / 60);
            const secs = seconds % 60;
            document.title = `🔄 ${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')} DESCANSO - Focus Souls`;
        } else if (state === 'victory') {
        document.title = "PACTO CUMPLIDO - Focus Soul";
    } else if (state === 'lobby') {
        document.title = "FOCUS SOULS";
    } else {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        document.title = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')} - Focus Souls`;
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
        console.log("⏸️ Timer pausado");
    } else {
        pauseBtn.textContent = "❚❚";
        pauseBtn.classList.remove('paused');
        pauseBtn.title = "Pausar ritual";
        console.log("▶ Timer reanudado");
    }
}

// --- VOLVER AL MENÚ MEJORADO ---
function returnToMenu() {
    // Primero detener todas las animaciones y partículas
    stopTimerParticles();
    clearInterval(timerInterval);
    clearInterval(breakInterval);
    
    // Agregar transición suave
    battleScreen.style.transition = 'opacity 0.8s ease-in-out';
    messageScreen.style.transition = 'opacity 0.8s ease-in-out';
    
    // Ocultar pantallas con animación
    battleScreen.classList.add('hidden');
    messageScreen.classList.add('hidden');
    
    // Mostrar lobby con delay para la animación
    setTimeout(() => {
        lobbyScreen.style.transition = 'opacity 0.8s ease-in-out';
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
        resetBossAura();
    }, 400);
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
        currentBoss = getRandomBoss();
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
//TOOLTIP VIDA RESTANTE
// Función para formatear el tiempo restante
function formatTimeRemaining(seconds) {
    if (seconds >= 3600) {
        // Más de 1 hora: mostrar en horas y minutos
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        return `${hours}h ${minutes}m`;
    } else {
        // Menos de 1 hora: mostrar solo minutos
        const minutes = Math.ceil(seconds / 60);
        return `${minutes} min`;
    }
}

// Función para actualizar el tooltip
function updateHealthBarTooltip() {
    const tooltip = document.getElementById('health-time-remaining');
    if (!tooltip) return;
    
    const timeText = formatTimeRemaining(unallocatedSeconds);
    tooltip.textContent = timeText;
}

// Función para mostrar/ocultar el tooltip con efectos
function initializeHealthBarTooltip() {
    const healthBarContainer = document.getElementById('health-bar-container');
    const tooltip = document.getElementById('health-bar-tooltip');
    
    if (!healthBarContainer || !tooltip) return;
    
    let hideTimeout;
    
    healthBarContainer.addEventListener('mouseenter', () => {
        clearTimeout(hideTimeout);
        updateHealthBarTooltip();
        tooltip.classList.add('visible');
    });
    
    healthBarContainer.addEventListener('mouseleave', () => {
        tooltip.classList.remove('visible');
        hideTimeout = setTimeout(() => {
            // Pequeño delay para suavizar la transición
        }, 300);
    });
    
    // Actualizar también al mover el mouse dentro del contenedor
    healthBarContainer.addEventListener('mousemove', () => {
        updateHealthBarTooltip();
    });
}


        // --- FUNCIONES PARA EL SISTEMA DE LORE ---
// En la función showLore(), cambia esto:
function showLore() {
    if (!currentBoss) return;
    
    playSound(clickSound);
    
    loreTitle.textContent = currentBoss.nombre;

    
    loreText.innerHTML = currentBoss.lore;
    
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



//fondo url
function applyBossAura(color) {
    if (!color) return;
    
    // Crear el filtro con el color específico del boss
    const newFilter = `
        drop-shadow(0 0 5px rgba(0, 0, 0, 0.5))
        drop-shadow(0 0 20px ${color}66)
        drop-shadow(0 0 30px ${color}44)
    `;
    
    // Aplicar el filtro y guardarlo
    bossImage.style.filter = newFilter;
    bossImage.dataset.originalFilter = newFilter;
    bossImage.dataset.bossColor = color; // Guardar el color también
    
    console.log(`🎨 Aplicando aura para ${currentBoss.nombre}: ${color}`);
}

function resetBossAura() {
    // Si hay un boss activo con color, aplicar su aura
    if (currentBoss && currentBoss.color) {
        applyBossAura(currentBoss.color);
    } else {
        // Si no, usar el filtro por defecto
        const defaultFilter = 'drop-shadow(0 0 5px rgba(0, 0, 0, 0.5))';
        bossImage.style.filter = defaultFilter;
        bossImage.dataset.originalFilter = defaultFilter;
    }
}
function restoreBossAppearance() {
    const originalFilter = bossImage.dataset.originalFilter;
    if (originalFilter) {
        bossImage.style.filter = originalFilter;
        console.log(`🔄 Restaurando filtro original: ${originalFilter}`);
    } else {
        resetBossAura();
    }
}

// ===================================================================================
// NUEVA FUNCIÓN: MOSTRAR VICTORIA ESTILO DARK SOULS
// ===================================================================================
function showVictoryScreen() {
    playSound(bellSound)
    stopTimerParticles();
    clearInterval(timerInterval);
    clearInterval(breakInterval);
    
    // ACTUALIZAR ESTADÍSTICAS
    if (currentBossId) {
        const stats = getStats();
        stats.bestiasMatadas[currentBossId] = (stats.bestiasMatadas[currentBossId] || 0) + 1;
        
        // ⚠️ CORREGIR: ELIMINAR ESTA LÍNEA QUE CAUSA DUPLICACIÓN
        // stats.totalMinutos = (stats.totalMinutos || 0) + Math.floor(dealtSeconds / 60);
        
        // ✅ NUEVO: ACTUALIZAR PACTO MÁXIMO
        const duracionPacto = Math.floor(pactInitialSeconds / 60);
        if (duracionPacto > (stats.pactoMaximo || 0)) {
            stats.pactoMaximo = duracionPacto;
        }
        
        saveStats(stats);
    }
    
    // Crear pantalla de victoria específica
    const victoryScreen = document.createElement('div');
    victoryScreen.id = 'victory-screen';
    victoryScreen.className = 'screen victory-screen';
    victoryScreen.innerHTML = `
        <div class="victory-content">
            <div class="victory-boss-name">${currentBoss ? currentBoss.nombre : ""}</div>
            <h2 class="victory-title">BESTIA CAZADA</h2>
            <div class="victory-subtitle">PULSA CUALQUIER TECLA PARA CONTINUAR</div>
        </div>
    `;
    
    document.body.appendChild(victoryScreen);
    
    // Efectos de sonido
    
    // Ocultar otras pantallas
    battleScreen.classList.add('hidden');
    messageScreen.classList.add('hidden');
    
    // Actualizar título y favicon
    updateTabTitle(0, 'victory');
    updateFavicon('victory');
    
    // Usar setTimeout para asegurar que los eventos se adjuntan después del render
    setTimeout(() => {
        document.addEventListener('keydown', handleVictoryInput);
        victoryScreen.addEventListener('click', handleVictoryInput);
    }, 100);
}

function handleVictoryInput(e) {
    playSound(goToMenu)
    // Prevenir múltiples ejecuciones
    if (e.type === 'click') {
        e.stopPropagation();
    }
    
    hideVictoryScreen(currentBoss ? currentBoss.id : "");
}
function capitalizarPrimeraLetra(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

function hideVictoryScreen(bossName) {
    const victoryScreen = document.getElementById('victory-screen');
    
    // Remover eventos primero
    document.removeEventListener('keydown', handleVictoryInput);
    if (victoryScreen) {
        victoryScreen.removeEventListener('click', handleVictoryInput);
    }
    
    // Remover pantalla
    if (victoryScreen) {
        victoryScreen.remove();
    }
    
    // Volver al menú
    returnToMenu();
    // Toast con pausa automática (comportamiento por defecto)
showToast('BESTIARIO ACTUALIZADO', `Has dominado a ${capitalizarPrimeraLetra(bossName)}`, { 
    type: 'gold',
    duration: 5000,
    showProgress: true 
});
}


/**
 * Muestra una notificación toast personalizada
 * @param {string} title - Título de la notificación
 * @param {string} message - Mensaje de la notificación
 * @param {Object} options - Opciones personalizadas
 * @param {string} options.type - Tipo predefinido ('gold', 'error', 'success', 'info', 'warning')
 * @param {string} options.backgroundColor - Color de fondo personalizado
 * @param {string} options.textColor - Color del texto personalizado
 * @param {string} options.borderColor - Color del borde personalizado
 * @param {string} options.titleColor - Color del título personalizado
 * @param {number} options.duration - Duración en milisegundos (por defecto 5000ms)
 * @param {boolean} options.showProgress - Mostrar barra de progreso (true por defecto)
 */
function showToast(title, message, options = {}) {
    const toastContainer = document.getElementById('toast-container');
    if (!toastContainer) {
        console.error("Toast container no encontrado");
        return;
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    
    // Aplicar tipo predefinido si se especifica
    if (options.type) {
        toast.classList.add(options.type);
    }
    
    // Aplicar estilos personalizados si se proporcionan
    const style = [];
    if (options.backgroundColor) style.push(`--toast-bg: ${options.backgroundColor}`);
    if (options.textColor) style.push(`--toast-text: ${options.textColor}`);
    if (options.borderColor) style.push(`--toast-border: ${options.borderColor}`);
    if (options.titleColor) style.push(`--toast-title: ${options.titleColor}`);
    
    if (style.length > 0) {
        toast.style = style.join('; ');
    }
    
    const duration = options.duration || 5000;
    const showProgress = options.showProgress !== false; // true por defecto
    
    toast.innerHTML = `
        <div class="toast-header">
            <strong class="toast-title">${title}</strong>
            <button class="toast-close" onclick="this.parentElement.parentElement.remove()">×</button>
        </div>
        <div class="toast-message">${message}</div>
        ${showProgress ? '<div class="toast-progress"></div>' : ''}
    `;
    
    // Variables para controlar el tiempo
    let remainingTime = duration;
    let startTime = Date.now();
    let timeoutId;
    let isPaused = false;
    
    const progressBar = toast.querySelector('.toast-progress');
    
    // Función para iniciar el temporizador de eliminación
    const startRemoveTimer = () => {
        timeoutId = setTimeout(() => {
            if (toast.parentNode && !isPaused) {
                removeToast();
            }
        }, remainingTime);
    };
    
    // Función para eliminar el toast con animación
    const removeToast = () => {
        toast.style.animation = `toastFadeOut 0.5s forwards ease-in`;
        setTimeout(() => {
            if (toast.parentNode) {
                toast.remove();
            }
        }, 500);
    };
    
    // Configurar eventos de pausa/reanudación
    toast.addEventListener('mouseenter', () => {
        isPaused = true;
        clearTimeout(timeoutId);
        
        // Calcular tiempo restante
        const elapsed = Date.now() - startTime;
        remainingTime -= elapsed;
        
        // Pausar animación de la barra de progreso
        if (progressBar) {
            progressBar.style.animationPlayState = 'paused';
        }
    });
    
    toast.addEventListener('mouseleave', () => {
        if (isPaused) {
            isPaused = false;
            startTime = Date.now();
            
            // Reanudar animación de la barra de progreso
            if (progressBar) {
                progressBar.style.animationPlayState = 'running';
            }
            
            // Reiniciar temporizador de eliminación
            startRemoveTimer();
        }
    });
    
    // Configurar la barra de progreso si existe
    if (progressBar) {
        progressBar.style.animationDuration = `${duration}ms`;
    }
    
    // Iniciar animación de entrada
    toast.style.animation = `toastSlideIn 0.5s forwards ease-out`;
    
    // Agregar al contenedor
    toastContainer.appendChild(toast);
    
    // Iniciar temporizador de eliminación
    startRemoveTimer();
    
    // Función para eliminar manualmente el toast
    toast.removeToast = () => {
        clearTimeout(timeoutId);
        removeToast();
    };
    
    return toast;
}

// Función de alias para mantener compatibilidad
function showToastify(title, message, type = 'gold', duration = 5000) {
    return showToast(title, message, { type, duration });
}

// --- EJEMPLOS DE CÓMO LLAMARÍAS ESTA FUNCIÓN ---

// Cuando la pantalla de victoria se desvanece y regresas al menú:
// showToastify('¡NUEVO DOMINIO AÑADIDO!', 'Bestia "El Archivista" registrada en el Bestiario.', 'gold');

// Otro ejemplo, quizás para un error:
// showToastify('ERROR DEL SISTEMA', 'No se pudo guardar la partida automáticamente.', 'error');

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
    
    pauseBtn.classList.remove('hidden');
    pauseBtn.textContent = "❚❚";
    pauseBtn.classList.remove('paused');
    
    updateTabTitle(duration, 'battle');
    updateFavicon('battle');
    
    launchAttackBtn.disabled = true;
    if (launchAttackBtnMobile) {
        launchAttackBtnMobile.disabled = true;
    }
    
    targetTime = Date.now() + duration * 1000;
    minuteSaveCounter = 0;
    
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        if (isPaused) {
            targetTime += 1000;
            return;
        }
        
        const timeRemaining = Math.round((targetTime - Date.now()) / 1000);
        
        // Guardar progreso cada minuto
        minuteSaveCounter++;
        if (minuteSaveCounter >= 60) {
            const stats = getStats();
            stats.totalMinutos = (stats.totalMinutos || 0) + 1;

        // NUEVO: Guardar en materia actual también
        if (currentClassId) {
            const currentClass = stats.clases.find(c => c.id === currentClassId);
            if (currentClass) {
                currentClass.minutos = (currentClass.minutos || 0) + 1;
                console.log(`📚 +1 minuto para: ${currentClass.nombre} (Total: ${currentClass.minutos}min)`);
            }
        }

            saveStats(stats);
            minuteSaveCounter = 0;
        }

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
    pauseBtn.classList.add('hidden');
    battleScreen.classList.remove('timer-running');

    // Sumar los segundos cargados a los segundos infligidos
    dealtSeconds += loadedSeconds;

    // GUARDAR EL FILTRO ORIGINAL ANTES DE MODIFICARLO
    const originalFilter = bossImage.style.filter;
    
    // EFECTO DE IMPACTO VISUAL TEMPORAL (solo duración breve)
    bossImage.style.filter = 'brightness(2) sepia(1)';
    
    // Efecto temporal en la barra de vida (solo 500ms)
    healthBarInner.style.background = '#FF0000';
    healthBarInner.style.boxShadow = '0 0 20px #FF0000';
    
    setTimeout(() => {
        // RESTAURAR FILTRO ORIGINAL DEL BOSS
        bossImage.style.filter = originalFilter;
        
        // Restaurar el gradiente original de la barra de vida
        restoreHealthBarAppearance();
        
        loadedSeconds = 0;
        updateHealthBarImpact();
        
        // ¡VERIFICACIÓN CLAVE! - ¿Matamos al jefe?
        if (unallocatedSeconds <= 0) {
            // ¡VICTORIA! El jefe fue derrotado
            showVictoryScreen();
        } else {
            // Ataque normal, ir a descanso
            showBreakScreen();
        }
    }, 500);
}

function restoreHealthBarAppearance() {
    healthBarInner.style.background = 'linear-gradient(90deg, #4D0604 98%, #7A534C)';
    healthBarInner.style.boxShadow = 'none';
    healthBarInner.style.borderRight = '1px solid #ffffffb9';
    healthBarInner.style.borderRadius = '2px 0px 0px 2px';
}
function showBreakScreen() {
    playSound(bellSound);
    updateTabTitle(0, 'break');
    updateFavicon('break');
    
    breakRemaining = BREAK_DURATION;
    breakExtended = false;
    
    // GUARDAR FILTRO ORIGINAL ANTES DEL DESCANSO
    const originalFilter = bossImage.style.filter;
    
    // OCULTAR TIMER PRINCIPAL Y MOSTRAR FOGATA
    battleScreen.classList.add('break-active');
    document.getElementById('bonfire-container').classList.remove('hidden');
    
    // APLICAR FILTRO TENUE DURANTE DESCANSO
    bossImage.style.filter = 'brightness(0.5) drop-shadow(0 0 10px rgba(0,0,0,0.5))';
    
    // USAR TIMER DE DESCANSO EN VEZ DEL PRINCIPAL
    updateBreakTimerDisplay(breakRemaining);
    
    showMessage("", 0, null, {
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
            // RESTAURAR FILTRO ORIGINAL AL TERMINAR DESCANSO
            bossImage.style.filter = originalFilter;
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
        playSound(bonfireSound); 

        if (!breakExtended) {
            breakExtended = true;
            // Extender el descanso sumando 300 segundos (5 minutos)
            breakRemaining += 300; // ← CORREGIDO: sumar directamente a la variable
            updateBreakTimerDisplay(breakRemaining);
            confirmYesBtn.disabled = true;
            confirmYesBtn.textContent = "Descanso Extendido";
        }
    }

    function skipBreak() {
        playSound(clickSound);
        clearInterval(breakInterval);
        // RESTAURAR FILTRO ORIGINAL AL SALTAR DESCANSO
        const originalFilter = bossImage.dataset.originalFilter;
        if (originalFilter) {
            bossImage.style.filter = originalFilter;
        }
        endBreak();
    }

    function endBreak() {
        // OCULTAR FOGATA Y RESTAURAR TIMER PRINCIPAL
        document.getElementById('bonfire-container').classList.add('hidden');
        battleScreen.classList.remove('break-active');
        messageScreen.classList.add('hidden');
        
        // RESTAURAR BARRA DE VIDA ANTES DEL NUEVO ATAQUE
        restoreHealthBarAppearance();
        
        // RESETEAR COMPLETAMENTE PARA NUEVO ATAQUE
        loadedSeconds = 0;
        resetForNextRound();
    }
    function resetForNextRound() {
        isTimerRunning = false;
        pauseBtn.classList.add('hidden');
        battleScreen.classList.remove('timer-running');
        
        document.querySelectorAll('.action-navbar button').forEach(b => {
            b.classList.remove('hidden');
            b.disabled = false;
        });
        
        // Deshabilitar ambos botones de ataque
        launchAttackBtn.disabled = true;
        if (launchAttackBtnMobile) {
            launchAttackBtnMobile.disabled = true;
        }
        
        restoreHealthBarAppearance();
        restoreBossAppearance();
        healthBarInner.style.animation = 'none';
        
        updateUI();
        updateTimerDisplay(0);
        updateTabTitle(0, 'battle');
        updateFavicon('battle');
    }
    function confirmAbandon() {
        playSound(clickSound);
        
        if (isTimerRunning) {
            isPaused = true;
        }
        
        // SI EL TIMER NO ESTÁ CORRIENDO, VOLVER DIRECTAMENTE
        // if (!isTimerRunning) {
        //     returnToMenu();
        //     return;
        // }
        // isPaused = true;
        
        // Crear modal específico para romper pacto
        const abandonModal = document.createElement('div');
        abandonModal.id = 'abandon-modal';
        abandonModal.className = 'screen message-screen abandon-modal';
        abandonModal.innerHTML = `
            <div class="modal-content">
                <h2>¿ROMPER EL PACTO SAGRADO?</h2>
                <div class="confirmation-buttons">
                    <button id="confirm-abandon-btn" class="red-button">RENDIRME AL TEMOR</button>
                    <button id="cancel-abandon-btn" class="gold-button">SEGUIR EN BATALLA</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(abandonModal);
        
        // Configurar eventos
        document.getElementById('confirm-abandon-btn').onclick = ()=>{
            returnToMenu();
            abandonModal.remove();
        }
        document.getElementById('cancel-abandon-btn').onclick = () => {
            isPaused = false;
            abandonModal.remove();
        };
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
        
        // CORREGIR: Calcular horas y minutos correctamente
        const totalHours = Math.floor(stats.totalMinutos / 60);
        const totalMinutes = stats.totalMinutos % 60;
        
        const totalKills = Object.values(stats.bestiasMatadas).reduce((sum, current) => sum + current, 0);
    
        let content = `
            <div class="bestiary-layout">
                <!-- ENCABEZADO MEJORADO -->
                <div class="bestiary-header-section">
                    <div class="bestiary-rank-desc">
                        <div class="bestiary-rank-icon">${rank.icon}</div>
                        <div class="bestiary-rank-info">
                            <h2>${rank.rango}</h2>
                            <p>${rank.lore}</p>
                        </div>
                    </div>
                    <div class="bestiary-main-stats">
                        <div class="stat-item">
                            <h4>Tiempo Total</h4>
                            <!-- CORREGIDO: Mostrar en formato horas:minutos -->
                            <p>${totalHours}h ${totalMinutes}m</p>
                        </div>
                        <div class="stat-item">
                            <h4>Bestias Cazadas</h4>
                            <p>${totalKills}</p>
                        </div>
                    </div>
                </div>
                
                <!-- SECCIÓN MATERIAS -->
                <div class="bestiary-classes-section">
                    <h3>DOMINIOS</h3>
                    <div class="classes-grid">
        `;
        
// En la sección de materias, cambiar a:
// En la sección de materias, cambiar a:
if (stats.clases.length === 0) {
    content += `
        <div class="class-grid-item" style="grid-column: 1 / -1; max-width: 280px; margin: 0 auto;">
            <span class="class-grid-title">Aún no has conquistado dominios</span>
            <span class="class-grid-subtitle">Crea materias para comenzar</span>
        </div>
    `;
} else {
    const sortedClasses = [...stats.clases].sort((a, b) => b.minutos - a.minutos);
    
    sortedClasses.forEach(clase => {
        // CORREGIDO: Calcular horas y minutos separados
        const horas = Math.floor(clase.minutos / 60);
        const minutos = clase.minutos % 60;
        
        // Acortar nombres muy largos
        const nombreDisplay = clase.nombre.length > 25 
            ? clase.nombre.substring(0, 22) + '...' 
            : clase.nombre;
            
        content += `
            <div class="class-grid-item">
                <span class="class-grid-title" title="${clase.nombre}">${nombreDisplay}</span>
                <span class="class-grid-subtitle">${horas}h ${minutos}min (${clase.minutos} min)</span>
            </div>
        `;
    });
}
        
        content += `
                    </div>
                </div>
                
                <!-- SECCIÓN BESTIAS -->
                <div class="bestiary-bosses-section">
                    <h3>BESTIAS CAZADAS</h3>
                    <div class="bosses-grid">
        `;
        
        if (Object.keys(stats.bestiasMatadas).length === 0) {
            content += `
                <div class="boss-grid-item" style="grid-column: 1 / -1; text-align: center;">
                    <p class="boss-name">Aún no has cazado bestias</p>
                    <p class="boss-kills">Completa pactos para comenzar</p>
                </div>
            `;
        } else {
            JEFES.forEach(jefe => {
                const count = stats.bestiasMatadas[jefe.id] || 0;
                const isFavorite = favorite && favorite.id === jefe.id;
                const itemClass = `boss-grid-item ${count === 0 ? 'unhunted' : ''} ${isFavorite ? 'favorite-boss' : ''}`;
                
                content += `
                    <div class="${itemClass}">
                        <p class="boss-name">${jefe.nombre}</p>
                        <p class="boss-kills">${count === 0 ? 'No cazado' : `${count} ${count === 1 ? 'vez' : 'veces'}`}</p>
                    </div>
                `;
            });
        }
        
        content += `
                    </div>
                </div>
            </div>
        `;
        
        bestiaryStats.innerHTML = content;
        bestiaryModal.classList.remove('hidden');
    }

    function updateUI() {
        const isMobile = window.innerWidth <= 768;
        const attackBtn = isMobile ? launchAttackBtnMobile : launchAttackBtn;
        
        attackBtn.disabled = isTimerRunning || loadedSeconds === 0;
        updateHealthBarPreview();
        
        if (!isTimerRunning) {
            updateTimerDisplay(loadedSeconds);
        }
    }

    function updateHealthBarPreview() {
        if (pactInitialSeconds === 0) return;
        
        const healthPercent = (unallocatedSeconds / pactInitialSeconds) * 100;
        healthBarInner.style.width = `${healthPercent}%`;
        
        // Asegurarse de que siempre tenga el gradiente original
        healthBarInner.style.background = 'linear-gradient(90deg, #4D0604 98%, #7A534C)';
        healthBarInner.style.boxShadow = 'none';
        
        // Solo mostrar pulso cuando la vida es baja
        if (healthPercent < 30) {
            healthBarInner.style.animation = 'healthLowPulse 1.5s infinite';
        } else {
            healthBarInner.style.animation = 'none';
        }
        updateHealthBarTooltip();
    }

    function updateHealthBarImpact() {
        if (pactInitialSeconds === 0) return;
        
        const healthPercent = (unallocatedSeconds / pactInitialSeconds) * 100;
        healthBarInner.style.width = `${healthPercent}%`;
        
        // SOLO aplicar animación de pulso cuando la vida es baja
        // y removerla cuando no es necesario
        if (healthPercent < 30) {
            healthBarInner.style.animation = 'healthLowPulse 1.5s infinite';
        } else {
            healthBarInner.style.animation = 'none';
        }
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

// Reemplazar completamente la función playSound por esta versión:
function playSound(audioElement) {
    if (!audioElement) {
        console.log('❌ Elemento de audio no encontrado');
        return;
    }
    
    try {
        // Intentar reproducir directamente
        audioElement.currentTime = 0;
        const playPromise = audioElement.play();
        
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                // Si falla, mostrar mensaje útil
                console.log('🔇 Audio bloqueado, esperando interacción:', error);
                
                // Agregar evento para reintentar después de interacción
                const retryPlay = () => {
                    audioElement.play().catch(e => {});
                    document.removeEventListener('click', retryPlay);
                };
                document.addEventListener('click', retryPlay, { once: true });
            });
        }
    } catch (error) {
        console.log('❌ Error con audio:', error);
    }
}
    // Agregar este event listener para marcar la primera interacción:
    document.addEventListener('click', () => {
        if (!document.querySelector('body').classList.contains('user-interacted')) {
            document.querySelector('body').classList.add('user-interacted');
        }
    }, { once: true });

    // ===================================================================================
// SISTEMA DE DEBUG - TESTER HELPER
// ===================================================================================
function initializeDebugPanel() {
    const debugPanel = document.getElementById('debug-panel');
    const debugToggle = document.getElementById('debug-toggle');
    const debugClose = document.getElementById('debug-close');
    const debugStatus = document.getElementById('debug-status');

    // Mostrar/ocultar panel
    debugToggle.addEventListener('click', () => {
        debugPanel.classList.remove('hidden');
        updateDebugStatus();
    });

    debugClose.addEventListener('click', () => {
        debugPanel.classList.add('hidden');
    });

    // Configurar botones de debug
    document.querySelectorAll('.debug-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const action = e.target.dataset.action;
            handleDebugAction(action);
        });
    });

    // Actualizar estado cada segundo
    setInterval(updateDebugStatus, 1000);
}


function handleDebugAction(action) {
    switch(action) {
        case 'quick-test':
            quickTestSetup();
            break;
        case 'instant-victory':
            instantVictory();
            break;
        case 'reset-game':
            resetGameState();
            break;
        case 'set-boss-health':
            setBossHealth();
            break;
        case 'set-loaded-time':
            setLoadedTime();
            break;
        case 'add-random-kills':
            addRandomKills();
            break;
        case 'clear-stats':
            clearStats();
            break;
        case 'show-stats':
            showStats();
            break;
    }
    updateDebugStatus();
}

function quickTestSetup() {
    if (!currentBoss) {
        alert('Primero inicia una batalla desde el menú principal');
        return;
    }
    
    // Configurar para prueba rápida: jefe con 2min de vida, ataque de 5min
    unallocatedSeconds = 2 * 60;
    loadedSeconds = 5 * 60;
    
    updateHealthBarImpact();
    updateUI();
    
    console.log('🚀 Test rápido configurado:');
    console.log('- Vida del jefe: 2 minutos');
    console.log('- Ataque cargado: 5 minutos');
    console.log('¡Haz clic en "LANZAR ATAQUE"!');
}

function instantVictory() {
    if (!currentBoss) {
        alert('No hay jefe activo');
        return;
    }
    
    unallocatedSeconds = 0;
    dealtSeconds = pactInitialSeconds;
    showVictoryScreen();
    
    console.log('🏆 Victoria instantánea activada');
}

function resetGameState() {
    unallocatedSeconds = pactInitialSeconds;
    loadedSeconds = 0;
    dealtSeconds = 0;
    
    updateHealthBarImpact();
    updateUI();
    
    console.log('🔄 Estado del juego reiniciado');
}

function setBossHealth() {
    const input = document.getElementById('debug-boss-health');
    const minutes = parseInt(input.value);
    
    if (isNaN(minutes) || minutes < 1) {
        alert('Ingresa un número válido de minutos');
        return;
    }
    
    unallocatedSeconds = minutes * 60;
    updateHealthBarImpact();
    
    console.log(`🩸 Vida del jefe establecida a: ${minutes} minutos`);
}

function setLoadedTime() {
    const input = document.getElementById('debug-loaded-time');
    const minutes = parseInt(input.value);
    
    if (isNaN(minutes) || minutes < 1) {
        alert('Ingresa un número válido de minutos');
        return;
    }
    
    loadedSeconds = minutes * 60;
    updateUI();
    
    console.log(`⚔️ Ataque cargado: ${minutes} minutos`);
}

function addRandomKills() {
    const stats = getStats();
    JEFES.forEach(jefe => {
        const randomKills = Math.floor(Math.random() * 3) + 1;
        stats.bestiasMatadas[jefe.id] = (stats.bestiasMatadas[jefe.id] || 0) + randomKills;
    });
    
    // Agregar tiempo aleatorio también
    stats.totalMinutos = (stats.totalMinutos || 0) + Math.floor(Math.random() * 500) + 100;
    
    saveStats(stats);
    
    console.log('🎯 Kills aleatorios agregados al bestiario');
    showBestiary();
}

function clearStats() {
    if (confirm('¿Estás seguro de que querés limpiar todas las estadísticas?')) {
        localStorage.removeItem('focusSoulStats');
        console.log('🗑️ Estadísticas limpiadas');
    }
}

function showStats() {
    const stats = getStats();
    console.log('📊 Estadísticas actuales:', stats);
    alert('Estadísticas mostradas en consola (F12)');
}

function updateDebugStatus() {
    const statusElement = document.getElementById('debug-status');
    
    if (!statusElement) return;
    
    let status = '';
    
    if (currentBoss) {
        status += `<strong>Jefe Actual:</strong> ${currentBoss.nombre}<br>`;
        status += `<strong>Vida del Jefe:</strong> ${Math.floor(unallocatedSeconds / 60)} minutos<br>`;
        status += `<strong>Ataque Cargado:</strong> ${Math.floor(loadedSeconds / 60)} minutos<br>`;
        status += `<strong>Pacto Total:</strong> ${Math.floor(pactInitialSeconds / 60)} minutos<br>`;
        status += `<strong>Daño Infligido:</strong> ${Math.floor(dealtSeconds / 60)} minutos`;
    } else {
        status += 'No hay batalla activa. Inicia una desde el menú principal.';
    }
    
    // Mostrar stats del localStorage
    const stats = getStats();
    status += `<br><br><strong>Bestias Matadas:</strong> ${Object.values(stats.bestiasMatadas).reduce((sum, val) => sum + val, 0)}`;
    status += `<br><strong>Tiempo Total:</strong> ${(stats.totalMinutos / 60).toFixed(1)} horas`;
    
    statusElement.innerHTML = status;
}

initialize();
initializeHealthBarTooltip();
initializeDebugPanel();

});



