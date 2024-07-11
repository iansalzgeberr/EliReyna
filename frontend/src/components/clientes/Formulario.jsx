// src/components/Formulario.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Formulario.css';

const Formulario = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        edad: '',
        enfermedadCardiaca: '',
        dolorPecho: '',
        dolorPechoSinActividad: '',
        problemaSalud: '',
        embarazada: '',
        cirugia: '',
        fumador: '',
        horasSueno: '',
        trabajo: '',
        familiaSobrepeso: '',
        prioridadSalud: '',
        tiempoEntrenamiento: '',
        compromiso: '',
        objetivoEntrenador: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica para enviar los datos por WhatsApp
        const numeroWhatsApp = '543512040817'; // Reemplazar con el número de WhatsApp real
        const mensaje = encodeURIComponent(`Datos del formulario:\n${JSON.stringify(formData, null, 2)}`);
        window.open(`https://wa.me/${numeroWhatsApp}?text=${mensaje}`, '_blank');
        navigate('/'); // Redirigir a la página de inicio después de enviar el formulario
    };

    return (
        <div className="container">
            <h2>Registro de Datos de Salud</h2>
            <form onSubmit={handleSubmit}>
                <label>Nombre y apellido:</label>
                <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />

                <label>Edad:</label>
                <input type="text" name="edad" value={formData.edad} onChange={handleChange} required />

                <label>¿Alguna vez ha sido diagnosticado con una enfermedad cardíaca o le han recomendado que solamente realice actividad física bajo supervisión médica?</label>
                <input type="radio" name="enfermedadCardiaca" value="Sí" onChange={handleChange} required /> Sí
                <input type="radio" name="enfermedadCardiaca" value="No" onChange={handleChange} required /> No

                <label>¿Suele padecer dolores de pecho cuando realiza actividad física?</label>
                <input type="radio" name="dolorPecho" value="Sí" onChange={handleChange} required /> Sí
                <input type="radio" name="dolorPecho" value="No" onChange={handleChange} required /> No

                <label>¿Ha tenido dolor en el pecho cuando no estaba realizando actividad física?</label>
                <input type="radio" name="dolorPechoSinActividad" value="Sí" onChange={handleChange} required /> Sí
                <input type="radio" name="dolorPechoSinActividad" value="No" onChange={handleChange} required /> No

                <label>¿Tiene algún problema de salud que le cause dolor o limitación a tener en cuenta para abordar un programa de entrenamiento? (Ejemplos: dolor de hueso y articulaciones, diabetes, osteoporosis, presión arterial alta, colesterol alto, artritis, anorexia, bulimia, anemia, epilepsia, dolencias respiratorias, problemas de espalda…).</label>
                <textarea name="problemaSalud" value={formData.problemaSalud} onChange={handleChange} required></textarea>

                <label>¿Está embarazada o ha dado a luz en los últimos 6 meses?</label>
                <input type="radio" name="embarazada" value="Sí" onChange={handleChange} required /> Sí
                <input type="radio" name="embarazada" value="No" onChange={handleChange} required /> No

                <label>¿Se ha sometido a cirugía recientemente?</label>
                <input type="radio" name="cirugia" value="Sí" onChange={handleChange} required /> Sí
                <input type="radio" name="cirugia" value="No" onChange={handleChange} required /> No

                <label>¿Es fumador?</label>
                <input type="radio" name="fumador" value="Sí" onChange={handleChange} required /> Sí
                <input type="radio" name="fumador" value="No" onChange={handleChange} required /> No

                <label>¿Cuántas horas duerme de manera regular al día?</label>
                <input type="text" name="horasSueno" value={formData.horasSueno} onChange={handleChange} required />

                <label>Su trabajo es:</label>
                <input type="radio" name="trabajo" value="sedentario" onChange={handleChange} required /> Sedentario
                <input type="radio" name="trabajo" value="activo" onChange={handleChange} required /> Activo
                <input type="radio" name="trabajo" value="fisicamenteExigente" onChange={handleChange} required /> Físicamente exigente

                <label>¿Alguien de su familia tiene sobrepeso?</label>
                <input type="radio" name="familiaSobrepeso" value="Sí" onChange={handleChange} required /> Sí
                <input type="radio" name="familiaSobrepeso" value="No" onChange={handleChange} required /> No

                <label>¿Cómo valora la salud en su vida?</label>
                <input type="radio" name="prioridadSalud" value="baja" onChange={handleChange} required /> Baja prioridad
                <input type="radio" name="prioridadSalud" value="media" onChange={handleChange} required /> Media prioridad
                <input type="radio" name="prioridadSalud" value="alta" onChange={handleChange} required /> Alta prioridad

                <label>¿Cuánto tiempo le gustaría entrenar al día?</label>
                <input type="text" name="tiempoEntrenamiento" value={formData.tiempoEntrenamiento} onChange={handleChange} required />

                <label>¿Cuál es su nivel de compromiso con el logro de su objetivo?</label>
                <input type="radio" name="compromiso" value="bajo" onChange={handleChange} required /> Bajo
                <input type="radio" name="compromiso" value="medio" onChange={handleChange} required /> Medio
                <input type="radio" name="compromiso" value="alto" onChange={handleChange} required /> Alto

                <label>¿Qué piensa que es lo más importante que puede hacer por usted el entrenador personal para ayudarle a alcanzar sus metas?</label>
                <textarea name="objetivoEntrenador" value={formData.objetivoEntrenador} onChange={handleChange} required></textarea>

                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default Formulario;
