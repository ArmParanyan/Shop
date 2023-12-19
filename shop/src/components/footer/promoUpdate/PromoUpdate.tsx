import "./PromoUpdate.scss"

const PromoUpdate = () => {
    return (
        <>
            <div className="promo-update-wrapper">

                <div>
                    <p className="title">PROMO UPDATE</p>
                </div>

                <div className="promo-detailts-wrapper">
                    <div className="date-comments-wrapper ">
                        <div className="date-wrapper">
                            <p className="date">14</p>
                            <p className="date-month">May</p>
                        </div>
                        <p className="promo-text">Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit.</p>
                        <p className="comments">3 comments</p>
                    </div>

                    <div className="divider"></div>

                    <div className="date-comments-wrapper">

                        <div className="date-wrapper">
                            <p className="date">15</p>
                            <p className="date-month">July</p>
                        </div>
                        <p className="promo-text">Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit.</p>
                        <p className="comments">3 comments</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PromoUpdate;