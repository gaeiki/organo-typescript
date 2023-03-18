import './Rodape.css'

const Rodape = () => {
    return (
        <footer className='footer'>
            <section>
                <ul>
                    <li>
                        <a href="https://facebook.com/">
                            <img src="/imagens/fb.png" alt="Link para o facebook" />
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/">
                            <img src="/imagens/tw.png" alt="Link para o twitter" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/">
                            <img src="/imagens/ig.png" alt="Link para o instagram" />
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src='/imagens/logo.png' alt='Logo da Organo' />
            </section>
            <section>
                <p>
                    Desenvolvido por Gabriel Eiki.
                </p>
            </section>
        </footer>
    )
}

export default Rodape