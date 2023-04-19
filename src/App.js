import React, { useState } from 'react';
import './style.scss';

/* Limpando formulário depois de enviar os dados em React */

export default function App() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mail, setMail] = useState('');
  const [phone, setPhone] = useState('');
  const [checkbox, setCheckbox] = useState(false);
  const [checkbox02, setCheckbox02] = useState(false);

  const handleClick = () => {
    setCheckbox(!checkbox); //mude o valor booleano do primeiro checkbox: se false, true. se true, false - AO CLICAR NELE MESMO
  };

  const handleClick02 = () => {
    setCheckbox02(!checkbox02);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setName('');
    setLastName('');
    setMail('');
    setPhone('');
    setCheckbox(false);
    setCheckbox02(false);
  };

  return (
    <div>
      <h1>Preencha seus dados</h1>
      <div className="container">
        <form className="form01" onSubmit={handleSubmit}>
          <span>
            <br />
            <label htmlFor="Nome">{'Nome:'}</label>
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeHolder="Digite seu primeiro nome"
              required
            />
          </span>
          <span>
            <br />
            <label htmlFor="Nome">{'Sobrenome:'}</label>
            <input
              type="text"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              placeHolder="Digite seu sobrenome"
            />
          </span>
          <span>
            <br />
            <label htmlFor="Nome">{'E-mail:'}</label>
            <input
              type="text"
              value={mail}
              placeHolder="Digite seu email"
              onChange={(event) => setMail(event.target.value)}
            />
          </span>
          <span>
            <br />
            <label htmlFor="Nome">{'Telefone:'}</label>
            <input
              type="text"
              value={phone}
              placeHolder="Digite seu telefone"
              onChange={(event) => setPhone(event.target.value)}
            />
          </span>
          <div className="buttonContainer01">
            <input className="button" type="submit" value="Enviar" />
          </div>
        </form>

        <form className="form02" onSubmit={handleSubmit}>
          <table cellSpacing="0" cellPadding="3" border="1">
            <tbody>
              <td className="checkBox">
                Gosta de ler?
                <input
                  className="checkBox01"
                  type="checkbox"
                  checked={checkbox} //ativar comportamento do checkbox
                  onClick={handleClick}
                />
                Gosta de escrever?
                <input
                  className="checkBox02"
                  type="checkbox"
                  checked={checkbox02}
                  onClick={handleClick02}
                />
              </td>
              <div>
                <tr className="name">
                  <td>Nome:</td>
                  <td>
                    <input
                      type="text"
                      value={name}
                      placeHolder="Digite o seu nome completo"
                      onChange={(event) => setName(event.target.value)}
                    />
                  </td>
                </tr>
                <tr className="email">
                  <td>Email:</td>
                  <td>
                    <input
                      type="text"
                      value={mail}
                      placeHolder="Digite o seu e-mail"
                      onChange={(event) => setMail(event.target.value)}
                    />
                  </td>
                </tr>
                <tr className="phone">
                  <td>Telefone:</td>
                  <td>
                    <input
                      type="text"
                      value={phone}
                      placeHolder="Digite o seu telefone"
                      onChange={(event) => setPhone(event.target.value)}
                    />
                  </td>
                </tr>
                <tr className="submit">
                  <td></td>
                  <td>
                    <input
                      className="button"
                      type="submit"
                      value="Quero me cadastrar"
                    />
                  </td>
                </tr>
              </div>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
}
