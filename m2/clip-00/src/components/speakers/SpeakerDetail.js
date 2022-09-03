import React, { useContext } from "react";
import SpeakerImageToggleOnScroll from "./SpeakerImageToggleOnScroll";
import SpeakerModal from "../speakerModal/SpeakerModal";
import EditSpeakerDialog from "./EditSpeakerDialog";
import FavoriteSpeakerToggle from "./FavoriteSpeakerToggle";
import DeleteSpeakerButton from "./DeleteSpeakerButton";
import { AppRouterContext } from "../../contexts/AppRouterContext";

const SpeakerDetail = ({ speakerRec, showDetails }) => {
  const { setRoute } = useContext(AppRouterContext);

  //if (!speakerRec) return null;
  // console.log(
  //   `SpeakerDetail: ${speakerRec.id}: ${speakerRec.firstName} ${speakerRec.lastName} `
  // );

  return (
    <>
      {speakerRec && <SpeakerModal />}

      <div className="col-xl-6 col-md-12">
        <div className="card border-0">
          <div className="row g-0">
            <div className="col-4">
              <SpeakerImageToggleOnScroll
                imageUrl={speakerRec.imageUrl}
                alt="{firstName} {lastName}"
              />
            </div>

            <div className="col-8 d-flex flex-column flex-nowrap">
              <div className="card-body">
                <div className="speaker-action d-flex">
                  <div className="favoriteToggleWrapper">
                    <FavoriteSpeakerToggle speakerRec={speakerRec} />
                  </div>

                  <div className="modifyWrapper">
                    <EditSpeakerDialog {...speakerRec} />
                    <DeleteSpeakerButton id={speakerRec.id} />
                  </div>
                </div>
                <h4 className="card-title">
                  <a
                    onClick={() => {
                      setRoute(`/speaker/${speakerRec.id}`);
                    }}
                    href="#"
                  >
                    {speakerRec.firstName} {speakerRec.lastName}
                  </a>
                </h4>

                {showDetails === true ? (
                  <p className="card-text">{speakerRec.bio}</p>
                ) : (
                  <p className="card-text">{speakerRec.userBioShort}</p>
                )}
              </div>

              <div className="card-footer text-muted d-flex flex-wrap justify-content-between align-items-center">
                {speakerRec?.company?.length > 0 ? (
                  <small>
                    <strong>Company:</strong> {speakerRec.company}
                  </small>
                ) : null}

                {speakerRec.twitterHandle.length > 0 ? (
                  <small>
                    <strong>Twitter</strong>: {speakerRec.twitterHandle}
                  </small>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpeakerDetail;

//
// EDIT MULTIPLE TIMES FAILED UPDATE WITH MEMO
// (prevProps, nextProps) => {
//   return (
//     prevProps.speakerRec.favorite === nextProps.speakerRec.favorite &&
//     prevProps.speakerRec.firstName === nextProps.speakerRec.firstName &&
//     prevProps.speakerRec.lastName === nextProps.speakerRec.lastName &&
//     prevProps.speakerRec.email === nextProps.speakerRec.email &&
//     prevProps.speakerRec.imageUrl === nextProps.speakerRec.imageUrl
//   );
// }