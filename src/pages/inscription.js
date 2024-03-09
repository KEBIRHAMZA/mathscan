import React, { useState } from 'react';
import Layout from "../components/layout";
import Seo from "../components/seo";
import { StaticImage } from 'gatsby-plugin-image';
import { useIntl } from 'gatsby-plugin-intl';

export default function Inscription() {
    const intl = useIntl();
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [genre, setGenre] = useState('');
    const [niveau, setNiveau] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Username: ${username}, First Name: ${firstName}, Last Name: ${lastName}, Email: ${email}, Genre: ${genre}, Niveau Scolaire: ${niveau}, Password: ${password}, Confirm Password: ${confirmPassword}`);
    };


    const locale = intl.locale;
    const direction = locale === 'ar' ? 'rtl' : 'ltr';

    return (
        <Layout>
            <section style={{ marginBottom: "10%" }} className="relative flex flex-wrap lg:h-screen lg:items-center">
                <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
                    <div className="mx-auto max-w-lg text-center">
                        <h1 className="text-2xl font-bold sm:text-3xl">{intl.formatMessage({ id: "inscription" })}</h1>
                    </div>
                    <form dir={direction} onSubmit={handleSubmit} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
                        <div>
                            <input
                                type="text"
                                id="username"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder={intl.formatMessage({ id: "inputIn1" })}
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                id="firstName"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder={intl.formatMessage({ id: "inputIn2" })}
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                id="lastName"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder={intl.formatMessage({ id: "inputIn3" })}
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                id="email"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder={intl.formatMessage({ id: "inputIn4" })}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <select
                                id="genre"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                value={genre}
                                onChange={(e) => setGenre(e.target.value)}
                            >
                                <option value="">{intl.formatMessage({ id: "inputIn5" })}</option>
                                <option value="male">{intl.formatMessage({ id: "genre1" })}</option>
                                <option value="female">{intl.formatMessage({ id: "genre2" })}</option>
                            </select>
                        </div>
                        <div>
                            <select
                                id="niveau"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                value={niveau}
                                onChange={(e) => setNiveau(e.target.value)}
                            >
                                <optgroup label={intl.formatMessage({ id: "optgroupLabel" })}>
                                    <option value="">{intl.formatMessage({ id: "inputIn6" })}</option>
                                    <option value="1 éme annèe primaire">{intl.formatMessage({ id: "niveau1" })}</option>
                    <option value="2 éme annèe primaire">{intl.formatMessage({ id: "niveau2" })}</option>
                    <option value="3 éme annèe primaire">{intl.formatMessage({ id: "niveau3" })}</option>
                    <option value="4 éme annèe primaire">{intl.formatMessage({ id: "niveau4" })}</option>
                    <option value="5 éme annèe primaire">{intl.formatMessage({ id: "niveau5" })}</option>
                    <option value="6 éme annèe primaire">{intl.formatMessage({ id: "niveau6" })}</option>
                    <option value="Tronc Commun">{intl.formatMessage({ id: "niveau7" })}</option>
                    <option value="1 ére annèe BAC Sc Math">{intl.formatMessage({ id: "niveau8" })}</option>
                    <option value="2 éme annèe BAC Sc Math">{intl.formatMessage({ id: "niveau9" })}</option>
                    <option value="1 éme annèe BAC Sc Ex">{intl.formatMessage({ id: "niveau10" })}</option>
                    <option value="2 éme annèe BAC PC ou SVT">{intl.formatMessage({ id: "niveau11" })}</option>
                                </optgroup>
                            </select>
                        </div>
                        <div>
                            <input
                                type="password"
                                id="password"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder={intl.formatMessage({ id: "inputIn7" })}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                id="confirmPassword"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder={intl.formatMessage({ id: "inputIn8" })}
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>
                        <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-500">
                {intl.formatMessage({ id: "question" })}
                    <a className="underline" href="#">
                    {intl.formatMessage({ id: "lienInscription" })}
                    </a>
                </p>
                            <button
                                type="submit"
                                className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                            >
                                {intl.formatMessage({ id: "buttonInscription" })}
                            </button>
                        </div>
                    </form>
                </div>
                <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
                    <StaticImage
                        alt=""
                        src="../images/accueil-images/header.png"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                </div>
            </section>
        </Layout>
    );
}

export const Head = () => <Seo title="Mathscan ©" />
