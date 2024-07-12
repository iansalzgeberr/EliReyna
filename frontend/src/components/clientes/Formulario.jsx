import React, { useState } from 'react';
import './Formulario.css';

const Formulario = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        edad: '',
        enfermedadCardiaca: '',
        dolorPechoActividadFisica: '',
        dolorPechoReposo: '',
        problemasSalud: '',
        embarazo: '',
        cirugiaReciente: '',
        fumador: '',
        horasSueno: '',
        trabajo: '',
        familiaSobrepeso: '',
        saludPrioridad: '',
        tiempoEntrenamiento: '',
        compromiso: '',
        ayudaEntrenador: ''
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const whatsappUrl = `https://wa.me/+5493517569078?text=${
            'Nombre y apellido: ' + encodeURIComponent(formData.nombre) + '\n' +
            'Edad: ' + encodeURIComponent(formData.edad) + '\n' +
            '¿Alguna vez ha sido diagnosticado con una enfermedad cardíaca o le han recomendado que solamente realice actividad física bajo supervisión médica?: ' + encodeURIComponent(formData.enfermedadCardiaca) + '\n' +
            '¿Suele padecer dolores de pecho cuando realiza actividad física?: ' + encodeURIComponent(formData.dolorPechoActividadFisica) + '\n' +
            '¿Ha tenido dolor en el pecho cuando no estaba realizando actividad física?: ' + encodeURIComponent(formData.dolorPechoReposo) + '\n' +
            '¿Tiene algún problema de salud que le cause dolor o limitación a tener en cuenta para abordar un programa de entrenamiento?: ' + encodeURIComponent(formData.problemasSalud) + '\n' +
            '¿Está embarazada o ha dado a luz en los últimos 6 meses?: ' + encodeURIComponent(formData.embarazo) + '\n' +
            '¿Se ha sometido a cirugía recientemente?: ' + encodeURIComponent(formData.cirugiaReciente) + '\n' +
            '¿Es fumador?: ' + (formData.fumador ? 'Sí' : 'No') + '\n' +
            '¿Cuántas horas duerme de manera regular al día?: ' + encodeURIComponent(formData.horasSueno) + '\n' +
            'Su trabajo es: ' + encodeURIComponent(formData.trabajo) + '\n' +
            '¿Alguien de su familia tiene sobrepeso?: ' + (formData.familiaSobrepeso ? 'Sí' : 'No') + '\n' +
            '¿Cómo valora la salud en su vida?: ' + encodeURIComponent(formData.saludPrioridad) + '\n' +
            '¿Cuánto tiempo le gustaría entrenar al día?: ' + encodeURIComponent(formData.tiempoEntrenamiento) + '\n' +
            '¿Cuál es su nivel de compromiso con el logro de su objetivo?: ' + encodeURIComponent(formData.compromiso) + '\n' +
            '¿Qué piensa que es lo más importante que puede hacer por usted el entrenador personal para ayudarle a alcanzar sus metas?: ' + encodeURIComponent(formData.ayudaEntrenador)
        }`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="form-container">
            <header className="form-header">
                <img src="../../../images/logo.png" alt="Eli Reyna Logo" className="form-logo" />
                <p className="form-subtitle"><strong>Entrenamiento Personalizado</strong></p>
            </header>
            <div className="form-body">
                <h2 className="form-heading">Registro de Datos de Salud</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="nombre">Nombre y apellido:</label>
                    <input 
                        type="text" 
                        id="nombre" 
                        name="nombre" 
                        value={formData.nombre} 
                        onChange={handleChange} 
                        required 
                    />

                    <label htmlFor="edad">Edad:</label>
                    <input 
                        type="number" 
                        id="edad" 
                        name="edad" 
                        value={formData.edad} 
                        onChange={handleChange} 
                        required 
                    />

                    <label htmlFor="enfermedadCardiaca">¿Alguna vez ha sido diagnosticado con una enfermedad cardíaca o le han recomendado que solamente realice actividad física bajo supervisión médica?</label>
                    <input 
                        type="text" 
                        id="enfermedadCardiaca" 
                        name="enfermedadCardiaca" 
                        value={formData.enfermedadCardiaca} 
                        onChange={handleChange} 
                        required 
                    />

                    <label htmlFor="dolorPechoActividadFisica">¿Suele padecer dolores de pecho cuando realiza actividad física?</label>
                    <input 
                        type="text" 
                        id="dolorPechoActividadFisica" 
                        name="dolorPechoActividadFisica" 
                        value={formData.dolorPechoActividadFisica} 
                        onChange={handleChange} 
                        required 
                    />

                    <label htmlFor="dolorPechoReposo">¿Ha tenido dolor en el pecho cuando no estaba realizando actividad física?</label>
                    <input 
                        type="text" 
                        id="dolorPechoReposo" 
                        name="dolorPechoReposo" 
                        value={formData.dolorPechoReposo} 
                        onChange={handleChange} 
                        required 
                    />

                    <label htmlFor="problemasSalud">¿Tiene algún problema de salud que le cause dolor o limitación a tener en cuenta para abordar un programa de entrenamiento?</label>
                    <input 
                        type="text" 
                        id="problemasSalud" 
                        name="problemasSalud" 
                        value={formData.problemasSalud} 
                        onChange={handleChange} 
                        required 
                    />

                    <label htmlFor="embarazo">¿Está embarazada o ha dado a luz en los últimos 6 meses?</label>
                    <input 
                        type="text" 
                        id="embarazo" 
                        name="embarazo" 
                        value={formData.embarazo} 
                        onChange={handleChange} 
                        required 
                    />

                    <label htmlFor="cirugiaReciente">¿Se ha sometido a cirugía recientemente?</label>
                    <input 
                        type="text" 
                        id="cirugiaReciente" 
                        name="cirugiaReciente" 
                        value={formData.cirugiaReciente} 
                        onChange={handleChange} 
                        required 
                    />

                    <div>
                        <label>¿Es fumador?</label>
                        <label>
                            <input 
                                type="radio" 
                                name="fumador" 
                                value="si" 
                                checked={formData.fumador === 'si'} 
                                onChange={handleChange} 
                                required 
                            />
                            Sí
                        </label>
                        <label>
                            <input 
                                type="radio" 
                                name="fumador" 
                                value="no" 
                                checked={formData.fumador === 'no'} 
                                onChange={handleChange} 
                                required 
                            />
                            No
                        </label>
                    </div>

                    <label htmlFor="horasSueno">¿Cuántas horas duerme de manera regular al día?</label>
                    <input 
                        type="number" 
                        id="horasSueno" 
                        name="horasSueno" 
                        value={formData.horasSueno} 
                        onChange={handleChange} 
                        required 
                    />

                    <label htmlFor="trabajo">Su trabajo es:</label>
                    <select 
                        id="trabajo" 
                        name="trabajo" 
                        value={formData.trabajo} 
                        onChange={handleChange} 
                        required
                    >
                        <option value="">Seleccione una opción</option>
                        <option value="sedentario">Sedentario</option>
                        <option value="activo">Activo</option>
                        <option value="fisicamenteExigente">Físicamente exigente</option>
                    </select>

                    <div>
                        <label>¿Alguien de su familia tiene sobrepeso?</label>
                        <label>
                            <input 
                                type="radio" 
                                name="familiaSobrepeso" 
                                value="si" 
                                checked={formData.familiaSobrepeso === 'si'} 
                                onChange={handleChange} 
                                required 
                            />
                            Sí
                        </label>
                        <label>
                            <input 
                                type="radio" 
                                name="familiaSobrepeso" 
                                value="no" 
                                checked={formData.familiaSobrepeso === 'no'} 
                                onChange={handleChange} 
                                required 
                            />
                            No
                        </label>
                    </div>

                    <label htmlFor="saludPrioridad">¿Cómo valora la salud en su vida?</label>
                    <select 
                        id="saludPrioridad" 
                        name="saludPrioridad" 
                        value={formData.saludPrioridad} 
                        onChange={handleChange} 
                        required
                    >
                        <option value="">Seleccione una opción</option>
                        <option value="alta">Alta</option>
                        <option value="media">Media</option>
                        <option value="baja">Baja</option>
                    </select>

                    <label htmlFor="tiempoEntrenamiento">¿Cuánto tiempo le gustaría entrenar al día?</label>
                    <input 
                        type="text" 
                        id="tiempoEntrenamiento" 
                        name="tiempoEntrenamiento" 
                        value={formData.tiempoEntrenamiento} 
                        onChange={handleChange} 
                        required 
                    />

                    <label htmlFor="compromiso">¿Cuál es su nivel de compromiso con el logro de su objetivo?</label>
                    <input 
                        type="text" 
                        id="compromiso" 
                        name="compromiso" 
                        value={formData.compromiso} 
                        onChange={handleChange} 
                        required 
                    />

                    <label htmlFor="ayudaEntrenador">¿Qué piensa que es lo más importante que puede hacer por usted el entrenador personal para ayudarle a alcanzar sus metas?</label>
                    <input 
                        type="text" 
                        id="ayudaEntrenador" 
                        name="ayudaEntrenador" 
                        value={formData.ayudaEntrenador} 
                        onChange={handleChange} 
                        required 
                    />

                    <button type="submit" className="submit-button">Enviar</button>
                </form>
            </div>
        </div>
    );
};

export default Formulario;
