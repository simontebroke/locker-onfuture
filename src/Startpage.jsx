import "./Startpage.css";
import { useState, useRef, useEffect } from "react";

function Startpage() {
  // allows the convert button to change his color
  const [allowConvert, setAllowConvert] = useState(false);

  // pop up

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "auto";
  }, [showModal]);

  // pop up

  // files

  const [uploadedFiles, setUploadedFiles] = useState({
    design: { name: null, isActive: false },
    summary: { name: null, isActive: false },
    worksheet: { name: null, isActive: false },
    presentation: { name: null, isActive: false },
  });

  const fileInputRefs = {
    design: useRef(null),
    summary: useRef(null),
    worksheet: useRef(null),
    presentation: useRef(null),
  };

  const handleFileChange = (event, key) => {
    const file = event.target.files[0];
    const allowedTypes = [
      "application/pdf",
      "image/png",
      "image/jpeg",
      "text/plain",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/msword",
    ];

    if (file && allowedTypes.includes(file.type)) {
      setUploadedFiles((prevState) => ({
        ...prevState,
        [key]: { name: file.name, isActive: true },
      }));
      setAllowConvert(true);
    }
  };

  // Trigger file input click
  const handleButtonClick = (key) => {
    if (fileInputRefs[key].current) {
      fileInputRefs[key].current.click();
    }
  };

  return (
    <>
      <section id="motSection">
        <h1>Locker</h1>
        <h3>Choose your transformation</h3>
        <div className="slbCon">
          {/* Upload-Button für Design */}
          <button
            className={`selectorsButton slb1 ${
              uploadedFiles.design.isActive ? "active" : ""
            }`}
            onClick={() => handleButtonClick("design")}
          >
            <div>
              <h4>Design</h4>
              <h5>Free</h5>
              <p className="desc">
                Every kind of a Work Sheet is to think about the morning
                tonight.
              </p>
              {uploadedFiles.design.name && (
                <p className="doc">{uploadedFiles.design.name}</p>
              )}
            </div>
            <button
              className="slcb"
              onClick={() => handleButtonClick("design")}
            >
              Upload
            </button>
            <input
              type="file"
              ref={fileInputRefs.design}
              style={{ display: "none" }}
              onChange={(e) => handleFileChange(e, "design")}
            />
          </button>

          {/* Upload-Button für Summary */}
          <button
            className={`selectorsButton slb1 ${
              uploadedFiles.summary.isActive ? "active" : ""
            }`}
            onClick={() => handleButtonClick("summary")}
          >
            <div>
              <h4>Summary</h4>
              <h5>Free</h5>
              <p className="desc">
                Every kind of a Work Sheet is to think about the morning tonight
                in Manhattan.
              </p>
              {uploadedFiles.summary.name && (
                <p className="doc">{uploadedFiles.summary.name}</p>
              )}
            </div>
            <button className="slcb">Upload</button>
            <input
              type="file"
              ref={fileInputRefs.summary}
              style={{ display: "none" }}
              onChange={(e) => handleFileChange(e, "summary")}
            />
          </button>

          <button
            className={`selectorsButton slb1 ${
              uploadedFiles.presentation.isActive ? "active" : ""
            }`}
            onClick={() => handleButtonClick("presentation")}
          >
            <div>
              <h4>Presentation</h4>
              <h5>Locker Pro</h5>

              <p className="desc">
                Every kind of a Work Sheet is to think about the morning
                tonight.
              </p>
              {uploadedFiles.presentation.name && (
                <p className="doc">{uploadedFiles.presentation.name}</p>
              )}
            </div>
            <button className="slcb">Upload</button>
            <input
              type="file"
              ref={fileInputRefs.presentation}
              style={{ display: "none" }}
              onChange={(e) => handleFileChange(e, "presentation")}
            />
          </button>
          <button
            className={`selectorsButton slb1 ${
              uploadedFiles.worksheet.isActive ? "active" : ""
            }`}
            onClick={() => handleButtonClick("worksheet")}
          >
            <div>
              <h4>Worksheet</h4>
              <h5>Locker Pro</h5>

              <p className="desc">
                Every kind of a Work Sheet is to think about the morning tonight
                in Manhattan.
              </p>
              {uploadedFiles.worksheet.name && (
                <p className="doc">{uploadedFiles.worksheet.name}</p>
              )}
            </div>
            <button className="slcb">Upload</button>
            <input
              type="file"
              ref={fileInputRefs.worksheet}
              style={{ display: "none" }}
              onChange={(e) => handleFileChange(e, "worksheet")}
            />
          </button>
        </div>
      </section>
      <section id="genSection">
        <button
          onClick={() => {
            allowConvert ? setShowModal(true) : "";
          }}
          className={`convertButton ${allowConvert ? "active" : ""}`}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginRight: "5px" }}
          >
            <g clip-path="url(#clip0_405_2195)">
              <path
                d="M8.85388 9.32726L7.37132 5.473C7.34907 5.41516 7.30981 5.36542 7.25873 5.33034C7.20765 5.29525 7.14713 5.27647 7.08516 5.27647C7.02319 5.27647 6.96267 5.29525 6.91159 5.33034C6.8605 5.36542 6.82125 5.41516 6.799 5.473L5.31644 9.32726C5.30104 9.3673 5.2774 9.40367 5.24707 9.43401C5.21673 9.46435 5.18036 9.48798 5.14032 9.50338L1.28606 10.9859C1.22822 11.0082 1.17848 11.0474 1.14339 11.0985C1.10831 11.1496 1.08953 11.2101 1.08953 11.2721C1.08953 11.3341 1.10831 11.3946 1.14339 11.4457C1.17848 11.4968 1.22822 11.536 1.28606 11.5583L5.14032 13.0408C5.18036 13.0562 5.21673 13.0799 5.24707 13.1102C5.2774 13.1405 5.30104 13.1769 5.31644 13.2169L6.799 17.0712C6.82125 17.129 6.8605 17.1788 6.91159 17.2139C6.96267 17.2489 7.02319 17.2677 7.08516 17.2677C7.14713 17.2677 7.20765 17.2489 7.25873 17.2139C7.30981 17.1788 7.34907 17.129 7.37132 17.0712L8.85388 13.2169C8.86928 13.1769 8.89291 13.1405 8.92325 13.1102C8.95359 13.0799 8.98996 13.0562 9.03 13.0408L12.8843 11.5583C12.9421 11.536 12.9918 11.4968 13.0269 11.4457C13.062 11.3946 13.0808 11.3341 13.0808 11.2721C13.0808 11.2101 13.062 11.1496 13.0269 11.0985C12.9918 11.0474 12.9421 11.0082 12.8843 10.9859L9.03 9.50338C8.98996 9.48798 8.95359 9.46435 8.92325 9.43401C8.89291 9.40367 8.86928 9.3673 8.85388 9.32726ZM3.67853 2.6874L2.99721 0.915955L2.31588 2.6874L0.544434 3.36873L2.31588 4.05005L2.99721 5.8215L3.67853 4.05005L5.44998 3.36873L3.67853 2.6874ZM14.5344 4.36789L13.6259 2.00608L12.7173 4.36789L10.3555 5.27644L12.7173 6.18499L13.6259 8.5468L14.5344 6.18499L16.8962 5.27644L14.5344 4.36789Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_405_2195">
                <rect
                  width="17.4419"
                  height="17.4419"
                  fill="white"
                  transform="translate(0 0.370972)"
                />
              </clipPath>
            </defs>
          </svg>{" "}
          {""} Transform now...
        </button>
      </section>

      {showModal && (
        <>
          <div className="overlay" onClick={() => setShowModal(false)} />
          <div className="modal">
            <div className="previewSec">
              <img src="/popupimg.png" alt="Preview" />
              <button
                className="close-button"
                onClick={() => setShowModal(false)}
              >
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="15"
                    cy="15"
                    r="15"
                    fill="white"
                    fill-opacity="0.86"
                  />
                  <path
                    d="M19.375 19.375L10.625 10.625M19.375 10.625L10.625 19.375"
                    stroke="#7F7C80"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="dwnldSctn">
              <h1>
                Your document <br /> is ready.
              </h1>
              <p>
                Every kind of a Work Sheet is to think <br /> about the morning
                tonight. Every kind.
              </p>
              <button className="dwnldBtn">Download document</button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Startpage;
