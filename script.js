document.addEventListener('DOMContentLoaded', () => {
    // Reproducir sonido y animación de encendido al cargar
    const powerOnSound = document.getElementById('power-on-sound');
    powerOnSound.play().catch(error => {
        console.log('Error al reproducir sonido de encendido:', error);
    });

    // Inicializar reloj y eventos independientemente del sonido
    setInterval(() => {
        const time = new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
        document.getElementById('current-time').textContent = time;
    }, 1000);

    // Asignar eventos a los íconos
    const apps = document.querySelectorAll('.app[data-app]');
    apps.forEach(app => {
        app.addEventListener('click', () => {
            console.log(`Clic en app ${app.dataset.app}`); // Depuración
            openApp(app.dataset.app);
        });
    });

    console.log('Eventos asignados a', apps.length, 'apps');
});

function togglePower() {
    const screen = document.getElementById('screen');
    screen.style.opacity = screen.style.opacity === '0' ? '1' : '0';
    playSound();
}

function volumeUp() {
    alert('Volumen subido al máximo');
    playSound();
}

function volumeDown() {
    alert('Volumen bajado al mínimo');
    playSound();
}

function playSound() {
    const sound = document.getElementById('click-sound');
    sound.currentTime = 0;
    sound.play().catch(error => console.log('Error al reproducir sonido de clic:', error));
}

function openApp(appNumber) {
    console.log(`Abriendo app ${appNumber}`); // Depuración
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = '';
    modalBody.className = '';
    playSound();

    switch (appNumber) {
        case '1':
            modalBody.innerHTML = `
                <h2>Sobre Mí</h2>
                <p>Soy <strong>Héctor José Méndez Novas</strong>, un desarrollador en ascenso con pasión por el <em>front-end</em> y ambición por dominar el <em>back-end</em>. Mi meta es convertirme en un <strong>full-stack developer</strong> y aportar soluciones innovadoras.</p>
                <h3>Perfil Profesional</h3>
                <p>Un joven motivado con habilidades en desarrollo web y un enfoque en aprender continuamente. Me esfuerzo por mantener un alto nivel de calidad en cada proyecto que realizo.</p>
                <h3>Habilidades</h3>
                <ul>
                    <li><strong>Front-End:</strong> HTML, CSS, JavaScript - Experiencia en crear interfaces interactivas y responsivas.</li>
                    <li><strong>Back-End:</strong> Node.js, Python, PHP (en progreso) - Estoy explorando frameworks como Express y Django.</li>
                    <li><strong>Bases de Datos:</strong> SQL, MongoDB - Capaz de diseñar y gestionar bases de datos relacionales y NoSQL.</li>
                    <li><strong>Herramientas:</strong> Git, VS Code - Uso eficiente de control de versiones y entornos de desarrollo.</li>
                </ul>
                <h3>Experiencia</h3>
                <p>A lo largo de mi aprendizaje, he trabajado en varios proyectos personales, incluyendo esta página web interactiva, que demuestra mis habilidades en diseño y programación.</p>
                <h3>Objetivos</h3>
                <ul>
                    <li>Desarrollo full-stack integral - Dominar ambas caras del desarrollo web.</li>
                    <li>Proyectos innovadores - Crear soluciones que impacten positivamente.</li>
                    <li>Colaboración en equipos - Crecer profesionalmente con otros desarrolladores.</li>
                    <li>Aprendizaje continuo - Mantenerse actualizado con las últimas tecnologías.</li>
                </ul>
                <img src="fotos/Captura de pantalla_19-5-2024_141749_www.instagram.com.jpeg" alt="Foto" style="max-width: 100%; border-radius: 10px; margin-top: 15px;">
            `;
            modalBody.classList.add('app1');
            break;
        case '2':
            modalBody.innerHTML = `
                <h2>Lenguajes y Habilidades</h2>
                <ul>
                    <li>HTML: Avanzado - Creación de estructuras sólidas.</li>
                    <li>CSS: Avanzado - Diseño responsivo y animaciones.</li>
                    <li>JavaScript: Avanzado - Lógica dinámica y manipulación del DOM.</li>
                    <li>C#: Intermedio - Desarrollo de aplicaciones de escritorio.</li>
                    <li>Java: Intermedio - Fundamentos de programación orientada a objetos.</li>
                    <li>SQL: Avanzado - Consultas complejas y optimización.</li>
                    <li>MongoDB: Intermedio - Gestión de bases de datos NoSQL.</li>
                </ul>
            `;
            modalBody.classList.add('app2');
            break;
        case '3':
            modalBody.innerHTML = `
                <h2>Calculadora</h2>
                <div id="calculator">
                    <input type="text" id="calc-display" value="0" disabled>
                    <div id="calc-buttons">
                        <button onclick="calcInput('7')">7</button>
                        <button onclick="calcInput('8')">8</button>
                        <button onclick="calcInput('9')">9</button>
                        <button onclick="calcInput('/')">/</button>
                        <button onclick="calcInput('4')">4</button>
                        <button onclick="calcInput('5')">5</button>
                        <button onclick="calcInput('6')">6</button>
                        <button onclick="calcInput('*')">×</button>
                        <button onclick="calcInput('1')">1</button>
                        <button onclick="calcInput('2')">2</button>
                        <button onclick="calcInput('3')">3</button>
                        <button onclick="calcInput('-')">-</button>
                        <button onclick="calcInput('0')">0</button>
                        <button onclick="calcInput('.')">.</button>
                        <button onclick="calcEqual()">=</button>
                        <button onclick="calcInput('+')">+</button>
                        <button onclick="calcClear()">C</button>
                    </div>
                </div>
            `;
            break;
        case '4':
            modalBody.innerHTML = `
                <h2>Galería de Proyectos</h2>
                <p>Visualiza mis trabajos: <a href="https://github.com/Hcmendez" target="_blank">Ver en GitHub</a></p>
                <div id="gallery" class="gallery">
                    <img src="fotos/proyecto1.jpg" alt="Proyecto 1" onclick="zoomImage(this)">
                    <img src="fotos/proyecto2.jpg" alt="Proyecto 2" onclick="zoomImage(this)">
                    <img src="fotos/proyecto1.jpg" alt="Proyecto 3" onclick="zoomImage(this)"> <!-- Añadido para más contenido -->
                    <img src="fotos/proyecto2.jpg" alt="Proyecto 4" onclick="zoomImage(this)"> <!-- Añadido para más contenido -->
                    <p>Descripción de proyectos: He trabajado en varias aplicaciones web y móviles, enfocándome en la usabilidad y el diseño.</p>
                    <p>Proyecto 1: Desarrollo de una página web interactiva.</p>
                    <p>Proyecto 2: Creación de un sistema de gestión con Node.js.</p>
                </div>
            `;
            break;
        case '5':
            modalBody.innerHTML = `
                <h2>Calendario</h2>
                <p>Próximos eventos:</p>
                <ul>
                    <li>12/03/2025 - Entrevista técnica</li>
                    <li>15/03/2025 - Reunión de equipo</li>
                    <li>20/03/2025 - Presentación de proyecto</li>
                </ul>
                <button onclick="addEvent()">Añadir Evento</button>
            `;
            break;
        case '6':
            modalBody.innerHTML = `
                <h2>Configuración</h2>
                <p>Tema: <select onchange="changeTheme(this.value)">
                    <option value="light">Claro</option>
                    <option value="dark">Oscuro</option>
                </select></p>
                <p>Fondo: <button onclick="changeBackground()">Cambiar</button></p>
            `;
            break;
    }

    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
    playSound();
}

let calcExpression = '0';

function calcInput(value) {
    if (calcExpression === '0' && value !== '.') calcExpression = '';
    calcExpression += value;
    document.getElementById('calc-display').value = calcExpression;
    playSound();
}

function calcClear() {
    calcExpression = '0';
    document.getElementById('calc-display').value = calcExpression;
    playSound();
}

function calcEqual() {
    try {
        calcExpression = eval(calcExpression).toString();
        document.getElementById('calc-display').value = calcExpression;
    } catch {
        document.getElementById('calc-display').value = 'Error';
        calcExpression = '0';
    }
    playSound();
}

function zoomImage(img) {
    const modal = document.getElementById('modal');
    modal.innerHTML = `
        <div class="modal-content" style="text-align: center;">
            <span class="close" onclick="closeModal()">×</span>
            <img src="${img.src}" style="max-width: 90%; max-height: 80vh; border-radius: 10px;">
        </div>
    `;
    modal.style.display = 'block';
}

function addEvent() {
    const event = prompt('Ingresa un evento (fecha - descripción):');
    if (event) {
        const p = document.createElement('p');
        p.textContent = event;
        document.querySelector('#modal-body').appendChild(p);
        playSound();
    }
}

function changeTheme(theme) {
    document.body.style.background = theme === 'dark' ? 'linear-gradient(135deg, #1a1a1a, #333)' : 'url(\'fondo/mesa.jpg\') center/cover no-repeat fixed';
    playSound();
}

function changeBackground() {
    const backgrounds = ['fondo/androidrain.webp', 'fondo/background2.jpg', 'fondo/background3.jpg'];
    const randomBg = backgrounds[Math.floor(Math.random() * backgrounds)];
    document.querySelector('.screen').style.backgroundImage = `url('${randomBg}')`;
    playSound();
}