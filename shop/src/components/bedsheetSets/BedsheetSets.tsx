import "./BedsheetSets.scss"

const BedsheetSets = () => {
    return (
        <div className="bedsheet-sets-wrapper">
            <div className="bedsheet-sets-background">
                <div className="bedsheet-sets-details">

                    <div className="title-pricing-wrapper">
                        <p className="bedsheet-sets-title">BEDSHEET SETS</p>

                        <div className="bedsheet-sets-pricing">
                            <p className="discount">$50.00</p>
                            <p className="deleted-text">$220.00</p>
                        </div>
                    </div>


                    <div className="text-button-wrapper">
                        <div className="bedsheet-sets-text">
                            <p>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit, sed do eiusmod tempor.</p>
                        </div>

                        <div className="bedsheet-sets-button">
                            <button className="bedsheet-sets-details-button">VIEW DETAILS</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};


export default BedsheetSets;