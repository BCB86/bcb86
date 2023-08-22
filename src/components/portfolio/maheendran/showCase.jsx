
import React,{ useState } from 'react'

import ReactTooltip from "react-tooltip";
import Modal from "react-modal";

import Social from "./Social";




function ShowCase() {

    // for modal details
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);

    // for modal details method
    function toggleModalThree() {
        setIsOpen3(!isOpen3);
    }
    function toggleModalFour() {
        setIsOpen4(!isOpen4);
    }


    return (
        <div>
            <ul className="portfolio_list">
                <li data-aos="fade-right" data-aos-duration="1200">
                    <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <img
                                src="assets/img/portfolio/6.jpg"
                                alt="Details"
                                data-tip
                                data-for="detail"
                                onClick={toggleModalThree}
                            />

                            <ReactTooltip
                                id="detail"
                                place="bottom"
                                type="light"
                                effect="float"
                                className="tooltip-wrapper"
                            >
                                <div>
                                    <h5>Selena Gomez</h5>
                                    <span>Details</span>
                                </div>
                            </ReactTooltip>
                        </div>
                    </div>
                </li>
                {/* END DETAILS */}
                <li
                    data-aos="fade-right"
                    data-aos-duration="1200"
                    data-aos-delay="100"
                >
                    <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <img
                                src="assets/img/portfolio/7.jpg"
                                alt="Details"
                                data-tip
                                data-for="detail2"
                                onClick={toggleModalFour}
                            />

                            <ReactTooltip
                                id="detail2"
                                place="bottom"
                                type="light"
                                effect="float"
                                className="tooltip-wrapper"
                            >
                                <div>
                                    <h5>Ave Simone</h5>
                                    <span>Details</span>
                                </div>
                            </ReactTooltip>
                        </div>
                    </div>
                </li>
                {/* END DETAILS */}
            </ul>
            {/* END DETAILS GALLERY */}




            <Modal
                isOpen={isOpen3}
                onRequestClose={toggleModalThree}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
            >
                <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
                    <button className="close-modal" onClick={toggleModalThree}>
                        <img src="assets/img/svg/cancel.svg" alt="close icon" />
                    </button>
                    {/* END CLOSE ICON */}
                    <div className="box_inner">
                        <div className="description_wrap scrollable">
                            <div className="image">
                                <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                                <div
                                    className="main"
                                    style={{
                                        backgroundImage: "url(assets/img/portfolio/6.jpg)",
                                    }}
                                ></div>
                            </div>
                            {/* END IMAGE */}
                            <div className="portfolio_main_title">
                                <h3>Selena Gomez</h3>
                                <span>Details</span>
                            </div>
                            {/* END portfolio_main_title */}
                            <div className="main_details">
                                <div className="textbox">
                                    <p>
                                        We live in a world where we need to move quickly and iterate
                                        on our ideas as flexibly as possible. Building mockups
                                        strikes the ideal balance between true-life representation
                                        of the end product and ease of modification.
                                    </p>
                                    <p>
                                        Mockups are useful both for the creative phase of the
                                        project - for instance when you're trying to figure out your
                                        user flows or the proper visual hierarchy - and the
                                        production phase when they will represent the target
                                        product. Making mockups a part of your creative and
                                        development process allows you to quickly and easily ideate.
                                    </p>
                                </div>
                                <div className="detailbox">
                                    <ul>
                                        <li>
                                            <span className="first">Client</span>
                                            <span>Alvaro Morata</span>
                                        </li>
                                        <li>
                                            <span className="first">Category</span>
                                            <span>Details</span>
                                        </li>
                                        <li>
                                            <span className="first">Date</span>
                                            <span>March 07, 2021</span>
                                        </li>
                                        <li>
                                            <span className="first">Share</span>
                                            <Social />
                                            {/* END SOCIAL SHARE */}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* main_details */}

                            <div className="additional_images">
                                <ul className="gallery_zoom">
                                    <li>
                                        <div className="list_inner">
                                            <div className="my_image">
                                                <img src="img/thumbs/4-2.jpg" alt="thumb" />
                                                <div
                                                    className="main"
                                                    style={{
                                                        backgroundImage: "url(assets/img/portfolio/6.jpg)",
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                    </li>
                                    {/* END SHOT */}
                                    <li>
                                        <div className="list_inner">
                                            <div className="my_image">
                                                <img src="img/thumbs/4-2.jpg" alt="thumb" />
                                                <div
                                                    className="main"
                                                    style={{
                                                        backgroundImage: "url(assets/img/portfolio/2.jpg)",
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                    </li>
                                    {/* END SHOT */}
                                    <li>
                                        <div className="list_inner">
                                            <div className="my_image">
                                                <img src="img/thumbs/4-2.jpg" alt="thumb" />
                                                <div
                                                    className="main"
                                                    style={{
                                                        backgroundImage: "url(assets/img/portfolio/3.jpg)",
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                    </li>
                                    {/* END SHOT */}
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* END BOX INNER */}
                </div>
                {/* END MODALBOX NEWS */}
            </Modal>
            {/* END MODAL FOR PORTFOLIO DETAILS */}

            {/* START MODAL FOR PORTFOLIO DETAILS */}
            <Modal
                isOpen={isOpen4}
                onRequestClose={toggleModalFour}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
            >
                <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
                    <button className="close-modal" onClick={toggleModalFour}>
                        <img src="assets/img/svg/cancel.svg" alt="close icon" />
                    </button>
                    {/* END CLOSE ICON */}
                    <div className="box_inner">
                        <div className="description_wrap scrollable">
                            <div className="image">
                                <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                                <div
                                    className="main"
                                    style={{
                                        backgroundImage: "url(assets/img/portfolio/7.jpg)",
                                    }}
                                ></div>
                            </div>
                            {/* END IMAGE */}
                            <div className="portfolio_main_title">
                                <h3>Ave Simone</h3>
                                <span>Details</span>
                            </div>
                            {/* END portfolio_main_title */}
                            <div className="main_details">
                                <div className="textbox">
                                    <p>
                                        We live in a world where we need to move quickly and iterate
                                        on our ideas as flexibly as possible. Building mockups
                                        strikes the ideal balance between true-life representation
                                        of the end product and ease of modification.
                                    </p>
                                    <p>
                                        Mockups are useful both for the creative phase of the
                                        project - for instance when you're trying to figure out your
                                        user flows or the proper visual hierarchy - and the
                                        production phase when they will represent the target
                                        product. Making mockups a part of your creative and
                                        development process allows you to quickly and easily ideate.
                                    </p>
                                </div>
                                <div className="detailbox">
                                    <ul>
                                        <li>
                                            <span className="first">Client</span>
                                            <span>Alvaro Morata</span>
                                        </li>
                                        <li>
                                            <span className="first">Category</span>
                                            <span>Details</span>
                                        </li>
                                        <li>
                                            <span className="first">Date</span>
                                            <span>March 07, 2021</span>
                                        </li>
                                        <li>
                                            <span className="first">Share</span>
                                            <Social />
                                            {/* END SOCIAL SHARE */}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* main_details */}

                            <div className="additional_images">
                                <ul className="gallery_zoom">
                                    <li>
                                        <div className="list_inner">
                                            <div className="my_image">
                                                <img src="img/thumbs/4-2.jpg" alt="thumb" />
                                                <div
                                                    className="main"
                                                    style={{
                                                        backgroundImage: "url(assets/img/portfolio/6.jpg)",
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                    </li>
                                    {/* END SHOT */}
                                    <li>
                                        <div className="list_inner">
                                            <div className="my_image">
                                                <img src="img/thumbs/4-2.jpg" alt="thumb" />
                                                <div
                                                    className="main"
                                                    style={{
                                                        backgroundImage: "url(assets/img/portfolio/5.jpg)",
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                    </li>
                                    {/* END SHOT */}
                                    <li>
                                        <div className="list_inner">
                                            <div className="my_image">
                                                <img src="img/thumbs/4-2.jpg" alt="thumb" />
                                                <div
                                                    className="main"
                                                    style={{
                                                        backgroundImage: "url(assets/img/portfolio/4.jpg)",
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                    </li>
                                    {/* END SHOT */}
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* END BOX INNER */}
                </div>
                {/* END MODALBOX NEWS */}
            </Modal>
            {/* END MODAL FOR PORTFOLIO DETAILS */}
        </div>
    )
}

export default ShowCase