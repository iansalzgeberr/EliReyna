import React, { useState } from 'react';
import './Formulario.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import EliReynaLogo from '../../images/EliReynaLogo.png';

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
            encodeURIComponent('Nombre y apellido: ' + formData.nombre + '\n\n') +
            encodeURIComponent('Edad: ' + formData.edad + '\n\n') +
            encodeURIComponent('¿Alguna vez ha sido diagnosticado con una enfermedad cardíaca o le han recomendado que solamente realice actividad física bajo supervisión médica?: ' + formData.enfermedadCardiaca + '\n\n') +
            encodeURIComponent('¿Suele padecer dolores de pecho cuando realiza actividad física?: ' + formData.dolorPechoActividadFisica + '\n\n') +
            encodeURIComponent('¿Ha tenido dolor en el pecho cuando no estaba realizando actividad física?: ' + formData.dolorPechoReposo + '\n\n') +
            encodeURIComponent('¿Tiene algún problema de salud que le cause dolor o limitación a tener en cuenta para abordar un programa de entrenamiento?: ' + formData.problemasSalud + '\n\n') +
            encodeURIComponent('¿Está embarazada o ha dado a luz en los últimos 6 meses?: ' + formData.embarazo + '\n\n') +
            encodeURIComponent('¿Se ha sometido a cirugía recientemente?: ' + formData.cirugiaReciente + '\n\n') +
            encodeURIComponent('¿Es fumador?: ' + (formData.fumador === 'si' ? 'Sí' : 'No') + '\n\n') +
            encodeURIComponent('¿Cuántas horas duerme de manera regular al día?: ' + formData.horasSueno + '\n\n') +
            encodeURIComponent('Su trabajo es: ' + formData.trabajo + '\n\n') +
            encodeURIComponent('¿Alguien de su familia tiene sobrepeso?: ' + (formData.familiaSobrepeso === 'si' ? 'Sí' : 'No') + '\n\n') +
            encodeURIComponent('¿Cómo valora la salud en su vida?: ' + formData.saludPrioridad + '\n\n') +
            encodeURIComponent('¿Cuánto tiempo le gustaría entrenar al día?: ' + formData.tiempoEntrenamiento + '\n\n') +
            encodeURIComponent('¿Cuál es su nivel de compromiso con el logro de su objetivo?: ' + formData.compromiso + '\n\n') +
            encodeURIComponent('¿Qué piensa que es lo más importante que puede hacer por usted el entrenador personal para ayudarle a alcanzar sus metas?: ' + formData.ayudaEntrenador)
        }`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="form-container">
            <header className="form-header">
                <img src={EliReynaLogo} alt="Eli Reyna Logo" className="form-logo" />
                <p className="form-subtitle"><strong>Entrenamiento Personalizado</strong></p>
            </header>
            <div className="form-body p-4 bg-white shadow rounded">
                <h2 className="form-heading text-center mb-4">Registro de Datos de Salud</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre y apellido:</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="edad" className="form-label">Edad:</label>
                        <input
                            type="number"
                            id="edad"
                            name="edad"
                            value={formData.edad}
                            onChange={handleChange}
                            className="form-control"
                            min="12"
                            max="95"
                            step="1"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="enfermedadCardiaca" className="form-label">¿Alguna vez ha sido diagnosticado con una enfermedad cardíaca o le han recomendado que solamente realice actividad física bajo supervisión médica?</label>
                        <input
                            type="text"
                            id="enfermedadCardiaca"
                            name="enfermedadCardiaca"
                            value={formData.enfermedadCardiaca}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="dolorPechoActividadFisica" className="form-label">¿Suele padecer dolores de pecho cuando realiza actividad física?</label>
                        <select
                            id="dolorPechoActividadFisica"
                            name="dolorPechoActividadFisica"
                            value={formData.dolorPechoActividadFisica}
                            onChange={handleChange}
                            className="form-control"
                            required
                        >
                            <option value="">Seleccione una opción</option>
                            <option value="si">Sí</option>
                            <option value="no">No</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="dolorPechoReposo" className="form-label">¿Ha tenido dolor en el pecho cuando no estaba realizando actividad física?</label>
                        <select
                            id="dolorPechoReposo"
                            name="dolorPechoReposo"
                            value={formData.dolorPechoReposo}
                            onChange={handleChange}
                            className="form-control"
                            required
                        >
                            <option value="">Seleccione una opción</option>
                            <option value="si">Sí</option>
                            <option value="no">No</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="problemasSalud" className="form-label">¿Tiene algún problema de salud que le cause dolor o limitación a tener en cuenta para abordar un programa de entrenamiento?</label>
                        <input
                            type="text"
                            id="problemasSalud"
                            name="problemasSalud"
                            value={formData.problemasSalud}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="embarazo" className="form-label">¿Está embarazada o ha dado a luz en los últimos 6 meses?</label>
                        <select
                            id="embarazo"
                            name="embarazo"
                            value={formData.embarazo}
                            onChange={handleChange}
                            className="form-control"
                            required
                        >
                            <option value="">Seleccione una opción</option>
                            <option value="si">Sí</option>
                            <option value="no">No</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="cirugiaReciente" className="form-label">¿Se ha sometido a cirugía recientemente?¿Cual?</label>
                        <input
                            type="text"
                            id="cirugiaReciente"
                            name="cirugiaReciente"
                            value={formData.cirugiaReciente}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="fumador" className="form-label">¿Es fumador?</label>
                        <select
                            id="fumador"
                            name="fumador"
                            value={formData.fumador}
                            onChange={handleChange}
                            className="form-control"
                            required
                        >
                            <option value="">Seleccione una opción</option>
                            <option value="si">Sí</option>
                            <option value="no">No</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="horasSueno" className="form-label">¿Cuántas horas duerme de manera regular al día?</label>
                        <input
                            type="number"
                            id="horasSueno"
                            name="horasSueno"
                            value={formData.horasSueno}
                            onChange={handleChange}
                            className="form-control"
                            min="4"
                            max="18"
                            step="1"
                            required
                        />
                    </div>


                    <div className="mb-3">
                        <label htmlFor="trabajo" className="form-label">Su trabajo es:</label>
                        <select
                            id="trabajo"
                            name="trabajo"
                            value={formData.trabajo}
                            onChange={handleChange}
                            className="form-control"
                            required
                        >
                            <option value="">Seleccione una opción</option>
                            <option value="sedentario">Sedentario</option>
                            <option value="activo">Activo</option>
                            <option value="fisicamenteExigente">Físicamente exigente</option>
                        </select>
                    </div>


                    <div className="mb-3">
                        <label htmlFor="familiaSobrepeso" className="form-label">¿Alguien de su familia tiene sobrepeso?</label>
                        <select
                            id="familiaSobrepeso"
                            name="familiaSobrepeso"
                            value={formData.familiaSobrepeso}
                            onChange={handleChange}
                            className="form-control"
                            required
                        >
                            <option value="">Seleccione una opción</option>
                            <option value="si">Sí</option>
                            <option value="no">No</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="saludPrioridad" className="form-label">¿Cómo valora la salud en su vida?</label>
                        <select
                            id="saludPrioridad"
                            name="saludPrioridad"
                            value={formData.saludPrioridad}
                            onChange={handleChange}
                            className="form-control"
                            required
                        >
                            <option value="">Seleccione una opción</option>
                            <option value="muy_baja">Muy poco</option>
                            <option value="baja">poco</option>
                            <option value="media">Moderada</option>
                            <option value="alta">bastante</option>
                            <option value="muy_alta">mucho</option>
                        </select>
                    </div>


                    <div className="mb-3">
                        <label htmlFor="tiempoEntrenamiento" className="form-label">¿Cuánto tiempo le gustaría entrenar al día? (en horas)</label>                        <input
                            type="number"
                            id="tiempoEntrenamiento"
                            name="tiempoEntrenamiento"
                            value={formData.tiempoEntrenamiento}
                            onChange={handleChange}
                            className="form-control"
                            min="0.5"   // Puedes ajustar estos valores según sea necesario
                            max="6"    // Tiempo máximo de entrenamiento en horas
                            step="0.5"  // Incremento en horas
                            required
                        />
                    </div>


                    <div className="mb-3">
                        <label htmlFor="compromiso" className="form-label">¿Cuál es su nivel de compromiso con el logro de su objetivo?</label>   
                        <select
                            id="compromiso"
                            name="compromiso"
                            value={formData.compromiso}
                            onChange={handleChange}
                            className="form-control"
                            required
                        >
                            <option value="">Seleccione una opción</option>
                            <option value="muy_bajo">Muy bajo</option>
                            <option value="bajo">Bajo</option>
                            <option value="moderado">Moderado</option>
                            <option value="alto">Alto</option>
                            <option value="muy_alto">Muy alto</option>
                        </select>
                    </div>


                    <div className="mb-3">
                        <label htmlFor="ayudaEntrenador" className="form-label">¿Qué piensa que es lo más importante que puede hacer por usted el entrenador personal para ayudarle a alcanzar sus metas?</label>
                        <input
                            type="text"
                            id="ayudaEntrenador"
                            name="ayudaEntrenador"
                            value={formData.ayudaEntrenador}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>

                    <div className="d-flex justify-content-between mt-4">
                        <button type="button" className="btn btn-secondary" onClick={() => window.location.href = '/'}>Cancelar</button>
                        <button type="submit" className="btn btn-warning">Enviar a Whatsapp</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Formulario;
