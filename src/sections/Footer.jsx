const Footer = () => {
    return (
        <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
            <div className="text-white-500 flex gap-2">
                <p>Terms & Conditions</p>
                <p>|</p>
                <p>Privacy Policy</p>
            </div>

            <div className="flex gap-3">
                <a href="https://github.com/NisarNoorani" target="_blank" className="social-icon">
                    <img src="https://res.cloudinary.com/dvbc6ctqu/image/upload/v1732917672/github_tzgqou.svg" alt="github" className="w-1/2 h-1/2" />
                </a>
                <a href="https://www.linkedin.com/in/nisar-noorani-a99a9b337/" target="_blank" className="social-icon">
                    <img src="https://res.cloudinary.com/dvbc6ctqu/image/upload/v1732917671/linkedin_zgmzb6.svg" alt="twitter" className= "w-1/2 h-1/2" />
                </a>
                <a href="https://www.instagram.com/nisarplays/" target="_blank" className="social-icon">
                    <img src="https://res.cloudinary.com/dvbc6ctqu/image/upload/v1732917670/instagram_jvda9t.svg" alt="instagram" className="w-1/2 h-1/2" />
                </a>
            </div>

            <p className="text-white-500">© 2024 Nisar Noorani. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
