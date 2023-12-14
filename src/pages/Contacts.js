const Contacts = () => {
    return (  
        <>
            <main className="section">
                <div className="container">
                    <h1 className="title-1">Contacts</h1>

                    <ul className="content-list">
                        <li className="content-list__item">
                            <h2 className="title-2">Location</h2>
                            <p>Jizakh, Uzbekistan</p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">Telegram</h2>
                            <p><a href="tel:+79051234567">+998(90)515-45-00</a></p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">Gmail</h2>
                            <p><a href="mailto:azizbekmamatqulov8001@gmail">azizbekmamatqulov8001@gmail.com</a></p>
                        </li>
                    </ul>

                </div>
            </main>
        </>
    );
}
 
export default Contacts;