import React, { useState } from 'react';
import Layout from "../components/layout";
import Seo from "../components/seo";
import { StaticImage } from 'gatsby-plugin-image';
import { useIntl } from 'gatsby-plugin-intl';

export default function Connection() {
    const intl = useIntl();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Email: ${email}, Password: ${password}`);
    };

    return (
        <Layout>
            <section className="relative flex flex-wrap lg:h-screen lg:items-center">
                <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
                    <div className="mx-auto max-w-lg text-center">
                        <h1 className="text-2xl font-bold sm:text-3xl">{intl.formatMessage({ id: "connection" })}</h1>
                    </div>
                    <form dir={intl.locale === 'ar' ? 'rtl' : 'ltr'} onSubmit={handleSubmit} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
                        <div>
                            <label htmlFor="email" className="sr-only">
                                {intl.formatMessage({ id: "input1" })}
                            </label>
                            <div className="relative">
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder={intl.formatMessage({ id: "input1" })}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                                {intl.formatMessage({ id: "input2" })}
                            </label>
                            <div className="relative">
                                <input
                                    type="password"
                                    id="password"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder={intl.formatMessage({ id: "input2" })}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="text-sm text-gray-500">
                                {intl.formatMessage({ id: "lientBesoin" })}
                                <a className="underline" href="#">
                                    {intl.formatMessage({ id: "lientCreer" })}
                                </a>
                            </p>
                            <button
                                type="submit"
                                className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                            >
                                {intl.formatMessage({ id: "buttonconnecter" })}
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
