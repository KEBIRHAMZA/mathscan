import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { useIntl } from 'gatsby-plugin-intl';
import '../styles/inscription.css'

const Testtwo = () => {
    const intl = useIntl();
    const locale = intl.locale;
    const direction = locale === 'ar' ? 'rtl' : 'ltr';

    return (
        <section style={{ marginBottom: "10%" }} className="relative flex flex-wrap lg:h-screen lg:items-center">
        <div
className="my-inscription col-3a3 col-swf col-zyw col-c4e form-goa style-ftIj6 w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24"
id="style-ftIj6"
>
<p className="text-awj">
<a href="/">
  <img
    src="https://mathscan.net/img/new-logo.png"
    width={100}
    style={{ width:"300px",marginLeft:"200px",marginBottom:"70px" }}
    className="logo-odi"
  />
</a>
</p>
<div className="col-swf col-618 col-co4 card-mgx mx-rwm" style={{ width:"500px" }}>
<div className="card-ad4 mx-auto mb-0 mt-8 max-w-md space-y-4">
  <form>
    <input
      type="hidden"
      name="_token"
      defaultValue="aGYrY0HIZValIPlVmqmkjjY3gF3cwAFW56IuqvLU"
      id="_to-own"
      dir={direction} 
    />
    <div className="mb-aic">
      <label className="label-zp1" dir={direction} >{intl.formatMessage({ id: 'input1' })}</label>
      <input
        type="text"
        name="username"
        id="use-zq1"
        defaultValue=""
        placeholder={intl.formatMessage({ id: 'placeinput1' })}
        className="form-control-7v3"
        dir={direction} 
      />
    </div>
    <div className="mb-aic">
      <label className="label-zp1" dir={direction} >{intl.formatMessage({ id: 'input2' })}</label>
      <input
        type="password"
        name="username"
        id="use-zq1"
        defaultValue=""
        placeholder={intl.formatMessage({ id: 'placeinput2' })}
        className="form-control-7v3"
        dir={direction} 
      />
    </div>
    <div className="mb-aic flex items-center"> 
<input
    type="checkbox"
    id="remember-me"
    name="remember-me"
    className="form-checkbox h-5 w-5 text-primary-600 mr-2"
    style={{ marginRight:'-200px',width:"40px" }}
    dir={direction} 
/>
<label dir={direction}  htmlFor="remember-me" className="text-sm text-gray-600" style={{ marginLeft:"200px",width:"150px" }}>
{intl.formatMessage({ id: 'remember' })}
</label>
</div>
    <hr />
    <div className="footer-zwx">
      <div>
        <div className="style-tIc5t" id="style-tIc5t">
         
         
        </div>
        <iframe className="style-BhTIz" id="style-BhTIz"></iframe>
      </div>
      <div className="footer-zwx">
        <button type="submit" className="btn-rz3 btn-primary-3wk" style={{ width:"150px" }} dir={direction} >
        {intl.formatMessage({ id: 'buttonconnecter' })}
        </button>
    </div>
    </div>
  </form>
</div>
</div>
<p className="my-5xe" style={{ marginLeft:'200px',width:"400px" }}>
{intl.formatMessage({ id: 'lientBesoin' })} <a href="https://mathscan.net/login">{intl.formatMessage({ id: 'lientCreer' })}</a>
</p>
</div>

            <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
                <StaticImage
                    alt=""
                    src="../images/accueil-images/header.png"
                    className="absolute inset-0 h-full w-full object-cover"
                />
            </div>
        </section>
    );
}

export default Testtwo;
