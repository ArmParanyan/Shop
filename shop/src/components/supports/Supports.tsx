import Shipping from "./shipping/Shipping";
import Refund from "./refund/Refund";
import Support from "./support/Support";

import "./Supports.scss"
const Supports = () => {
    return (
        <div className="supports-wrapper">
            <Shipping/>
            <Refund />
            <Support />
        </div>
    );
};

export default Supports;