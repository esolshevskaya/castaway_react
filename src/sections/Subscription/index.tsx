import { useState, FormEvent } from 'react';
import { PageBlock } from '../../components';
import style from './styles.module.css';

export const Subscription = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();

        fetch('API_URL', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({name, email})
        });

        console.log(name, 'name')
        console.log(email, 'email')

    }

    return (
        <PageBlock>
        <div className={style.subscribe}>
          <div className={style['subscribe__legend']}>
            <div className="subtitle">
              Email Newsletter
            </div>
            <h2 className={style['subscribe__title']}>
              Subscribe for updates
            </h2>
          </div>
          <div className={style['subscribe__form']}>
            <div className={`${style['subscribe__form-line']} ${style['subscribe__form-line--1']}`} />
            <div className={`${style['subscribe__form-line']} ${style['subscribe__form-line--2']}`} />
            <div className={`${style['subscribe__form-line']} ${style['subscribe__form-line--3']}`} />

            <form onSubmit={onSubmit}>
              <div className="form-row">
                <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text" className="input" placeholder="Name" />
              </div>
              <div className="form-row">
                <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email" className="input" placeholder="Email" />
              </div>
              <div className="form-row">
                <button className="button">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </PageBlock>
    )
}
