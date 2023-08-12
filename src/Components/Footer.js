function Footer({ darkMode }){

    const myStyle = {
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
    }

    return(
        
        <>
        <footer className={`text-center text-lg-start bg-${darkMode} text-muted`}>
        <div className="text-center p-4" style = {myStyle} >
            © 2022 Copyright:
            <a className="text-reset fw-bold" href="https://www.linkedin.com/in/abhishek-tiwari-36a718209/"> Abhishek Tiwari</a>
        </div>
        </footer>
        </>
    )
}

export default Footer;