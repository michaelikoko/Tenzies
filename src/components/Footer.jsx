export default function Footer() {
    return (
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top mb-0 mt-0 bg-light bg-opacity-75 fixed-bottom">
            <div className="col-md-4 d-flex align-items-center ms-5">
                <span className="mb-3 mb-md-0 text-muted d-flex flex-column">
                    <span>Made by Michael Ikoko</span>
                </span>
            </div>

            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex me-5 ms-4">
                <li className="ms-3 border-end border-secondary pe-3">
                    <a className="text-muted" href="https://twitter.com/michael_ikoko?ref_src=twsrc%5Etfw" target="_blank" rel="noreferrer">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="footer-icon"
                        >
                            <path d="M21.634 4.031c-.815.385-2.202 1.107-2.899 1.245-.027.007-.049.016-.075.023A4.5 4.5 0 0011 8.5c0 .131-.011.372 0 .5-3.218 0-5.568-1.679-7.327-3.837-.235-.29-.485-.139-.537.067-.117.466-.157 1.245-.157 1.801 0 1.401 1.095 2.777 2.8 3.63-.314.081-.66.139-1.02.139a2.97 2.97 0 01-1.339-.335c-.158-.083-.499-.06-.398.344.405 1.619 2.253 2.756 3.904 3.087-.375.221-1.175.176-1.543.176-.136 0-.609-.032-.915-.07-.279-.034-.708.038-.349.582.771 1.167 2.515 1.9 4.016 1.928-1.382 1.084-3.642 1.48-5.807 1.48-.438-.01-.416.489-.063.674C3.862 19.504 6.478 20 8.347 20 15.777 20 20 14.337 20 8.999l-.005-.447c0-.018.005-.035.005-.053 0-.027-.008-.053-.008-.08a18.384 18.384 0 00-.009-.329c.589-.425 1.491-1.163 1.947-1.728.155-.192.03-.425-.181-.352-.543.189-1.482.555-2.07.625 1.177-.779 1.759-1.457 2.259-2.21.171-.257-.043-.518-.304-.394z"></path>
                        </svg>
                    </a>
                </li>

                <li className="ms-3 ">
                    <a className="text-muted" href="mailto:michaelikoko.o@gmail.com">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="256"
                            height="256"
                            viewBox="0 0 256 256"
                            className="footer-icon"
                        >
                            <g fill="#000" strokeMiterlimit="10" strokeWidth="1">
                                <path
                                    d="M45 51.648l45-27.845v-6.422a2.887 2.887 0 00-2.887-2.887H2.887A2.887 2.887 0 000 17.381v6.422l45 27.845z"
                                    transform="matrix(2.81 0 0 2.81 1.407 1.407)"
                                ></path>
                                <path
                                    d="M45.789 54.688c-.011.007-.023.008-.033.015a1.46 1.46 0 01-.253.111c-.04.014-.077.035-.118.046a1.494 1.494 0 01-.353.048c-.011 0-.021.004-.031.004H45h-.001c-.011 0-.021-.004-.031-.004a1.555 1.555 0 01-.353-.048c-.04-.011-.078-.032-.118-.046a1.494 1.494 0 01-.253-.111c-.011-.006-.023-.008-.033-.015L0 27.331V72.62a2.888 2.888 0 002.887 2.887h84.226A2.888 2.888 0 0090 72.62V27.331L45.789 54.688z"
                                    transform="matrix(2.81 0 0 2.81 1.407 1.407)"
                                ></path>
                            </g>
                        </svg>
                    </a>
                </li>
            </ul>
        </footer>
    )
}