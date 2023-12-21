import "./LargeTerracotaVase.scss"

const LargeTerracotaVase = () => {
    return (
        <div className="large-terracota-vase-wrapper">
            <img src="/assets/images/plate.png" alt=""/>
            <div>
                <img className="vase-image" src={`/assets/images/vase.png`} alt=""/>
                <div className="vase-image-text">
                    <p>
                        LARGE TERRACOTA <br/>
                        VASE</p>
                </div>
            </div>
        </div>
    );
}

export default LargeTerracotaVase;