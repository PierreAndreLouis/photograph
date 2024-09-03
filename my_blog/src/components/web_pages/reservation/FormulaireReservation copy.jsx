import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import Select from 'react-select';
import "react-datepicker/dist/react-datepicker.css";
import emailjs from 'emailjs-com';
import Footer3 from '../home/Footer3';
import ReservationSeo from '../../seo/ReservationSeo';

export default function Formulaire_reservation() {
    const [startDate, setStartDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    function sendMail(e) {
        e.preventDefault(); // Empêche le rechargement de la page

        // Vérification des champs requis
        if (!startDate || !selectedTime) {
            alert("Veuillez choisir une date et une heure avant d'envoyer votre message.");
            return;
        }

        const params = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value || 'Non fourni',
            date: startDate.toLocaleDateString('fr-FR'),
            time: selectedTime.value,
            duration: document.getElementById("duration").value,
            timezone: document.getElementById("timezone").value,
            service: document.getElementById("service").value,
            message: document.getElementById("message").value,
        };

        if (Object.values(params).some(value => !value)) {
            alert("Veuillez remplir tous les champs avant d'envoyer votre message.");
            return;
        }

        setLoading(true); // Active le mode chargement

        const serviceID = "service_29vmgsk";
        const templateID = "template_jt4bvjk";

        emailjs.init("Y4DfcLA5moa5C1k6K"); // Clé publique

        emailjs.send(serviceID, templateID, params)
            .then(res => {
                // Réinitialise les champs du formulaire
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("phone").value = "";
                setStartDate(null);
                setSelectedTime(null);
                document.getElementById("duration").value = "30";
                document.getElementById("timezone").value = "UTC+00:00";
                document.getElementById("service").value = "";
                document.getElementById("message").value = "";

                console.log(res);
                alert("Votre message a été envoyé avec succès !");
            })
            .catch(err => {
                console.log(err);
                alert("Erreur lors de l'envoi du message. Veuillez réessayer.");
            })
            .finally(() => {
                setLoading(false); // Désactive le mode chargement après l'envoi
            });
    }

    // Fonction pour désactiver les samedis et dimanches
    const isWeekday = (date) => {
        const day = date.getDay();
        return day !== 0 && day !== 6; // 0 pour dimanche et 6 pour samedi
    };

    // Générer les options horaires
    const generateTimeOptions = () => {
        const options = [];
        for (let h = 8; h <= 16; h++) {
            for (let m = 0; m < 60; m += 30) {
                if (h === 16 && m > 0) break;
                const time = `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
                options.push({ value: time, label: time });
            }
        }
        return options;
    };

    const timeOptions = generateTimeOptions();

    const handleTimeChange = (selectedOption) => {
        setSelectedTime(selectedOption);
        setError('');
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!selectedTime || !startDate) {
            setError('Veuillez choisir une date et une heure valides.');
            return;
        }
        // Logique de soumission du formulaire ici
        console.log('Réservation soumise avec heure:', selectedTime.value);
    };

    return (
        <div className='mx-2 py-20'>
            <ReservationSeo />
            <div className="border mb-40 bg-sky-50 dark:bg-gray-800 max-w-2xl mx-auto mt-10 shadow-lg rounded-lg overflow-hidden">
                <div className="text-2xl py-4 px-6 bg-gray-900 dark:bg-gray-700 text-white text-center font-bold uppercase">
                    Réserver une session de coaching
                </div>
                <form className="py-4 px-6" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 dark:text-gray-300 font-bold mb-2" htmlFor="name">
                            Nom
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
                            id="name" type="text" placeholder="Entrez votre nom" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 dark:text-gray-300 font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
                            id="email" type="email" placeholder="Entrez votre email" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 dark:text-gray-300 font-bold mb-2" htmlFor="phone">
                            Numéro de téléphone (optionnel)
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
                            id="phone" type="tel" placeholder="Entrez votre numéro de téléphone" />
                    </div>

                    <div className='md:grid md:grid-cols-2 gap-4 items-center'>
                        <div className='grid'>
                            <label className="block text-gray-700 dark:text-gray-300 font-bold mb-2" htmlFor="date">Date :</label>
                            <DatePicker
                                id="date"
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                filterDate={isWeekday}
                                dateFormat="dd/MM/yyyy"
                                className="w-full p-2 mb-4 border rounded dark:bg-gray-700 dark:text-gray-300"
                                placeholderText="Choisissez une date"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 dark:text-gray-300 font-bold mb-2" htmlFor="time">
                                Heure
                            </label>
                            <Select
                                id="time"
                                value={selectedTime}
                                onChange={handleTimeChange}
                                options={timeOptions}
                                placeholder="Choisissez une heure"
                                required
                                className="bg-white dark:bg-gray-700 dark:text-gray-300 border-gray-500 shadow appearance-none border rounded w-full text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
                            />
                            {error && <p className="text-red-500">{error}</p>}
                        </div>
                    </div>

                    <div>
                        <label htmlFor="timezone" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Fuseau horaire :</label>
                        <select id="timezone" name="timezone" required className="w-full p-2 mb-4 border rounded dark:bg-gray-700 dark:text-gray-300">
                            {/* Options des fuseaux horaires */}
                            <option value="UTC-12:00">UTC-12:00</option>
                            <option value="UTC-11:00">UTC-11:00</option>
                            <option value="UTC-10:00">UTC-10:00 (Hawaii)</option>
                            <option value="UTC-09:00">UTC-09:00 (Alaska)</option>
                            <option value="UTC-08:00">UTC-08:00 (Pacifique US & Canada)</option>
                            <option value="UTC-07:00">UTC-07:00 (Mountain US & Canada)</option>
                            <option value="UTC-06:00">UTC-06:00 (Central US & Canada)</option>
                            <option value="UTC-05:00">UTC-05:00 (Eastern US & Canada)</option>
                            <option value="UTC-04:00">UTC-04:00 (Atlantique)</option>
                            <option value="UTC-03:00">UTC-03:00 (Brésil)</option>
                            <option value="UTC-02:00">UTC-02:00</option>
                            <option value="UTC-01:00">UTC-01:00 (Açores)</option>
                            <option value="UTC+00:00">UTC+00:00 (GMT, Londres)</option>
                            <option value="UTC+01:00">UTC+01:00 (Paris, Berlin)</option>
                            <option value="UTC+02:00">UTC+02:00 (Helsinki, Athènes)</option>
                            <option value="UTC+03:00">UTC+03:00 (Moscou)</option>
                            <option value="UTC+04:00">UTC+04:00 (Dubaï)</option>
                            <option value="UTC+05:00">UTC+05:00 (Pakistan)</option>
                            <option value="UTC+06:00">UTC+06:00 (Bangladesh)</option>
                            <option value="UTC+07:00">UTC+07:00 (Bangkok)</option>
                            <option value="UTC+08:00">UTC+08:00 (Singapour)</option>
                            <option value="UTC+09:00">UTC+09:00 (Tokyo)</option>
                            <option value="UTC+10:00">UTC+10:00 (Sydney)</option>
                            <option value="UTC+11:00">UTC+11:00</option>
                            <option value="UTC+12:00">UTC+12:00 (Auckland)</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 dark:text-gray-300 font-bold mb-2" htmlFor="service">
                            Sélectionnez un service
                        </label>
                        <select
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="service" required>
                            <option value="">Choisissez un service</option>
                            <option value="service1">Service 1</option>
                            <option value="service2">Service 2</option>
                            <option value="service3">Service 3</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 dark:text-gray-300 font-bold mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="message" rows="4" placeholder="Entrez votre message" required></textarea>
                    </div>

                    <div className="flex items-center justify-center mb-4">
                        <button
                            disabled={loading}
                            onClick={(e) => { sendMail(e) }}
                            className="bg-gray-900 dark:bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-800 dark:hover:bg-gray-600 focus:outline-none focus:shadow-outline"
                            type="submit">
                            {loading ? 'Envoi en cours...' : 'Rendez-vous'}
                        </button>
                    </div>
                </form>
            </div>
            <Footer3 />
        </div>
    );
}
