async function registerUser() {
    const username = document.getElementById("inputField").value;
    const password = document.getElementById("inputField2").value;
    const email = document.getElementById("inputField3").value.toLowerCase();
    const messageElement = document.getElementById("message");

    if (!username || !password || !email) {
        alert("Please enter a username, password, and email.");
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    try {
        const response = await fetch("/.netlify/functions/registerUser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password, email }),
        });

        const data = await response.json();
        if (response.ok) {
            alert(data.message);
        } else {
            alert(data.error || "Registration failed.");
        }
    } catch (error) {
        alert("Error connecting to the server.");
        console.error(error);
    }
}

const openRegisterImg = document.getElementById("openRegisterImg");
const openRegisterBtn = document.getElementById("openRegisterBtn");
const closeBtn = document.getElementById("close-login");
const overlay = document.getElementById("overlay");
const loginForm = document.getElementById("login-form");
// const landing = document.getElementById("landing-screen");

function openRegister() {
  overlay.classList.remove("hidden");
  loginForm.classList.remove("hidden");
  // landing.classList.add("hidden");
}
if (openRegisterImg) {
  openRegisterImg.addEventListener("click", openRegister);
}
if (openRegisterBtn) {
  openRegisterBtn.addEventListener("click", openRegister);
}

closeBtn.addEventListener("click", () => {
  overlay.classList.add("hidden");
  loginForm.classList.add("hidden");
  // landing.classList.remove("hidden");
});


function scaleNavbar() {
  if (window.innerWidth > 600) return;
  const wrapper = document.querySelector('.navbar-wrapper');
  const originalHeight = 70;
  const minWidth = 320;
  const maxWidth = 1300;
  const vw = window.innerWidth;

  let scale;
  if (vw >= maxWidth) {
    scale = 1;
  } else if (vw <= minWidth) {
    scale = 0.25;
  } else {
    scale = 0.25 + ((vw - minWidth) / (maxWidth - minWidth)) * (1 - 0.25);
  }

  wrapper.style.transform = `scale(${scale})`;
  wrapper.style.height = `${originalHeight * scale}px`;
}

window.addEventListener('resize', scaleNavbar);
window.addEventListener('load', scaleNavbar);

function enviarTiquet() {
    const datos = {
        asunto: document.getElementById('asunto').value,
        categoria: document.getElementById('categoria').value,
        prioridad: document.getElementById('prioridad').value,
        descripcion: document.getElementById('descripcion').value
    };

    const mensajeStatus = document.getElementById('resultado-envio');

    // Validación de campos vacíos
    if (!datos.asunto || !datos.descripcion) {
        mensajeStatus.textContent = "Error: Todos los campos son obligatorios.";
        mensajeStatus.className = "error-msg";
        return;
    }

    // Simulación de envío al servidor
    console.log("Enviando Tiquet...", datos);
    
    // Generar ID de seguimiento aleatorio
    const ticketID = Math.floor(Math.random() * 90000) + 10000;

    // Feedback visual
    mensajeStatus.textContent = `Éxito: Tiquet #${ticketID} creado correctamente. Revisaremos su caso en breve.`;
    mensajeStatus.className = "success-msg";

    // Reiniciar formulario tras 2 segundos
    setTimeout(() => {
        document.getElementById('form-tiquet').reset();
    }, 2000);
}

function toggleQA(element) {
    const item = element.parentElement;
    
    // Cierra otros elementos abiertos (opcional, para modo acordeón puro)
    document.querySelectorAll('.qa-item').forEach(otherItem => {
        if (otherItem !== item) {
            otherItem.classList.remove('active');
        }
    });

    // Alterna el estado del elemento actual
    item.classList.toggle('active');
}

fetch('nav.html')
    .then(response => response.text())
    .then(data => {
    document.getElementById('nav-placeholder').innerHTML = data;
});

function toggleElement(button) {
    const content = button.nextElementSibling;
    const isOpen = content.style.display === "block";
    
    // Cerramos el contenido si está abierto, lo abrimos si está cerrado
    content.style.display = isOpen ? "none" : "block";
    
    // Opcional: Cambiar estilo del botón al estar activo
    button.style.borderBottom = isOpen ? "none" : "1px solid #f2c811";
  }
  const productos = [
  {
    "nombre": "Corsair 3500X Semi Torre Cristal Templado",
    "precio": "99.90€",
    "estado": "Nuevo",
    "imagen": "../assets/product_images/xl_media_image1.jpeg",
    "caracteristicas": "Tiene unas proporciones pequeñas y un diseño poco llamativo, además de tener un lado de vidrio. Tiene varios espacios para ventiladores."
  },
  {
    "nombre": "Corsair 4000D Semi Torre E-ATX Blanca",
    "precio": "97.41€",
    "estado": "Nuevo",
    "imagen": "../assets/product_images/xl_media_image2.jpeg",
    "caracteristicas": "Color blanco, con medidas anti polvo. Ventana de cristal y espacio para 7 ampliaciones en horizontal y 3 en vertical."
  },
  {
    "nombre": "ASUS A31 PLUS ARGB Mid Tower ATX",
    "precio": "108.95€",
    "estado": "Nuevo",
    "imagen": "../assets/product_images/xl_media_image3.jpeg",
    "caracteristicas": "Viene con varios ventiladores ya instalados, color negro con dos ventanas de cristal templado, 7 ranuras de expansión horizontal."
  },
  {
    "nombre": "AMD Ryzen 7 5800X 3.8GHz",
    "precio": "188.95€",
    "estado": "Muy bueno",
    "imagen": "../assets/product_images/xl_media_image4.jpeg",
    "caracteristicas": "Procesador para gaming con funciones de overclocking sencillas y tecnología AMD que combina la velocidad SSD con la capacidad del disco duro."
  },
  {
    "nombre": "Intel Core i7-12700 2.1 GHz",
    "precio": "332.00€",
    "estado": "Muy bueno",
    "imagen": "../assets/product_images/xl_media_image5.jpeg",
    "caracteristicas": "Procesador de super alta gama ambientado tanto al gaming como al trabajo."
  },
  {
    "nombre": "AMD Ryzen 9 9950X3D 4.3/5.7GHz",
    "precio": "332.00€",
    "estado": "Nuevo",
    "imagen": "../assets/product_images/xl_media_image6.jpeg",
    "caracteristicas": "Procesador de super alta gama ambientado al Gaming con gráfica incorporada."
  },
  {
    "nombre": "Corsair CX650 650 W 80 Plus Bronze",
    "precio": "58.98€",
    "estado": "Nuevo",
    "imagen": "../assets/product_images/xl_media_image7.jpeg",
    "caracteristicas": "Fuente Alimentación gama media de bajo consumo."
  },
  {
    "nombre": "Corsair RM850e 850W 80 Plus Gold",
    "precio": "119.90€",
    "estado": "Nuevo",
    "imagen": "../assets/product_images/xl_media_image8.jpeg",
    "caracteristicas": "Fuente de alimentación de alto rendimiento ultra silenciosa tipo Gold. Viene con todos los cables incluidos."
  },
  {
    "nombre": "Corsair RM1000x 1000W 80 Plus Gold",
    "precio": "187.61€",
    "estado": "Nuevo",
    "imagen": "../assets/product_images/xl_media_image9.jpeg",
    "caracteristicas": "Fuente de alimentación semi silenciosa de alta gama. Compatible con las gráficas más actuales y modernas, totalmente modular."
  },
  {
    "nombre": "Kingston FURY Beast DDR4 16GB (2x8GB)",
    "precio": "169.95€",
    "estado": "Muy bueno",
    "imagen": "../assets/product_images/xl_media_image10.jpeg",
    "caracteristicas": "Memoria RAM de gama media con función plug and play. Va bien para gaming de gama baja aunque su diseño se enfoca más para trabajar."
  },
  {
    "nombre": "Forgeon Cyclone PLUS V2 DDR4 32GB",
    "precio": "259.95€",
    "estado": "Nuevo",
    "imagen": "../assets/product_images/xl_media_image11.jpeg",
    "caracteristicas": "Memoria RAM diseñada para el gaming hecha con aluminio y con un disipador de calor incorporado para evitar sobrecalentamiento."
  },
  {
    "nombre": "Corsair Vengeance DDR5 5600MHz 64GB (2x32GB)",
    "precio": "869.95€",
    "estado": "Nuevo",
    "imagen": "../assets/product_images/xl_media_image12.jpeg",
    "caracteristicas": "Memoria RAM de ultra alto rendimiento diseñada para el gaming. Perfil bajo de color gris y disipadores de aluminio."
  },
  {
    "nombre": "Forgeon Nimbus PLUS SSD 2TB NVMe",
    "precio": "259.95€",
    "estado": "Nuevo",
    "imagen": "../assets/product_images/xl_media_image13.jpeg",
    "caracteristicas": "Almacenamiento de 2TB. Su mayor cualidad es la velocidad que alcanza los 7000MB/s. Su diseño está ambientado al gaming."
  },
  {
    "nombre": "Toshiba Canvio Basics 2TB Disco Externo",
    "precio": "79.94€",
    "estado": "Nuevo",
    "imagen": "../assets/product_images/xl_media_image14.jpeg",
    "caracteristicas": "Memoria externa de bajo perfil diseñada para trabajar. Viene con cables incluidos y es perfecta por su bajo precio y su pequeño tamaño."
  },
  {
    "nombre": "Samsung 990 PRO 4TB SSD NVMe",
    "precio": "494.99€",
    "estado": "Nuevo",
    "imagen": "../assets/product_images/xl_media_image15.jpeg",
    "caracteristicas": "Potente SSD Interno PCIe 4.0 NVMe para tareas exigentes como el procesamiento de vídeo en 4K y gráficos en 3D. Su punto fuerte es la durabilidad."
  },
  {
    "nombre": "Tempest Darken 360 Kit Refrigeración Líquida",
    "precio": "46.98€",
    "estado": "Nuevo",
    "imagen": "../assets/product_images/xl_media_image16.png",
    "caracteristicas": "Representa el equilibrio perfecto entre fuerza y precisión, asegurando un rendimiento constante en cualquier situación. Enfocada en gaming."
  },
  {
    "nombre": "Cougar Apolar RGB 12cm Pack 3",
    "precio": "73.99€",
    "estado": "Nuevo",
    "imagen": "../assets/product_images/xl_media_image17.jpeg",
    "caracteristicas": "Optimiza la refrigeración y el aspecto visual de tu setup, diseñado para entornos exigentes y estética gaming profesional."
  },
  {
    "nombre": "Corsair NAUTILUS 240 RS ARGB Kit Refrigeración Líquida",
    "precio": "104.01€",
    "estado": "Nuevo",
    "imagen": "../assets/product_images/xl_media_image18.jpeg",
    "caracteristicas": "Ofrece un enfriamiento eficiente y silencioso con una conectividad sencilla: se conecta directamente a la placa base."
  },
  {
    "nombre": "Owlotech MS900",
    "precio": "30.00€",
    "estado": "Nuevo",
    "imagen": "../assets/product_images/xl_media_image19.png",
    "caracteristicas": "Diseño ergonómico, sin cable, con buena precisión y DPI controlable. Sus clicks son silenciosos y tiene buena batería."
  },
  {
    "nombre": "Logitech G502 Hero",
    "precio": "81.00€",
    "estado": "Nuevo",
    "imagen": "../assets/product_images/xl_media_image20.png",
    "caracteristicas": "Diseño gaming, RGB y 11 botones programables. Su cable de 2 metros garantiza más precisión que un ratón bluetooth."
  },
  {
    "nombre": "Logitech M90",
    "precio": "8.00€",
    "estado": "Nuevo",
    "imagen": "../assets/product_images/xl_media_image21.png",
    "caracteristicas": "Ratón óptimo para oficinas, cómodo y ambidiestro (sirve para mano izquierda y derecha)."
  },
  {
    "nombre": "Logitech K120",
    "precio": "15.00€",
    "estado": "Nuevo",
    "imagen": "../assets/product_images/xl_media_image22.png",
    "caracteristicas": "Diseño profesional para oficina. Su conexión por cable ayuda a una mayor precisión y velocidad al escribir."
  },
  {
    "nombre": "Forgeon Meteor",
    "precio": "80.00€",
    "estado": "Nuevo",
    "imagen": "../assets/product_images/xl_media_image23.png",
    "caracteristicas": "Teclado mecánico con diseño profesional, ideal para oficina y gaming. Conexión por cable para máxima velocidad."
  },
  {
    "nombre": "Owlotech EK500",
    "precio": "39.99€",
    "estado": "Nuevo",
    "imagen": "../assets/product_images/xl_media_image24.jpeg",
    "caracteristicas": "Diseño ergonómico con reposabrazos que mejora la postura. Compatible con la mayoría de dispositivos del mercado."
  },
  {
    "nombre": "Monitor Alurin CoreVision 24\"",
    "precio": "80.00€",
    "estado": "Nuevo",
    "imagen": "../assets/product_images/xl_media_image25.jpeg",
    "caracteristicas": "Pantalla de alta resolución con colores vivos, ajustable y configurable, con un tamaño aceptable."
  },
  {
    "nombre": "Monitor Krom Kertz 24\" 120Hz",
    "precio": "80.00€",
    "estado": "Nuevo",
    "imagen": "../assets/product_images/xl_media_image25.jpeg",
    "caracteristicas": "Pantalla de alta resolución IPS de 120Hz con colores vivos, ajustable y configurable."
  }
  ];
const grid = document.querySelector('.products-grid');
const searchInput = document.getElementById('search-input');
const priceFilter = document.getElementById('price-filter');
const statusFilters = document.querySelectorAll('#status-filters input');

// Función para renderizar productos
// 1. Actualiza la función renderProducts para incluir el onclick
// Asegúrate de que renderProducts pase el índice correctamente
function renderProducts(lista) {
    grid.innerHTML = '';
    lista.forEach((p, index) => {
        grid.innerHTML += `
            <article class="product-card" onclick="openProductDetail(${index})">
                <div class="img-container">
                    <img src="${p.imagen}" alt="${p.nombre}">
                </div>
                <div class="info-container">
                    <h2 class="item-title">${p.nombre}</h2>
                    <p class="item-status">Estado: ${p.estado}</p>
                    <p class="item-price">${p.precio}</p>
                    <button class="buy-btn">Ver detalle</button>
                </div>
            </article>`;
    });
}

// Función actualizada para mostrar las características técnicas
function openProductDetail(index) {
    // Usamos la lista global 'productos' o la filtrada si fuera necesario
    const p = productos[index];
    
    // Inyección de datos en el DOM
    document.getElementById('detail-title').innerText = p.nombre;
    document.getElementById('detail-img').src = p.imagen;
    document.getElementById('detail-status-val').innerText = p.estado;
    document.getElementById('detail-price').innerText = p.precio;
    
    // Muestra la descripción técnica del JSON
    const descElement = document.getElementById('detail-desc');
    descElement.innerText = p.caracteristicas || "Descripción no disponible.";

    // Animación de apertura
    const productOverlay = document.getElementById('product-overlay');
    productOverlay.classList.remove('hidden');
    
    // Pequeño delay para asegurar que la transición CSS se dispare
    setTimeout(() => {
        productOverlay.classList.add('active');
    }, 10);
}

// Función de cierre (se mantiene igual)
function closeProductDetail() {
    const productOverlay = document.getElementById('product-overlay');
    productOverlay.classList.remove('active');
    setTimeout(() => {
        productOverlay.classList.add('hidden');
    }, 300);
}

// 2. Nuevas funciones para controlar el Overlay de detalle
const productOverlay = document.getElementById('product-overlay');
const closeDetailBtn = document.getElementById('close-detail');

// Event Listeners para cerrar
closeDetailBtn.addEventListener('click', closeProductDetail);

// Cerrar si hace click fuera del contenido
productOverlay.addEventListener('click', (e) => {
    if (e.target === productOverlay) closeProductDetail();
});

// Lógica de filtrado combinada
function applyFilters() {
    const text = searchInput.value.toLowerCase();
    const priceRange = priceFilter.value;
    const selectedStatus = Array.from(statusFilters)
        .filter(i => i.checked)
        .map(i => i.value);

    const filtrados = productos.filter(p => {
        // 1. Filtro por nombre
        const matchesName = p.nombre.toLowerCase().includes(text);

        // 2. Filtro por estado (si hay alguno seleccionado)
        const matchesStatus = selectedStatus.length === 0 || selectedStatus.includes(p.estado);

        // 3. Filtro por precio
        const numPrice = parseFloat(p.precio.replace('€', '').replace(',', '.'));
        let matchesPrice = true;
        if (priceRange === '0-50') matchesPrice = numPrice <= 50;
        else if (priceRange === '50-200') matchesPrice = numPrice > 50 && numPrice <= 200;
        else if (priceRange === '200-plus') matchesPrice = numPrice > 200;

        return matchesName && matchesStatus && matchesPrice;
    });

    renderProducts(filtrados);
}

// Event Listeners
searchInput.addEventListener('input', applyFilters);
priceFilter.addEventListener('change', applyFilters);
statusFilters.forEach(cb => cb.addEventListener('change', applyFilters));

// Carga inicial
renderProducts(productos);
