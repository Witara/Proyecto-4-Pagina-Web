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
    "imagen": "../assets/product_images/xl_media_image1.jpeg"
  },
  {
    "nombre": "Corsair 4000D Semi Torre E-ATX Blanca",
    "precio": "97.41€",
    "estado": "Nuevo",
    "imagen": "../assets/product_images/xl_media_image2.jpeg"
  },
  {
    "nombre": "ASUS A31 PLUS ARGB Mid Tower ATX",
    "precio": "108.95€",
    "estado": "Nuevo",
    "imagen": "../assets/product_images/xl_media_image3.jpeg"
  },
  {
    "nombre": "AMD Ryzen 7 5800X 3.8GHz",
    "precio": "188.95€",
    "estado": "Muy bueno",
    "imagen": "../assets/product_images/xl_media_image4.jpeg"
  },
  {
    "nombre": "Intel Core i7-12700 2.1 GHz",
    "precio": "332.00€",
    "estado": "Muy bueno",
    "imagen": "../assets/product_images/xl_media_image5.jpeg"
  },
  {
    "nombre": "AMD Ryzen 9 9950X3D 4.3/5.7GHz",
    "precio": "332.00€",
    "estado": "Nuevo",
    "imagen": "../assets/product_images/xl_media_image6.jpeg"
  },
  {
    "nombre": "Corsair CX650 650 W 80 Plus Bronze",
    "precio": "58.98€",
    "estado": "Nuevo",
    "imagen": "../assets/product_images/xl_media_image7.jpeg"
  },
  {
    "nombre": "Corsair RM850e 850W 80 Plus Gold",
    "precio": "119.90€",
    "estado": "Nuevo",
    "imagen": "../assets/product_images/xl_media_image8.jpeg"
  },
  {
    "nombre": "Corsair RM1000x 1000W 80 Plus Gold",
    "precio": "187.61€",
    "estado": "Nuevo",
    "imagen": "../assets/product_images/xl_media_image9.jpeg"
  },
  {
    "nombre": "Kingston FURY Beast DDR4 16GB (2x8GB)",
    "precio": "169.95€",
    "estado": "Muy bueno",
    "imagen": "../assets/product_images/xl_media_image10.jpeg"
  },
  {
    "nombre": "Forgeon Cyclone PLUS V2 DDR4 32GB",
    "precio": "259.95€",
    "estado": "Nuevo",
    "imagen": "../assets/product_images/xl_media_image11.jpeg"
  },
  {
    "nombre": "Corsair Vengeance DDR5 5600MHz 64GB (2x32GB)",
    "precio": "869.95€",
    "estado": "Nuevo",
    "imagen": "../assets/product_images/xl_media_image12.jpeg"
  },
  {
    "nombre": "Forgeon Nimbus PLUS SSD 2TB NVMe",
    "precio": "259.95€",
    "estado": "Nuevo",
    "imagen": "../assets/product_images/xl_media_image13.jpeg"
  },
  {
    "nombre": "Toshiba Canvio Basics 2TB Disco Externo",
    "precio": "79.94€",
    "estado": "Nuevo",
    "imagen": "../assets/product_images/xl_media_image14.jpeg"
  },
  {
    "nombre": "Samsung 990 PRO 4TB SSD NVMe",
    "precio": "494.99€",
    "estado": "Nuevo",
    "imagen": "../assets/product_images/xl_media_image15.jpeg"
  },
  {
    "nombre": "Tempest Darken 360 Kit Refrigeración Líquida",
    "precio": "46.98€",
    "estado": "Nuevo",
    "imagen": "../assets/product_images/xl_media_image16.png"
  },
  {
    "nombre": "Cougar Apolar RGB 12cm Pack 3",
    "precio": "73.99€",
    "estado": "Nuevo",
    "imagen": "../assets/product_images/xl_media_image17.jpeg"
  },
  {
    "nombre": "Corsair NAUTILUS 240 RS ARGB Kit Refrigeración Líquida",
    "precio": "104.01€",
    "estado": "Nuevo",
    "imagen": "../assets/product_images/xl_media_image18.jpeg"
  },
  {
    "nombre": "Owlotech MS900",
    "precio": "30.00€",
    "estado": "Nuevo",
    "imagen": "../assets/product_images/xl_media_image19.png"
  },
  {
    "nombre": "Logitech G502 Hero",
    "precio": "81.00€",
    "estado": "Nuevo",
    "imagen": "../assets/product_images/xl_media_image20.png"
  },
  {
    "nombre": "Logitech M90",
    "precio": "8.00€",
    "estado": "Nuevo",
    "imagen": "../assets/product_images/xl_media_image21.png"
  },
  {
    "nombre": "Logitech K120",
    "precio": "15.00€",
    "estado": "Nuevo",
    "imagen": "../assets/product_images/xl_media_image22.png"
  },
  {
    "nombre": "Forgeon Meteor",
    "precio": "80.00€",
    "estado": "Nuevo",
    "imagen": "../assets/product_images/xl_media_image23.png"
  },
  {
    "nombre": "Owlotech EK500",
    "precio": "39.99€",
    "estado": "Nuevo",
    "imagen": "../assets/product_images/xl_media_image24.jpeg"
  },
  {
    "nombre": "Monitor Alurin CoreVision 24\"",
    "precio": "80.00€",
    "estado": "Nuevo",
    "imagen": "../assets/product_images/xl_media_image25.jpeg"
  },
  {
    "nombre": "Monitor Krom Kertz 24\" 120Hz",
    "precio": "80.00€",
    "estado": "Nuevo",
    "imagen": "../assets/product_images/xl_media_image25.jpeg"
  }
  ];
const grid = document.querySelector('.products-grid');
const searchInput = document.getElementById('search-input');
const priceFilter = document.getElementById('price-filter');
const statusFilters = document.querySelectorAll('#status-filters input');

// Función para renderizar productos
function renderProducts(lista) {
    grid.innerHTML = '';
    lista.forEach(p => {
        grid.innerHTML += `
            <article class="product-card">
                <div class="img-container">
                    <img src="${p.imagen}" alt="${p.nombre}">
                </div>
                <div class="info-container">
                    <h2 class="item-title">${p.nombre}</h2>
                    <p class="item-status">Estado: ${p.estado}</p>
                    <p class="item-price">${p.precio}</p>
                    <button class="buy-btn">Añadir a la cesta</button>
                </div>
            </article>`;
    });
}

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