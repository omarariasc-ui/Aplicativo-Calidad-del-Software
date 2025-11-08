
const app = document.getElementById('app');

function createSection(title, content) {
  const section = document.createElement('section');
  section.className = 'bg-white p-6 rounded-2xl shadow';
  section.innerHTML = `<h2 class="text-xl font-semibold mb-2">${title}</h2>${content}`;
  return section;
}

// Secciones de ejemplo
app.appendChild(createSection('¿Qué es la calidad de software?', '<p>La calidad de software es el grado en que un sistema satisface requisitos y expectativas explícitas e implícitas, incluyendo funcionalidad, fiabilidad, usabilidad, eficiencia, mantenibilidad y seguridad.</p>'));
app.appendChild(createSection('Normas, Modelos y Estándares', '<ul class="list-disc pl-5"><li>Normas: ISO/IEC 25010, ISO/IEC 9126, IEEE 829</li><li>Modelos: CMMI, TMMi</li><li>Estándares: Buenas prácticas de codificación, Naming, control de versiones</li></ul>'));
app.appendChild(createSection('Modelo métrico (0-5)', `
<p>Ingrese valores del 0 al 5 para cada dimensión:</p>
${['Funcionalidad','Usabilidad','Rendimiento','Mantenibilidad','Seguridad'].map(metric => `
<label class="block mb-2">${metric}:
<input type="range" min="0" max="5" step="0.1" value="0" id="${metric}Range">
<span id="${metric}Value">0</span>
</label>
`).join('')}
<div class="mt-4 p-4 bg-gray-100 rounded">
<strong>Calificación final (0-5):</strong> <span id="finalScore">0</span>
</div>
`) );

function computeScore() {
  const metrics = ['Funcionalidad','Usabilidad','Rendimiento','Mantenibilidad','Seguridad'];
  let total = 0;
  metrics.forEach(m => {
    const val = parseFloat(document.getElementById(m+'Range').value);
    total += val*0.2;
    document.getElementById(m+'Value').innerText = val;
  });
  document.getElementById('finalScore').innerText = total.toFixed(2);
}

['Funcionalidad','Usabilidad','Rendimiento','Mantenibilidad','Seguridad'].forEach(m => {
  document.getElementById(m+'Range').addEventListener('input', computeScore);
});
