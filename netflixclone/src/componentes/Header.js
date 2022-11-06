import React from 'react';
import './Header.css';

export default({black}) => {
    return (
        <header className={black? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://blog.inspirar.com.br/wp-content/uploads/2018/08/3930430.png" alt="Netflix"/>
                </a>
            </div>
            <div className='header--user'>
                <a href="">
                    <img src="https://occ-0-6286-1567.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY5cwIbM7shRfcXmfQg98cqMqiZZ8sReZnj4y_keCAHeXmG_SoqLD8SXYistPtesdqIjcsGE-tHO8RR92n7NyxZpqcFS80YfbRFz.png?r=229" alt="Usuário"/>
                </a>
            </div>
        </header>
    );
}