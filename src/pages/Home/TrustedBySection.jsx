import Google from '../../assets/BrandsLogos/google.svg';
import Microsoft from '../../assets/BrandsLogos/microsoft.svg';
import Gitlab from '../../assets/BrandsLogos/gitlab.svg';
import DropBox from '../../assets/BrandsLogos/dropbox.svg';
import Spotify from '../../assets/BrandsLogos/spotify.svg';
import Slack from '../../assets/BrandsLogos/slack.svg';

import './TrustedBySection.css';

function TrustedBySection() {
    return (
        <>
            <section className="TrustedBy">
                <div className="TrustedBy-heading">
                    <span>TRUSTED BY 500+ COMPANIES WORLDWIDE</span>
                </div>
                <div className="TrustedBy-logos">
                    <img src={Google} alt="Google logo" />
                    <img src={Microsoft} alt="Microsoft logo" />
                    <img src={Gitlab} alt="Gitlab logo" />
                    <img src={DropBox} alt="Dropbox logo" />
                    <img src={Spotify} alt="Spotify logo" />
                    <img src={Slack} alt="Slack logo" />
                </div>
            </section>
        </>
    )
}

export default TrustedBySection